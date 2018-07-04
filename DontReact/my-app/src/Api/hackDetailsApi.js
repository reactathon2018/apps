import axios from 'axios';

const fetchuserDetails = (dispatch) => {
    //api call
   dispatch({type :"DETAILS_FETCH_CALL"});
     axios.get('http://localhost:3000/api/event/findEvents')
    .then(response => {       
        //console.log(response);
        dispatch({type :"DETAILS_FETCHED", payload : response.data});
       
    })
    .catch(error => {
      console.log(error);
    })  
   /* setTimeout(function(){
        let data = [{eventid:"1","name":"Reactathon","description":"My description","duration":"3","registration_close_date": "8/3/2018","venue":"Chennai",
        "portfolio":"CMB","start_date":"2018-07-02","end_date":"2018-07-04","organiser_name":"Pradeep","organiser_contact":"r.pradeep@verizon.com"},
        {eventid:2,"name":"Testathon","description":"My description","duration":"4","registration_close_date": "8/3/2018","venue":"Hyderbad","portfolio":"CMB",
        "portfolio":"CMB","start_date":"2018-07-02","end_date":"2018-07-04","organiser_name":"Pradeep","organiser_contact":"r.pradeep@verizon.com"}];
        dispatch({type :"DETAILS_FETCHED", payload : data});
    },1000 );  */
}


const registerUser = (dispatch,userobj) => {
    //api call
    dispatch({type :"REGISTER_USER"});  
    let regObj = Object.assign({},userobj);
    delete  regObj["registeringUser"];
    delete  regObj["registeringCompleted"];
    
    console.log("userobj",regObj);
   /** axios.get('http://localhost:3000/api/event/set')
    .then(response => { 
        console.log(response);
        dispatch({type :"REGISTERD_USER", payload : response.data});
       
    })
    .catch(error => {
      console.log(error);
    })  **/
    setTimeout(function(){  dispatch({type :"REGISTER_USER_COMPLETED"}) },2000);
} 

export default {fetchuserDetails,registerUser};