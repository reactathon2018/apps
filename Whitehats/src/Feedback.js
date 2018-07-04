import React from 'react';
//import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    feedback: {
      height: 360,
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

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        satisfaction: "",
        nps: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = key => (event, value) => {
    this.setState({[key]: value});
    console.log(key, value);
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root}>
        <Grid container
          spacing={16}
          className={classes.feedback}
          alignItems='center'
          justify='center'
          direction='column'>
        <Paper elevation={1}>
          <Grid container direction="column" spacing={16}>
            <Grid item>
              <Typography variant="headline" component="h3">
                On a scale on 1-5 how satisfied with your recruitment experience
              </Typography>
            </Grid>
            <Grid item>
              <RadioGroup
                aria-label="satisfaction"
                name="satisfaction"
                className={classes.group}
                value={this.state.satisfaction}
                onChange={this.handleChange('satisfaction')}
              >
                <FormControlLabel value="1" control={<Radio />} label="Not Satisfied" />
                <FormControlLabel value="2" control={<Radio />} label="Moderately Satisfied" />
                <FormControlLabel value="3" control={<Radio />} label="Very Satisfied" />
              </RadioGroup>
            </Grid>
            <Grid item>
              <Typography variant="headline" component="h3">
                Based on the experience would you recommend our company to a friend
              </Typography>
            </Grid>
            <Grid item>
            <RadioGroup
              aria-label="nps"
              name="nps"
              className={classes.group}
              value={this.state.nps}
              onChange={this.handleChange('nps')}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            </Grid>
          </Grid>
        </Paper>
    </Grid>
    </Grid>
    );
  }
}

Feedback.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Feedback);
//export default withRouter(Feedback);
