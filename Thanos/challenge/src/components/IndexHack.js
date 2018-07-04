// IndexItem.js

import React, { Component } from 'react';
import ItemService from './ItemService';
import axios from 'axios';
import TableRow from './HackTable';


class IndexItem extends Component {

  constructor(props) {
      super(props);
      this.state = {value: '', hackathon: ''};
      this.addItemService = new ItemService();
    }
    componentDidMount(){
      axios.get('http://localhost:4200/items')
      .then(response => {
          console.log(response);
        this.setState({ hackathon: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    tabRow(){
      if(this.state.hackathon instanceof Array){
        return this.state.hackathon.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        })
      }
    }

    render() {
      return (
        <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>No.</td>
                  <td>Name</td>
                  <td>Start Date</td>
                  <td>End Date</td>
                  <td>Description</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>

        </div>
        
      );
    }
  }

export default IndexItem;