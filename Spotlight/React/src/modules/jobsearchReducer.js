import { ADD_JOB_SEARCH } from "../constants/jobsearchType";

const initialState = {
  jobsearch: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB_SEARCH:
      return {
        ...state,
        jobsearch: [...state.jobsearch, action.payload]
      };
    default:
      return state;
  }
};
