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

class Apply extends Component {
  renderList() {
      if (!this.props.job) {
      return this.props.joblist.map((job) => {
          return (
              <li key={job.job_id}
              onClick={
                () => {
                  //this.handleNavClick('/applied');
                  //this.props.history.pushState(null, '/applied');
                  this.props.selectJob(job);
                }
              }
              >
                <p >Job id: <b>{job.job_id}</b></p>
                <p>Name: {job.job_name}</p>
                <p>Experience: {job.experience}</p>
                  <p>Skill set: {job.skillset}</p>
              </li>
          );
      });}
  }
  renderNotification(){
    if (this.props.job) {
        return ( <div><h2>Congradulations.!!! </h2>
          <p>You have applied for job id: {this.props.job.job_id}</p>
          <p><NavLink to="/applied">Click here</NavLink> to view the details</p>
          </div>);
    }else{
        return ( <h3>Click on any job to apply</h3>);
    }
  }
  render() {
    return (
      <div>

      {this.renderNotification()}
      <ul> {this.renderList()} </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        joblist: state.joblist,
          job: state.job
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectJob:selectJob}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Apply);
