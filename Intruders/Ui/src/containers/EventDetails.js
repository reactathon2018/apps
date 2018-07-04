import React, { Component } from 'react';
import Modal from 'react-modal';
class EventDetails extends Component {

    constructor(props) {
        super(props);
        console.log(props);        
        this.onOpenModal = this.onOpenModal.bind(this);        

    }

    onOpenModal() {
        this.props.onCloseModal();
        this.props.onOpenEnrollForm();
    }

    render() {
        return (
            <div className="container-fluid h-100">
                <div className="card card-body">
                    <div className="mb-2">
                        <span className="h4 my-auto">{this.props.eventDetails.eventName}</span>
                        <a className="float-right ml-auto" onClick={this.props.onCloseModal}>
                            <i className="far fa-times-circle fa-2x mr-2 text-danger"></i>
                        </a>
                    </div>
                    <div className="form-group">
                        <p className="form-check-label">{this.props.eventDetails.eventLongDescription}</p>
                    </div>
                    <div className="form-group">
                        <p className="form-check-label"><b>Venue:</b> {this.props.eventDetails.venue}</p>
                    </div>
                    <div className="form-group">
                        <p className="form-check-label"><b>Technical Stack:</b> {this.props.eventDetails.techStack}</p>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="form-group row">
                        <div className="col-sm-4 col-md-3 col-xl-2">
                            <button className="btn btn-primary btn-lg btn-block mt-2 mt-sm-0" onClick={this.onOpenModal} type="button">
                                <i className="fab fa-envira mr-2"></i>Enroll
                            </button>
                        </div>
                        <div className="col-sm-4 col-md-3 col-xl-2">
                            <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={this.props.onCloseModal}>
                                <i className="fas fa-pencil-alt mr-2"></i>Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default EventDetails;
