import React from "react";

export default class StatusWidget extends React.Component {
  render() {
    return (
      <div>
        <div className="col-12 widget ">
          <h1>8</h1>
          <div>Active Hackathons</div>
        </div>
        <div className="col-12 widget ">
          <h1>140</h1>
          <div>Active Teams</div>
        </div>
        <div className="col-12 widget ">
          <h1>1039</h1>
          <div>Active Participants</div>
        </div>
      </div>
    );
  }
}
