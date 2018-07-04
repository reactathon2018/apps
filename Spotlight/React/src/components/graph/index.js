import React, { Component } from "react";
import { Chart } from 'react-google-charts';

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data
}
  render() {
    return (
  

        <div className={'my-pretty-chart-container'}>
        <Chart
        chartType={this.state.chartType}
        data={this.state.data}
        options={this.state.options}
        columns={this.state.columns}
        rows={this.state.rows}
        graph_id={this.state.chartType}
        width={this.state.width}
        height={this.state.height}
        legend_toggle
      />
      </div>

    );
  }
}
export default Charts;
