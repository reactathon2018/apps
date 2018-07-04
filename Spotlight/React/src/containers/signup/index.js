import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center"> Sign Up</h3>
        <div className="row">
          <div className="cell-6">
            <label htmlFor="first-name">
              First name<span className="imp">*</span> :{" "}
            </label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="first-name"
                placeholder="First Name"
                aria-label="First Name"
                aria-describedby="basic-addon1"
              />
            </div>
            <label htmlFor="last-name">
              Last name<span className="imp">*</span> :{" "}
            </label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="last-name"
                placeholder="Last Name"
                aria-label="Last Name"
                aria-describedby="basic-addon1"
              />
            </div>
            <label htmlFor="email">
              E-mail<span className="imp">*</span> :{" "}
            </label>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="xyz@abc.com"
                aria-label="xyz@abc.com"
                aria-describedby="basic-addon1"
              />
            </div>
            <label htmlFor="mobile">
              Mobile Number<span className="imp">*</span> :{" "}
            </label>
            <div className="input-group mb-3">
              <input
                type="number"
                maxLength="10"
                className="form-control"
                id="mobile"
                placeholder="Mobile no."
                aria-label="Mobile.no"
                aria-describedby="basic-addon1"
              />
            </div>
            <label htmlFor="password">
              Password<span className="imp">*</span> :{" "}
            </label>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </div>
            <label htmlFor="retype-password">
              Re-type Password<span className="imp">*</span> :{" "}
            </label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="retype-password"
                placeholder="Re-type Password"
                aria-label="Re-type Password"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <button
                type="button"
                className="button success"
                onClick={this.props.onClick}
              >
                <Link className="nav-link fg-white" to="/profile">
                  Sign Up
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
