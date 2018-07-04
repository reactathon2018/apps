import React from "react";

import FAQList from "./FAQList";
import AskFAQ from "./AskFAQ";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";


export default class FAQ extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
    this.forloop =  this.forloop.bind(this);
    this.forloop2 =  this.forloop2.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  forloop(){
    
    let rows = [];

    rows.push(<FAQList
      name="Who all can participate in hackathons"
      desc="All full time employees can participate"
      teamCount="20"
      participantsCount="20"
      likes="1200"
    />);

    rows.push(<FAQList
      name="What is the team size allowed"
      desc="Different for every hackathons. While creating the hackathon, it can be limited"
      teamCount="20"
      participantsCount="30"
      likes="1200"
    />);

    rows.push(<FAQList
      name="When will the winners receive award money ?"
      desc="Award money will be credited in the next pay cycle"
      teamCount="20"
      participantsCount="50"
      likes="1200"
    />);
    return rows;
  }

  
  forloop2(){
    
    let rows2 = [];

    rows2.push(<FAQList
      name="Will the organizer provide food?"
      desc=""

    />);

    rows2.push(<FAQList
      name="Rupees or Dollars?"
      desc=""
   
    />);

    return rows2;
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
              Answered
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Unanswered
            </NavLink>
          </NavItem>

          {/* <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Ask
            </NavLink> 
          </NavItem>*/}
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
          {this.forloop2()}
          </TabPane>
          
        </TabContent>
      </div>
    );
  }
}