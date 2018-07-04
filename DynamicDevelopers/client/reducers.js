/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import jobs from './modules/Landing/LandingReducer';
import jobDetails from './modules/Landing/LandingJobDetailsReducer';
import intl from './modules/Intl/IntlReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
  jobs,
  jobDetails,
});
