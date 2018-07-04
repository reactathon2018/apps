import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.username != "" && this.state.password != "")
      this.props.handleLoginClick(this.state.username, this.state.password);
    const newState = { username: "", password: "" };
    this.setState(newState);
  }
  handleUserChange(e) {
    const newState = { username: e.target.value };
    this.setState(newState);
  }
  handlePasswordChange(e) {
    const newState = { password: e.target.value };
    this.setState(newState);
  }
  renderError() {
    const { errorStyle } = styles;
    if (this.props.isLoggedIn == false)
      return (
        <div className="form-group" style={errorStyle}>
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">Invaild credentails. Try Again</div>
            </div>
          </div>
        </div>
      );
    else {
      return null;
    }
  }
  render() {
    const { inputBoxStyle, buttonStyle } = styles;
    return (
      <form
        id="login-form"
        onSubmit={e => this.handleSubmit(e)}
        method="post"
        role="form"
        style={{ display: "block" }}
      >
        <div className="form-group" style={inputBoxStyle}>
          <input
            type="text"
            name="username"
            id="username"
            tabIndex="1"
            className="form-control"
            placeholder="Username"
            onChange={e => this.handleUserChange(e)}
            value={this.state.username}
          />
        </div>
        <div className="form-group" style={inputBoxStyle}>
          <input
            type="password"
            name="password"
            id="password"
            tabIndex="2"
            className="form-control"
            placeholder="Password"
            onChange={e => this.handlePasswordChange(e)}
            value={this.state.password}
          />
        </div>
        {this.renderError()}
        <div className="form-group">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3" style={buttonStyle}>
              <input
                type="submit"
                name="login-submit"
                id="login-submit"
                tabIndex="4"
                className="form-control btn btn-login"
                value="Log In"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <a href="#" tabIndex="5" className="forgot-password">
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
const styles = {
  inputBoxStyle: {
    padding: 10
  },
  buttonStyle: {
    left: "24%"
  },
  errorStyle: {
    fontFamily: "monospace",
    color: "red"
  }
};
export default LoginForm;
