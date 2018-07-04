import React, { Component } from 'react';


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};

const panelStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  border: 0,
  paddingLeft: 20,
  paddingRight: 20,
  width: 300,
};

const buttonStyle = {
  marginBottom: 0
};


class HRForm extends Component {
  constructor(props) {
    super(props);
      
  }
  
  

  render() {
    return (
      <div style={divStyle}>
        <div style={panelStyle}>
         <h1>This is HR page</h1>
        </div>
      </div>
    )
  }
}

export default HRForm;
