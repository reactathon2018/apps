import React from 'react';
import { Button, Input } from './elements.js';
import './Form.css';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
    this.onInputChange = this.onInputChange.bind(this);    
  }

  onInputChange(fieldName, event) {
    switch (fieldName) {
      case 'userName':
        this.setState({
          username: event.target.value
        });
        break;
      case 'userEmail':
        this.setState({
          email: event.target.value
        });
        break;
      case 'password':
        this.setState({
          password: event.target.value
        });
        break;
      case 'confirmPassword':
        this.setState({
          confirmPassword: event.target.value
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <form className="clear" method='' action=''>
        <Input
          hasLabel='true'
          htmlFor='userName'
          label='User Name'
          required='true'
          type='text'
          value={this.state.username}
          onChange={this.onInputChange}
        />

        <Input
          hasLabel='true'
          htmlFor='userEmail'
          label='User Email'
          required='true'
          type='email'
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

        <Input
          hasLabel='true'
          htmlFor='confirmPassword'
          label='Confirm Password'
          required='true'
          type='password'
          value={this.state.confirmPassword}
          onChange={this.onInputChange}
        />

        <Button
          value='submit'
          text='Sign Up'
          onClick={() => this.props.onSubmit(this.state)}
        />
      </form>
    )
  }
}