import React from 'react';
import { Col, CustomInput, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import axios from 'axios';

class Teamform extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {teamname: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
	    this.setState({teamname: event.target.value});
  }
  
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.teamname);
    event.preventDefault();

		
		console.log('Profile Form appears filled');
		const data = {
			teamname: this.state.teamname,
		};
		
axios.post('http://localhost:3001/api/team', data)
      .catch(err => {
        console.error(err);
		alert("error");
        //this.setState({ data: comments });
      });

	
	
  }
  
 	
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
	  
		<FormGroup>
          <Label for="exampleCheckbox">Participate as</Label>
          <div>
            <CustomInput type="radio" id="individualRadio" name="customRadio" label="Individual" />
            <CustomInput type="radio" id="teamRadio" name="customRadio" label="Team" />
          </div>
        </FormGroup>
	  
	
		<FormGroup row>
          <Label for="teamName" sm={2}>Team Name</Label>
          <Col sm={10}>
            <Input type="teamName" name="teamName" id="teamName" value={this.state.teamname} onChange={this.handleChange} placeholder="" />
          </Col>
        </FormGroup>
		
		<FormGroup row>
          <Label for="firstName" sm={2}>First Name</Label>
          <Col sm={10}>
            <Input type="firstName" name="firstName" id="firstName" placeholder="" />
          </Col>
        </FormGroup>
		
		<FormGroup row>
          <Label for="lastName" sm={2}>Last Name</Label>
          <Col sm={10}>
            <Input type="lastName" name="lastName" id="lastName" placeholder="" />
          </Col>
        </FormGroup>
		
		 <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="example@verizon.com" />
          </Col>
        </FormGroup>
		
		<FormGroup row>
          <Label for="teamCount" sm={2}>Team Count</Label>
		  <Col sm={10}>
			  <Input type="select" name="select" id="teamCount">
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
				<option>5</option>
			  </Input>
		  </Col>
        </FormGroup>
	            
        
        
        <Button>Submit</Button>
      </Form>
    );
  }
}


export default Teamform;