import { FETCH_ALL_HACKATHONS } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_HACKATHONS:
      return action.payload.data;
  }
  return state;
}
