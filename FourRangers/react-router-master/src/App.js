import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import LoginForm from './components/LoginForm';
import JobTable from './components/JobTable';
const User = () => {
  return ( <h1> Welcome User kishore </h1>)
}

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">

		  <Route path="/login" exact strict component={JobTable}/>
		<Route path="/" exact strict component={LoginForm}/>
        
        </div>
      </Router>
    );
  }
}

export default App;
