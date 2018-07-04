// TableRow.js

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ItemService from './ItemService';


class TableRow extends Component {

  constructor(props) {
      super(props);
      this.addItemService = new ItemService();
      //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    //this.addItemService.deleteData(this.props.obj._id);
  }
  render() {
    return (
        <tr>
          <td>
            {Math.round(Math.random(25)*100)}
          </td>
          <td>
            {this.props.obj.hackathon.name}
          </td>
          <td>
            {this.props.obj.hackathon.sdate}
          </td>
          <td>
            {this.props.obj.hackathon.edate}
          </td>
          <td>
            {this.props.obj.hackathon.desc}
          </td>
          {/* <td>
          <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Details</Link>
        </td> */}
          <td>
            {/* <form onSubmit={this.handleSubmit}>
              <input type="submit" value="Register" className="btn btn-success" />
            </form>               */}
            <a className="btn btn-success" href="/registerHack">Register</a>
          </td>
        </tr>
    );
  }
}

export default TableRow;