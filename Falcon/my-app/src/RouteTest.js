import React, { Component } from 'react';
import './App.css';

class RouteTest extends Component {
  state = 
  {opportunities:
  [
{jobID:"6001",jobname:"Web Developer"},
{jobID:"6002",jobname:"Java Developer"}
  ]
  }

 

  render() {
    return (
      <RouteTest12/>
    );
  }
}
class RouteTest12 extends Component {
  render() {
    let test1=2;
    return (
      
    <div className="RouteTest">
        From RouteTest1 :  {this.props.params}
      </div>
    );
  }
}

export default RouteTest;
