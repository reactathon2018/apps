import {doGet,doPost} from '../components/api';

export const simpleAction = () => dispatch => {
 dispatch({
  type: 'SIMPLE_ACTION',
  payload: {val:'result_of_simple_action'}
 })
}

export const setCredentials = (payload) => dispatch => {
debugger;
dispatch({
 type: 'SET_USERNAME',
 payload: payload.username
});
  doGet('api/candidate/'+ payload.username).then((response)=>{
    if(response.data !== "" && response.data !== null ){
      dispatch({
       type: 'SET_USER_PROFILE',
       payload: response.data
      })
    }else{
      dispatch({
       type: 'SET_USER_PROFILE',
       payload: null
      })
    }
   }).catch(function (error) {
    console.log(error);
    dispatch({
     type: 'SET_USER_PROFILE',
     payload: null
    })
  });

    /* api for user details */
    dispatch({
     type: 'SET_USER_PROFILE',
     payload: null
    })
   }

export const setPassword = (payload) => dispatch => {
    dispatch({
     type: 'SIMPLE_ACTION',
     payload: payload
    })
   }

   export const setUsername = (payload) => dispatch => {
       dispatch({
        type: 'SET_USERNAME',
        payload: payload
       })
      }
   export const onSubmithandler = (payload) => dispatch => {
   //  dispatch({
   //   type: 'UPLOAD_TO_USER_PROFILE',
   //   payload: payload
   // });
   var newPayload = payload;
   if (newPayload.skillset.length > 0){
     let skillset = newPayload.skillset.split(',');
     newPayload.skillset = skillset;
   }
   console.log(newPayload);
   doPost('api/candidate',newPayload).then((response)=>{
     if(response.data !== "" && response.data !== null ){
       dispatch({
        type: 'UPLOAD_TO_USER_PROFILE',
        payload: response.data
      });
     }
    }).catch(function (error) {
     console.log(error);
     dispatch({
      type: 'UPLOAD_TO_USER_PROFILE',
      payload: payload
    });
   });
   }

   export const editForm = () => dispatch => {
    dispatch({
     type: 'FORM_EDIT',
     payload: true
    })
   }

 export const setUserLoggedIn = () => dispatch => {
    dispatch({
     type: 'SET_USER_LOGGED_IN',
     payload: true
    })
   }

 export const setCurrentProfilePage = (payload) => dispatch => {
    dispatch({
     type: 'SET_CURRENT_PROFILE_PAGE',
     payload: payload
    })
   }

   export const getNewJobs = () => dispatch => {
     doGet('api/jobs').then((response)=>{
       console.log("Job Response");
       console.log(response);
       dispatch({
        type: 'SET_VIEW_JOB_LIST',
        payload: response.data
       })
      }).catch(function (error) {
       console.log(error);
       dispatch({
        type: 'SET_VIEW_JOB_LIST',
        payload: []
       })
     });
     }

  export const applyJob = (payload) => dispatch => {

    doPost('api/interview',payload).then((response)=>{
      if(response.data !== "" && response.data !== null ){
        dispatch({
         type: 'ADD_MY_JOB_LIST',
         payload: response.data
       });
      }
     }).catch(function (error) {
      console.log(error);
      dispatch({
       type: 'ADD_MY_JOB_LIST',
       payload: {}
     });
    });
     }
