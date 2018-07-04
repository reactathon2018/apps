import { combineReducers } from 'redux';
import joblistReducer from './joblist';
import jobReducer from './job';

const rootReducer = combineReducers({
  joblist: joblistReducer,
  job: jobReducer
});
export default rootReducer;
