import React from 'react';
import {Row, Col, FormControl, Panel, FormGroup, InputGroup, DropdownButton, MenuItem} from 'react-bootstrap';

class ListEvents extends React.Component {

    render(){
        return (
            <Col xs={6}>
                <FormGroup>
                    <InputGroup>
                        <DropdownButton
                            componentClass={InputGroup.Button}
                            id="input-dropdown-addon"
                            title="Status" bsSize="small">
                            <MenuItem key="1">Up Coming</MenuItem>
                            <MenuItem key="2">On Going</MenuItem>
                            <MenuItem key="3">Completed</MenuItem>
                        </DropdownButton>
                        <FormControl placeholder="Search by event"  bsSize="small"/>
                    </InputGroup>
                </FormGroup>
                <Row>
                    <Col xs={12} id="eventListWrapper">
                        <Panel>
                            <Panel.Body>
                                <div>Event Name</div>
                                <div className="eventStatus">status</div>
                                <div className="eventDates">Dates</div>
                            </Panel.Body>
                        </Panel>
                        <Panel>
                            <Panel.Body>
                                <div>Event Name</div>
                                <div className="eventStatus">status</div>
                                <div className="eventDates">Dates</div>
                            </Panel.Body>
                        </Panel>
                        <Panel>
                            <Panel.Body>
                                <div>Event Name</div>
                                <div className="eventStatus">status</div>
                                <div className="eventDates">Dates</div>
                            </Panel.Body>
                        </Panel>
                        <Panel>
                            <Panel.Body>
                                <div>Event Name</div>
                                <div className="eventStatus">status</div>
                                <div className="eventDates">Dates</div>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
            </Col>
        );
    }

}
export default ListEvents;