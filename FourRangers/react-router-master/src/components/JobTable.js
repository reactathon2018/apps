import React, { Component }  from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './style.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

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
	}
  
  render() {
    return (
	<div id="customers">
       <BootstrapTable data={this.state.products} version='4'  pagination={true} search={true} searchPlaceholder="Search">
      <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
  </BootstrapTable>
  </div>
    );
  }
}

export default JobTable;
