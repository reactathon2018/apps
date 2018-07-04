import React, { Component } from 'react';
import ManagerForm from './ManagerForm';

import './ManagerPage.css';

class ManagerPage extends Component {
  render() {
    return (
      <div className="ManagerPage">
        <ManagerForm />
      </div>
    );
  }
}

export default ManagerPage;
