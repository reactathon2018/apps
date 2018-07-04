import React, { Component }  from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './style.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';

class JobTable extends Component {
	constructor(props){
		super(props);
		this.state = {products : [{
      id: 1,
      name: "Product1",
      price: 120
  }, {
      id: 2,
      name: "Product2",
      price: 80
		}] };

		this.state = {
	    JOBS: []
	  }
	}


  componentDidMount() {
    axios.get('http://localhost:4001/getAllJobs')
      .then(res => {
        const JOBS = res.data;
				console.log(JOBS);
        this.setState({ JOBS });
      })
  }

	// /{"jobid":"job3","designation" :"band 2","Experince":"3 years","skill":"angular react"}
  render() {
    return (
	<div id="customers">
       <BootstrapTable data={this.state.JOBS} version='4'  pagination={true} search={true} searchPlaceholder="Search">
      <TableHeaderColumn isKey dataField='id'> ID</TableHeaderColumn>
      <TableHeaderColumn dataField='jobid'>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField='designation'>Designation</TableHeaderColumn>
		<TableHeaderColumn dataField='Experince'>Experience</TableHeaderColumn>
		<TableHeaderColumn dataField='skill'>Skill Set</TableHeaderColumn>
  </BootstrapTable>
  </div>
    );
  }
}

export default JobTable;
