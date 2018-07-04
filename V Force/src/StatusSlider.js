
import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import './StatusSlider.css';
class StatusSlider extends Component {

 
  render () {
    
    return (
      <div>
       <div className="text-center">25%</div>
      <Progress value="25" />
      </div>
    )
  }
}
export default StatusSlider;
