import React, { Component } from 'react';

export default class ApplyJobs extends Component{

  componentDidMount(){
  }

  render(){
    const viewjobList = this.props.simpleReducer.viewjobList;
    let username = this.props.simpleReducer.userName;
    let listHTML = null;
    listHTML = viewjobList.map((job, index)=>{
      let d = new Date(job.postdate);
      let interviewDate = d.getDate()  + "-" + (d.getMonth()) + "-" + d.getFullYear();
      return(
        <div class="">
          <div style={{width:'60%', display:'inline', padding:'5px', float:'left', borderLeft:'1px solid blue', borderBottom:'1px solid blue', height: '200px'}}>
            <div><span>Job Id</span>|<span>{job["_id"]}</span></div>
            <div>
              <p><b>Job Name</b> : {job.name}</p>
              <p><b>Job Description</b> : {job.description}</p>
              <p>SKILLS</p>
              <ul>
              {job.skillset.map((skill,index)=><li style={{display:'inline-block', float:'left'}}><div style={{border:'2px solid black', padding:'5px', margin:'5px', cursor: 'pointer'}}>{skill}</div></li>)}
                </ul>
              <div style={{display:'block', clear:'both'}}>
                <p>Posted By : {job.postedby}</p>
              </div>
            </div>
          </div>
          <div style={{width:'36.6%', display:'inline', padding:'5px', float:'left', borderRight:'1px solid blue', borderBottom:'1px solid blue', height: '200px'}}>
            <div style={{marginTop:'20px'}}><button onClick = {()=>this.props.applyJob({jobId:job["_id"],username:username})}>Apply</button></div>
              <div><p>INTERVIEWDATE: {interviewDate}</p></div>
          </div>
        </div>
      );
    })
    return <div style={{width:'50%', margin:'auto'}}>
    {listHTML}
    </div>;
  }
}
