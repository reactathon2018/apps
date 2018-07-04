import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {register} from '../actions/index'
import {bindActionCreators} from 'redux';


class LoginForm extends Component {

    render() {
        if (!this.props.event) {
            return (<div></div>);
        }
        return (
            <div className='login-form'>
                {/*
                  Heads up! The styles below are necessary for the correct render of this example.
                  You can do same with CSS, the main idea is that all the elements up to the `Grid`
                  below must have a height of 100%.
                */}
                <style>{`
                  body > div,
                  body > div > div,
                  body > div > div > div.login-form {
                    height: 100%;
                  }
                `}</style>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                  <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                     Register Your Team Details
                    </Header>
                    <Form size='large'>
                      <Segment stacked>
                        Member ID:- <Form.Input fluid icon='Member Id' iconPosition='left'  placeholder='Enter your required user id ' />
                        Name:-      <Form.Input fluid icon='Name' iconPosition='left' placeholder='Enter Your Name' />
                        Email:-     <Form.Input fluid icon='email' iconPosition='left' placeholder='Enter your Email' />
                        location:-  <Form.Input fluid icon='location' iconPosition='left' placeholder='Enter Your location' />
                        Org:-       <Form.Input fluid icon='org' iconPosition='left' placeholder='Enter your Organization name' />
                        EventName:- <Form.Input fluid icon='EventName' iconPosition='left' placeholder='Enter Event Name' />
                        <br/>
                        <Button color='teal' fluid size='large'>
                          Register
                        </Button>
                      </Segment>
                    </Form>
                  </Grid.Column>
                </Grid>
              </div>
        );
    }

  }

// "state.activeEvent" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        event: state.activeEvent,
        hacks: state.hacks
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({register: register}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginForm);
