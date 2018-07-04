import React, { Component } from 'react';
import Header from './components/header';
import Banner from './components/banner';
import CardPanel from './components/cardpanel';
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import RegisterPage from './RegisterPage/RegisterPage';
import LoginPage from './LoginPage/LoginPage';
import HomePage from './HomePage/HomePage';

class App extends Component {
  render() {
    return (
        <Router>
                            <div>
                     <Route path="/register" component={RegisterPage}/> 
                     <Route path="/login" component={LoginPage}/> 
                     <Route path="/" exact component={HomePage}/>       
                            </div>
                    </Router>

    );
  }
}

export default App;
