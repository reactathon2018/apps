import React from "react";

import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import BarExample from "../charts/BarChart";
import PieExample from "../charts/PieChart";
import { Row, Col } from "reactstrap";
import classnames from "classnames";


export default class Admin extends React.Component {  
  
  render() {
    return (
      <div className="pageContainer">
      <div className="row header">
        Management View<hr />
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
      <Row className="row-content" style={{"height":"500px"}}>
      </Row>       
   
    </div>
    );
  }
}