import React, { Component } from 'react';
import axios from 'axios';

class CardPanel extends Component {

  state = {
    indexOpen: -1,
    isLastindex:false,
    persons: []

  }

   componentWillMount() {
    axios.get(`http://10.74.19.207:9004/careers/currentOpenings`)
      .then(res => {
        console.log(res+"tesxt");
        const persons = res.data;
        this.setState({ persons });
      })
  }

  setIndexOpen = (indexOpen) => {
    let isLastindex = false;
    while (indexOpen == 0 || indexOpen % 4 != 0 && !isLastindex) {
      if (indexOpen + 1 >= this.state.persons.length) {
        isLastindex = true;
      }
      indexOpen++;
    }
    if (isLastindex){
      this.setState({ isLastindex: true,indexOpen:-1 })
    return;}
    this.setState({ indexOpen: indexOpen,isLastindex:false });
    
  }
  render() {
   

    return (
      <div className="container margin-top-xl jobsearchBox">
        <div className="row">
          {this.state.persons.map(function (persons, i) {
            console.log("frm persons"+persons);
            if (i == 0 || i % 4 != 0)
          return (<MyAppChild designation={persons.designation} hiringmanager={persons.hiringmanager} Experience={persons.experience} index={i} location={persons.joblocation} setIndexOpen={this.setIndexOpen} skills={persons.technologies} postedDate={persons.postingdate} />);

            else {
              let hideclassName = "";
              if (this.state.indexOpen === i) {
                 return <div className={"col-md-12 " + hideclassName}>
                    <div className="panel panel-default panelDetail">
                        <div className="panel-body">
                        <h3><b> What we’re looking for...</b></h3>

<b>Education :</b> B.E/B.Tech/M.C.A /M.Sc - Comp Science.
<b>Experience : 2.5+ Yrs</b> Candidate must have experience in developing Java and J2EE applications. Experience as a developer with knowledge on below skillset <b> Primary skills -</b> NodeJS, ReactJS, Redux, Full Stack Developer, Oracle PL/SQL 
<b> Secondary skills –</b> Unix, Junit, Weblogic/JBoss, DevOps Tool Chain Exposure to DevOps and Agile will be preferable.
Experience working with Linux OS (Red hat / Ubuntu ) is preferred.
<p className="applyJob"><button type="submit" class="btn btn-primary">Apply Job</button></p>

    <div className="row bs-wizard">
        
        <div className="col-xs-3 bs-wizard-step active">
          <div className="text-center bs-wizard-stepnum">Step 1</div>
          <div className="progress"><div className="progress-bar"></div></div>
          <span  className="bs-wizard-dot"></span>
          <div className="bs-wizard-info text-center">Sucessfully Applied!</div>
        </div>
        
        <div className="col-xs-3 bs-wizard-step disabled">
          <div className="text-center bs-wizard-stepnum">Step 2</div>
          <div className="progress"><div className="progress-bar"></div></div>
          <span className="bs-wizard-dot"></span>
          <div className="bs-wizard-info text-center">Interview Scheduled</div>
        </div>
        
        <div className="col-xs-3 bs-wizard-step disabled">
          <div className="text-center bs-wizard-stepnum">Step 3</div>
          <div className="progress"><div className="progress-bar"></div></div>
          <span className="bs-wizard-dot"></span>
          <div className="bs-wizard-info text-center">Interviewer Feedback</div>
        </div>
        
        <div className="col-xs-3 bs-wizard-step disabled">
          <div className="text-center bs-wizard-stepnum">Step 4</div>
          <div className="progress"><div className="progress-bar"></div></div>
          <span className="bs-wizard-dot"></span>
          <div className="bs-wizard-info text-center">HR Discussion</div>
        </div>
    </div>
                        </div>
                    </div>
                 </div>
              }else{
                return null;
              }

            }
          }.bind(this)
          )}
{this.state.isLastindex?<div className={"col-md-12 "}>
          <div className="panel panel-default panelDetail">
                        <div className="panel-body">
                        <h3><b> What we’re looking for...</b></h3>

<b>Education :</b> B.E/B.Tech/M.C.A /M.Sc - Comp Science.
<b>Experience : 2.5+ Yrs</b> Candidate must have experience in developing Java and J2EE applications. Experience as a developer with knowledge on below skillset <b> Primary skills -</b> NodeJS, ReactJS, Redux, Full Stack Developer, Oracle PL/SQL 
<b> Secondary skills –</b> Unix, Junit, Weblogic/JBoss, DevOps Tool Chain Exposure to DevOps and Agile will be preferable.
Experience working with Linux OS (Red hat / Ubuntu ) is preferred.
<p className="applyJob"><button type="submit" class="btn btn-primary">Apply Job</button></p>

    <div className="row bs-wizard">
        
        <div className="col-xs-3 bs-wizard-step active">
          <div className="text-center bs-wizard-stepnum">Step 1</div>
          <div className="progress"><div className="progress-bar"></div></div>
          <span  className="bs-wizard-dot"></span>
          <div className="bs-wizard-info text-center">Sucessfully Applied!</div>
        </div>
        
        <div className="col-xs-3 bs-wizard-step disabled">
          <div className="text-center bs-wizard-stepnum">Step 2</div>
          <div className="progress"><div className="progress-bar"></div></div>
          <span className="bs-wizard-dot"></span>
          <div className="bs-wizard-info text-center">Interview Scheduled</div>
        </div>
        
        <div className="col-xs-3 bs-wizard-step disabled">
          <div className="text-center bs-wizard-stepnum">Step 3</div>
          <div className="progress"><div className="progress-bar"></div></div>
          <span className="bs-wizard-dot"></span>
          <div className="bs-wizard-info text-center">Interviewer Feedback</div>
        </div>
        
        <div className="col-xs-3 bs-wizard-step disabled">
          <div className="text-center bs-wizard-stepnum">Step 4</div>
          <div className="progress"><div className="progress-bar"></div></div>
          <span className="bs-wizard-dot"></span>
          <div className="bs-wizard-info text-center">HR Discussion</div>
        </div>
    </div>
                        </div>
                    </div>         

</div>:""}
        </div>
      </div>);
  }
}

class MyAppChild extends React.Component {
  render() {
    return (
      <div className="col-md-3 " onClick={() => { this.props.setIndexOpen(this.props.index) }}>
        <div class="panel panel-default panel-info panelPage">
          <div class="panel-heading">
            <h3 class="panel-title"><b>{this.props.designation}</b></h3>
          </div>
          <div class="panel-body">
          <p><b>Hiring Manager: <i>{this.props.hiringmanager}</i></b></p>
            <p>Experience <span class="glyphicon glyphicon-briefcase"></span> {this.props.Experience}</p>
            <p>Location <span class="glyphicon glyphicon-pushpin"></span> {this.props.location}</p>
            
            <p>Key Skills: <i>{this.props.skills}</i></p>
          </div>
          <div class="panel-footer">
            <span>Posted: {this.props.postedDate} </span>
          </div>
        </div>
        <div className="arrowDown" ></div>

      </div>

    );
  }
}
export default CardPanel;