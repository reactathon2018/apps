import { ADD_JOB_SEARCH } from "../constants/jobsearchType";
let nextTodoId = 0;
export const addJobSearch = jobsearch => ({
  type: ADD_JOB_SEARCH,
  payload: jobsearch
});
