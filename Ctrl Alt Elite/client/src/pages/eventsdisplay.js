import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Button from '@material-ui/core/Button';

import FullScreenDialog from './fullscreenDialog';
const styles = theme => ({
  root: {
    width: '100%',
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Simple Array Sum</Typography>
            <Typography className={classes.secondaryHeading}>Easy , Max Score: 10 , Success Rate: 93.45%</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Given an array of integers, find the sum of its elements. 
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelActions>
            <FullScreenDialog title="Simple Array Sum" />
          </ExpansionPanelActions>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>A Very Big Sum</Typography>
            <Typography className={classes.secondaryHeading}>
            Easy , Max Score: 10 , Success Rate: 94%
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelActions>
            <FullScreenDialog title="A Very Big Sum"/>
          </ExpansionPanelActions>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Plus Minus</Typography>
            <Typography className={classes.secondaryHeading}>
            Medium , Max Score:40 , Success Rate: 92%
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelActions>
            <FullScreenDialog  title="Plus Minus"/>
          </ExpansionPanelActions>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Mini-Max Sum</Typography>
            <Typography className={classes.secondaryHeading}>
            Medium , Max Score:40 , Success Rate: 90%
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelActions>
            <FullScreenDialog title="Mini-Max Sum" />
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);
