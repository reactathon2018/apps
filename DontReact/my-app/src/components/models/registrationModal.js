import React,{Component} from 'react';
import {connect} from 'react-redux';
import Api from '../../Api/hackDetailsApi';

class RegistrationMod extends Component {

    render(){
        console.log("registration modal ",this.props.registration);
        return (           
                <div style={{minWidth:'800px',minHeight:'700px'}}>                
                    <div>
                        <h3>Event Registration</h3>
                    </div>
                    <div style={ (this.props.registration.registeringUser || this.props.registration.registeringCompleted) ? {display :'none'} : {display :'block'}}>
                        <form className="ui form" style={{padding:'2rem',marginRight: '3rem'}}>
                            <div className="field">
                                <label>Team Name :</label>
                                <input type="text" name="team-name" placeholder="Team Name" value={this.props.registration.teamname} 
                                onChange={this.props.updateRegistrationObj.bind(this,"UPDATE_TEAM_NAME")}/>
                            </div>
                            <div className="field">
                                <label>Team Size :</label>
                                <input type="text" name="team-size" placeholder="Team Size" value={this.props.registration.teamsize} 
                                onChange={this.props.updateRegistrationObj.bind(this,"UPDATE_TEAM_SIZE")} />
                            </div>
                            <div className="field" style={this.props.registration.teamsize != "" ? {display:'block'}: {display:'none'}}>
                                <div style={{paddingBottom:'0.5rem'}}>Add Team Member details : </div>
                                <div className="regBlock">
                                    { 
                                        this.props.registration.members.map((team,index) =>{
                                            return (
                                                <div style={{padding:'0rem 1rem 1rem 1rem'}}>
                                                    <h4>Member : {index+1}</h4> 
                                                    <div className="field" style={{width:'25rem',paddingLeft: '2rem'}}>
                                                        <label>Name </label>
                                                        <input type="text" name="team-name" placeholder="Team Name" value={team.name} 
                                                        onChange={this.props.updateTeamObj.bind(this,{type:"UPDATE_TEAM_ARRAY_NAME", index:index})}/>
                                                    </div>
                                                    <div className="field" style={{width:'10rem',paddingLeft: '2rem'}}>
                                                        <label>Portfolio </label>
                                                        <input type="text" name="team-name" placeholder="Portfolio" value={team.portfolio}
                                                        onChange={this.props.updateTeamObj.bind(this,{type:"UPDATE_TEAM_ARRAY_PORTFOLIO", index:index})}/>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="field">
                                <label>Primary Contact Name :</label>
                                <input type="text" name="poc" placeholder="POC Name" value={this.props.registration.pocname} 
                                onChange={this.props.updateRegistrationObj.bind(this,"UPDATE_POC_NAME")} />
                            </div>
                            <div className="field">
                                <label>Email Address :</label>
                                <input type="text" name="email" placeholder="Email Address" value={this.props.registration.pocemail} 
                                onChange={this.props.updateRegistrationObj.bind(this,"UPDATE_EMAIL")} />
                            </div>
                            <div className="field">
                                <label>Mobile :</label>
                                <input type="text" name="Mobile" placeholder="Mobile" value={this.props.registration.poccontact} 
                                onChange={this.props.updateRegistrationObj.bind(this,"UPDATE_MOBILE")} />
                            </div>
                            <button className="ui primary button" type="submit" style={{float:'right',margin:'1rem'}}
                                    onClick={this.props.registerUser.bind(this,this.props)}>Submit</button>
                        </form>
                    </div>
                    <div  style={(this.props.registration.registeringUser && !this.props.registration.registeringCompleted) ? {display :'block'} : {display :'none'}}>
                        <div className="ui active inverted dimmer">
                            <div className="ui text loader">Loading</div>
                        </div>
                    </div>    
                    <div style={ this.props.registration.registeringCompleted ? {display :'block'} : {display :'none'}}>
                        <h3 style={{marginTop:'3rem'}}>Registration Completed Succesfully !!</h3>
                    </div>
                </div>          
        )
    }
}


function mapStateToProps(state){
     return {
        registration : state.registrationReducer
     }
}

function mapDispatchToProps(dispatch){
    return {
        updateRegistrationObj:(arg,e) => {
            dispatch({type: arg, payload : e.target.value});
        },
        updateTeamObj : (arg,e) =>{
            dispatch({type: arg.type, payload : e.target.value,index :arg.index});
        },
        registerUser : (reg_props, e) =>{
            e.preventDefault();
            let teamObj = {};
            teamObj =  reg_props.registration;
            teamObj.eventid = reg_props.eventid;
            Api.registerUser(dispatch,teamObj);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RegistrationMod);