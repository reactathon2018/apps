import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Validate from "react-validate-form";
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Header from './containers/HeaderContainer/Header';
import { browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { createApolloFetch } from 'apollo-fetch';

function getEventDetailsCall() {

  let self = this;

  const fetch = createApolloFetch({
    uri: 'http://localhost:4000/reactathon',
  });
  const q = `{
      
    }`
  fetch({
    query: q,
  }).then(response => {
    if (response && response.data) {
      this.setState({ eventListdata: response.data });
    }
    else {


    }
  }).catch(function (error) {
    console.log(error);
  });
}

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isAdmin: false,
      inValid: false,
      eventListdata: []
    }
  }



  handleClick(event) {
    var self = this;

    const fetch = createApolloFetch({
      uri: 'http://localhost:4000/reactathon',
    });
    const q = `query validCredentials($userName: String!, $password: String!){
        login(user: $userName, pwd: $password){
          userName
          isAdmin      
        }
        getEventDetails{
          id
          eventName
          eventShortDescription
          eventLongDescription
          eventStatus
          venue
          startDate
          endDate
          eventType
          techStack
        }
      }`

    var userDetails = {
      userName: this.state.username,
      password: this.state.password,
    }
    fetch({
      query: q,
      variables: userDetails
    }).then(response => {
      if (response && response.data && response.data.login) {
        self.setState({ isAdmin: response.data.login.isAdmin });
        //ReactDOM.render(<Header  />, document.getElementById('root'));
        if (response && response.data && response.data.getEventDetails) {
          self.setState({ eventListdata: response.data.getEventDetails }, function () {
            ReactDOM.render(<Header uName={self.state.username} eventListData={this.state.eventListdata}> </Header>, document.getElementById('root'));
          });
        }else{
          ReactDOM.render(<Header uName={self.state.username} eventListData={this.state.eventListdata}> </Header>, document.getElementById('root'));
        }
      }
      else {
        self.setState({
          inValid: true
        })
        console.log("Invalid Credentials")
      }
      console.log(response.data);
    }).catch(err => {
      console.log(err);
    });



    // axios.get(apiBaseUrl, {
    //     params: {
    //       userName: this.state.username,
    //       passWord: this.state.password
    //     }
    //   }).then(function (response) {
    //     console.log(response);

    //     if (response && response.data) {
    //       self.setState( {isAdmin: response.data.isAdmin} ); 
    //       //ReactDOM.render(<Header  />, document.getElementById('root'));

    //       ReactDOM.render(<Header uName={self.state.username}> </Header>, document.getElementById('root'));              
    //     }
    //     else {
    //       console.log("Invalid Credentials")
    //     }            
    //   }).catch (function (error) {
    //     console.log(error);
    //   });
  }



  render() {
    return (
      <div>

        <MuiThemeProvider>
          <div>
            <AppBar
              title="Events - Login"
            />
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(event, newValue) => this.setState({ username: newValue })}
            />
            <br />



            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />

            <div className="alert alert-danger alert-dismissible fade show" hidden={!this.state.inValid}>Invalid Credentials</div>
            <RaisedButton label="Submit" primary={true} style={style} disabled={this.state.username === '' || this.state.password === ''} onClick={(event) => this.handleClick(event)} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}


const style = {
  margin: 15,
};

export default Login;