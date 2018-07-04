import React, { Component } from 'react';
import CandidateForm from './CandidateForm';

import './CandidatePage.css';

class CandidatePage extends Component {
  render() {
    return (
      <div className="CandidatePage">
        <CandidateForm />
      </div>
    );
  }
}

export default CandidatePage;
