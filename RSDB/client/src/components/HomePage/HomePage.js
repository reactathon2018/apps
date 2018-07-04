import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <NavBar />
        {/* <h2>Home Page</h2> */}
      </div>
    );
  }
}

export default HomePage;
