import React, {Component} from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class AlertBox extends Component{

    constructor(props) {
        super(props);
        this.state = { showModal: this.props.show };
    }

    close = () => {
        this.setState({ showModal: false });
    }
    
    render() {
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.message}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};