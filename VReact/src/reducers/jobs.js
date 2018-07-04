import {
    FETCH_JOBS, FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILED
} from '../actions/types';

export default function (jobs = {jobs: null, loading: false}, action) {
    switch (action.type) {
        case FETCH_JOBS:
            console.log('******* jobs *********')
            return Object.assign({}, jobs, {
                loading: true
            })
        case FETCH_JOBS_SUCCESS:
            console.log('******* success *********')
            return Object.assign({}, jobs, {
                loading: false,
                jobs: action.result.data?action.result.data:null
            })
        case FETCH_JOBS_FAILED:
            console.log('******* failed *********')
            return Object.assign({}, jobs, {
                loading: false
            })
        default:
            return jobs
    }

}
