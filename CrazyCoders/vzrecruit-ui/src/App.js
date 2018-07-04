import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,  withRouter } from 'react-router-dom';
//import  browserHistory from 'react-router-dom';
import ApplyJobsGrid from './ApplyJobsGrid';
import ApplyJobsGridHR from './ApplyJobsGridHR';
import Signup from './Signup';
import ReactDOM from 'react-dom';
import Report from "./chart";
import {createApolloFetch} from 'apollo-fetch'
import NavBar from "./NavBar"

class ApplyJobs extends React.Component {

  constructor(props) {
      super(props);
      this.state ={
        file:null
        
      }
}

render() {
  return (    
    <form onLoad={this.onFormLoadt}>
      <h1>Apply Jobs</h1>
      <input type="file" name="file" onChange={this.onChange} />
      <button type="submit">Upload</button>
    </form>
 )
}
}

const SignupButton = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => {ReactDOM.render(<Signup />, document.getElementById('login')); }}
  >
  <span/>
    Sign-Up
  </button>
))

const SignInButton = withRouter(({ history }) => (
  <button
    type='button'
    onClick={(e) => {
      if(this.refs.username.value=='')
	{
		alert('Please enter valid Username');
	}
	else if(this.refs.password.value=='')
	{
		alert('Please enter valid Password');
	}
	else{
		this.setState({Userdetails: {
			username: this.refs.username.value,
			password: this.refs.password.value
    }    
    });
    if(this.refs.username.value == 'hruser')
    {
      ReactDOM.render(<ApplyJobsGrid />, document.getElementById('login')); 
    }
    else{
      ReactDOM.render(<ApplyJobsGridHR />, document.getElementById('login')); 
    }
    
	}	
      }}
  >
  <span/>
    Sign-In
  </button>
))

const Reportbtn = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => {ReactDOM.render(<Signup />, document.getElementById('Report')); }}
  >
    Report
  </button>
))
class App extends Component {
	constructor(props) {
  super(props);
  const q = `query{ 
    Jobs{
      id
      title
      role
      positons
      description
      status
    }
  }`;
  this.state ={
    data:null,    
  };
  const uri = 'http://localhost:4000/graphql';
  const apolloFetch = createApolloFetch({ uri,
     
   });
  
  apolloFetch({
    query: q,
  }).then(res => {   
    this.saySomething(res.data);
    this.setState = {
      data: res.data
    };
    console.log(res.data);

    this.setState=({
			data: res.data
		
    });
    console.log(this.state.data);
  });
  
  this.state = {
    Userdetails:{
     
    },
    LoggedIn : false
  };
  
  
}

saySomething(response) {    
  this.setState({ data: response.Jobs });
  console.log(this.state.data);
};


//Login page

userHasAuthenticated = authenticated => {
  this.setState({ isAuthenticated: authenticated });
}
handleSubmit()
{  
	if(this.refs.username.value=='')
	{
		alert('Please enter valid Username');
	}
	else if(this.refs.password.value=='')
	{
		alert('Please enter valid Password');
	}
	else{	
    this.state.LoggedIn = true;	
    if(this.refs.username.value == 'hruser')
    {
      ReactDOM.render(<ApplyJobsGridHR />, document.getElementById('login')); 
    }
    else{
      ReactDOM.render(<ApplyJobsGrid />, document.getElementById('login')); 
    }    
	}	
	//e.preventDefault();
}

 render() {	 
	  return (
      <div className="App">  
        <header className="App-header">     
         <br/>		<br/>
          <h1 className="App-title">Welcome to Verizon Recruitment Portal</h1>
          
            <a  className="Logout">Logout</a> 
                 
        </header> 
        
		<div>
  
  <div id="login">
  <h1> Login</h1>
  <form>
  <div>
  <label id="username">UserName: </label> 
  <input type="text" ref="username" />
     </div>
	 <br/>
	 <div>
  <label id="password">Password: </label>
  <input type="password" ref="password" />     
	 <br/>
   <table className="table"><tr>
     <td>
   <div> 
   New User?<span/>  <span/>  
   <Router>   
    <SignupButton/> 
  </Router></div> 
   </td>
   <td> Or </td>
   <td>
     <div>
     Existing User?<span/>  <span/>
    <Router>   
    <input type="button" value="Sign-In" onClick={this.handleSubmit.bind(this)}/>	  	  
  </Router></div>
   </td>
  </tr>
  </table>
  </div>
    
  
  </form>  
  <br/>
   
  <table className="r-table" va>
               
            </table> 
  </div>
      </div>
      <header className="App-Footer">     
         <br/>		<br/>
          <h1 className="App-title">Thanks for considering Verizon as your trusted Company  </h1>
        </header>
   </div>     
   
	  
    );
	};
  }


 export default App;
