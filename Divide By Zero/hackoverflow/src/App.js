import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import HackathonList from "./containers/hackathon-list";
import SubHeading from "./components/sub-heading";
import Header from "./components/header";
import { bindActionCreators } from "redux";
import { logoutUser } from "./actions/index";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <Header logOut={this.props.logoutUser} />
        <div className="main-content">
          <SubHeading text="UPCOMING EVENTS" />
          <HackathonList active="true" />
          <SubHeading text="COMPLETED EVENTS" />
          <HackathonList active="false" />
        </div>
      </div>
    );
  }
}
function mapDispatchtoProps(dispatch) {
  return bindActionCreators({ logoutUser }, dispatch);
}
export default connect(
  null,
  mapDispatchtoProps
)(App);
