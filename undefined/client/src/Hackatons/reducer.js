import * as actions from './actions';
import { Map, fromJS } from 'immutable';

const hackatonsReducer = (state = Map({}), action) => {
    switch (action.type) {
        case actions.FETCH_HACKATON_LIST_SUCESS:
            state = state.set("hackatonList", fromJS(action.data));
            return state;
        default:            
            return state;
    }
}

export default hackatonsReducer;