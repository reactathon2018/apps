import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Test from './Test';
//import JobList from './JobList/JobList';
import axios from "axios";



class App extends React.Component{
  constructor(props) {
      super(props);
      this.state={
        userDetails:[]
      }
      this.submitHandler = this.submitHandler.bind(this);
     }
  submitHandler(){
    this.setState({sampleData:"new Data"})

  }
  componentDidMount(){
    axios
      .get("https://jsonplaceholder.typicode.com/users")
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

  render() {
    return (
      //<div><h1>test</h1>
      //{this.state.sampleData}
      //<button onClick={this.submitHandler}>Button</button>
      <body>
      <div className="App">
      <h1>User Details</h1>
      <Test  userDetails={this.state.userDetails}/>
      
      </div>
</body>




    );
  }
}

export default App;
