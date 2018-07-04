import { USER_LOGIN, USER_LOGOUT } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case USER_LOGIN:
      if (action.payload.data && action.payload.data._id)
        return { isLoggedIn: true, ...action.payload.data };
      return { isLoggedIn: false, ...action.payload.data };
    case USER_LOGOUT:
      return { isLoggedIn: null };
  }
  return state;
}
