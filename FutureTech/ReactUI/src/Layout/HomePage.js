import React from "react";
import Toolbar from "./Toolbar";
import CarouselPage from "./CarouselPage";
import TopParticipantsTable from "./TopParticipantsTable";
import AllHackathons from "./AllHackathons";
import FAQ from "./FAQ";

import StatusWidget from "./StatusWidget";
import { Row, Col } from "reactstrap";

export default class Layout extends React.Component {
  render() {
    return (
     
        <div className="pageContainer">
        <div className="row header">Overview<hr /></div>
          <Row className="row-content">
            <Col className="col-2">
              <StatusWidget />
            </Col>
            <Col className="col-7">
            <CarouselPage /> 
              {/* <div className="bg-info carousel">asdasd</div> */}
            </Col>
            <Col className="col-3">
              <TopParticipantsTable />
            </Col>
          </Row>
        

          <Row className="row-content">
            <Col className="col-9 header">
              Hackathons
            </Col>

            <Col className="col-3 header">
              FAQ
            </Col>
          </Row>
          <Row className="row-content">
            <Col className="col-9">
              <AllHackathons /> 
            </Col>

            <Col className="col-3">
              <FAQ /> 
            </Col>
          </Row>
        </div>

     
    );
  }
}
