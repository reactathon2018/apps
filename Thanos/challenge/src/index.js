import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import IndexItem from './components/IndexItem';
import IndexHack from './components/IndexHack';
import AddHack from './components/AddHack';
import RegisterHack from './components/registerHack';
import RegisterHackathonTable from './components/ShowRegistration';

//import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
    <Router>
        <div>
          <Route exact path='/' component={IndexHack} />
          <Route path='/add-item' component={AddItem} />
          <Route path='/index' component={IndexItem} />
          <Route path='/indexHack' component={IndexHack} />
          <Route path='/addHack' component={AddHack} />
          <Route path='/edit/:id' component={EditItem} />
          <Route path='/registerHack' component={RegisterHack} />
          <Route path='/RegisterHackathonTable' component={RegisterHackathonTable} />
        </div>
    </Router>,
    document.getElementById('root')
  );
registerServiceWorker();
