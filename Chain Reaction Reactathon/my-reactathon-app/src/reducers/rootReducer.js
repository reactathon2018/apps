import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import simpleReducer from './reducer';
export default combineReducers({
 simpleReducer,
 form: formReducer
});
