import React from 'react';
import CreateModal from './CreateModal';
import { Button } from "reactstrap";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

export default class Toolbar extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    
    render() {
      return (<div>
        <Navbar className=" navHeader" color="light" light expand="md">
        
          <NavbarBrand style={{"display":"-webkit-box"}} href="/"><img style={{"width":"80%"}} src="./assets/logo.png"></img><div className="headerStyle">Hack Zone</div></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#"><CreateModal buttonLabel ="Create"></CreateModal></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin"><Button color="light">Admin</Button></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
         
        </Navbar>
      </div>);

    }
}
