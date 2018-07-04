import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const styles = theme => ({
  root: {
    width: '100%',
    marginTop:'52px'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    //flexBasis: '33.33%',
    flexBasis: '25%',
    padding: '5px 0 0 0',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },

  group: {
    margin: `${theme.spacing.unit}px 0`,
  },

  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },

});

class EnrolledEvents extends React.Component {
  state = {
    expanded: null,
    solutionType: '',
    showPopup: false
  };

  handleChange = panel => {
    this.setState({
      expanded: panel ? panel : false
    });
  };

 

  handleRadioChange = event => {
    this.setState({ solutionType: event.target.value });
	// let getState = 

  };

  handlePopupClose = () => {
  	this.setState({showPopup: false})
  }

  render() {
    const { classes } = this.props;
    const { expanded, solutionType, showPopup } = this.state;

   	const solutionTypeConent = (solutionType) => {
   		if(solutionType == 'file'){
   			return <div>File</div>
   		}else if(solutionType == 'link'){
   			return (
			<form className={classes.container} noValidate autoComplete="off">
   			<TextField
          id="with-placeholder"
          label="With placeholder"
          placeholder="Placeholder"
          className={classes.textField}
          margin="normal"/>
          </form>
)
   		}

   		return null;
   	}

    return (
   
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'}>
          <ExpansionPanelSummary>
            <Typography className={classes.heading } onClick={ () => this.setState({showPopup: true}) }>Enrolled Events Name - Hackathon</Typography>
            <Typography className={classes.heading} onClick={ () => this.setState({showPopup: true}) }>22-06-2018</Typography>
            <Typography className={classes.heading} onClick={ () => this.setState({showPopup: true}) }>Completed</Typography>
            <Button  onClick={ (e) =>  {
            	this.handleChange((expanded === 'panel1' ? false : 'panel1'))
            }}  className={classes.heading} variant="contained" color="primary" size="small">Add Solution</Button>
        </ExpansionPanelSummary>
          	
          <ExpansionPanelDetails>

			<FormControl component="fieldset" required className={classes.formControl}>
	          <RadioGroup
	            aria-label="resource"
	            name="resourceUpload"
	            className={classes.group}
	            value={this.state.solutionType}
	            onChange={this.handleRadioChange}>
	            <FormControlLabel value="file" control={<Radio />} label="File Upload" />
	            <FormControlLabel value="link" control={<Radio />} label="Link Upload" />
	          </RadioGroup>


      		{ solutionTypeConent(solutionType) }


	        </FormControl>

          </ExpansionPanelDetails>

        <Divider />
        <ExpansionPanelActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </ExpansionPanelActions>
        </ExpansionPanel>

        <Dialog
          open={showPopup}
          onClose={this.handlePopupClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handlePopupClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handlePopupClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>

      </div>
    );
  }
}



EnrolledEvents.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnrolledEvents);