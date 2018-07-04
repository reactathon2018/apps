
const initialState ={
    fetchingData :true,
    hackDetails :[]
}
const detailsReducer = (state=initialState, action) =>{
  switch(action.type){
    case "DETAILS_FETCH_CALL":{
      return { ...state,
               fetchingData : true
             }
    }
    case "DETAILS_FETCHED":{
        return {
          ...state,
          fetchingData : false,
          hackDetails : action.payload
        }
    }         
    
  }
  return state;
}

export default detailsReducer;
