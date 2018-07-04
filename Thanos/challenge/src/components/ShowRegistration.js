// IndexItem.js

import React, { Component } from 'react';
import ItemService from './ItemService';
import axios from 'axios';
import RegisterHackathonTable from './RegistrationTable';


class IndexItem extends Component {

  constructor(props) {
      super(props);
      this.state = {value: '', hackathon: ''};
      this.addItemService = new ItemService();
    }
    componentDidMount(){
      axios.get('http://localhost:4200/hack/')
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
            return <RegisterHackathonTable obj={object} key={i} />;
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
                  <td>Team Name</td>
                  <td>No of Participants</td>
                  <td>Team Persons</td>
                  <td>Technology</td>
                  <td>Date Of Registration</td>
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