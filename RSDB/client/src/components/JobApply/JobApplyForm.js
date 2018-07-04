import reactDom from 'react-dom';
import './JobApplyPage.css';
import CandidatePage from '../Candidate/CandidatePage';
import axios from 'axios';


const React = require('react');
const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons');

class JobApplyForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { jobInfo: this.getJobDetails(), filters: {},showPopup: false };
    }
  
  

  getJobDetails = () => {
   let jobInfo=window.sessionStorage.getItem("selectedJob")
    if(jobInfo!="undefined")
    jobInfo= JSON.parse(jobInfo);
    return jobInfo;
  };

  applyJob=()=>{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    
    if(dd<10) {
        dd = '0'+dd
    } 
    
    if(mm<10) {
        mm = '0'+mm
    } 
    
    today = mm + '/' + dd + '/' + yyyy;
   
    let jobInfo={
    userId:'',
    jobId:this.state.jobInfo.id,
    date:today
   };

   var userDetails=JSON.parse(window.sessionStorage.getItem("userDetails"));
   jobInfo.userId=userDetails.result[0].UserId;

    axios.post('http://localhost:5000/api/applyJob',jobInfo)
    .then(function(){
      alert("Job Applied successfully...");
      reactDom.render(<CandidatePage/>,document.getElementById("root"));
    });
  }

  returnToPreviousPage=()=>
  {
    reactDom.render(<CandidatePage/>,document.getElementById("root"));
  }


  render() {
    return (
    <div>
<table>
  <tr><td>Job Title:</td><td>{this.state.jobInfo.title}</td></tr>
  <tr><td>Job Description:</td><td>{this.state.jobInfo.description}</td></tr>
  <tr><td>Primary Key Skills:</td><td>{this.state.jobInfo.primaryskills}</td></tr>
  <tr><td>Secondary Key Skills:</td><td>{this.state.jobInfo.secondaryskills}</td></tr>
  <tr><td>Number of Vacancies:</td><td>{this.state.jobInfo.vacancies}</td></tr>
  <tr></tr>
  <tr><td><button onClick={this.returnToPreviousPage.bind(this)}>Back</button></td><td><button onClick= {this.applyJob.bind(this)}>ApplyNow</button></td></tr>


</table>


    </div>
    );
  }
  }

 export default JobApplyForm;
