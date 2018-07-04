import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['CFO', 'VES', 'N&T', 'CMB', 'VZW', 'VBM'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: '#36A2EB',
      borderColor: '#36A2EB',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55 ]
    }
  ]
};

export default class BarExample extends React.Component {  

  render() {
    return (
      <div  className="widget" style={{ "height":"300px"}}>
        <h5>Participants across Orgs</h5>
        <Bar
          data={data}
          width={50}
          height={20}
          options={{
            maintainAspectRatio: false,
            legend:{
                display:false
            },
            

          }}
        />
      </div>
    );
  }
};