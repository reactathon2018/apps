import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginUser } from "../actions/index";
import $ from "jquery";
import LoginForm from "../components/login-form";
import RegisterForm from "../components/register-form";
import { Redirect } from "react-router-dom";
import Header from "../components/header";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }
  handleClick(e, val) {
    if (val == "login") {
      $("#login-form")
        .delay(100)
        .fadeIn(100);
      $("#register-form").fadeOut(100);
      $("#register-form-link").removeClass("active");
      $("#login-form-link").addClass("active");
      e.preventDefault();
    } else {
      $("#register-form")
        .delay(100)
        .fadeIn(100);
      $("#login-form").fadeOut(100);
      $("#login-form-link").removeClass("active");
      $("#register-form-link").addClass("active");
      e.preventDefault();
    }
  }
  handleLoginClick(username, password) {
    console.log("Recieved uname :" + username + " password: " + password);
    this.props.loginUser(username, password);
  }
  render() {
    const { isLoggedIn } = this.props.loginDetails;
    const {
      loginHeadingStyle,
      registerHeadingStyle,
      panelStyle,
      containerStyle
    } = styles;
    if (isLoggedIn) return <Redirect to="/" />;
    return (
      <div>
        <Header noSettings={true} />
        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="panel panel-login" style={panelStyle}>
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-6" style={loginHeadingStyle}>
                      <a
                        href="#"
                        className="active"
                        id="login-form-link"
                        onClick={e => this.handleClick(e, "login")}
                      >
                        Login
                      </a>
                    </div>
                    <div className="col-xs-6" style={registerHeadingStyle}>
                      <a
                        href="#"
                        id="register-form-link"
                        onClick={e => this.handleClick(e, "register")}
                      >
                        Register
                      </a>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <LoginForm
                        handleLoginClick={this.handleLoginClick}
                        isLoggedIn={isLoggedIn}
                      />
                      <RegisterForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  containerStyle: {
    position: "absolute",
    top: "20%",
    left: "33%"
  },
  loginHeadingStyle: {
    marginLeft: "10%",
    padding: 10
  },
  registerHeadingStyle: {
    marginLeft: "50%",
    padding: 10
  },
  panelStyle: {
    background: "white",
    boxShadow: "5px 5px 10px grey"
  }
};
function mapStateToProps(state) {
  //  console.log("Login Details" + JSON.stringify(state.loginDetails));
  return {
    loginDetails: state.loginDetails
  };
}
function mapDispatchtoProps(dispatch) {
  return bindActionCreators({ loginUser }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(LoginContainer);
