import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import NavBar from './NavBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Layout extends Component {
    render() {
    return (
        <center>
        <div>
            <MuiThemeProvider>
                <NavBar />        
                <TextField hintText="Enter your Username" floatingLabelText="Username" onChange = {(event,newValue) => this.setState({username:newValue})} />
                <br/>
                <TextField type="password" hintText="Enter your Password" floatingLabelText="Password" onChange = {(event,newValue) => this.setState({password:newValue})} />
                <br/>
                <RaisedButton label="Submit" primary={true} onClick={(event) => this.handleClick(event)}/>
            </MuiThemeProvider>                   
        </div>
        </center>
        );
    }
    
}

export default Layout;