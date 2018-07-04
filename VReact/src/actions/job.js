import {
    FETCH_JOB,
    FETCH_JOB_SUCCESS,
    FETCH_JOB_FAILED
} from './types';

export function fetchJob() {
    return {
        types: [FETCH_JOB, FETCH_JOB_SUCCESS, FETCH_JOB_FAILED],
        promise: client => client.post('/job')
    };
}