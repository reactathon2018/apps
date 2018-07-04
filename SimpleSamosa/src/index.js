import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import jobdetails from './jobdetails';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('App'));
//ReactDOM.render(<jobdetails />, document.getElementById('jobdetails'));
registerServiceWorker();
