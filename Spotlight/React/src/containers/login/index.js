import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCandidate } from "../../actions/userAction"

import "./index.css";

const mapDispatchToProps = dispatch => {
  return {
    addCandidate: candidate => dispatch(addCandidate(candidate))
  };
};





class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangepass = this.handleChangepass.bind(this);
  }
  
  handleChange(event) {
    this.setState({email: event.target.value});
  };
  handleChangepass(event) {
    this.setState({password: event.target.value});
  };
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.email);
    event.preventDefault();
    fetch("http://10.74.19.37:3000/auth", {
      method: "POST",
      body: JSON.stringify({
        email:this.state.email,
        password:this.state.password
      }),
      headers: {
        "Content-Type" : "application/json"
      }
    })
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(body) {
        console.log(body);
        this.props.addCandidate({ candidate: body });
      });
  }
  
  
  render() {
    const btnWidth = {
      width: "100%"
    };

    const btnLeft = {
      marginLeft: "20%",
      width: "48%",
      "border-radius": "2px"
    };

    const middleOr = {
      position: "absolute",
      top: "0%",
      left: "45%",
      borderLeft: "1px solid grey",
      height: "100%"
    };
    

     
      
    return (
      <div className="container">
        <label>
          <h5>Login</h5>
        </label>
        <div class="grid">
          <div class="row border-bottom bd-cyan pb-2">
            <div class="cell-6 border-right bd-cyan">
              
                <div class="form-group">
                  <label>Email address</label>
                  <input type="email" placeholder="Enter email" ref="" value={this.state.value} onChange={this.handleChange}/>
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input type="password" placeholder="Enter email" value={this.state.password}  onChange={this.handleChangepass} />
                </div>
                <div class="form-group">
                  <button class="button success" onClick={this.handleSubmit}>Login</button>
                  <button
                    type="button"
                    className="button success  "
                    onClick={this.props.onClick}
                    style={btnLeft}
                  >
                    <Link className="nav-link fg-white" to="/signup">
                      Sign Up
                    </Link>
                  </button>
                </div>
                         </div>
            <div class="cell-6">
              <div className="grid">
                <div className="row">
                  <button className="loginBtn loginBtn--google">
                    Login with Google
                  </button>
                </div>
                <div className="row text-center">
                  <h4 className="text-center orBtn">Or</h4>
                </div>
                <div className="row">
                  <button className="loginBtn loginBtn--linkedin">
                    Login with Linkedin
                  </button>
                </div>
                <div className="row text-center">
                  <h4 className="text-center orBtn">Or</h4>
                </div>
                <div className="row" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
