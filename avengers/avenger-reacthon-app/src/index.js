import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import 'raf/polyfill';
// import './index.css';
import App from './App';
// import './CSS/bootstrap.css';
// import './JS/jquery-3.3.1.js';
// import './JS/bootstrap.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
