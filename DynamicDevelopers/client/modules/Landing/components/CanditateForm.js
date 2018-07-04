import React from 'react';
// Import Style
import styles from './canditateForm.css';

class CanditateForm extends React.Component {

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
  } 

  render() {
    return (
      <div className={styles.formName} >
        <form onSubmit={this.onFormSubmit} >
            <h3>Candidate FeedBack Form</h3>
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            <label fhtmlForor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />    
            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
            <input type="submit" value="Submit" />
        </form>
      </div>
   );
  }
}

export default CanditateForm;