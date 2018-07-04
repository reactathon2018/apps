import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,Form,FormGroup,Input } from 'reactstrap';
  import vzlogo from '../images/verizon-logo.png';


export default class Verizonheader extends React.Component {
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
    return (
      <div style={borderStyles[0]}>
        <Navbar color="white" expand="md">
          <NavbarBrand href="/" color="black">

          <img src={vzlogo} alt="logo" style={{width: 200}} />
          
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
              <Form>
                <FormGroup>
                  <Input type="search" name="searchweb" id="searchweb" placeholder="Search site" />
                </FormGroup>
                </Form>
              </NavItem>
            <NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  My Profile
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    My Scores
                  </DropdownItem>
                  <DropdownItem>
                    My Hackthon List
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Signout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </NavItem>
              <NavItem>
                <Button color="success">Create Hackathon</Button>{' '}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const borderStyles = [
  {
    padding: 10,
    borderBottomWidth :1,
    borderBottomColor: 'grey',
    borderBottomStyle: 'solid',
  }
];
