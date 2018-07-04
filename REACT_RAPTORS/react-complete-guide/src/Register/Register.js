import React, { Component } from 'react';
import './Register.css';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            nameVal : "",
            emailVal : "",
            passwordVal: "",
            reVerifyPasswordVal : "",
            contactNumberVal : ""
        }
        this.resetHandler=this.resetHandler.bind(this);
        this.changeHandler=this.changeHandler.bind(this);
       }
    
    saveUserDetails = () => {
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
        })
      }


    resetHandler(event){
        this.setState({
            nameVal : "",
            emailVal : "",
            passwordVal: "",
            reVerifyPasswordVal : "",
            contactNumberVal : ""
        });
    }
    changeHandler(event){
        this.setState({
            [event.target.className] : event.target.value})
    }

    render(){
        return(
            <div className="Register">
                <form onSubmit={this.submitHandler}>
                    <div className="name">
                        <label>Name: </label>
                        <input className="nameVal"
                            autoFocus 
                            type="text"
                            value={this.state.nameVal}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className="email">
                        <label>Email: </label>
                        <input className="emailVal"
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
                    <div className="reVerifyPassword">
                        <label>Re-Type Password: </label>
                        <input className="reVerifyPasswordVal"
                            type="password"
                            value={this.state.reVerifyPasswordVal}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className="contactNumber">
                        <label>Contact Number: </label>
                        <input className="contactNumberVal"
                            type="text"
                            value={this.state.contactNumberVal}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className = "RegisterButtons">
                    <input className="submit" type="submit" value="Submit" onClick={this.registerHandler}/>
                    <input className="submit" type="submit" value="Clear" onClick={this.resetHandler}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;