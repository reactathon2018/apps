import React from 'react';
import NominationModal from '../components/NominationModal';
import {connect} from 'react-redux';

import { SIGNIN_REQUEST_NAME } from '../../UserAction/actions';

export class NominationModalContainer extends React.Component{

    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onClose() {
        this.props.hideModal();
    }

    onSubmit(){

    }

    render(){
        return(
            <NominationModal onClose={this.onClose} onSubmit={this.onSubmit} />
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.getIn(['httpReducer', 'requests', SIGNIN_REQUEST_NAME, 'loading'], false),
    error: state.getIn(['httpReducer', 'requests', SIGNIN_REQUEST_NAME, 'error'], null),
    isAutenticated: state.getIn(['userActionReducer', 'user', 'isAutenticated'], false),
    user: state.getIn(['userActionReducer', 'user', 'userInfo'], null),
})

export default connect(mapStateToProps, null)(NominationModalContainer)