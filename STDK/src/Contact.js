import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectJob} from './actions/index'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Contact extends Component {

  render() {
    return (
      <div>

                <h2>Contact details</h2>
                <p>For any queries contact us</p>
                <p>Email: queries@abc.com</p>
                <p>Phone: 044562826723</p>
                <p>City: Chennai</p>

      </div>
    );
  }
}
export default Contact;
