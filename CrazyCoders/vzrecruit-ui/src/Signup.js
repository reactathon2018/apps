import React, { Component } from "react";
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import "./Signup.css";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      newUser: null,
      Userdetails:{}
    };

  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    this.setState({ newUser: "test" });

    this.setState({ isLoading: false });
  }

  handleConfirmationSubmit = async event => {
    event.preventDefault();
  }

  renderConfirmationForm() {
    return (
      <form onSubmit={this.handleConfirmationSubmit}>
        <FormGroup controlId="confirmationCode" bsSize="large">
          <ControlLabel>Confirmation Code: <br/></ControlLabel>
          <FormControl
            autoFocus
            type="tel"
            value={this.state.confirmationCode}
            onChange={this.handleChange}
          />
          <HelpBlock>Please check your email for the code.</HelpBlock>
        </FormGroup>        
		<input type="submit" Value='Submit' />
      </form>
    );
  }

  renderForm() {
    return (
      <panel>
      <form onSubmit={this.handleSubmit}>
      <label>{this.state.Userdetails.username}</label>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email:   </ControlLabel> <span/><span/><span/>
          <FormControl
            autoFocus
            type="email"            
            value={this.state.email}
            onChange={this.handleChange}            
          />
        </FormGroup><br/>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password:   </ControlLabel>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup><br/>
        <FormGroup controlId="confirmPassword" bsSize="large">
          <ControlLabel>Confirm Password:   </ControlLabel>
          <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
       <br/><br/>
		<input type="submit" Value='Submit' />
                    
      </form>
      </panel>
    );
  }

  render() {
    return (
      <div className='Signup'>
        {
           this.renderForm()
          }
      </div>
    );
  }
}
