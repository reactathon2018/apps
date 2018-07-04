import React from 'react';
import Modal from './Modal';
import RegisterForm from '../../form/register';

export default class RegisterModal extends React.Component {
  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this);
  }

  onSubmit(){    
  }  

  render() {
    return (
      <Modal onClose={this.props.onClose} contentStyle={{minHeight: '600px'}}>
         <div className="register">
            <h2>Register</h2>
            <RegisterForm onSubmit={this.onSubmit}/>
         </div>
      </Modal>
    );
  }
}