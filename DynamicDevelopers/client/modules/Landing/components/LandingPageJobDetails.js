import React, { PropTypes } from 'react';

// Import Style
import styles from './ManagerFdb.css';


function LandingPageJobDetails(props) {
  console.log('props', props);
  if (props.jobDetails) {
    return (
      <div className={styles.jobDesc}>       
          <h2>{props.jobDetails.name} </h2> <br />
        <h3>Job Description</h3>
        <hr/>
        <div>         
          {props.jobDetails.desc}
        </div>
      </div>
    );
  }
  return (<div>Error in Loading...</div>);
}

LandingPageJobDetails.propTypes = {
  jobDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    managerfeedback: PropTypes.string.isRequired,
    HrMessage: PropTypes.string.isRequired,
    interviewDate: PropTypes.string.isRequired,
    interviewDetails: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    progressCode: PropTypes.string.isRequired,
  }).isRequired,
};

export default LandingPageJobDetails;
