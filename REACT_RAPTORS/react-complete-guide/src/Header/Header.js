import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Login from '../Login/Login';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Register from '../Register/Register';
import UserPage from '../UserDetails/UserPage';

class Header extends Component{
    render(){
        return(
            <HashRouter>
                <div className="App">
                    <div  className="Header">
                    <h1 className="App-title">Raptors Job Search</h1>
                    <ul className ="Menu">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    </div>
                    <div className="Content">
                        <Route exact path="/" component={Login}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/UserPage" component={UserPage}/>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default Header;
