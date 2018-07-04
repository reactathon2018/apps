import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//D:\Source\Reactathon-UI\hackathon-portal\node_modules\bootstrap\dist\js\bootstrap.js
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hackathon</h1>
          <input type="button" id="login" className="primary-btn" bsStyle="primary" text="Login/Register" value="Login/Register"/>
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
