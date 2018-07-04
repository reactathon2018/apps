import { CANDIDATE } from '../constants/userType';
import { MANAGER } from '../constants/userType'
import { HR } from '../constants/userType'
export const addCandidate = candidate =>({
    type:CANDIDATE,
    payload:candidate
})
export const addHR = hr =>({
    type:HR,
    payload:hr
})

export const addManager = manager =>({
    type:MANAGER,
    payload:manager
})