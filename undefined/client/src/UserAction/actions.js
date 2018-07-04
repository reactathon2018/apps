import axios from 'axios';
import { sendingRequest, receivedResponse } from '../http/actions';
import dataQuery from '../queries/dataqueries';
import mutationQuery from '../queries/mutationqueries';

export const SIGNUP_SUCCESS = "signup_success";
export const SIGNIN_SUCCESS = "signin_success";
export const SIGNIN_REQUEST_NAME = "signin_request";
export const SIGNUP_REQUEST_NAME = "signup_request_name";


export function createAction(type, data) {
    return {
        type,
        data
    }
}

export function signUp(name, email, password) {
    return (dispatch, getState) => {

        dispatch(sendingRequest(SIGNUP_REQUEST_NAME));
        const userDetails = {
            name,
            email,
            password,
            role : "U"
        }
        return axios({
            url: 'https://vzhackathon-backend.herokuapp.com/graphql',
            method: 'post',
            data: {
                query: mutationQuery.addUser(userDetails)
            }
        })
            .then(response => {
                if(response.data.data.addUser && response.data.data.addUser !=null){
                    dispatch(createAction(SIGNUP_SUCCESS, response.data.data.addUser))
                    dispatch(receivedResponse(SIGNUP_REQUEST_NAME));
                } else{
                    // Error case
                    if(response.data.errors && response.data.errors.length > 0){
                        const errorObj = response.data.errors[0];
                        let error = {
                            message: errorObj.message
                        }
                        dispatch(receivedResponse(SIGNUP_REQUEST_NAME, error));
                    }                    
                }
            })
            .catch(errors => {
                console.log(errors);
            })
    }
}


export function signIn(email, password) {
    return (dispatch, getState) => {
        dispatch(sendingRequest(SIGNIN_REQUEST_NAME));

        const userDetails = {
            email,
            password
        }

        return axios({
            url: 'https://vzhackathon-backend.herokuapp.com/graphql',
            method: 'post',
            data: {
                query: dataQuery.doAuthenticate(userDetails)
            }
        })
            .then(response => {                                
                if(response.data.data.authenticate && response.data.data.authenticate !=null) {
                    dispatch(createAction(SIGNIN_SUCCESS, response.data.data.authenticate))
                    dispatch(receivedResponse(SIGNIN_REQUEST_NAME));
                } else {
                    let error = {
                        message: "Login Failed ! Please enter valid email and password"
                    }
                    dispatch(receivedResponse(SIGNIN_REQUEST_NAME, error));
                }            
            })
            .catch(errors => {
                console.log(errors);
            })
    }
}
