import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link } from 'react-router-dom';
import './index.css';
import App from './App';
import MainBody from './MainBody';
import Teamsignup from "./Component/Teamsignup";
import registerServiceWorker from './registerServiceWorker';

  
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MainBody />, document.getElementById('body'));
ReactDOM.render(<Teamsignup />, document.getElementById('Teamsignup'));
//ReactDOM.render(<App />, document.getElementById('footer'));
registerServiceWorker();
