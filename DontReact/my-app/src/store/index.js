import { createStore } from 'redux';
import { combineReducers} from 'redux';
import hackDetailsReducer from '../reducers/hacDetailsReducer';
import registrationReducer from '../reducers/registrationReducer';

const reducers = combineReducers({hackDetailsReducer,registrationReducer});

const store = createStore(reducers);

export default store;
