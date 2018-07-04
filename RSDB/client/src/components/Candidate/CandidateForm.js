import reactDom from 'react-dom';
import JobApplyPage from '../JobApply/JobApplyPage';
//import Popup from "reactjs-popup";
import '../Job/JobPopup.css';

const ReactDataGrid = require('react-data-grid');
const React = require('react');
const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons');

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}


class CandidateForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._columns = [
      {
        key: 'id',
        name: 'ID',
        width: 80,
        filterable: true
      },
      {
        key: 'title',
        name: 'Title',
        filterable: true
      },
      {
        key: 'description',
        name: 'Description',
        filterable: true
      },
      {
        key: 'primaryskills',
        name: 'Primary Skills',
        filterable: true
      },
      {
        key: 'secondaryskills',
        name: 'Secondary Skills',
        filterable: true
      },
      {
        key: 'vacancies',
        name: 'Vacancies',
        filterable: false
      },
      {
        key:'view',
        name:'View',
        formatter : <span className = "btn-group  btn-group-sm"> <button type = "button" className="btn btn-primary custom-button-crud" >View/Apply</button></span>
      }
    ];

    this.state = { rows: this.createRows(), filters: {},showPopup: false };
    
  }
  
  handleRowSelect=(indx)=>
  {
    var selectedRow=this.rowGetter(indx);
    
    window.sessionStorage.setItem("selectedJob",JSON.stringify(selectedRow));
reactDom.render(<JobApplyPage/>,document.getElementById("root"));
    
  }

  getRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  };

  createRows = () => {
    let rows = [];
    var userDetails=JSON.parse(window.sessionStorage.getItem("userDetails"));
    try{
    for (let indx = 0; indx < userDetails.jobresult.length; indx++) {
      rows.push({
        id: userDetails.jobresult[indx].JobId,
        title: userDetails.jobresult[indx].JobTittle,
        description: userDetails.jobresult[indx].JobDesc,
        primaryskills: userDetails.jobresult[indx].PrimarySkills,
        secondaryskills: userDetails.jobresult[indx].SecondarySkills,
        vacancies: userDetails.jobresult[indx].NoOfVacanices

      });
    }
  }catch(ex)
  {
    console.log(JSON.stringify(ex));
  }

    return rows;
  };

  getRows = () => {
    return Selectors.getRows(this.state);
  };

  getSize = () => {
    return this.getRows().length;
  };

  rowGetter = (rowIdx) => {
    let rows = this.getRows();
    return rows[rowIdx];
  };

  handleFilterChange = (filter) => {
    let newFilters = Object.assign({}, this.state.filters);
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter;
    } else {
      delete newFilters[filter.column.key];
    }
    this.setState({ filters: newFilters });
  };

  onClearFilters = () => {
    // all filters removed
    this.setState({filters: {} });
  };

  render() {
    return (
     
      <ReactDataGrid
        columns={this._columns}
        rowGetter={this.rowGetter}
        enableCellSelect={true}
        rowsCount={this.getSize()}
        minHeight={500}
        toolbar={<Toolbar enableFilter={true}/>}
        onAddFilter={this.handleFilterChange}
        onRowClick={this.handleRowSelect}
        onClearFilters={this.onClearFilters} >
        </ReactDataGrid>
     );
  }
  }

 export default CandidateForm;



// var Table = FixedDataTable.Table;
// var Column = FixedDataTable.Column;

// class CandidateForm extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
      
//         rows: [
//           {title: "Ramu", rank: "1", year: "2000"},
//           {title: "Harsha", rank: "2", year: "1999"},
//           {title: "Hussain", rank: "3", year: "1998"},
//           {title: "Vamsi", rank: "4", year: "1997"},
//           {title: "Mahesh", rank: "5", year: "1996"},
//           {title: "Nitesh", rank: "6", year: "1995"},
//           {title: "Subbu", rank: "7", year: "1994"},
//           {title: "Kamal", rank: "8", year: "1993"},
//           {title: "Kishore", rank: "9", year: "1992"},
//           {title: "Venu", rank: "10", year: "1991"},
//           {title: "Bhasi", rank: "11", year: "1990"},
//           {title: "Suresh", rank: "12", year: "1989"},
//           {title: "Ramesh", rank: "13", year: "1988"},
//           {title: "Narendra", rank: "14", year: "1987"},
//           {title: "Anil", rank: "15", year: "1986"}
//         ]
      
//     };
//   }
  
//   getInitialState=()=>{
//     return {
//       rows: [
//         {title: "Ramu", rank: "1", year: "2000"},
//         {title: "Harsha", rank: "2", year: "1999"},
//         {title: "Hussain", rank: "3", year: "1998"},
//         {title: "Vamsi", rank: "4", year: "1997"},
//         {title: "Mahesh", rank: "5", year: "1996"},
//         {title: "Nitesh", rank: "6", year: "1995"},
//         {title: "Subbu", rank: "7", year: "1994"},
//         {title: "Kamal", rank: "8", year: "1993"},
//         {title: "Kishore", rank: "9", year: "1992"},
//         {title: "Venu", rank: "10", year: "1991"},
//         {title: "Bhasi", rank: "11", year: "1990"},
//         {title: "Suresh", rank: "12", year: "1989"},
//         {title: "Ramesh", rank: "13", year: "1988"},
//         {title: "Narendra", rank: "14", year: "1987"},
//         {title: "Anil", rank: "15", year: "1986"}
//       ]
//     };
//   };

//   _displayDataForRow=(rowData, rowIndex)=>{      

//     alert(rowIndex);
//     alert(JSON.stringify(rowData));

//   };

//   _renderButton=(cellData, cellDataKey, rowData, rowIndex)=>{

//     return <button style={{width: '80%'}} onClick={this._displayDataForRow.bind(null, rowData, rowIndex)}>click</button>;

//   };

//   _rowGetter=(rowIndex)=> {
//     return this.state.rows[rowIndex];
//   };

//   render=()=>{
//     return (
//       <div>
//         <Table
//           rowHeight={30}                  
//           rowGetter={this._rowGetter}             
//           rowsCount={this.state.rows.length}          
//           width={500}
//           maxHeight={200}
//           headerHeight={30}>

//           <Column
//            label="Name"
//            width={200}
//            dataKey="title"
//           />
//           <Column
//            label="Rank"
//            width={100}
//            dataKey="rank"
//           />
//           <Column
//            label="Year"
//            width={100}
//            dataKey="year"
//           />
//           <Column
//            label="Click"
//            width={80}                      
//            cellRenderer= {this._renderButton}                 
//           />
//         </Table>
//       </div>
//     );
//   }
// }

// export default CandidateForm;
