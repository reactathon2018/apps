import { combineReducers } from "redux";
import HackathonReducer from "./reducer-hackathon-list";
import HackathonDetailReducer from "./reducer-hackathon-details";
import LoginReducer from "./reducer-login";

const rootReducer = combineReducers({
  hackathons: HackathonReducer,
  hackathonDetail: HackathonDetailReducer,
  loginDetails: LoginReducer
});

export default rootReducer;
