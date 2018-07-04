import React, { Component } from 'react';
import Modal from 'react-modal';
import EventDetails from './EventDetails';
import Registration from './Registration';

class EventCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faIconClass: '',
            isEventDetailsModalOpened: false,
            isEnrollModalOpened: false
        };
        if (props.eventStatus == "inProgress") {
            this.state.faIconClass = 'far fa-calendar-alt fa-icon-inprogress fa-icon-position';
        } else if (props.eventStatus == "completed") {
            this.state.faIconClass = 'far fa-calendar-check fa-icon-completed fa-icon-position';
        } else if (props.eventStatus == "upComing") {
            this.state.faIconClass = 'far fa-calendar-plus fa-icon-completed fa-icon-position';
        }

        this.onClickGetMoreDetails = this.onClickGetMoreDetails.bind(this);
        this.handleModelClose = this.handleModelClose.bind(this);
        this.onOpenEnrollmentForm = this.onOpenEnrollmentForm.bind(this);
        this.onEnrollmentCloseModal = this.onEnrollmentCloseModal.bind(this);
    }

    onClickGetMoreDetails() {
        this.setState({ isEventDetailsModalOpened: true });
    }
    handleModelClose() {
        this.setState({ isEventDetailsModalOpened: false });
    }
    onOpenEnrollmentForm() {
        this.setState({ isEnrollModalOpened: true });
    }
    onEnrollmentCloseModal() {
        this.setState({ isEnrollModalOpened: false });
    }

    render() {

        return (
            <div className="col-sm-6 d-flex">
                <div className="card card-align w-100">
                    <div className="card-body" key={this.props.id}>
                        <h5 className="card-title"> {this.props.eventName} <i className={this.state.faIconClass}></i></h5>
                        <p className="card-text">{this.props.eventShortDescription}</p>
                        <button className="btn btn-primary" onClick={this.onClickGetMoreDetails}>More Details</button>
                    </div>
                </div>
                <Modal isOpen={this.state.isEventDetailsModalOpened} onRequestClose={this.state.handleModelClose}>
                    <EventDetails eventDetails={this.props} onCloseModal={this.handleModelClose} onOpenEnrollForm={this.onOpenEnrollmentForm} />
                </Modal>
                <Modal isOpen={this.state.isEnrollModalOpened} onRequestClos={this.onEnrollmentCloseModal}>
                    <Registration onCloseModal={this.onEnrollmentCloseModal} />
                </Modal>
            </div>
        );
    }
};

export default EventCards;

