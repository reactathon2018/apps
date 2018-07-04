const initailState ={  
    eventid:"",  
    teamname : "",
    teamsize:"",
    pocname : "",
    members : [],
    pocemail :"",
    poccontact:"",
    registeringUser :false,
    registeringCompleted : false
}

const registrationReducer =(state = initailState,action) =>{
    switch(action.type){
        case "UPDATE_TEAM_NAME" :{
            return { ...state,
                     teamname : action.payload
                    }
        }
        case "UPDATE_TEAM_SIZE" :{
            return { ...state,
                     teamsize : action.payload,
                     members : prepareTeamList(action.payload)
                   }
        }
        case "UPDATE_EMAIL" :{
            return { ...state,
                     pocemail : action.payload
                   }
        }
        case "UPDATE_POC_NAME" :{
            return { ...state,
                     pocname : action.payload
                   }
        }
        case "UPDATE_MOBILE" :{
            return { ...state,
                     poccontact : action.payload
                   }
        }
        case "UPDATE_TEAM_ARRAY_NAME" : {
            return { ...state,
                members : updateTeamArrayName(action,state)
              }
        }
        case "UPDATE_TEAM_ARRAY_PORTFOLIO" : {
            return { ...state,
                members : updateTeamArrayPortfolio(action,state)
            }       
        }
        case "REGISTER_USER": {
            return { ...state,
                registeringUser : true,
                registeringCompleted : false
            }
        }
        case "REGISTER_USER_COMPLETED" :{
            return { ...state,
                registeringUser : false,
                registeringCompleted : true
            }
        }
    }
    return state;
}

function updateTeamArrayName(action,state){
    let index = action.index;
    let value = action.payload;
    let teamList = Object.assign([],state.members);
    for(let i=0; i < teamList.length; i++){
        if(i == index){
            teamList[i].name = value;
            break;
        }
    }
    return teamList;
};


function updateTeamArrayPortfolio(action,state){
    let index = action.index;
    let value = action.payload;
    let teamList = Object.assign([],state.members);
    for(let i=0; i < teamList.length; i++){
        if(i == index){
            teamList[i].portfolio = value;
            break;
        }
    }
    return teamList;
};

function prepareTeamList (size){
    let team_list = [];
    let timeSize = parseInt(size);
    for(let i=0; i< timeSize;i++){
        team_list.push({name:"",portfolio:""});
    }
    return team_list;
}

export default registrationReducer;