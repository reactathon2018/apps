import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Appliedjobs extends Component {
	
	constructor(props) {
    super(props);
	this.state = {jobid: 'VIKMS01', jobtitle: 'Senior Software Engineer'};
	this.handleChange = this.handleChange.bind(this);
	this.handleChange1 = this.handleChange1.bind(this);
	this.handleNoticeperiod = this.handleNoticeperiod.bind(this);
	this.handleRelocate = this.handleRelocate.bind(this);
	this.handleCurrentCTC = this.handleCurrentCTC.bind(this);
	this.handleExpectedCTC = this.handleExpectedCTC.bind(this);
	this.readFile = this.readFile.bind(this);
	this.getPHP = this.getPHP.bind(this)
  }
  
  handleChange(event) {
    this.setState({jobid: event.target.value});
  }
  handleChange1(event) {
	this.setState({jobdesc: event.target.value});
  }
  handleNoticeperiod(event) {
	this.setState({noticeperiod: event.target.value});
  }
  handleRelocate(event) {
	this.setState({relocate: event.target.value});
  }
  handleCurrentCTC(event) {
	this.setState({currentCTC: event.target.value});
  }
  handleExpectedCTC(event) {
	this.setState({expectedCTC: event.target.value});
  }
  readFile(event) {
	this.setState({readFile: event.target.files[0].name});
  }
  
  getPHP(event){
	 //alert('Job ID: ' + this.state.jobid);
	 //alert('Job Desc: ' + this.state.jobdesc);
	 //alert('Notice period: ' + this.state.noticeperiod);
	 //alert('Notice period: ' + this.state.readFile);
    event.preventDefault();
	var formData = new FormData();
	formData.append('applyform', 'applyform');
	formData.append('noticeperiod', this.state.noticeperiod);
	formData.append('relocate', this.state.relocate);
	formData.append('currentCTC', this.state.currentCTC);
	formData.append('expectedCTC', this.state.expectedCTC);
	formData.append('readFile', this.state.readFile);
	fetch(`http://localhost/demo_react/api/demo.php`, { 
		method: 'POST',
		headers: {
			//'Accept': 'application/json',
			//'Content-Type': 'application/json'
		},
		body: formData,
	}).then(res =>res.json())
	.then(response => {
		console.log('response:');
		console.log(response);
	});
  }
	
	
   render() {
		return (
			<div>
				
				<div className="container">
					<form onSubmit={this.getPHP} encType="multipart/form-data">
		<label>
          <b>Job Code :</b> {this.state.jobid}
        </label>
		<br/>
		<label>
          <b>Job Title :</b> {this.state.jobtitle}
        </label>
		<br/>
		<label>
          <b>KeySkills :</b> PHP, Javascript, React.
        </label>
		<br/>
		<label>
          <b>Job Description :</b> Need PHP and React JS developer with minimum 5 years of experience. Good to know Angular Js and Node Js
        </label>
		<br/>
		<br/>
		<label>
          <b>What is your notice period ?</b>
		  <div onChange={this.handleNoticeperiod}>
			<input type="radio" value="15 to 30 days" name="noticeperiod"/> 15 to 30 days
			<input type="radio" value="60 days" name="noticeperiod"/> 60 days
			<input type="radio" value="90 days" name="noticeperiod"/> 90 days
		  </div>
        </label>
		<br/>
		<br/>
		<label>
          <b>Are you willing to relocate to the cuurent location?</b>
		  <div onChange={this.handleRelocate}>
			<input type="radio" value="Yes" name="relocate"/> Yes
			<input type="radio" value="No" name="relocate"/> No
		  </div>
        </label>
		<br/>
		<br/>
		<label>
          <b>What is your current CTC?</b>
		  <div onChange={this.handleCurrentCTC}>
			<input type="radio" value="Less than 8 lakhs" name="currentCTC"/> Less than 8 lakhs
			<input type="radio" value="8 lakhs to 12 lakhs" name="currentCTC"/> 8 lakhs to 12 lakhs
			<input type="radio" value="12 lakhs to 16 lakhs" name="currentCTC"/> 12 lakhs to 16 lakhs
			<input type="radio" value="12 lakhs to 16 lakhs" name="currentCTC"/> Greater than 16 lakhs
		  </div>
        </label>
		<br/>
		<br/>
		<label>
          <b>What is your expected CTC?</b>
		  <div onChange={this.handleExpectedCTC}>
			<input type="radio" value="Less than 16 lakhs" name="expectedCTC"/> Less than 16 lakhs
			<input type="radio" value="16 lakhs than 18 lakhs" name="expectedCTC"/> 16 lakhs than 18 lakhs
			<input type="radio" value="18 lakhs to 20 lakhs" name="expectedCTC"/> 18 lakhs to 20 lakhs
			<input type="radio" value="20 lakhs to 22 lakhs" name="expectedCTC"/> 20 lakhs to 22 lakhs
		  </div>
        </label>
		<br/>
		<label> <b>Please upload your CV </b>
		<br/>
		<input id="upload" ref="upload" type="file" accept="image/*"
				onChange={(event)=> { 
					 this.readFile(event) 
				}}
				onClick={(event)=> { 
					 event.target.value = null
				}}
		/>
		</label>
		<br/>
        <br/>		
        <input type="submit" className="abutton" value="Submit" />
      </form>
				</div>
			</div>
		);
	}
}
export default Appliedjobs;