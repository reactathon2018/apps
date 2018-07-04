import React from 'react';
import {Component} from 'react';
import './login.css';
import {
    Route,
    NavLink,
    HashRouter, Link, BrowserRouter, Switch
} from "react-router-dom";


class SignUp extends Component {
    constructor(props) {
        super(props);

        this.onSignUp = this.onSignUp.bind(this);
        this.state = {
            isLoading: '',
            token: '',
            signUpError: '',
            signUpEmail: '',
            signUpPassword: '',
			signUpconPassword: ''
        };

        this.state = {};
        this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
        this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
		 this.onTextboxChangeSignUpconPassword = this.onTextboxChangeSignUpconPassword.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
    }
        onTextboxChangeSignUpEmail(event) {
        this.setState({
            signInEmail: event.target.value,
        });
    }
    onTextboxChangeSignUpPassword(event) {
        this.setState({
            signUpPassword: event.target.value,
        });
    }
	onTextboxChangeSignUpconPassword(event) {
        this.setState({
            signUpPassword: event.target.value,
        });
    }

    onSignUp() {
        // Grab state
        const {
            signUpEmail,
            signUpPassword,
        } = this.state;
        this.setState({
            isLoading: true,
        });
        // Post request to backend
        fetch('/routes/api/signup', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: signUpEmail,
                password: signUpPassword,
            }),
        })/*.then(res => res.json())
            .then(json => {
                console.log('json', json);
                if (json.success) {
                    console.log('jsonmessage',json.message);
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                        signUpEmail: '',
                        signUpPassword: '',
                    });
                } else {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                    });
                }
            });*/
    }

    render() {
        const {
            isLoading,
            token,
            signUpEmail,
            signUpPassword,
			signUpconPassword,
            signUpError,
        } = this.state;
        if (isLoading) {
            return (<div><p>Signed in...</p></div>);
        }
        if (!token) {
            return (

                <form>
                    {
                        (signUpError) ? (
                            <p>{signUpError}</p>
                        ) : (null)
                    }
                    <div className="form-group" class="col-md-6">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" width="100" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"
                               placeholder="Enter email"
                               value={signUpEmail}
                               onChange={this.onTextboxChangeSignUpEmail}/>

                    </div>
                    <div className="form-group" class="col-md-6">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               placeholder="Password"
                               value={signUpPassword}
                               onChange={this.onTextboxChangeSignUpPassword}/>
                    </div>
                    <div className="form-group" class="col-md-6">
                        <label htmlFor="exampleInputPassword2"> Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2"
                               placeholder="Password"
                               value={signUpconPassword}
                              // onChange={this.onTextboxChangeSignUpconPassword}
                        />
                    </div>

                    <button type="submit" className="btn btn-success" ><NavLink to="/ApplyButton" class="bg-inverse text-white">Submit</NavLink></button>
                </form>


            );
        }
        return (
            <div>
                <p>Signed in</p>
            </div>
        );
    }

}
export default SignUp;