import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './JobItem.css';

function JobItem(props) {
  return (    
    /*<tr>
      <th scope="row">1</th>
      <td><Link to={`/jobs/${props.job.code}`} >
            {props.job.code}</Link></td>
      <td>{props.job.name}</td>
      <td>{props.job.description}</td>
      <td><p><a href="#" onClick={props.onClick}><FormattedMessage id="viewJob" /></a></p></td>
    </tr>*/

    <div className={styles.row} onClick={props.onClick}>  
      <ul>
        <li title="" className={styles.title}>{props.job.title}</li>
      </ul> 
      <span className={styles.org}>Dynamic Wireless</span> <br />
      <span className={styles.exp}><em></em>6-8 yrs</span> <br />
      <span className={styles.loc}><em></em><span>Chennai </span></span>  
      <div className={styles.more}> <span className={styles.label}>Keyskills:</span>
       <div className={styles.desc}> <span className={styles.skill}>Java, ReactJS, Redux, GraphQL</span> </div> 
      <span className={styles.label}>Job Description:</span> <span className={styles.desc}></span>{props.job.description}</div>
      <br />
      <button type="button" className={styles.viewBtn} onClick={props.onClick}>View Job Details</button>
    </div>  
      
  );
}

JobItem.propTypes = {
  job: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    interviewDate: PropTypes.string.isRequired,
    appliedDate: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default JobItem;
