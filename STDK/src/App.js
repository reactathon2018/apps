import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import Apply from "./Apply";
import Applied from "./Applied";
import Contact from "./Contact";
class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
         <ul className="header">
           <li><NavLink to="/"><h2>Home</h2></NavLink></li>
           <li><NavLink to="/apply"><h2>Apply</h2></NavLink></li>
           <li><NavLink to="/applied"><h2>Jobs Applied</h2></NavLink></li>
           <li><NavLink to="/contact"><h2>Contact Us</h2></NavLink></li>
         </ul>
         <div className="content">
           <Route exact path="/" component={Home}/>
           <Route path="/apply" component={Apply}/>
           <Route path="/applied" component={Applied}/>
            <Route path="/contact" component={Contact}/>
         </div>
       </div>
       </HashRouter>
    );
  }
}

export default App;
