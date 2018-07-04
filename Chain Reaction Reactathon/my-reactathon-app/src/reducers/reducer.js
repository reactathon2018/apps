let initialState = {
  userProfileData:{},
  currentPage:"ProfileNavigator",
  currentProfilePage : "UserProfile",
  isUserLoggedIn : false,
  editForm: false,
  userName:"",
  myJoblist:[],
  viewjobList:[{jobId:'007',jobName:'Agent',jobDesc:'Cannot be disclosed',jobSkills:['LOL','LOL','LOL','LOL'],interviewDate:'3/7/2018',jobLocation:'Hyderabad'},
           {jobId:'008',jobName:'Henchman',jobDesc:'You dont want to know',jobSkills:['LOL','LOL','LOL','LOL'],interviewDate:'4/7/2018',jobLocation:'Chennai'}]
};
export default (state = initialState, action) => {
  let nextState = {...state};
 switch (action.type) {
  case 'SIMPLE_ACTION':
       nextState.userProfileData = action.payload;
      return nextState;
  case 'SET_USER_PROFILE':
      nextState.userProfileData = action.payload;
      return nextState;
  case 'SET_USERNAME':
      nextState.userName = action.payload;
      return nextState;
  case 'UPLOAD_TO_USER_PROFILE':
      nextState.userProfileData = action.payload;
      nextState.editForm = false;
      return nextState;
  case 'SET_USER_LOGGED_IN':
      nextState.isUserLoggedIn = action.payload;
      return nextState;
  case 'FORM_EDIT':
      nextState.editForm = true;
      return nextState;
  case 'SET_USER_PROFILE_VIEW':
      nextState.userProfileViewMode = action.payload;
      return nextState;
  case 'SET_CURRENT_PROFILE_PAGE':
      nextState.currentProfilePage = action.payload;
      return nextState;
  case 'SET_VIEW_JOB_LIST':
      nextState.viewjobList = action.payload;
      return nextState;
  case 'ADD_MY_JOB_LIST':

    // let appliedJobList;
     // appliedJobList = nextState.viewjobList.filter((job)=>{
     //   if(job.jobId === action.payload )
     //   return true;
     // });
      nextState.currentProfilePage = "ViewJobs";
      nextState.myJoblist.push(action.payload);
      return nextState;




  default:
   return state
 }
}
