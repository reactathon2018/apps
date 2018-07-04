import React from 'react';

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from 'reactstrap';

import Page from 'components/Page';

const FormPage = () => {
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
                    Event Name
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="event_name"
                      placeholder=""
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="desc" sm={3}>
                    Description
                  </Label>
                  <Col sm={8}>
                    <Input type="textarea" name="text" />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleDate" sm={3}>Start Date</Label>
                  <Col sm={8}>
                  <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                    placeholder="date placeholder"
                  />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleDate" sm={3}>End Date</Label>
                  <Col sm={8}>
                  <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                    placeholder="date placeholder"
                  />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelectMulti">Location(s)</Label>
                  <Input
                    type="select"
                    name="selectMulti"
                    multiple
                  >
                    <option>OTP</option>
                    <option>RMZ</option>
                    <option>Orion</option>
                    <option>Titus</option>
                  </Input>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default FormPage;
