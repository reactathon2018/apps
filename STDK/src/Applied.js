import React, { Component } from 'react';
import {connect} from 'react-redux';
//import logo from './logo.svg';
//import './App.css';

class Applied extends Component {
  render() {
        if (!this.props.job) {
            return (<div><h2> You have not applied for any job</h2></div>);
        }
        return (
            <div>
                <h2>You have applied for the below job posting</h2>
                <p>Name: {this.props.job.job_name}</p>
                <p>Job id: {this.props.job.job_id}</p>
                <p>Experience: {this.props.job.experience}</p>
                <p>Skill set: {this.props.job.skillset}</p>
                <h2>Thanks for your interest. You will receive a Email detailing the interview schedule</h2>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        job: state.job
    };
}

export default connect(mapStateToProps)(Applied);
