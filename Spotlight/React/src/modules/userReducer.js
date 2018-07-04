import { CANDIDATE } from "../constants/userType"
import { MANAGER } from '../constants/userType'
import { HR } from '../constants/userType'

const initialState ={
    profile:[]
}

export default (state = initialState, action)=>{
    switch (action.type){
        case CANDIDATE :
            return {
                ...state,profile:[CANDIDATE,action.payload]
            }
        default:
            return state;
    }
}