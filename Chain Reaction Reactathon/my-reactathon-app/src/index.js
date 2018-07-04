import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={configureStore()}>
  <App />
 </Provider>, document.getElementById('root')
);
registerServiceWorker();
