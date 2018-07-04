import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import LandingPageJobs from '../../components/LandingPageJobs';

import { fetchAppliedJobs, fetchJobDetails } from '../../LandingActions';
import { getAppliedJobs } from '../../LandingReducer';

class LandingPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAppliedJobs());
  }
  handleClickJob = code => {
    console.log('TEST', code);
    //this.props.dispatch(fetchJobDetails(code));
    this.context.router.push(`/jobs/${code}`);
  }
  render() {
    return (
      <div>
        <h6>Home</h6>
        <LandingPageJobs jobs={this.props.jobs} handleClickJob={this.handleClickJob} />
      </div>
    );
  }
}

LandingPage.need = [() => { return fetchAppliedJobs(); }];

function mapStateToProps(state) {
  console.log('state', state);
  return {
    jobs: getAppliedJobs(state),
  };
}

LandingPage.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    interviewDate: PropTypes.string.isRequired,
    appliedDate: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

LandingPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(LandingPage);
