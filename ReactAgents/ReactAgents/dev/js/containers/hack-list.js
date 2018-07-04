import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectHack} from '../actions/index'


class HackList extends Component {

    renderList() {
        return this.props.hacks.map((hack) => {
            return (
                <li
                    key={hack.id}
                    onClick={() => this.props.selectHack(hack)}
                >

                    {hack.name}

                </li>
            );
        });
    }

    render() {
        return (
           <ul>
               {this.renderList()}
           </ul>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        hacks: state.hacks
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectHack: selectHack}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(HackList);
