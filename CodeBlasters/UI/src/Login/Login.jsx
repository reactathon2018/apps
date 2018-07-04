import React from 'react';
import {Modal, Button, FormGroup, FormControl} from 'react-bootstrap';
import { observer, inject } from 'mobx-react';

@inject('loginStore') @observer
class Login extends React.Component {

    state = {
        userName : "",
        password : ""
    }

    _submitLogin(){
        this.props.loginStore.login(this.state.userName,this.state.password);
        this.setState({password : ""});
    }

    render(){
        return (
            <Modal show={this.props.showLoginModal} onHide= {() => { this.props._setLoginModal(false); }}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                    <Modal.Body>
                        <FormGroup bsSize="small">
                            <FormControl type="text" placeholder="Email" value = {this.state.userName} onChange={(e)=>{this.setState({userName:e.target.value})}}/>
                        </FormGroup>
                        <FormGroup bsSize="small">
                            <FormControl type="password" placeholder="Password" value = {this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}}/>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsSize="small" onClick={()=>{this.setState({userName:""}), this.setState({password:""})}}>Reset</Button>
                        <Button bsStyle="primary"  bsSize="small" onClick={this._submitLogin.bind(this)}>Login</Button>
                    </Modal.Footer>
                </Modal.Header>
            </Modal>
        );
    }

}
export default Login;