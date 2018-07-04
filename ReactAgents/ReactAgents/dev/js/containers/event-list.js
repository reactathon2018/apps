import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectEvent} from '../actions/index'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class EventList extends Component {

    render() {
        return (
            <table><th><Button variant="contained" color="primary" onClick={() => this.props.selectEvent(this.props.events[0])}>{this.props.events[0].name}</Button></th>
                   <th><Button variant="contained" color="secondary" onClick={() => this.props.selectEvent(this.props.events[1])}>{this.props.events[1].name}</Button></th>
                   <th><Button variant="contained" onClick={() => this.props.selectEvent(this.props.events[2])}>{this.props.events[2].name}</Button></th>
            </table>
        );
    }

}

// Get apps state and pass it as props to EventList
//      > whenever state changes, the EventList will automatically re-render
function mapStateToProps(state) {
    return {
        events: state.events,
        hacks: state.hacks
    };
}

// Get actions and pass them as props to to EventList
//      > now EventList has this.props.selectEvent
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectEvent: selectEvent}, dispatch);
}

// We don't want to return the plain EventList (component) anymore, we want to return the smart Container
//      > EventList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(EventList);
