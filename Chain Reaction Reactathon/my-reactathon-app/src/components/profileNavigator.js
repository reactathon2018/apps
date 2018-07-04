import React, { Component } from 'react';
import LoginPage from './login';
import UserProfilePage from './userProfile';
import ViewJobs from './viewJobs';
import ApplyJobs from './applyJobs';
class ProfileNavigator extends Component {
  render(){
    let currentPage;
    if (!this.props.simpleReducer.isUserLoggedIn){
      return <LoginPage {...this.props}/>;
    }
    switch(this.props.simpleReducer.currentProfilePage){
      case "UserProfile":
        currentPage = <UserProfilePage {...this.props}/>;
        break;
      // case "ViewJobs":
      //   currentPage = <ViewJobs {...this.props}/>;
      //   break;
      // case "ApplyJobs":
      //   currentPage = <ApplyJobs {...this.props}/>;
      //   break;
      default:   currentPage = <UserProfilePage {...this.props}/>;
    }
    return(currentPage);
  }
}

export default ProfileNavigator;
