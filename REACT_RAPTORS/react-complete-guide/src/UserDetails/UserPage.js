import React, { Component } from 'react';
import Test from './Test'
import axios from "axios";

class UserPage extends Component{
  constructor(props){
    super(props);
    console.log("props",props);
    this.state={
      userDetails:[]
    }
  }

  componentDidMount(){
    axios
      .get("http://localhost:8086/reactathon/getJobDetailsForUser?emailId=amsa.singaravelu@verizon.com&uniqueId=123")
      .then(response => {

        // create an array of contacts only with relevant data
        const newUserDetails = response.data.map(c => {
          return {
            id: c.id,
            name:c.name


          };
        });
        const newState = Object.assign({}, this.state, {
          userDetails: newUserDetails
        });
        this.setState({userDetails:newUserDetails});
        console.log("newState"+JSON.stringify(this.state.userDetails));
      })
      .catch(error => console.log(error));
  }

  render(){
    return(
      <div className="App">
      <h1>User Details</h1>
        <Test  userDetails={this.state.userDetails}/>
      </div>
    )
  }
}

export default UserPage;
