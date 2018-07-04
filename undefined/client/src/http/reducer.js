import * as actions from './actions';
import { Map, fromJS } from 'immutable';

export default function http(state = Map(), action) {

    if (action.type === actions.HTTP_REQUEST) {
        return state.setIn(['requests', action.id], fromJS(action.data));
    }

    return state;
}