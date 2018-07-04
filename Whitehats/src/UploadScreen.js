import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
class UploadScreen extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Uploaded screen"
           />
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
// const style = {
//   margin: 15,
// };
export default UploadScreen;
