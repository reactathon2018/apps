import axios from 'axios';
const ReactDataGrid = require('react-data-grid');
const React = require('react');
const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons');


class ManagerForm extends React.Component {
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
        key: '',
        name:'',
        formatter : <span > <button type = "button" > delete </button></span>
      }
    ];

    this.state = { rows: this.createRows(), filters: {} };
  }

  handleManagerDelete(index)
  {
    var selectedRow = this.rowGetter(index);
    
    const logCred = {JobId:selectedRow.JobId};
    axios.post('http://localhost:5000/api/ManagerDelete',logCred)
    .then(res => {
    
      
    })

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
        onRowClick ={this.handleManagerDelete}
        onClearFilters={this.onClearFilters} />
        
      );
  }
}

export default ManagerForm;
