import React from 'react';
import '../Modal.css';

export default class Modal extends React.Component {

    listenKeyboard(event) {
        if (event.key === 'Escape' || event.keyCode === 27) {
            this.props.onClose();
        }
    }

    componentDidMount() {
        if (this.props.onClose) {
            window.addEventListener('keydown', this.listenKeyboard.bind(this), true);
        }
    }

    componentWillUnmount() {
        if (this.props.onClose) {
            window.removeEventListener('keydown', this.listenKeyboard.bind(this), true);
        }
    }

    onOverlayClick() {        
        this.props.onClose();
    }

    onDialogClick(event) {
        event.stopPropagation();
    }

    render() {
        const overlayStyle = this.props.overlayStyle ? this.props.overlayStyle : {};
        const contentStyle = this.props.contentStyle ? this.props.contentStyle : {};        
        return (
            <div>
                <div className="modal-overlay-div" style={overlayStyle} />
                <div className="modal-content-div" style={contentStyle}> 
                    <span style={{position: 'absolute', right: '10px'}}>                   
                        <i className="fa fa-window-close" style={{fontSize : '24px'}} onClick={() => this.props.onClose()}></i>
                    </span>
                    <div className="modal-dialog-div" onClick={this.onDialogClick}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}