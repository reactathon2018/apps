import {
    FETCH_JOB, FETCH_JOB_SUCCESS, FETCH_JOB_FAILED,
    SIGN_OUT
} from '../actions/types';

export default function (auth = {currentUser: null, loading: false}, action) {
    switch (action.type) {
        case FETCH_JOB:
            return Object.assign({}, auth, {
                loading: true
            })
        case FETCH_JOB_SUCCESS:
            return Object.assign({}, auth, {
                loading: false,
                currentUser: action.result.data?action.result.data:null
            })
        case FETCH_JOB_FAILED:
            return Object.assign({}, auth, {
                loading: false
            })
        case SIGN_OUT:
            return {}
        default:
            return auth
    }

}