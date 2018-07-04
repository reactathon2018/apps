import React from 'react';
import {Modal, Button, FormGroup, FormControl} from 'react-bootstrap';

class SignUp extends React.Component {

    render(){
        return (
            <Modal show={this.props.showSignupModal} onHide= {() => { this.props._setSignupModal(false); }}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign up</Modal.Title>
                    <Modal.Body>
                        <FormGroup bsSize="small">
                            <FormControl type="text" placeholder="Email" />
                        </FormGroup>
                        <FormGroup bsSize="small">
                            <FormControl type="password" placeholder="New Password" />
                        </FormGroup>
                        <FormGroup bsSize="small">
                            <FormControl type="password" placeholder="Confirm Password" />
                        </FormGroup>
                        <FormGroup bsSize="small">
                            <FormControl type="text" placeholder="First Name" />
                        </FormGroup>
                        <FormGroup bsSize="small">
                            <FormControl type="text" placeholder="Last Name" />
                        </FormGroup>
                        <FormGroup bsSize="small">
                            <FormControl type="text" placeholder="Organization Name" />
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsSize="small">Reset</Button>
                        <Button bsStyle="primary"  bsSize="small">Submit</Button>
                    </Modal.Footer>
                </Modal.Header>
            </Modal>
        );
    }

}
export default SignUp;