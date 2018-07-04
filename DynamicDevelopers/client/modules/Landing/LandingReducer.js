// Initial State
const initialState = { data: [] };

import { FETCH_APPLIED_JOBS, FETCH_APPLIED_JOB_DETAILS } from './LandingActions';

const LandingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APPLIED_JOBS :
      return {
        data: action.jobs,
      };
    case FETCH_APPLIED_JOB_DETAILS :
      return {
        data: action.jobDetails,
      };
    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getAppliedJobs = state => state.jobs.data;

export const getJobDetails = (state, code) => state.jobs.data.filter(job => job.code === code)[0];

export default LandingReducer;
