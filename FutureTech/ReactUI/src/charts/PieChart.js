import React from "react";
import { Pie } from "react-chartjs-2";

export default class PieExample extends React.Component {
  constructor(props) {
    super(props);

    this.data = {
      labels: this.props.labels,
      datasets: [
        {
          data: this.props.dataSet,
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#FF6384", "#36A2EB", "#FFCE56","#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6382", "#36A2EA", "#FFCE52","#FF6382", "#36A2EB", "#FFCE54","#FF6381", "#36A2EA", "#FFCE54"]
        }
      ]
    };
  }

  render() {
    return (
      <div className="widget" >
        <h5>{this.props.name}</h5>
        <Pie data={this.data}  options={{  maintainAspectRatio: false,
            legend:{
                display:true,position: 'right'
            }}} />
      </div>
    );
  }
}
