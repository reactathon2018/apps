import React, { Component } from 'react';

import ReactSignupLoginComponent from 'react-signup-login-component';

const LoginPage = (props) => {
    const signupWasClickedCallback = (data) => {
      console.log(data);
    };
    const loginWasClickedCallback = (data) => {
      console.log(data);
      props.setCredentials(data);
      props.setUserLoggedIn();
      props.getNewJobs();
    };
    const recoverPasswordWasClickedCallback = (data) => {
      console.log(data);
    };
    return (
        <div style={{margin: 'auto',width: '50%'}}>
            <ReactSignupLoginComponent
                title="Login"
                handleSignup={signupWasClickedCallback}
                handleLogin={loginWasClickedCallback}
                handleRecoverPassword={recoverPasswordWasClickedCallback}
            />
        </div>
    );
};

export default LoginPage;
