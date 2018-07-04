import React from 'react';
import { connect } from 'react-redux';

/** Modal Components */
import SignInModalContainer from './SignInModalContainer';
import RegisterModalContainer from './RegisterModalContainer';
import SignUpModalContainer from './SignUpModalContainer';
import NominationModalContainer from './NominationModalContainer';

import { hideModal } from '../actions';

/** Modal Type Constants */
//import {SIGNIN_MODAL} from '../actions';

const MODAL_COMPONENTS = {
    signin: SignInModalContainer,
    register: RegisterModalContainer,
    signup:SignUpModalContainer,
    nomination: NominationModalContainer
};

export class ModalContainer extends React.Component {
    render() {

        if (!this.props.modalType) {
            return null;
        }

        const SpecificModal = MODAL_COMPONENTS[this.props.modalType];

        return <SpecificModal {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    modalType: state.getIn(['modalReducer', 'modalType'], null)
});

export default connect(mapStateToProps, { hideModal })(ModalContainer);