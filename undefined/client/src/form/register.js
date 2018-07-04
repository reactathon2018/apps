import React from 'react';
import {Button, Input, DateField, Textarea} from './elements.js';
import './Form.css';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateHackathon extends React.Component {
    render() {
      return (
        <form method='' action=''>
          <Input
            hasLabel='true'
            htmlFor='title'
            label='Title'
            required='true'
            type='text'
          />
          
          <Textarea
            hasLabel='true'
            htmlFor='problemStatement'
            label='Problem Statement'
            required='true'
          />

          <DateField
            hasLabel='true'
            htmlFor='startDate'
            label='Start Date'
            required='true'
          />

          <DateField
            hasLabel='true'
            htmlFor='endDate'
            label='End Date'
            required='true'
          />

          <Input
            hasLabel='true'
            htmlFor='noOfParticipants'
            label='No. of Participants'
            required='true'
            type='text'
          />
          
          <Button
            value='submit'
            text='Register'
            onClick={() => this.props.onSubmit()}
          />        
        </form>
      )
    }
  }