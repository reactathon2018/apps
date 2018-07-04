import React from 'react';
import axios from 'axios';

import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CreateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,     
      title : "",
      organiser: "",
      org : "",
      description : "",
      teamsize : "",
      startDate : "",
      endDate : "",
      mob : ""
 
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = (e) => {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    // var someProperty = {...this.state.formFields}
    // someProperty[e.target.name] = e.target.value;
    // this.setState({someProperty});
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { title, org,description, teamsize, organiser, startDate, endDate, mob} = this.state;
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Create an event!</ModalHeader>
          <ModalBody>
          <Form>
          <FormGroup>
          <Label for="teamName">Event name</Label>
          <Input type="text" name="title" id="title" placeholder="Reactathon..." value={title} onChange={this.onChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Event Description</Label>
          <Input type="textarea" name="description" id="description" placeholder="Description ..." value={description} onChange={this.onChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Event Organisers: Org</Label>
          <Input type="textarea" name="org" id="org" placeholder="VES, Global..." value={org} onChange={this.onChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select max no of members per team</Label>
          <Input type="select" name="select" id="exampleSelect" value={teamsize} onChange={this.onChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="startDate">Start Date</Label>
          <Input type="date" name="startDate" id="startDate" value={startDate} onChange={this.onChange} />
          <Label for="endDate">End Date</Label>
          <Input type="date" name="endDate" id="endDate" value={endDate} onChange={this.onChange}/>
        </FormGroup>    
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="organiser" id="organiser" placeholder="john@example.com" value={organiser} onChange={this.onChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="contactNumber">Mobile number</Label>
          <Input type="text" name="mob" id="mob" placeholder="+91-9999999999" value={mob} onChange={this.onChange}/>
        </FormGroup>      
      </Form>          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onSubmit}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  

   onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { title, org, description, teamsize, organiser, startDate, endDate, mob} = this.state;
    const url="http://localhost:4000";

    const data = {
      title : title,
      org: org,
      description: description,
      teamsize: teamsize,
      organiser: organiser,
      startDate: startDate,
      endDate: endDate,
      mob: mob
    }

    axios.post(url+'/hackathon',  data )
      .then((result) => {
        //access the results here....
        this.toggle();
        window.location.reload();
      });
  }
}

export default CreateModal;