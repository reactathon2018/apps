import React from 'react';
import { Component } from 'react'

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  ButtonGroup,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from 'reactstrap';

import Page from 'components/Page';
import QuizComponent from 'pages/QuizComponent';


class StepTwo extends Component {
    constructor(props) {
        super(props);
        this.state={quiz:[]};
        this.addComponent = this.addComponent.bind(this);
      }

     addComponent(){
        console.log("Add");
        var newQuiz= this.state.quiz;
        newQuiz.push({id:Math.random()});
        this.setState({quiz:newQuiz});
        console.log(this.state.quiz)
    }
 render(){
    return (
        <Page title="Event Details">
          <Row>
            <Col xl={10} lg={12} md={12}>
              <Card>
                <CardHeader>Form Grid</CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup row>
                      <Label for="EventName" sm={3}>
                        Enter your question
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="text"
                          name="event_name"
                          placeholder=""
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup check>
                    <Label for="EventName" sm={3}>
                        Option 1:
                      </Label>
                      <Label check>
                        <Input type="radio" />
                        <Col sm={8}>
                        <Input
                          type="text"
                          name="event_name"
                          placeholder=""
                        />
                      </Col>
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label for="EventName" sm={3}>
                        Option 2:
                      </Label>
                      <Label check>
                        <Input type="radio" />
                        <Col sm={8}>
                        <Input
                          type="text"
                          name="event_name"
                          placeholder=""
                        />
                      </Col>
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label for="EventName" sm={3}>
                        Option 3:
                      </Label>
                      <Label check>
                        <Input type="radio" />
                        <Col sm={8}>
                        <Input
                          type="text"
                          name="event_name"
                          placeholder=""
                        />
                      </Col>
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label for="EventName" sm={3}>
                        Option 4:
                      </Label>
                      <Label check>
                        <Input type="radio" />
                        <Col sm={8}>
                        <Input
                          type="text"
                          name="event_name"
                          placeholder=""
                        />
                      </Col>
                      </Label>
                    </FormGroup>
                    {this.state.quiz.map((data)=>{
                        return <QuizComponent key={data.id} /> ;
                    })
                }
                    <Button color="primary" onClick={this.addComponent}>Add</Button>
            
                  </Form>
                  
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Page>
      );
    }; 
}

export default StepTwo;
