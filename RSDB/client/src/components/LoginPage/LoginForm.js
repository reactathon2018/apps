import React, { Component } from 'react';
import axios from 'axios';
import {Button } from 'react-bootstrap';

import CandidatePage from '../Candidate/CandidatePage';
import AdminPage from '../Admin/AdminPage';
import HRPage from '../HR/HRPage';
import ManagerPage from '../Manager/ManagerPage';

import reactDom from 'react-dom';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};

const panelStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  border: 0,
  paddingLeft: 20,
  paddingRight: 20,
  width: 300,
};

const buttonStyle = {
  marginBottom: 0
};


class LoginForm extends Component {
  constructor(props) {
    super(props);
    
  }

  
  handleFormSubmit() {
    const logCred = {
      user:document.getElementById("user").value,
      pwd:document.getElementById("pwd").value
    };
  if(logCred.user && logCred.pwd)
  {
    axios.post('http://localhost:5000/api/login',logCred)
    .then(res => {
    if(res.data)
    {
     window.sessionStorage.setItem("userDetails",JSON.stringify( res.data));
      switch(res.data.result[0].UserTypeId)
      {
        // case 'ADMIN':
        // reactDom.render(<AdminPage/>,document.getElementById("root"));
        // break;
        case 1:
        reactDom.render(<CandidatePage/>,document.getElementById("root"));
        break;
        case 2:
        reactDom.render(<HRPage/>,document.getElementById("root"));
        break;
        case 3:
        reactDom.render(<ManagerPage/>,document.getElementById("root"));
        break;
      }
    }
    else{
      alert("Invalid cedentials!! Try again...");
    }
      
    }).catch(function(err){
      alert("Invalid cedentials!! Try again...");
    })
  }
  else{
    alert("Enter username and pwd!!");
  }

  }

  render() {
    return (
      <div >
        <div >
          <div horizontal className="LoginForm" id="loginForm">

<table>

        <tr><td><label controlid="formEmail"><input type="text" placeholder="User name" id="user"></input></label></td></tr>
        <tr><td><label controlid="formPassword"><input type="password" placeholder="Password" id="pwd"></input></label></td></tr>
        <tr><td><label controlid="formSubmit" ><button type="submit" class="btn btn-primary" onClick={this.handleFormSubmit}>Login</button></label></td></tr>

        </table>
            {/* <label controlId="formEmail">
              <input type="text" placeholder="Username" id="user" />
            </label>
            <label controlId="formPassword">
              <input type="password" placeholder="Password" id="pwd" />
            </label>
            <label style={buttonStyle} controlId="formSubmit">
              <Button bsStyle="primary" type="submit" onClick={this.handleFormSubmit}>
                Login
              </Button>
            </label> */}
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;
