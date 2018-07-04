import React, { PropTypes } from 'react';

// Import Style
import styles from './ManagerFdb.css';


function LandingPageJobDetails(props) {
  console.log('props', props);
  if (props.jobDetails) {
    return (
      <div className={styles.jobDesc}>
        <h3>Job Description</h3>
        <hr/>
        <div>
          {props.jobDetails.desc}
        </div>
        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
