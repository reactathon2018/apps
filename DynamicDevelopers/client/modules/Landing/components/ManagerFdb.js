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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book
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
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default ManagerFdb;
