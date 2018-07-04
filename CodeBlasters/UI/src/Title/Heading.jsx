import React from 'react';
import {Row,Col, Modal, Button, FormGroup, FormControl} from 'react-bootstrap';
import Login from '../Login/Login.jsx'
import SignUp from '../Login/SignUp.jsx';

class Heading extends React.Component {

    state = {
        showLoginModal : false,
        showSignupModal : false
    };

    _setLoginModal(val){
        this.setState({showLoginModal : val});
    }

    _setSignupModal(val){
        this.setState({showSignupModal : val});
    }

    render(){
        return (
            <Row>
                <Col xs={10}>
                    <h1>Hack IT</h1>
                </Col>
                <Col xs={2}>
                    <Col xs={12} className="floatLeft">
                        <a onClick={this._setLoginModal.bind(this, true)}>Login</a>
                    </Col>
                    <Col xs={12} className="floatLeft">
                        <a onClick={this._setSignupModal.bind(this, true)}>Sign up</a>
                    </Col>
                </Col>
                <Login showLoginModal = {this.state.showLoginModal} _setLoginModal = {this._setLoginModal.bind(this)}/>
                <SignUp showSignupModal = {this.state.showSignupModal} _setSignupModal = {this._setSignupModal.bind(this)}/>
            </Row>
        );
    }

}
export default Heading;