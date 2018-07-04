import React from 'react';
import { Button, Input, Textarea } from './elements.js';
import './Form.css';

export default class Nomination extends React.Component {
  render() {
    return (
      <form method='' action=''>
        <Input
          hasLabel='true'
          htmlFor='team name'
          label='Team Name'
          required='true'
          type='text'
        />
        <Input
          hasLabel='true'
          htmlFor='organization'
          label='Organization'
          required='true'
          type='text'
        />        
        <Textarea
          hasLabel='true'
          htmlFor='team Members'
          label='Team Members'
          required='true'
          type='text'
        />
        <Button
          value='submit'
          text='Apply'
        />
      </form>
    )
  }
}