import React from 'react';
import { Button, Input } from './elements.js';
import './Form.css';

export default class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',      
      password: '',      
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(fieldName, event) {
    switch (fieldName) {
      case 'email':
        this.setState({
          email: event.target.value
        });
        break;
      case 'password':
        this.setState({
          password: event.target.value
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <form method='' action=''>
        <Input
          hasLabel='true'
          htmlFor='email'
          label='Email'
          required='true'
          type='text'
          value={this.state.email}
          onChange={this.onInputChange}          
        />

        <Input
          hasLabel='true'
          htmlFor='password'
          label='Password'
          required='true'
          type='password'
          value={this.state.password}
          onChange={this.onInputChange}          
        />

        <Button
          value='submit'
          text='Sign In'
          onClick={() => this.props.onSubmit(this.state)}
        />
      </form>
    )
  }
}