import React, { Component } from 'react';
import LoginPage from './login';
import UserProfilePage from './userProfile';
import ProfileNavigator from './profileNavigator';
class Navigator extends Component {

render(){
let currentPage;
if (!this.props.simpleReducer.isUserLoggedIn){
  return <LoginPage {...this.props}/>;
}
switch(this.props.simpleReducer.currentPage){
    // case "UserProfile":
    //   currentPage = <UserProfilePage {...this.props}/>;
    //   break;
    case "ProfileNavigator":
        currentPage = <ProfileNavigator {...this.props}/>;
      break;
    }
  return(<div>
      <div>
        <div className="nav-bar-custm">
          <a className={this.props.simpleReducer.currentProfilePage === "UserProfile" ? 'active' :''} onClick={()=>this.props.setCurrentProfilePage("UserProfile")}>My Profile</a>
          <a className={this.props.simpleReducer.currentProfilePage === "ViewJobs" ? 'active' :''} onClick={()=>this.props.setCurrentProfilePage("ViewJobs")}>Jobs Applied</a>
          <a className={this.props.simpleReducer.currentProfilePage === "ApplyJobs" ? 'active' :''} onClick={()=>this.props.setCurrentProfilePage("ApplyJobs")}>Apply For New Job</a>
        </div>
      </div>
      <div style={{clear:'both'}}>{currentPage}</div></div>);
 }
}

export default Navigator;
