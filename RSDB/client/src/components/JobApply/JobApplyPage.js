import React, { Component } from 'react';
import JobApplyForm from './JobApplyForm';

import './JobApplyPage.css';

class JobApplyPage extends Component {
  render() {
    return (
      <div className="JobApplyPage">
        <JobApplyForm />
      </div>
    );
  }
}

export default JobApplyPage;
