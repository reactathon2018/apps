import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Designation from './components/Designation';
import DesignationDetails from './components/DesignationDetails';
import DesignSW from './components/DesignSW';
import DesignAn from './components/DesignAn';
import DesignSp from './components/DesignSp';
import Resume from './components/Resume';
import SignUp from'./components/SignUp';
//import { Router, Route, browserHistory } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



let modals = (
  <div>
      <App />
  </div>
);

ReactDOM.render(<BrowserRouter>
    <switch>
        <Route exact path="/" component={ App} />
    <Route  exact path="/Designation" component={ Designation} />
    <Route  path="/DesignationDetails" component={ DesignationDetails} />
        <Route  path="/DesignSW" component={ DesignSW} />
    </switch>
</BrowserRouter>, document.getElementById('root'));

