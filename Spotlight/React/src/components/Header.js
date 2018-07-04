import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal/modal.js";
import Login from "../containers/login/index";
import logo from "../img/logo.png";
import "./header.css";
import Metro from "metro4";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <header
        class="app-bar bg-darkMagenta fg-white app-bar-expand-md"
        data-role="appbar"
        id="app-bar-1530677644415621"
      >
        <button type="button" className="hamburger menu-down hidden">
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </button>
        <a href="/" className="d-block brand fg-white no-hover">
          <span className="border bd-white border-radius p-2">
            m<sup>4</sup>
          </span>
        </a>
        <ul className="app-bar-menu ml-auto">
          <li>
            <a onClick={this.toggleModal}>Sign In</a>
          </li>
        </ul>

        <Modal show={this.state.isOpen} onClose={this.toggleModal}>
          <Login onClick={this.toggleModal.bind(this)} />
        </Modal>
      </header>
    );
  }
}
export default Header;
