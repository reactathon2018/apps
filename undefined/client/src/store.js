/* globals window */
import {  createStore, compose, applyMiddleware } from 'redux';
import {combineReducers} from 'redux-immutable';
import createLogger from 'redux-logger';
import httpReducer from './http/reducer';
import hackatonsReducer from './Hackatons/reducer';
import modalReducer from './Modal/reducer';
import userActionReducer from './UserAction/reducer';

import thunk from 'redux-thunk';

const reducers = combineReducers({
  httpReducer,
  hackatonsReducer,
  modalReducer,
  userActionReducer
});

const rootReducer = (state, action) => {
  return reducers(state,action);
}

export default createStore(rootReducer,compose(applyMiddleware(thunk, createLogger())));
