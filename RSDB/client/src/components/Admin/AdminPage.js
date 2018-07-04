import React, { Component } from 'react';
import AdminForm from './AdminForm';

import './AdminPage.css';

class AdminPage extends Component {
  render() {
    return (
      <div className="AdminPage">
        <AdminForm />
      </div>
    );
  }
}

export default AdminPage;
