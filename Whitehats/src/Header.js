import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state = { title: "Reactathon", loginStatus: false };

      this.handleChange = this.handleChange.bind(this);
      this.toggleLoginStatus = this.toggleLoginStatus.bind(this);
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }

  toggleLoginStatus(event) {
    this.setState({loginStatus: !this.state.loginStatus});
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" className={classes.flex}>
                {this.state.title}
              </Typography>
              { this.state.loginStatus ?
              <Button className={classes.button} onClick={this.toggleLoginStatus}>Logout</Button>
              : null }
            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(withRouter(Header));
