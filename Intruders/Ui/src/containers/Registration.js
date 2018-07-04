import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import { createApolloFetch } from 'apollo-fetch';

class Registration extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            teamName: '',
            email:'',
            teamSize :'',
            teamDetails :'',
            saveDisabled : true,
            contactNo : '',
            validationErrors: []
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
        this.enableSaveBtn = this.enableSaveBtn.bind(this);
        //this.Child = this.Child.bind(this);
        //this.onTagsChange = this.onTagsChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    onTextChange(event) {
        const value = event.target.value.trim();
        const keyname = event.target.name.trim();

        this.validateField(keyname, value);
        
        
    }
    
    
    onSave(event) {
        event.preventDefault();

        if (this.state.validationErrors && this.state.validationErrors.length === 0) {
            
            console.log(this.state);
            const fetch = createApolloFetch({
                uri: 'http://localhost:4000/reactathon',
            });
            const q = `mutation signUp($name: String, $teamName: String, $emailId: String, $teamSize: Int, $teamDetails: String, $contactNo: String){
                signUpUser(name:$name, teamName: $teamName, emailId:$emailId,teamSize: $teamSize,teamDetails:$teamDetails,contactNo:$contactNo)
            }`
            
            var teamDetails = {
                name: this.state.name,
                teamName: this.state.teamName,
                emailId: this.state.emailId,
                teamSize: this.state.teamSize,
                teamDetails: this.state.teamDetails,
                contactNo: this.state.contactNo.toString()
            }
            fetch({
                query: q,      
                variables: teamDetails
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
    onRadioChange(event) {
        var teamsze = parseInt(event.target.value.trim());
        if(teamsze >0) {
            this.setState({showTextBox : true}, function(){ this.enableSaveBtn() });
        }
        this.setState({teamSize : teamsze});
       
    }
    
    enableSaveBtn() {
        if(this.state.name !== '' && this.state.teamName !== '' && this.state.email !== '' && this.state.teamSize !=='' && this.state.teamDetails.length >0)
            this.setState({saveDisabled : false});
    }

    validateField(keyname, value) {
        
          if(keyname ===  'email') {
            var emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

            if(emailValid)
            {
                this.removeValidationError("Email is invalid");
                this.setState({ email: value }, function(){ this.enableSaveBtn() });
            }
            else {
                this.addValidationError('Email is invalid');
                return false;
            }
            
          }
           
          else if(keyname ===  'name') {
              if(value.length > 0 ) {
                this.removeValidationError("Name is required");
                this.setState({ name: value }, function(){ this.enableSaveBtn() });
              }       
              else {
                this.addValidationError('Name is required');
                return false;
              } 
           
          }
            
          else if(keyname === 'teamName') {
            if(value.length > 0 ) {
                this.removeValidationError("Team Name is required");
                this.setState({ teamName: value }, function(){ this.enableSaveBtn() });
              }       
              else {
                this.addValidationError('Team Name is required');
                return false;
              } 
           }
           else if(keyname === 'number') {
            if(value.length > 0 ) {
                this.removeValidationError("Contact Number is required");
                this.setState({ teamName: value }, function(){ this.enableSaveBtn() });
              }       
              else {
                this.addValidationError('Contact Number is required');
                return false;
              } 
           }
           
           else if(keyname === 'txtName1' || keyname === 'txtName2' || keyname === 'txtName3' || keyname === 'txtName4' || keyname === 'txtName5') {
            if(value.length > 0 ) {
                this.removeValidationError("Team Details is required");
                //var prevstate = this.state.teamDetails;
                //prevstate.push(value);
              
                this.setState({ teamDetails: value}, function(){ this.enableSaveBtn() });
              }       
              else {
                this.addValidationError('Team Details is required');
                return false;
              } 
           }  
        }
    addValidationError(message) {        
        this.setState((previousState) => {
            const validationErrors = [...previousState.validationErrors];
            if(validationErrors) {
                if(validationErrors.length ===0) {
                    validationErrors.push({message});
                }
                else {
                    var insertMsg =true;
                    if(validationErrors.forEach(msg => {
                        if(msg === message) {
                            insertMsg = false;
                        }
                    })) 
                    {
                        if(insertMsg)
                            validationErrors.push({message});
                    }
                }
            }
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

        return (

            <div className="card card-body">
                <div className="mb-2">        
                    <span className="h4 my-auto">Registration Form</span>
                    <a className="float-right ml-auto" onClick={this.props.onCloseModal}>
                    <i className="far fa-times-circle fa-2x mr-2 text-danger"></i></a>
                    
                </div>
                {validationErrorSummary}
                <form onSubmit={this.onSave} className="mt-2">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" name="name" autoFocus onKeyUp={this.onTextChange} /> 
                </div>        
                <div className="form-group">  
                        <label htmlFor="teamName">Team Name:</label>                        
                        <input type="text" className="form-control" name="teamName" autoFocus onChange={this.onTextChange} />
                        </div>
                        <div className="form-group">      
                        <label htmlFor="email">Email:</label>
                        
                        <input type="text" className="form-control" name="email" onChange={this.onTextChange} />
                        </div>
                        <div className="form-group">      
                        <label htmlFor="number">Contact Number:</label>
                        
                        <input className="form-control" name="number" type="number" maxLength="9" onChange={this.onTextChange} />
                        </div>
                        <div className="form-group">
                        <div className="form-check form-check-inline">      
                        <label htmlFor="rbtteamsize">Team Size:</label>                        
                        <input type="radio" className="form-control" name="rbtteamsize" value="1" onChange={this.onRadioChange} />1
                        <input type="radio" className="form-control" name="rbtteamsize" value="2" onChange={this.onRadioChange} />2
                        <input type="radio" className="form-control" name="rbtteamsize" value="3" onChange={this.onRadioChange} />3
                        <input type="radio" className="form-control" name="rbtteamsize" value="4" onChange={this.onRadioChange} />4
                        
                        </div>
                    
                </div>                   
                <div className="form-group">  
                <div className="form-check form-check-inline">
                        <label htmlFor="teamDetaisl">Team Details:</label>      
                        <input type="text" className="form-control " name="txtName1" autoFocus onChange={this.onTextChange} />                  
                        <input type="text" className="form-control " name="txtName2" autoFocus disabled ={this.state.teamSize <2} onChange={this.onTextChange} />
                        <input type="text" className="form-control" name="txtName3" autoFocus disabled ={this.state.teamSize <3}  onChange={this.onTextChange} />
                        <input type="text" className="form-control" name="txtName4" autoFocus disabled ={this.state.teamSize <4} onChange={this.onTextChange} />
                        
                        </div>
                        </div>   
                    <div className="form-group row">
                        
                        
                        <div className="col-sm-4 col-md-3 col-xl-2">
                            <button type="submit" className="btn btn-success btn-lg btn-block" disabled = {this.state.saveDisabled}>
                                <i className="fa fa-save mr-2"></i>Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}



export default Registration;








