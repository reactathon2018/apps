import React from 'react';
import Nomination from '../../form/nomination';
import Modal from './Modal';

export default class NominationModal extends React.Component {
    render() {
        return (
            <Modal onClose={this.props.onClose} contentStyle={{ minHeight: '400px' }}>
                <div className="nomination">
                    <h2>
                        Register
                    </h2>                    
                    <Nomination onSubmit={this.onSubmit} />
                </div>
            </Modal>
        )
    }
}