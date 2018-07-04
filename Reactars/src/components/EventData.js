import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
   getEvent
} from './../redux/actions/actions'

/** renders bg white when user not follow, render green when followed */
class EventData extends Component {
    constructor(props) {
        super(props)
       
    }
   
    render() {
        let following = this.props.events
      //  const f = following.indexOf(this.props.to_follow)
        return ( 
            <div>
                <div>
                    <div data-reactroot="">{following.events}</div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        events: state.events.events,
    }
}
export default connect(mapStateToProps, { 
    getEvent
})(EventData);