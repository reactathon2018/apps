import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hackothonlist from './components/Hackothonlist';
import Verizonheader from './components/Verizonheader'
import Challenge from './components/Challenge';

class App extends Component {
  
  componentDidMount(){
    document.title = "Reactathon"
  }

  render() {
    return (
      <div className="App">
        <Verizonheader />
        <Challenge />
        <Hackothonlist />
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;

