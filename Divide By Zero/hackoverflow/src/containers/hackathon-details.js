import React, { Component } from "react";
import { connect } from "react-redux";
import NavItem from "../components/nav-item";
import TabPane from "../components/tab-pane";
import LeaderBoard from "../components/leader-board";
import Contact from "../components/contact";
import Header from "../components/header";
import NotFound from "../components/not-found";
import SubHeading from "../components/sub-heading";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { logoutUser } from "../actions/index";

class HackathonDetails extends Component {
  renderRules(rules) {
    if (rules)
      return rules.map((rule, index) => {
        return <p key={index}>{rule.p}</p>;
      });
  }
  renderContact(contact) {
    if (contact)
      return contact.map((ct, index) => {
        return <Contact key={index} data={ct} />;
      });
  }
  render() {
    const { hackathondetailstyle, ruleStyle } = styles;
    const { rules, contact, leaderBoard, name } = this.props.hackathon;
    if (!this.props.loginDetails.isLoggedIn) return <Redirect to="/login" />;
    if (rules)
      return (
        <div>
          <Header logOut={this.props.logoutUser} />
          <div style={hackathondetailstyle}>
            <SubHeading text={name} />
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <NavItem tag="details" active={true}>
                Rules & Details
              </NavItem>
              <NavItem tag="leaderboard">Leaderboard</NavItem>
              <NavItem tag="contact">Contact</NavItem>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <TabPane tag="details" active={true} style={ruleStyle}>
                {this.renderRules(rules)}
              </TabPane>
              <TabPane tag="leaderboard">
                <LeaderBoard data={leaderBoard} />
              </TabPane>
              <TabPane tag="contact" style={ruleStyle}>
                {this.renderContact(contact)}
              </TabPane>
            </div>
          </div>
        </div>
      );
    else {
      return <NotFound />;
    }
  }
}
const styles = {
  hackathondetailstyle: {
    margin: 80
  },
  ruleStyle: {
    fontFamily: "initial",
    background: "white",
    padding: 20,
    boxShadow: "5px 5px 10px grey"
  }
};

function mapStateToProps(state) {
  // console.log(`state ${JSON.stringify(state.hackathonDetail)}`);
  return {
    hackathon: state.hackathonDetail,
    loginDetails: state.loginDetails
  };
}
function mapDispatchtoProps(dispatch) {
  return bindActionCreators({ logoutUser }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(HackathonDetails);
