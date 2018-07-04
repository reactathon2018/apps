import * as actions from './actions';
import { Map, fromJS } from 'immutable';

const userActionReducer = (state = Map({}), action) => {
    switch (action.type) {
        case actions.SIGNIN_SUCCESS:
            state = state.setIn(["user", "isAutenticated"], true);
            state = state.setIn(["user", "userInfo"], fromJS(action.data));
            return state;
        case actions.SIGNUP_SUCCESS:
            state = state.setIn(["user", "isAutenticated"], true);
            state = state.setIn(["user", "userInfo"], fromJS(action.data));
            return state;
        default:
            return state;
    }
}

export default userActionReducer;