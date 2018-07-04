import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginForm from '../components/Login'
import {register} from '../actions/index'

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class HackDetails extends Component {

renderList() {
        return this.props.hacks.map((hack) => {
            if(hack.tense == this.props.event.name){
            return (<li key={hack.id}><h2>EventName: {hack.name}</h2>
                     <h3>Description: {hack.description}</h3>
                     <h3>StartDate: {hack.startDate}</h3>
                      <h3>EndDate: {hack.endDate}</h3>
                     </li>
            );}

        });
    }

    render() {
        if (!this.props.event) {
            return (<div>Select an event listed above...</div>);
        }
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}

// "state.activeEvent" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        event: state.activeEvent,
        hacks: state.hacks
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({register: register}, dispatch);
}

export default connect(mapStateToProps)(HackDetails);
