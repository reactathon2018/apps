import React, { Component } from 'react';
import './Carrers.css';
// import CarrersData from './Carrers.json';
import axios from "axios";

import ReactDOM from 'react-dom';
class Carrers extends Component {
  constructor() {
    super();
    this.state = {
      Jobdetails : []
    };
   }
   componentWillMount() {
    var jdres= [];
    axios.get("http://localhost:5000/api/get").then(
        res=> {
         jdres =  JSON.stringify(res.data[0]);
         this.setState({
          Jobdetails: jdres
      });
      });

      
    }
  render() {
       
    var Jobdetails = this.state.Jobdetails;
    if(Jobdetails != undefined && Jobdetails.length>0 ){
    var data = JSON.parse(Jobdetails);
    
var jobdata = []

    for(var x in data){
      jobdata.push(data[x]);
    }
  }
  if(jobdata != undefined && jobdata.length>0 ){
   var rows = jobdata.map(function(row, i){
           return <tr>
                   <td>{row.jobid}</td>
                  <td>{row.jobtitle}</td>
                   <td>{row.skillset}</td>
               </tr>
           });
      
          }
    return (
        <div>
        <h1>Jobs Available</h1>   
<table id="customers">
  <tr>
    <th>JobID</th>
    <th>JobTitle</th>
    <th>SkillSet</th>
  </tr>
{rows}
</table>
</div>
    );
}
}
export default Carrers;
