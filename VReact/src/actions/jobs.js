import {
    FETCH_JOBS,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAILED
} from './types';

export function fetchJobs() {
    return {
        types: [FETCH_JOBS, FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILED],
        promise: client => client.post('/jobs')
    };
}