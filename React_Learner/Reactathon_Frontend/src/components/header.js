import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RegisterPage from '../RegisterPage/RegisterPage';
import LoginPage from '../LoginPage/LoginPage';

class Header extends Component {
    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="header clearfix padding-y-md "> 
                        <nav>
                            <ul className="nav nav-pills pull-right margin-top-sm">
                            
                            <Link to="/register"><li role="presentation" className="active"><a href="#"  data-toggle="modal" data-target="#myModal">Register</a></li></Link>
                            <Link to="/login">  <li role="presentation" >{this.props.username?this.props.username:<a href="#">Login</a>}</li></Link>
                           
                           
                        
                            </ul>
                        </nav>
                        <h3 className="text-muted">Job Portal</h3>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Header;