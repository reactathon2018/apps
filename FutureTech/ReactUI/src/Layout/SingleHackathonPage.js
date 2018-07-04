import React from "react";
import { Timeline, TimelineEvent } from 'react-event-timeline'
import HackathonHeader from "./HackathonHeader";
import { Button, Row, Col } from "reactstrap";


export default class SingleHackathonPage extends React.Component {


  render() {
    return (
      <div className="pageContainer">
        <div className="row header">Reactathon<hr /></div>

        <HackathonHeader

          desc="Reactathon description"
          teamCount="20"
          participantsCount="10"
          likes="1200"
        />
        <br />
        <Row><Col>
          <h4>Timeline</h4>
          <Timeline style={{ "font-size": "15px" }}>

            <TimelineEvent
              title="Registration closes!"
              createdAt="2016-04-14 10:06 PM"
            >
              Happy Hacking.!!
            </TimelineEvent>


            <TimelineEvent title="Registration is about to close in 24 hours!"
              createdAt="2018-04-13 10:06 PM"

            >
              Have you registered already? If not, what are you waiting for? There is just 24 hours left to register.More exciting news to come!
            </TimelineEvent>


            <TimelineEvent
              title="Registration Updates!"
              createdAt="2016-04-12 02:06 PM"
            >
              We have received 421 registrations till now. Haven't you done?
            </TimelineEvent>

            <TimelineEvent
              title="Registration begins!"
              createdAt="2016-04-10 09:06 AM"
            >
              We welcome you all to register for the Reactathon 2018 that begins on 2nd July. Are you a React expert? Are you willing to learn new exciting tech stack?
              Then this is the right arena for you. Register right away... the clock is ticking !
            </TimelineEvent>


          </Timeline>
        </Col>
        </Row>

      </div>
    );
  }
}