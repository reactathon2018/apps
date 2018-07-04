import axios from 'axios';
import { sendingRequest, receivedResponse } from '../http/actions';
import dataQuery from '../queries/dataqueries';

export const FETCH_HACKATON_LIST_SUCESS = "fetch_hackaton_list_success";
export const HACKATON_LIST_REQUEST_NAME = "hackatonlist_request";



export function createAction(type, data) {
    return {
        type,
        data
    }
}

export function fetchHackatonList() {
    return (dispatch, getState) => {

        dispatch(sendingRequest(HACKATON_LIST_REQUEST_NAME));

        return axios({
            url: 'https://vzhackathon-backend.herokuapp.com/graphql',
            method: 'post',
            data: {
                query: dataQuery.getHackathons()
            }
        })
            .then(response => {
                dispatch(createAction(FETCH_HACKATON_LIST_SUCESS, response.data))
                dispatch(receivedResponse(HACKATON_LIST_REQUEST_NAME));                
            })
            .catch(errors => {
                console.log(errors);
            })
    }
}