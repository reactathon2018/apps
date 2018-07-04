import React, { Component } from 'react';
import Header from '../components/header';
import Banner from '../components/banner';
import CardPanel from '../components/cardpanel';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <CardPanel />     
      </div>
    );
  }
}

export default App;
