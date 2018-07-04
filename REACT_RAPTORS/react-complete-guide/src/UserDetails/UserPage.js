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
   fetch("http://localhost:8086/reactathon/getJobDetailsForUser?emailId=ams.singaravelu@verizon.com&uniqueId=123",{
      crossDomain : true,
      contentType: 'application/json'
    })
    .then((data) => {
      console.log("inside data>> ", data);
      return data.json();
    //this.setState({ userDetails: data })

  })
      .then(response => {
console.log(response);
        // create an array of contacts only with relevant data
        const newUserDetails = response.jobDetails.map((c) => {
          return {
            jobCode:c.jobCode,
            title: c.Title,
            description:c.description,
            primarySkills:c.primarySkills,
            secondarySkills:c.secondarySkills,
            venue:"Chennai",//c.scheduling.Venue,
            date:"10 Jul 2018",//c.scheduling.date,
            status:c.status,
            noOfPosting:c.noOfPosting
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
