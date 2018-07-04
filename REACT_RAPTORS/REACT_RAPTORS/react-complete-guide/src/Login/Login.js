import React, { Component } from 'react';
import './Login.css';

import axios from "axios";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            emailVal : "",
            passwordVal : "",
            userDetails: [
                {"id":"1","name":"test1","experiance":"5","jobApplicationDetails":[{"jobCode":"123","jobDesignation":"Lead"},
                    {"jobCode":"1233","jobDesignation":"Architect"}]},
                    {"id":"2","name":"test1=2","experiance":"6","jobApplicationDetails":[{"jobCode":"123","jobDesignation":"Lead"},
                        {"jobCode":"1233","jobDesignation":"Architect"}]}
            ]
        }
        this.submitHandler=this.submitHandler.bind(this);
        this.registerHandler=this.registerHandler.bind(this);
        this.changeHandler=this.changeHandler.bind(this);
       }

    /*getUserDetails = () => {
      var email = this.state.emailVal;
      var password = this.state.passwordVal;
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp) => {
            console.log("inside resp>> ", resp);
          return resp.json()
        })
        .then((data) => {
            console.log("inside data>> ", data);
          //this.setState({ userDetails: data })

        })
        .catch((error) => {
          console.log(error, "catch the hoop")
        })*/


    submitHandler(event){
        //this.getUserDetails();
        this.props.history.push("/userPage");
        if(this.state.emailVal == null){
          alert("Email ID is invalid");
        }
    }
    registerHandler(event){
        this.setState({registerVal:true})
        this.props.history.push("/register");
    }
    changeHandler(event){
        this.setState({
            [event.target.className] : event.target.value})
    }



    render(){
        return(
            <div className="login">
                <form onSubmit={this.submitHandler}>
                    <div className="email">
                        <label>Email: </label>
                        <input className="emailVal"
                            autoFocus
                            type="text"
                            value={this.state.emailVal}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className="password">
                        <label>Password: </label>
                        <input className="passwordVal"
                            type="password"
                            value={this.state.passwordVal}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className = "loginButtons">
                    <input className="submit" type="submit" value="Signin"/>
                    <input className="submit" type="submit" value="Register" onClick={this.registerHandler}/></div>
                </form>
            </div>
            /*<div>
                {this.state.registerVal?<Register/>:""}
            </div>*/
        );
    }
}

export default Login;
