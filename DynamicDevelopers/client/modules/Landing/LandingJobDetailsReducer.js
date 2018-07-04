// Initial State
const initialState = { data: [] };

import { FETCH_APPLIED_JOB_DETAILS } from './LandingActions';

const LandingReducer = (state = initialState, action) => {
  switch (action.type) {
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
export const getJobDetails = (state) => state.jobDetails.data;

export default LandingReducer;
