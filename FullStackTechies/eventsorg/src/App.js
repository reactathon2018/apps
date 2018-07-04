import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from "./dashboard/dashboard";
import MyEvents from "./Events/MyEvents";
import EnrolledEvents from "./Events/EnrolledEvents";
import EventDetail from "./EventDetail";
import Topbar from './Components/Topbar';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
      	<div className="main-content-wraper">
      		<BrowserRouter>
      			<div>
	      			<Topbar />
	      			<Switch>
	      				<Route exact path="/" component={ Dashboard } />
	      				<Route path="/event-details/:id?" component={ EventDetail } />
	      				<Route exact path="/myEvents" component={ MyEvents } />
	      				<Route exact path="/enrolledEvents" component={ EnrolledEvents } />
	      			</Switch>
      			</div>
      		</BrowserRouter>
      	</div>
      </div>
    );
  }
}

export default App;
