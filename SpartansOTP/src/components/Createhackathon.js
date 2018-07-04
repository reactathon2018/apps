/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import axios from 'axios';

export default class Createhackathon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      teamname: ''
    };

    this.toggle = this.toggle.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChange(event) {
    this.setState({ teamname: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();


    console.log(event.target.location.value);
    const data = {
      name: event.target.name.value,
      location: event.target.location.value,
      maxteamsize: event.target.teamSize.value
    };

    console.log(data);

    axios.post('http://localhost:3001/api/hackathon', data)
      .catch(err => {
        console.error(err);
        alert("error");
        //this.setState({ data: comments });
      });



  }

  render() {
    return (
      <div>
        <Button color="success" onClick={this.toggle}>Create Hackathon</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Create Hackathon</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" placeholder="Name a hackathon" />
              </FormGroup>
              <FormGroup>
                <Label for="startdate">Start Date</Label>
                <Input type="date" name="startdate" id="startdate" />
              </FormGroup>
              <FormGroup>
                <Label for="enddate">End Date</Label>
                <Input type="date" name="enddate" id="enddate" />
              </FormGroup>
              <FormGroup>
                <Label for="teamSize">Team Size</Label>
                <Input type="select" name="teamSize" id="teamSize">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="location">Location</Label>
                <Input type="select" name="location" id="location" multiple>
                  <option>Olympia Tech Park, Chennai.</option>
                  <option>RMZ, Chennai.</option>
                  <option>Titus, Hyderbad.</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input type="textarea" name="text" id="description" />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />{' '}
                  I Agree to terms and conditions of Verizon.
          </Label>
              </FormGroup>
              <div style={{ height: 20, clear: 'both' }}></div>
              <Button color="success" onClick={this.toggle} type="submit">Submit</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
