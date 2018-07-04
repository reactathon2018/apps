import React, { Component } from "react";
import Myinfo from "./Myinfo";
import Workexp from "./Workexp";
import Education from "./Education";
import UploadDocs from "./Uploadfile";
class Profile extends Component {
  render() {
    return (
      <div className="grid ">
        <div className="row">
          <div className="cell">
            <h1>My Profile</h1>
          </div>
        </div>
        <div className="row">
          <div className="cell">
            <div
              data-role="accordion"
              data-active-heading-class="bg-cyan fg-white"
              data-one-frame="true"
              data-show-active="true"
            >
              <div className="frame active">
                <div className="heading">My Info</div>
                <div className="content">
                  <Myinfo />
                </div>
              </div>
              <div className="frame ">
                <div className="heading"> Work Experience</div>
                <div className="content">
                  <Workexp />
                </div>
              </div>
              <div className="frame">
                <div className="heading">Education</div>
                <div className="content">
                  <Education />
                </div>
              </div>
              <div className="frame">
                <div className="heading">Upload resume</div>
                <div className="content">
                  <UploadDocs />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
