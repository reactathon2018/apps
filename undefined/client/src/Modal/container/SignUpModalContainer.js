import React from 'react';
import SignUpModal from '../components/SignUpModal';
import { signUp, SIGNUP_REQUEST_NAME } from '../../UserAction/actions';
import { connect } from 'react-redux';

export class SignUpModalContainer extends React.Component {

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
            alert("Welcome !! Your Profile has been created successfully");
            //this.props.hideModal();
        }
    }

    onSubmit(values) {

        if (values.email === '') {
            alert("Please enter Email");
            return;
        } else if (values.password === '') {
            alert("Please enter password");
            return;
        } else if(values.username === ''){
            alert("Please enter username");
            return;
        } else if(values.password !== values.confirmPassword){
            alert("Password and Confirm does not match");
            return;
        }
        
        this.props.signUp(values.username, values.email, values.password);        
    }

    render() {
        return (
            <SignUpModal onClose={this.onClose} onSubmit={this.onSubmit} loading={this.props.loading} error={this.props.error} />
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.getIn(['httpReducer', 'requests', SIGNUP_REQUEST_NAME, 'loading'], false),
    error: state.getIn(['httpReducer', 'requests', SIGNUP_REQUEST_NAME, 'error'], null),
    isAutenticated: state.getIn(['userActionReducer', 'user', 'isAutenticated'], false),
    user: state.getIn(['userActionReducer', 'user', 'userInfo'], null),
})

export default connect(mapStateToProps, { signUp })(SignUpModalContainer);