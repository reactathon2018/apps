import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import 'whatwg-fetch';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import Header from './Header';
import Appliedjobs from './Appliedjobs';
class Jobs extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			 data:[
				{
				   jobcode: 'VIKMS01',
				   jobtitle: 'Senior Software Engineer',
				   location: 'Bangalore',
				   skillset: 'Java',
				   dateinterview: '12/07/2017',
				   status: 'Rejected',
				   allow: 1,
				   id: 1,
				   sno: 1
				},
				{
				   jobcode: 'VIKMS10',
				   jobtitle: 'Software Developer',
				   location: 'Hyderabad',
				   skillset: 'PHP',
				   dateinterview: '03/05/2017',
				   status: 'Rejected',
				   allow: 0,
				   sno: 2,
				   id: 2
				},
				{
				   jobcode: 'VIKMS03',
				   jobtitle: 'Lead Consultant',
				   location: 'Bangalore',
				   skillset: 'React',
				   dateinterview: '17/03/2017',
				   status: 'Rejected',
				   allow: 1,
				   sno: 3,
				   id: 3
				},
				{
				   jobcode: 'VIKMS06',
				   jobtitle: 'AWS Consultant',
				   location: 'Mumbai',
				   skillset: 'Dotnet',
				   dateinterview: '12/09/2017',
				   status: 'Selected',
				   allow: 1,
				   sno: 4,
				   id: 4
				},
				{
				   jobcode: 'VIKMS73',
				   jobtitle: 'Drupal Developer',
				   location: 'Dharmapuri',
				   skillset: 'Core Java',
				   dateinterview: '05/09/2017',
				   status: 'Rejected',
				   allow: 1,
				   sno: 5,
				   id: 5
				}
			],
			jobs:[]
		}
	}
	
	/*componentDidMount() {
		fetch("http://10-119-2-42.ebiz.verizon.com:8080/saravanan/my-react/jobs.php")
		  .then(res => res.json())
		  .then(
			(result) => {
			  this.setState({
				isLoaded: true,
				items: result.items
			  });
			},
			// Note: it's important to handle errors here
			// instead of a catch() block so that we don't swallow
			// exceptions from actual bugs in components.
			(error) => {
			  this.setState({
				isLoaded: true,
				error
			  });
			}
		  )
	 }*/
  
  
	render() {
		return (
			<div>
				<div className="container">
					<div className="tbl-header">
						<table >
							<thead>
								<tr>
								    
									<th align="center">Job Code</th>
									<th align="center">Job Title</th>
									<th align="center">Skill Set</th>
									<th align="center">Date of interview</th>
									<th align="center">Interview Status</th>
								</tr>
							</thead>
						</table>
					</div>
					<div className="tbl-content">
						<table >
							<tbody>
								{this.state.data.map((dynamicComponent, i) => <Joblist key = {i} componentData = {dynamicComponent}/>)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}




class Joblist extends Component {
   render() {
      return (

			<tr>
				<td align="center">{this.props.componentData.jobcode}</td>
				<td align="center">{this.props.componentData.jobtitle}</td>
				<td align="center">{this.props.componentData.skillset}</td>
				<td align="center">{this.props.componentData.dateinterview}</td>
				<td align="center"><a className="abutton" href="#">{this.props.componentData.status}</a></td>
			</tr>
           
        
      );
   }
}
export default Jobs;





