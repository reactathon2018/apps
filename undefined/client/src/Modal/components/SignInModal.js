import React from 'react';
import Modal from './Modal';
import SignIn from '../../form/signin';

export default class SignInModal extends React.Component {

  render() {
    let error = (this.props.error) ? this.props.error.toJS() : null;
    return (
      <Modal onClose={this.props.onClose} contentStyle={{ minHeight: '350px' }}>
        <div className="signin">
          <h2>Sign In</h2>
          <SignIn onSubmit={this.props.onSubmit} />
          {
            (this.props.loading) && <div style={{ margin: 10}}> <p style={{color : "green"}}> Please wait, we are validating </p> </div>
          }
          {
            (this.props.error) && <div style={{ margin: 10}}> <p style={{color : "red"}}> {error.message} </p> </div>
          }
        </div>
      </Modal>
    );
  }
}