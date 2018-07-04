import callApi from '../../util/apiCaller';

export const FETCH_APPLIED_JOBS = 'FETCH_APPLIED_JOBS';
export const FETCH_APPLIED_JOB_DETAILS = 'FETCH_APPLIED_JOB_DETAILS';

export function fetchAppliedJobsAction(jobs) {
  return {
    type: FETCH_APPLIED_JOBS,
    jobs,
  };
}
export function fetchJobDetailsAction(jobDetails) {
  return {
    type: FETCH_APPLIED_JOB_DETAILS,
    jobDetails,
  };
}
export function fetchAppliedJobs() {
  return (dispatch) => {
    return callApi('jobs').then(res => {
      dispatch(fetchAppliedJobsAction(res.jobs));
    });
  };
}

export function fetchJobDetails(code) {
  return (dispatch) => {
    return callApi(`jobs/${code}`).then(res => {
      dispatch(fetchJobDetailsAction(res.jobDetails));
    });
  };
}
