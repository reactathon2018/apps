import { bindActionCreators } from "redux";

export const register = (event) => {
    return {
        type: 'REGISTER',
        payload: event
    }
};

export const selectEvent = (event) => {
    return {
        type: 'EVENT_SELECTED',
        payload: event
    }
};


