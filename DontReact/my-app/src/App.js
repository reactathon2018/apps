import React, { Component } from 'react';
import MenuBar from './components/menuBarComp';
//import HomePage from './components/homePage/homePageComp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <MenuBar />
      </div>
    );
  }
}

export default App;
