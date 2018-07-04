import React, { Component } from 'react';
import './JobPositions.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class JobPositions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (

      <div className="JobPositions">     
        <table>
            <tr>
              <th>Job Title</th>
              <th>Job Description</th>
              <th>Technologies</th>
              <th>Feedback</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>Software Engineer</td>
              <td>Ability to code and test basic functuionality</td>
              <td>Angular JS, React JS, Java</td>
              <td><Button color="danger" onClick={this.toggle}>Know your feedback</Button>
                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className="modal">
                  <ModalHeader toggle={this.toggle}>Employee's Feedback</ModalHeader>
                  <ModalBody>
                    The candidate is an expert in Java. Very happy with the interview, will keep in touch.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" onClick={this.toggle}>Close</Button>
                  </ModalFooter>
                </Modal>
                </td>
              <td><button class="statusbtn">Show Status</button></td>
            </tr>
            <tr>
              <td>Analyst - Sys Dev</td>
              <td>Ability to analyze and build functional application components</td>
              <td>Angular JS 5.0</td>
              <td>
                <Button color="danger" onClick={this.toggle}>Know your feedback</Button>
                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className="modal">
                  <ModalHeader toggle={this.toggle}>Employee's Feedback</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" onClick={this.toggle}>Close</Button>
                  </ModalFooter>
                </Modal>
              </td>
              <td><button class="statusbtn">Show Status</button></td>
            </tr>
          </table>
          
          

      </div>
      
    );
  }
}

export default JobPositions;