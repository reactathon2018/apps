import React  from 'react';
import './Login.css';
import ReactDOM from 'react-dom';
import Path from '../CandidateView/CandidateView';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import axios from 'axios';
import { red100 } from 'material-ui/styles/colors';

class Login extends React.Component  {
  constructor(props){
    super(props);
    this.state={
    username:'',
    password:'',
    response: ''
    }
   }
   ViewJobs()
   {
    //ReactDOM.render(<JobPath />, document.getElementById('root'))
   }
  Submit(event)
  {
    var apiBaseUrl = "http://localhost:5000/api/";
    var self = this;
    var payload =
    {
      "email": this.state.username,
      "password": this.state.password
    }
    //ReactDOM.render(<Path />, document.getElementById('root'));

    axios.post(apiBaseUrl+'login', payload)
    .then(function (response) {
      console.log(response);
      if(response.data.result.length >0)
      {
        ReactDOM.render(<Path />, document.getElementById('root'));
      }
      else 
      console.log("Username does not exists");
        alert("Username does not exist");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            {/* <AppBar title="Job Portal Login" /> */}
            <table>
              <tr>
                <td>
                  <TextField
                  floatingLabelText="Username"
                  onChange={(event, newValue)=> this.setState({username:newValue})}/>
                  <br />
                  <TextField
                  floatingLabelText="Password" type="password"
                  onChange={(event, newValue)=> this.setState({password:newValue})}/>
                  <br/><br/>
                  <br />
                  <input type="submit" value="Submit" onClick= {(event) => this.Submit(event)} />
                  
                  {/* <RaisedButton label="Submit" primary={true} 
                  onClick={(event) => this.Submit(event)}/>                   */}
                  <br/><br/>
                  <br />
                  <label id="lblError" TextField="Login Failed!" color={red100}/>
            </td>
            </tr>
            </table>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }

}
const style = {
  margin: 15,
 };
export default Login;
