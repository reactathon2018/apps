import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';


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
    marginTop: '52px',
     fontSize:'14px'
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

  createEvent: {
    float: 'right',
    margin: '15px 25px 0 0',
  }

});

class MyEvents extends React.Component {
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

state = {
    name: '',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handelFormChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  

  render() {
    const { classes } = this.props;
    const { expanded, solutionType, showPopup } = this.state;

    const currentDateVal = moment().format('YYYY-MM-DDTh:mm');

    const solutionTypeConent = (solutionType) => {
      if(solutionType == 'file'){
        return (

<div>file upload </div>

          )

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
            <Typography className={classes.heading }>Enrolled Events Name - Hackathon</Typography>
            <Typography className={classes.heading}>22-06-2018</Typography>
            <Typography className={classes.heading}>Completed</Typography>
            <Button  onClick={ (e) =>  {
              this.handleChange((expanded === 'panel1' ? false : 'panel1'))
            }}  className={classes.heading} variant="contained" color="primary" size="small">View Created Events</Button>
        </ExpansionPanelSummary>
            
          <ExpansionPanelDetails>

      <FormControl component="fieldset" required className={classes.formControl}>



      <div className ="eventsblog">
            <Typography variant="headline" component="h3">Reactathon</Typography>
            <Typography component="p">
              <div><b>Created By :</b> Prem Ananth</div>
              <div><b>Description :</b> Reactathon is a event to ideate and solve some of the interesting tech challenges, 
              and create innovative solutions. Here's a chance for you to show you skill on the emerging tech - React JS, React Native, Redux, 
              Node Js, GraphQL, React libraries, Charting libraries (D3, C3 etc) and your choice of NoSQL database.</div>
        <div><b>Event Date :</b> July 2-4</div> 

        <div><b>Event  Location :</b> Chennai</div>

              <div><b>No. of Participants :</b> 4</div> 
              <div><b>Participants Name :</b> <ul><li>Prem Ananth</li><li>Vignesh Krishnamurthy</li><li>Karthick Kumar</li> <li>Mrinmoy Mukherjee</li></ul></div>

              

            </Typography>
        </div>    



          </FormControl>

          </ExpansionPanelDetails>

        <Divider />       
        </ExpansionPanel>



        <Dialog
          open={showPopup}
          onClose={this.handlePopupClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        > 
          <DialogTitle id="alert-dialog-title">{"Create an Event"}</DialogTitle>
          <Divider /> 
          <DialogContent>

          <form className={classes.container} noValidate autoComplete="off">
        

        <TextField
          id="eventname" 
          label="Event Name"
          value={this.state.name}
          onChange={this.handelFormChange('name')}
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Please provide an event name"
          helperText=""
          fullWidth
          margin="normal"
        />

        <TextField
          id="event-startdate" 
        label="Event Start Date"
          type="datetime-local"
        defaultValue={ currentDateVal.toString() }
          InputLabelProps={{
            shrink: true,
          }}
          helperText=""
          fullWidth
          margin="normal"
        />

      
    <TextField
          id="event-enddate" 
        label="Event End Date" 
        type="datetime-local"
        defaultValue={ currentDateVal.toString() }
          InputLabelProps={{
            shrink: true,
          }}
          helperText=""
          fullWidth
          margin="normal"
        />


    <TextField
          id="registration-startDate" 
          label="Registration Start Date" 
          type="datetime-local"
          defaultValue={ currentDateVal.toString() }
          InputLabelProps={{
            shrink: true,
          }}
          helperText=""
          fullWidth
          margin="normal"
        />


    <TextField
          id="registration-endDate" 
          label="Registration End Date"  
          type="datetime-local"
          defaultValue={ currentDateVal.toString() }
          InputLabelProps={{
            shrink: true,
          }}
          helperText=""
          fullWidth
          margin="normal"
        />
        




        <TextField
          id="number"
          label="Maximum Event Participants" 
          value={this.state.age}
          onChange={this.handelFormChange('age')}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          helperText=""
          fullWidth
          margin="normal"
        />



        <TextField
          id="full-width"
          label="Location"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Chennai"
          helperText=""
          fullWidth
          margin="normal"
        />
      </form>



            
          </DialogContent>
                <Divider /> 
      <Button  size="small" onClick={ () => this.setState({showPopup: false})} color="primary"><b>Create Event</b></Button>
      <Button  size="small" onClick={ () => this.setState({showPopup: false})} color="secondary"><b>Cancel</b></Button>


        </Dialog>

    <Button className={classes.createEvent} size="small" onClick={ () => this.setState({showPopup: true})} color="primary">Create New Event</Button>

      </div>

      

    );
  }
}



MyEvents.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyEvents);