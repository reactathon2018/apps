  import React, { Component } from 'react';
  import logo from './logo.svg';
  import './App.css';
  import Carrers from  './Componets/Carrers/Carrers';
  import CandidateView from  './Componets/CandidateView/CandidateView';
  import Home from  './Componets/Home/Home';
  import ApplyJobs from './Componets/ApplyJobs/ApplyJobs'
  import Login from  './Componets/Login/Login';
  import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
  class App extends Component {

  render() {

  return (
    <Router>
  <div >
    <div class="header">
      <h1>Spider</h1>
    </div>

    <div class="topnav">
      <Link to={'/'}>Home</Link>
      <Link to={'/Carrers'}>Careers</Link>
      <Link to={'/CandidateView'}>CandidateView</Link>
      <Link to={'/ApplyJobs'}>ApplyJobs</Link>
      <Link to={'/Login'} >Login</Link>
      {/* <a href="#">Carriers</a>
      <a href="#">Link</a>   */}
    </div>

    <div class="row">
    {/* <div class="card">
     

    </div> */}
    </div>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Carrers' component={Carrers} />
        <Route exact path='/CandidateView' component={CandidateView} />
        <Route exact path='/ApplyJobs' component={ApplyJobs} />
        <Route exact path='/Login' component={Login}  />
    </Switch>
    
  </div>
  </Router>
   );
  }
}
 export default App;
