import React, { Component } from 'react';
import HRForm from './HRForm';

import './HRPage.css';

class HRPage extends Component {
  render() {
    return (
      <div className="HRPage">
        <HRForm />
      </div>
    );
  }
}

export default HRPage;
