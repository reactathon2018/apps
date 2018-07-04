import React from 'react';
import {FormGroup, FormControl, InputGroup, DropdownButton, MenuItem, Row, Col} from 'react-bootstrap';

class LeaderBody extends React.Component {

    render(){

        return (
            <div>
                <FormGroup>
                    <InputGroup>
                        <DropdownButton
                            componentClass={InputGroup.Button}
                            id="input-dropdown-addon"
                            title="Filter By" bsSize="small">
                            <MenuItem key="1">Date</MenuItem>
                            <MenuItem key="2">Name</MenuItem>
                            <MenuItem key="3">Month</MenuItem>
                            <MenuItem key="4">Year</MenuItem>
                            <MenuItem key="5">Organization</MenuItem>
                        </DropdownButton>
                        <FormControl type="text"  bsSize="small"/>
                    </InputGroup>
                </FormGroup>
                <Row>
                    <Col xs={12}>
                        <h3>Top 10 Participants</h3>
                        <Col xs={6} className="LeaderSection firstSection">
                        </Col>
                        <Col xs={6} className="LeaderSection secondSection">
                        </Col>
                    </Col>
                    <Col xs={12}>
                        <h3>Winners</h3>
                        <Col xs={6} className="LeaderSection firstSection">
                        </Col>
                        <Col xs={6} className="LeaderSection secondSection">
                        </Col>
                    </Col>
                </Row>
            </div>
        );
    }

}
export default LeaderBody;