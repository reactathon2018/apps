import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop:"52px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class MyEvents extends Component{
  render(){
  const { classes } = this.props;
  return (

    

    <div className={classes.root}>

   
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <Typography className={classes.heading}>Enrolled Events Name - Hackathon 2</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Hackathon Event Content 2
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
         <ExpansionPanelSummary>
          <Typography className={classes.heading}>Enrolled Events Name - Gameathon 2</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Gameathon Event Content 2
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
}

MyEvents.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(MyEvents);