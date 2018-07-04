import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
         <h1>Welcome to Recruitment Portal</h1>
         <br/>
         <p>To start the recruitment process, apply for a job <NavLink to="/apply">Here</NavLink></p>
       </div>
    );
  }
}

export default Home;
