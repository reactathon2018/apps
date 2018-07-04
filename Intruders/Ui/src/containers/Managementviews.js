import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import { createApolloFetch } from 'apollo-fetch';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class ManagementViews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titleId:0,
            eventName:'',
            eventShortDescription:'',
            eventLongDescription:'',
            eventStatus:'',
            venue:'',
            startDate:moment(),
            endDate:moment(),
            eventType:'',
            techStack:'',
            title: '',
            content: '',
            saveDisabled : true,
            tags: [],
            validationErrors: [],            
        };

        this.OnTextChange = this.OnTextChange.bind(this);
        this.enableSaveBtn = this.enableSaveBtn.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
        this.handleStartChange = this.handleStartChange.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
        this.onSave = this.onSave.bind(this);
       
    }

    OnTextChange(event) {
        const value = event.target.value.trim();
        const keyname = event.target.name.trim();
        this.validateField(keyname,value);

        //this.setState({ eventName: value });
    }







    onSave(event) {
        event.preventDefault();

        if (this.state.validationErrors && this.state.validationErrors.length === 0) {
           console.log(this.state);
console.log(this.state.startDate.toDate().toDateString("MM/dd/yyyy"));
            
                
                

                const fetch = createApolloFetch({
                    uri: 'http://localhost:4000/reactathon',
                });
                const q = `mutation create($id: Int, $eventName: String, $eventShortDescription: String, $eventLongDescription: String, $eventStatus: String, $venue: String, $startDate: String, $endDate: String, $eventType: String, $techStack: String){
                        createEvent(id:$id, eventName: $eventName, eventShortDescription:$eventShortDescription,eventLongDescription: $eventLongDescription,eventStatus:$eventStatus,venue:$venue,startDate:$startDate,endDate:$endDate,eventType:$eventType,techStack:$techStack)
                }`
                
                var eventDetails = {
                    id: this.state.titleId, 
                    eventName: this.state.eventName, 
                    eventShortDescription: this.state.eventShortDescription, 
                    eventLongDescription: this.state.eventLongDescription,
                    eventStatus: this.state.eventStatus,
                    venue: this.state.venue,
                    startDate: this.state.startDate.toString(),
                    endDate: this.state.endDate.toString(),
                    eventType: this.state.eventType,
                    techStack: this.state.techStack
                }
                fetch({
                    query: q,      
                    variables: eventDetails
                }).then(response => {
                    if (response && response.data) {                    
                    
                    }
                    else {
                   
                    
                    }  
                    console.log(response.data);
                }).catch(err => {
                    console.log(err);
                });
        }
    }
    enableSaveBtn() {
        if(this.state.eventName !== '' && this.state.eventDescription !== '' && this.state.endDate !== '' && this.state.startDate !=='' && this.state.techStack !=='' && this.state.eventType !== '')
            this.setState({saveDisabled : false});
    }
    onRadioChange(event) {
        var eventType = event.target.value.trim();
        
        this.setState({eventType : eventType},  function(){ this.enableSaveBtn() });
    
    }
    handleStartChange(date) {
        
        
        this.setState({
          startDate: date
        },  function(){ this.enableSaveBtn() });
      }
      handleEndChange(date) {
        
        this.setState({
          endDate: date
        },   function(){ this.enableSaveBtn() });
      }
    validateField(keyname, value) {
        
        
         
        if(keyname ===  'title') {
            if(value.length > 0 ) {
              this.removeValidationError("Event Name is required");
              this.setState({ eventName: value }, function(){ this.enableSaveBtn() });
            }       
            else {
              this.addValidationError('Event Name is required');
              return false;
            } 
         
        }
          
        else if(keyname === 'shortdescription') {
          if(value.length > 0 ) {
              this.removeValidationError("Short Description is required");
              this.setState({ eventShortDescription: value }, function(){ this.enableSaveBtn() });
            }       
            else {
              this.addValidationError('Short Description is required');
              return false;
            } 
         }
         else if(keyname === 'longdescription') {
            if(value.length > 0 ) {
                this.removeValidationError("Long Description is required");
                this.setState({ eventLongDescription: value }, function(){ this.enableSaveBtn() });
              }       
              else {
                this.addValidationError('Long Description is required');
                return false;
              } 
           }
        else if(keyname === 'venue') {
            if(value.length > 0 ) {
                this.removeValidationError("Venue is required");
                this.setState({ venue: value }, function(){ this.enableSaveBtn() });
              }       
              else {
                this.addValidationError('Venue is required');
                return false;
              } 
           }
         else if(keyname === 'endDate') {
            if(value.length > 0 ) {
                this.removeValidationError("End Date is required");
                this.setState({ endDate: value }, function(){ this.enableSaveBtn() });
              }       
              else {
                this.addValidationError('End Date is required');
                return false;
              } 
           }
           else if(keyname === 'startDate') {
            if(value.length > 0 ) {
                this.removeValidationError("Start Date is required");
                this.setState({ startDate: value }, function(){ this.enableSaveBtn() });
              }       
              else {
                this.addValidationError('Start Date is required');
                return false;
              } 
           }
           else if(keyname === 'techStack') {
            if(value.length > 0 ) {
                this.removeValidationError("Tech Stack is required");
                this.setState({ techStack: value }, function(){ this.enableSaveBtn() });
              }       
              else {
                this.addValidationError('Tech Stack is required');
                return false;
              } 
           }
      }

    addValidationError(message) {
        this.setState((previousState) => {
            const validationErrors = [...previousState.validationErrors];
            validationErrors.push({ message });
            return {
                validationErrors: validationErrors
            };
        });
    }


    removeValidationError(message) {
        this.setState((previousState) => {
            const validationErrors = previousState
                .validationErrors
                .filter(error => error.message !== message);

            return {
                validationErrors: validationErrors
            };
        });
    }

    render() {
        const validationErrorSummary = this.state.validationErrors.map(error =>
            <div key={uuidv1()} className="alert alert-danger alert-dismissible fade show">
                {error.message}
                <button type="button" className="close" data-dismiss="alert">
                    <span>&times;</span>
                </button>
            </div>
        );

        return(
            <div className="card card-body">
                <div className="mb-2">
                    <span className="h4 my-auto"><i className="fa fa-file-text-o fa-lg"></i> New Event</span>
                    <a className="float-right ml-auto" onClick={this.props.onCloseModal}>
                        <i className="fa fa-remove fa-2x mr-2 text-danger"></i>
                    </a>
                </div>
                {validationErrorSummary}
                <form onSubmit={this.onSave} className="mt-2">
                    <div className="form-group">
                        <label htmlFor="title">Event Name</label>
                        <input type="text" className="form-control" name="title" autoFocus onChange={this.OnTextChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Short Description</label>
                        <textarea className="form-control" name="shortdescription" rows="3" onChange={this.OnTextChange}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Long Description</label>
                        <textarea className="form-control" name="longdescription" rows="3" onChange={this.OnTextChange}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Venue</label>
                        <input type="text" className="form-control" name="venue" rows="3" onChange={this.OnTextChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="startDate">Commencing Date</label>
                        <DatePicker name="startDate" minDate={Date.now()} selected={this.state.startDate}  onChange={this.handleStartChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="endDate">End Date</label>
                        {/* <input type="text" className="form-control" name="endDate" onChange={this.OnTextChange}  /> */}
                        <DatePicker name="endDate"  selected={this.state.endDate}  onChange={this.handleEndChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventType">Event Type</label>
                        <div className='from-control'>
                            <div name="eventType" className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="eventTypeRadio" id="techEvent" onChange={this.onRadioChange} value="Tech Event" />
                                <label className="form-check-label" htmlFor="techEvent"> Technical Event </label>
                            </div>
                            <div name="eventType" className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="eventTypeRadio" id="nonTechEvent" onChange={this.onRadioChange} value="Non TechEvent" />
                                <label className="form-check-label" htmlFor="nonTechEvent"> Non Technical Event </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="techStack">Tech Stack</label>
                        <textarea type="text" className="form-control" rows="10" name="techStack" onChange={this.OnTextChange}  />
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-4 col-md-3 col-xl-2  ml-auto">
                            {/* <button className="btn btn-danger btn-lg btn-block mt-2 mt-sm-0"
                                onClick={this.props.onCloseModal}
                                type="button">
                                <i className="fa fa-remove mr-2"></i>Cancel
                            </button> */}
                        </div>
                        <div className="col-sm-4 col-md-3 col-xl-2">
                            <button type="submit"  className="btn btn-success btn-lg btn-block" disabled={this.state.saveDisabled}>
                                <i className="fa fa-save mr-2"></i>Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

ManagementViews.propTypes = {
    onCloseModal: PropTypes.func,
    onSaveNote: PropTypes.func
};

export default ManagementViews