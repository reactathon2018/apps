import React, { PropTypes } from 'react';

// Import Style
import styles from './ProgressBar.css';


function ProgressBar(props) {
  console.log('props', props);
  if (props.jobDetails) {
    return (
        <div className={styles.progressContainer}>
            <ol className={styles.progressTracker}>
                <li className={styles.stepCompleted}><a href="#" className={styles.stepName}>Applied</a></li>
                <li className={styles.stepCompleted}><a href="#" className={styles.stepName}>Technical</a></li>
                <li className={styles.stepCompleted}><a href="#" className={styles.stepName}>Manager round</a></li>
                <li className={styles.stepActive}><a href="#" className={styles.stepName}>HR</a></li>
                <li className={styles.step}><span className={styles.stepName}>Verification</span></li>
                <li className={styles.step}><span className={styles.stepName}>On-Boarding</span></li>
            </ol>
        </div>
    );
  }
  return (<div>Error in Loading...</div>);
}

ProgressBar.propTypes = {
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

export default ProgressBar;
