import React from 'react';
//import axios from 'axios';
//import UploadScreen from './UploadScreen';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const styles = theme => ({
  container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    login: {
      height: 240,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    control: {
      padding: theme.spacing.unit * 2,
    }
});

class Login extends React.Component {

  constructor(props){
    super(props);

    this.state={
      username:'',
      password:''
    }
    this.handleClick = this.handleClick.bind(this);
    this.gotoRegister = this.gotoRegister.bind(this);
  }

  gotoRegister() {
    this.props.history.push('/register');
  }

  handleClick() {
    console.log('Login');
    this.props.history.push('/landing');
  }

  handleNameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root}>
        <Grid container
          spacing={16}
          className={classes.login}
          alignItems='center'
          justify='center'
          direction='column'>
          <form className={classes.container} noValidate autoComplete="off">
            <Grid container direction="column" spacing={16}>
              <Grid item>
                <TextField className={classes.textField} label="Username"
                  value={this.state.username}
                  onChange={this.handleNameChange} />
              </Grid>
              <Grid item>
                <TextField className={classes.textField} label="Password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange} />
              </Grid>
              <Grid item>
                <Grid container direction="row" spacing={16}>
                  <Grid item>
                    <Button variant="contained" className={classes.button} onClick={this.handleClick}>Submit</Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" className={classes.button} onClick={this.gotoRegister}>Register</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    );
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(withRouter(Login));
