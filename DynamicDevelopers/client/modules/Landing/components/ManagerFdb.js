import React, { PropTypes } from 'react';

// Import Style
import styles from './ManagerFdb.css';


function ManagerFdb(props) {
  console.log('props', props);
  if (props.jobDetails) {
    return (
        <div>
            <div className={styles.managerfdb}>
                <h3>{props.title}</h3>
            </div>
            <div className={styles.managerfdbCmt}>
                <p>{props.jobDetails.managerfeedback}
                </p>
            </div>
        </div>
    );
  }
  return (<div>Error in Loading...</div>);
}

ManagerFdb.propTypes = {
  jobDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    interviewDate: PropTypes.string.isRequired,
    appliedDate: PropTypes.string.isRequired,
    managerfeedback: PropTypes.string.isRequired,
    HrMessage: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default ManagerFdb;
