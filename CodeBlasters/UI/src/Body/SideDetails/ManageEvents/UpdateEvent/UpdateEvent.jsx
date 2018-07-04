import React from 'react';
import {Col, Panel, FormControl, Button, ControlLabel, FormGroup, Radio, Row} from 'react-bootstrap';

class UpdateEvent extends React.Component {

    render(){
        return (
            <Col xs={6}>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title componentClass="label">Event Name</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <FormGroup>
                            <ControlLabel>Event Name</ControlLabel>
                            <FormControl placeholder="Event Name" bsSize="small"/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Event Description</ControlLabel>
                            <FormControl placeholder="Event Description" bsSize="small" componentClass="textarea"/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Event Rules</ControlLabel>
                            <FormControl placeholder="Event Rules" bsSize="small" componentClass="textarea"/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Technology Stack</ControlLabel>
                            <FormControl placeholder="Technology stack" bsSize="small"/>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col xs={6}>
                                    <ControlLabel>Team Type </ControlLabel>
                                </Col>
                                <Col xs={6}>
                                    <Radio name="radioGroup" inline>
                                    Group
                                    </Radio>{' '}
                                    <Radio name="radioGroup" inline>
                                    Individual
                                    </Radio>{' '}
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col xs={4}>
                                    <ControlLabel>No. of Teams</ControlLabel>
                                </Col>
                                <Col xs={4}>
                                    <ControlLabel>Max. Team Size</ControlLabel>
                                </Col>
                                <Col xs={4}>
                                    <ControlLabel>Min. Team Size</ControlLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4}>
                                    <FormControl placeholder="Maximum Team" bsSize="small"/>
                                </Col>
                                <Col xs={4}>
                                    <FormControl placeholder="Maximum Team size" bsSize="small"/>
                                </Col>
                                <Col xs={4}>
                                    <FormControl placeholder="Minimum Team size" bsSize="small"/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col xs={12}>
                                    <ControlLabel>Event Schedule</ControlLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6}>
                                    <FormControl placeholder="Start Date" bsSize="small"/>
                                </Col>
                                <Col xs={6}>
                                    <FormControl placeholder="End Date" bsSize="small"/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col xs={12}>
                                    <ControlLabel>Event Evaluation</ControlLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6}>
                                    <FormControl placeholder="Evaluation Start Date" bsSize="small"/>
                                </Col>
                                <Col xs={6}>
                                    <FormControl placeholder="Evaluation End Date" bsSize="small"/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col xs={12}>
                                    <ControlLabel>Result Date</ControlLabel>
                                </Col>
                                <Col xs={6}>
                                    <FormControl placeholder="Result Date" bsSize="small"/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col xs={2} xsOffset={7}>
                                    <Button bsStyle="default">Reset</Button>
                                </Col>
                                <Col xs={2}>
                                    <Button bsStyle="primary">Save</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Panel.Body>
                </Panel>
            </Col>
        );
    }

}
export default UpdateEvent;