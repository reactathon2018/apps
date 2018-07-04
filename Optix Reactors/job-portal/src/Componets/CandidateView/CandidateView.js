import React, { Component } from 'react';
import axios from 'axios';
import './CandidateView.css';
//import CarrersData from './CandidateView.json';

class Carrers extends Component {

    constructor() {
        super();
        this.state = {
            CandidateData : []
        };
       }
       componentWillMount() {
        var candidateResponse= [];
        axios.get("http://localhost:5000/api/CandidateData").then(
            res=> {
                candidateResponse =  JSON.stringify(res.data[0]);
             this.setState({
                CandidateData: candidateResponse
          });
          });
    
          
        }

  render() {
    var CandidateData = this.state.CandidateData;
    if(CandidateData != undefined && CandidateData.length>0 ){
    var data = JSON.parse(CandidateData);
    
var CandidateDataList = []

    for(var x in data){
        CandidateDataList.push(data[x]);
    }
  }
  if(CandidateDataList != undefined && CandidateDataList.length>0 ){
    var rows = CandidateDataList.map(function(row){
        return <tr>
                <td>{row.jobid}</td>
                <td>{row.jobtitle}</td>
                <td>{row.skillset}</td>
                <td>{row.interviewdate}</td>
                <td>{row.interviewtime}</td>
                <td>{row.status}</td>
                <td>{row.feedback}</td>
            </tr>
        });
    }

    return (
        <div>
        <h1>Jobs Applied</h1>   
<table id="customers">
  <tr>
    <th>JobID</th>
    <th>JobTitle</th>
    <th>SkillSet</th>
    <th>InterViewDate</th>
    <th>InterViewTime</th>
    <th>Status</th>
    <th>FeedBack</th>
  </tr>
{rows}
</table>
</div>
    );
}
}
export default Carrers;
