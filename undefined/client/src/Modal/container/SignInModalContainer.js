import React from 'react';
import SignInModal from '../components/SignInModal';
import { connect } from 'react-redux';
import { signIn, SIGNIN_REQUEST_NAME } from '../../UserAction/actions';

export class SignInModalContainer extends React.Component {

    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onClose() {
        this.props.hideModal();
    }

    componentDidUpdate() {
        if (this.props.isAutenticated) {
            this.props.hideModal();
        }
    }

    onSubmit(values) {

        if (values.email === '') {
            alert("Please enter Email");
            return;
        } else if (values.password === '') {
            alert("Please enter password");
            return;
        }

        this.props.signIn(values.email, values.password);        
    }

    render() {
        return (
            <SignInModal onClose={this.onClose} onSubmit={this.onSubmit} loading={this.props.loading} error={this.props.error} />
        )
    }
}


const mapStateToProps = (state) => ({
    loading: state.getIn(['httpReducer', 'requests', SIGNIN_REQUEST_NAME, 'loading'], false),
    error: state.getIn(['httpReducer', 'requests', SIGNIN_REQUEST_NAME, 'error'], null),
    isAutenticated: state.getIn(['userActionReducer', 'user', 'isAutenticated'], false),
    user: state.getIn(['userActionReducer', 'user', 'userInfo'], null),
})

export default connect(mapStateToProps, { signIn })(SignInModalContainer)