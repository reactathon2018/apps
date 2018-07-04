import React from "react";
import Toolbar from "../Layout/Toolbar";
import { Row, Col } from "reactstrap";
import BarExample from "./BarChart";
import PieExample from "./PieChart";
import MyWidget from './TimelineWidget';

export default class ChartLayout extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="navbar-shadow">
            <Toolbar />
          </Col>
        </Row>
        <div className="pageContainer">
          <div className="row header">
            Overview<hr />
          </div>
          <Row className="row-content">
            <Col className="col-4">
              <BarExample />
            </Col>
            <Col className="col-4">
              <PieExample name="Gender Distribution" dataSet = {[300, 170]} labels={["Male", "Female"]}/>
            </Col>
            <Col className="col-4">
              <PieExample name="Band Distribution" dataSet ={[40,156,210,149,47,13]} labels={["Band 2","Band 3", "Band 4","Band 5", "Band 6", "Band 7"]}/>
            </Col>
          </Row>         
        </div>

        {/* Change Font
        Apply class
        Reduce Carousel size
        Add Cards on top to show numbers
        Recitify font awesome icons */}
      </div>
    );
  }
}
