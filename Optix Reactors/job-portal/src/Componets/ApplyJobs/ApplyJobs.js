import React, { Component } from 'react';
import './ApplyJobs.css';
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FileFileUpload from 'material-ui/SvgIcon';
import axios from 'axios'

class ApplyJobs extends Component {


    constructor(props) {
        super(props);
        this.state = {firstname: '',
    lastname:'',
    emailid:'',
    mobilenumber:''
        };
    
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      FileUpload({file})
      {
        //const file = files[0];
      }
      handleChange(event) {
        this.setState({firstname: event.target.firstname});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render() {
        return(


    <div>
  <form  onSubmit={this.handleSubmit}>
  
  <MuiThemeProvider>
                <TextField
                  floatingLabelText="First Name"
                  onChange={(event, newValue)=> this.setState({firstname:newValue})}/>
                  <br />
                  <TextField
                  floatingLabelText="Last Name"
                  onChange={(event, newValue)=> this.setState({lastname:newValue})}/>
                  <br/>
                  <TextField
                  floatingLabelText="Email Id"
                  onChange={(event, newValue)=> this.setState({emailid:newValue})}/>
                  <br/>
                  <TextField
                  floatingLabelText="Mobile #"
                  onChange={(event, newValue)=> this.setState({mobilenumber:newValue})}/>
                  <br/>
                  </MuiThemeProvider>
                  <br/><br/><br/>
                  <label >Upload Resume / Document</label>
                  <br/><br/><br/>
                <input type="file" onChange={this.FileUpload} />
    {/* <label for="fname">First Name</label>
    <input type="text" id="fname" value={this.state.firstname} onChange={this.handleChange} placeholder="Your name.."/>
    <br/>
    <label for="lname">Last Name</label>
    <input type="text" id="lname" value={this.state.lastname} onChange={this.handleChange} placeholder="Your last name.."/>
    <br/>
    <label for="lname">Email-id</label>
    <input type="text" id="lname" value={this.state.emailid} onChange={this.handleChange} placeholder="Your Email-id.."/>
    <br/>
    <label for="lname">Mobile Number</label>
    <input type="text" id="lname" value={this.state.mobilenumber} onChange={this.handleChange} placeholder="Your Mobile Number.."/> */}
    <br/><br/><br/>
    <input type="submit" value="Submit"/>
  </form>
</div>


);
    }
}
export default ApplyJobs;
