import React from "react"
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Carousel, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap'

export default () => (
  <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/" > Events Org </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
         <ul className="nav navbar-nav navbar-right">
          <li role="presentation" className="">
            <Link to="/enrolledEvents" > Enrolled Events </Link>
          </li>
          <li role="presentation" className="">
            <Link to="/myEvents" > My Events </Link>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>

);
