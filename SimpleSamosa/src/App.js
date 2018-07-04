import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./JobOpenings";
import Contact from "./Contact";
import logo from './imgs/verizon.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to VZ Job Portal</h1>
        </header>
        <br/>
        <HashRouter>
       <div class="topnav" id="myTopnav">
        <h1>Verizon Carrers</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/JobOpenings">JobOpenings</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/" component={Home}/>
            <Route path="/JobOpenings" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
        </HashRouter>
        <br/>
        <form>
            <b>Skills:</b>&nbsp;
            <input type="text" name="Skills"/> &nbsp;&nbsp;
            <b>Location:</b>&nbsp;
            <input type="text" name="loc"/>&nbsp;&nbsp;
            <b>Experience:</b>&nbsp;
            <input type="text" name="exp"/>&nbsp;&nbsp;
            <button type="submit" formaction="https://www.verizon.com/about/careers" value="Search">Search</button>
        </form>
        <br/>
        
        
       <br/>
       
        <footer>
          <h6>Powered By SimpleSamosa</h6>
          </footer>
      </div>
      
      
    );
  }
}

export default App;
