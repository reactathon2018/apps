import React from "react"
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Carousel, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap'

export default () => (
  <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/" > Enrolled Events </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            <Link to="/enrolledEvents" > Enrolled Events </Link>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <Link to="/myEvents" > My Events </Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

);
