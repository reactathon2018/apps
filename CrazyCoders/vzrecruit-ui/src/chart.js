import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import theme from 'fusioncharts/themes/fusioncharts.theme.fint';

charts(fusioncharts)
theme(fusioncharts)


class chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Loading....."
    };
  }

  componentDidMount(){
   
grabUsers("")
.then((data) => {
  var chartConfig= generateChartConfig(data,{
    "caption":"Job Applicants - 2018",
    "captionfontsize":"20",
    "theme":"fint",

   
    "logoAlpha": "80",
    "logoScale": "8",
    "canvastopmargin":"75",
    
    "logoPosition": "TR",
    "logoleftmargin":"-20",
    "logotopmargin":"10",
    "yaxisminvalue":"1"
  },"column2d");
 ReactDOM.unmountComponentAtNode(document.getElementById('chart-viewer'));
  ReactDOM.render(<ReactFC {...chartConfig} />, document.getElementById('chart-viewer'));
  //ReactDOM.render(<radio/> , document.getElementById('radio'));
})
.catch((err) => {
  console.log(err);
  this.setState({
    msg: String(err)
  });
}); 



  }

  render() {
    return (
    


      <div>
      
     <div id="chart-viewer">
          {this.state.msg}
      </div>
       
      <br /> 

      
      </div>
     
    );

  }
}

function grabUsers(query) {
  const promises = [];
  const monthNames = ["Node.js Developer", "React.js Developer", "Vue.js Developer"
];
let i = 0;
for(; i<=2; i++) {
  const promise = fetch("http://localhost:4000/graphql", {
    method: "POST",
    async: false,
    headers: {     
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      query: `
        {
            
                Jobs(title:"${monthNames[i]}"){                                                                        
                  positons
                }
            
        }
      `
    })
  })
  .then((r) => r.json())
  promises.push(promise);
}

return Promise.all(promises);
}

function generateChartConfig(data,chartAttr,chartType){
   const monthNames = ["Node", "React", "Vue"
];
const monthNames1 = [3,5,6
];
const chartData = data.map((d, i) => {
    return {
      label: monthNames[i],
      value: monthNames1[i]
    };
  });
  const dataSource = {
    "chart": chartAttr,
    "data": chartData
  };
  var revenueChartConfigs = {
    type: chartType,
    width:800,
    height: 400,
    dataFormat: 'json',
    dataSource: dataSource
    
  };

  return revenueChartConfigs;
}


export default chart;