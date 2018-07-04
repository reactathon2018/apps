import React from "react";

import HackthonList from "./HackthonList";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import axios from 'axios';

export default class AllHackathons extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      hackathons: []
    };
    this.forloop = this.forloop.bind(this);
  }

  componentDidMount() {
    const url = "http://localhost:4000";
    axios.get(url + "/hackathon")
      .then(res => {
        console.log(res);
        const hackathons = res.data.data.docs.map(obj => obj);
        this.setState({ hackathons });
      });
  }


  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  forloop() {

    let rows = [];

    for (let i = 0; i < this.state.hackathons.length; i++) {
      let data = this.state.hackathons[i];
      if (data.status == this.state.activeTab) {
        rows.push(<HackthonList
          name={data.title}
          desc={data.description}
          teamCount="180"
          participantsCount={i}
          likes="1200"
          percent ={Math.random() * (90 - 10) + 10}
        />);
      }


    }
    return rows;
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Active
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Completed
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Up Coming
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            {this.forloop()}
            {/*            
            <HackthonList
              name="Reactathon"
              desc="Reactathon description"
              teamCount="20"
              participantsCount="1000"
              likes="1200"
            /> */}
          </TabPane>
          <TabPane tabId="2">
            {this.forloop()}
          </TabPane>
          <TabPane tabId="3">
            {this.forloop()}
          </TabPane>
        </TabContent>
      </div>
    );
  }
}