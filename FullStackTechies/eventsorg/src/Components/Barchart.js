import React from 'react'
import ReactDOM from 'react-dom'
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import axios from 'axios';
export class Barchart extends React.Component {

  constructor(props){
        super(props)
        this.state = { "data" :[]}
  
        const thisDuplicate = this;
       axios.get('http://localhost:3200/api/v1/events/topParticipants/')
          .then(function (response) {
            console.log(response.data)
            thisDuplicate.setState({"data": response.data});
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
    }
 
  render() {
    // const data = this.state.data
     const data = [{name: 'Hackathon', participated: 590, expected: 400, amt: 1400},
              {name: 'Reactathon', participated: 868, expected: 120, amt: 1506},
              {name: 'Code Warriors', participated: 1397, expected: 1098, amt: 989},
              {name: 'Jenkin Hero', participated: 1480, expected: 1200, amt: 1228},
              {name: 'UX India', participated: 400, expected: 680, amt: 1700}];


    return (
      <div className="dashboard-chart blue" style={{width: '50%'}}> 
         <ComposedChart layout="vertical" width={300} height={400} data={data}
            margin={{top: 20, right: 20, bottom: 20, left: 20}}>
          <CartesianGrid stroke='#f5f5f5'/>
          <XAxis type="number"/>
          <YAxis dataKey="name" type="category"/>
          <Tooltip/>
          <Legend/>
          <Area dataKey='expected' fill='#8884d8' stroke='#8884d8'/>
          <Bar dataKey='participated' barSize={20} fill='#413ea0'/>
       </ComposedChart>
      </div>
    );
  }

}
