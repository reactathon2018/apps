import React, { Component } from "react";
import Charts from "../../components/graph";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    var tableChartvar = {
      chartType: "Table",
      width: "100%",
      columns: [
        { type: "string", label: "Name" },
        { type: "number", label: "Salary" },
        { type: "boolean", label: "Full Time Employee" }
      ],
      rows: [
        ["Mike", { v: 10000, f: "$10,000" }, true],
        ["Jim", { v: 8000, f: "$8,000" }, false],
        ["Alice", { v: 12500, f: "$12,500" }, true],
        ["Bob", { v: 7000, f: "$7,000" }, true]
      ],
      chartPackages: ["table"]
    };
    var barChart = {
      chartType: "BarChart",
      data: [
        ["Element", "Density", { role: "style" }],
        ["Copper", 8.94, "#b87333"],
        ["Silver", 10.49, "silver"],
        ["Gold", 19.3, "gold"],
        ["Platinum", 21.45, "color: #e5e4e2"]
      ],
      width: "100%",
      height: "300px",
      options: {
        title: "Density of Precious Metals, in g/cm^3",
        bar: { groupWidth: "95%" },
        legend: { position: "none" }
      },
      chartEvents: [{ eventName: "onmouseover" }]
    };
    this.state = {
      tableChart: tableChartvar,
      barChart: barChart
    };
  }

  render() {
    console.log(this.state.barChart);

    return (
      <div className="d-flex flex-content-stretch flex-wrap">
        <div className="w-50">
          {" "}
          <Charts data={this.state.tableChart} />
        </div>
        <div className="w-50">
          {" "}
          <Charts data={this.state.barChart} />
        </div>
      </div>
    );
  }
}
export default Dashboard;
