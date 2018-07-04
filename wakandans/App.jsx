import React from 'react';
import './index.css';
import Popup from "reactjs-popup";
import Login from './Login';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { withRouter } from 'react-router';
class App extends React.Component {
  render(){
     return (
<div>
	<Header/>	
	<Table/>
</div>
      );
   }
}
class Header extends React.Component {
    render() {
          return (
            <div>
            <ul>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
<Popup trigger={<button className="button"> Login </button>} modal>    
     
       <h2>Sign up</h2>
       <div className="form-group">
         <label htmlFor="email">Email address</label>
         <input type="email" className="form-control"
           name="email" />
       </div>
       <div className="form-group">
         <label htmlFor="password">Password</label>
         <input type="password" className="form-control"
           name="password" />
       </div>
      <a href="login.html"> <button type="submit" className="btn btn-primary">
          Sign up
       </button></a>
     
  </Popup>
      <Popup trigger={<button className="button"> Register </button>} modal>    
      <div className="upload-btn-wrapper">
  <button className="btn">Upload your resume</button>
  <input type="file" name="myfile" />
</div>
<br></br><Popup
            trigger={<button className="button"> Submit </button>}
            position="top center"
            closeOnDocumentClick>
<label for="fname">Your User Name</label>
    <input type="text" id="fname" name="firstname" value="marinasruthi20@gmail.com"/>
         <label for="lname">Enter Password</label>
            <input type="text" id="lname" name="lastname" placeholder="Enter password.."/>
<br></br>
<label for="lname">Re-Enter Password</label>
    <input type="text" id="lname" name="lastname" placeholder="Re-Enter password.."/>
<a href="login.html"><button className="button">
          Submit
        </button></a>
</Popup>

  </Popup>
         </ul>
<h1><img src="career.png"/></h1>
</div>
      );
   }
}
class Table extends React.Component {
   render() {	
          return (
            <div>
<ul>
            <li><a class="active" href="#home">Search Jobs</a></li>
            <li><select name="Category" value="Jobs by Category">
    <option value="volvo">Jobs by Category</option>
    <option value="saab">Analyst</option>
    <option value="fiat">Specialist</option>
    <option value="audi">Manager</option>
  </select></li>
           <li> <select name="cars">
    <option value="volvo">Jobs by Location</option>
    <option value="saab">Chennai</option>
    <option value="fiat">Bangalore</option>
    <option value="audi">Hyderabad</option>
  </select></li>
          <li>  <select name="cars">
    <option value="volvo">Experience Level</option>
    <option value="saab">Intern</option>
    <option value="fiat">Early Professional</option>
    <option value="audi">Professional</option>
<option value="audi">Executive</option>
  </select></li>
</ul>
      <table>
  <tr>
    <td className="trow1">2 years experience in angular js and node js</td>
    <button>Apply</button>
  </tr> 
<tr>
    <td className="trow1">Key Performance Areas (KPAs):
• Collecting and delivering mail, documents and promotion material</td>
    <button>Apply</button>
  </tr> 
<tr>
    <td className="trow1">Our client is a member of an international group and is looking to employ an experienced internal sales representative in the Gauteng (</td>
    <button>Apply</button>
  </tr> 
<tr>
    <td className="trow1">Candidate with previous product development experience in the financial services sector, preferably in the short term insurance industry, required</td>
    <button>Apply</button>
  </tr> 
<tr>
    <td className="trow1">Our client is a member of an international group and is looking to employ an experienced sales representative in the Gauteng (Johannesburg) area</td>
    <button>Apply</button>
  </tr>   
</table>
</div>
 );
   }
}
export default App;