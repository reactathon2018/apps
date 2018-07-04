import {React,Component} from 'react';

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

class QuizComponent extends Component {
    render(){
        return (
            <div>
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
              {/* <Button color="primary" onClick={addComponent}>Add</Button> */}
              
            </Form>
            </div>
        );

    }
        
};

export default QuizComponent;
