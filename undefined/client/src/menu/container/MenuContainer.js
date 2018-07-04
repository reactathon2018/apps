import React from 'react';
import { connect } from 'react-redux';
import Menu from '../components/Menu';
import { SIGNIN_MODAL, SIGNUP_MODAL } from '../../Modal/actions';
import { loadModal } from '../../Modal/actions';

export class MenuContainer extends React.Component {

    constructor(props){
        super(props);
        this.showSignInMenu = this.showSignInMenu.bind(this);
        this.showSignUpMenu = this.showSignUpMenu.bind(this);
    }

    showSignInMenu(){
        this.props.loadModal(SIGNIN_MODAL);
    }

    showSignUpMenu(){
        this.props.loadModal(SIGNUP_MODAL);
    }

    render() {
        return (
            <Menu showSignInMenu={this.showSignInMenu} showSignUpMenu={this.showSignUpMenu} {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({    
    isAutenticated: state.getIn(['userActionReducer', 'user', 'isAutenticated'], false),
    user: state.getIn(['userActionReducer', 'user', 'userInfo'], null),
})

export default connect(mapStateToProps, { loadModal })(MenuContainer);