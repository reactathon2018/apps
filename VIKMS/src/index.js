import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import 'whatwg-fetch';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Jobs from './Jobs';
import Appliedjobs from './Appliedjobs';
import AppliedjobsList from './AppliedjobsList';
import InterviewFeedback from './InterviewFeedback';
class App extends Component {
	render() {
		return (
			<div>
				<div className="subnavbar-inner">
					<div className="container">
						<div className="header-logo">
							<a href="index.html"><img src="image/verizon.png" width="107px" /> </a>
						</div>
						<div className="mainnav" id="mainnav">
							<a href='/'><i className="icon-dashboard"></i><span>Jobs List</span></a>
							<a href={'/AppliedjobsList'}><i className="icon-dashboard"></i><span>Applied Jobs</span></a>
							<a href={'/InterviewFeedback'}><i className="icon-dashboard"></i><span>Candidate Interview Feedback</span></a>
						</div>
						<div className="header-userinfo">
							<img width="40px" alt="Profile Image" src="image/user-default.gif" /><span>Hello Saravanan</span> 
						</div>
					</div>
				</div>
				<Router>
					<Switch>
						<Route exact path='/' component={Jobs} />
						<Route exact path='/Appliedjobs' component={Appliedjobs} />
						<Route exact path='/AppliedjobsList' component={AppliedjobsList} />
						<Route exact path='/InterviewFeedback' component={InterviewFeedback} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));


