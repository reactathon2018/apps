import React from 'react';
import Modal from './Modal';
import SignUp from '../../form/signup';

export default class SignUpModal extends React.Component {
 
  render() {
    let error = (this.props.error) ? this.props.error.toJS() : null;    
    return (
      <Modal onClose={this.props.onClose} contentStyle={{minHeight: '550px'}}>
        <div className="signUp">
          <h2>
            Sign Up
           </h2>
          <SignUp onSubmit={this.props.onSubmit} />
          {
            (this.props.loading) && <div style={{ margin: 10}}> <p style={{color : "red"}}> Please wait, we are signing you up </p> </div>
          }
          {
            (this.props.error) && <div style={{ margin: 10}}> <p style={{color : "red"}}> {error.message} </p> </div>
          }          
        </div>
      </Modal>
    );
  }
}