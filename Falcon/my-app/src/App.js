import React from "react";
import RouteTest from "./RouteTest"
import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor (props){
    super(props);
    this.state = 
    {opportunities:[]
    
    };
  }
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ opportunities: res.obj }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('http://10.74.18.88:4000/getjobinfo',{headers:{'Access-Control-Allow-Origin':'*'}});
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to Verizon Job Portal</h1>
  //       </header>
  //       <div className="App-intro">

  //      {
         
  //       this.state.response.map
  //       (data=> <ul key={data._id}><li> {data.JobCode} </li> <li> {data.Summary} </li> </ul>)
  //      }
  //       </div>
  //     </div>
  //   );
  // }



  render() {
    return (
      <div>
     

     
           
      {this.state.opportunities.map(d => <table border="1" cellSpacing="3" width="500" cellPadding="2" >
<tr>
  <td>Job Code
    </td>
    <td>{d.JobCode}
    </td>
  </tr>
  <tr>
  <td>Job Type
    </td>
    <td>{d.JobType}
    </td>
  </tr>
  <tr>
  <td>Summary
    </td>
    <td>{d.Summary}
    </td>
  </tr>
  <tr>
  <td>Primary Skills
    </td>
    <td>{d.PrimarySkills}
    </td>
  </tr>

  <tr>
  <td>Secondary Skills
    </td>
    <td>{d.SecondarySkills}
    </td>
  </tr>
  <tr>
  <td>Years Of Experience
    </td>
    <td>{d.YearsOfExperience}
    </td>
  </tr>
  <tr>
  <td>Number of Openings
    </td>
    <td>{d.NumberofOpenings}
    </td>
  </tr>
  <tr>
  <td>JobLocation
    </td>
    <td>{d.JobLocation}
    </td>
  </tr>
  <tr>
  <td colSpan="1">
  </td>
 
    <td><input type="button" class="go-btn" value="Apply Now"/>
    </td>
  </tr>
</table>)}
 </div>      
      
    );
  }
}

const ParamsExample = () => (
  <Router>
    <div>
      <h2>Job Opportunites</h2>
      <ul>
        <li>
          <Link to="/RouteTest1/5">Netflix</Link>
        </li>
        
      </ul>

      <Route path="/:id" component={RouteTest} />

      {/*
         It's possible to use regular expressions to control what param values should be matched.
            * "/order/asc"  - matched
            * "/order/desc" - matched
            * "/order/foo"  - not matched
      */}
      <Route
        path="/order/:direction(asc|desc)"
        component={ComponentWithRegex}
      />
    </div>
  </Router>
);

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

const ComponentWithRegex = ({ match }) => (
  <div>
    <h3>Only asc/desc are allowed: {match.params.direction}</h3>
  </div>
);

export default App;
