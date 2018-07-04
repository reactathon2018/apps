import React from "react";
import { Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RegisterModal from './RegisterModal';

export default class HackathonHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row className="no-margin">
        <Col className="col-34 allHackContainer">

          <div>
            {this.props.desc}
          </div>


        </Col>
        <Col className="col-3 allHackContainer">


          <FontAwesomeIcon icon="users" /> Teams : {this.props.teamCount}



        </Col>
        <Col className="col-3 allHackContainer">


          <FontAwesomeIcon icon="user-secret" />  Participants : {this.props.participantsCount}


        </Col>
        <Col className="col-3 allHackContainer">


          <FontAwesomeIcon icon="trophy" />  Prize money :$1000


        </Col>

      </Row>
    );
  }
}
