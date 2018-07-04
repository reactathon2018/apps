import React from "react";
import { Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RegisterModal from './RegisterModal';

export default class FAQList extends React.Component {
    constructor(props) {
        super(props);
       }

  render() {
    return (
      <Row className="no-margin">       
        <Col className="col-12 allHackContainer">
          <h6>{this.props.name}</h6>
          <div>
           {this.props.desc}
          </div>
        
        </Col>
        
      </Row>
    );
  }
}
