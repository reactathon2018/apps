// TableRow.js

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ItemService from './ItemService';


class RegisterHackathonTable extends Component {

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
            {this.props.obj.RegisterHackathon.tname}
          </td>
          <td>
            {this.props.obj.RegisterHackathon.noofpersons}
          </td>
          <td>
            {this.props.obj.RegisterHackathon.teamlist}
          </td>
          <td>
            {this.props.obj.RegisterHackathon.technology}
          </td>          
          <td>
            {this.props.obj.RegisterHackathon.date}
          </td>
        </tr>
    );
  }
}

export default RegisterHackathonTable;