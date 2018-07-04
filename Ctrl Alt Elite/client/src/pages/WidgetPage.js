import React from 'react';

import { Row, Col } from 'reactstrap';

import Page from 'components/Page';

import ScrollableTabsButtonForce from './events';

import { NumberWidget, IconWidget } from 'components/Widget';

//import { iconWidgetsData, numberWidgetsData } from 'demos/widgetPage';



class WidgetPage extends React.Component {
  state = {
    hr:4,
    min:45,
    sec:50,
    intervalId:''
  };

  componentDidMount(){
    var intervalId = setInterval(this.timer.bind(this), 1000);
    this.setState({intervalId: intervalId});
  }
 
  componentWillUnmount(){
      clearInterval(this.state.intervalId);
  }
 
 timer() {
    var newCount = this.state.sec - 1;
    if(newCount >= 0) { 
        this.setState({ sec: newCount });
    } else {
      this.setState({ sec: 59,min:this.state.min-1 });
    }
 }
 

render () {
  var timer="4:45:20";
  return (
    <Page
      className="WidgetPage"
      title=""
      breadcrumbs={null}
    >
      <Row>
        
          <Col  lg={4} md={6} sm={6} xs={12} className="mb-3">
            <NumberWidget
              title="Challenges"
              subtitle=""
              number="3/10"
              color='primary'
              progress={{
                value: 33,
                label: '',
              }}
            />
          </Col>

          <Col  lg={4} md={6} sm={6} xs={12} className="mb-3">
            <NumberWidget
              title="Accuracy"
              subtitle=""
              number="75%"
              color='primary'
              progress={{
                value: 75,
                label: '',
              }}
            />
          </Col>

          <Col  lg={4} md={6} sm={6} xs={12} className="mb-3">
            <NumberWidget
              title="Time Left"
              subtitle=""
              number={this.state.hr+':'+this.state.min+":"+this.state.sec}
              color='primary'
              progress={{
                value: 66,
                label: '',
              }}
            />
          </Col>
        
      </Row>
      <ScrollableTabsButtonForce />
    </Page>
  );
};
}

export default WidgetPage;
