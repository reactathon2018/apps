import React, { Component } from 'react';
import logo from './img/Hack2.png';
import VZlogo from './img/VZ.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logowithoutspin" alt="logo" />
          <h1 className="App-title">Welcome to One Stop Hackathon</h1>
        </header>
        </div>
    );
  }
}

export default App;
