import { GET_HACKATHON_DETAILS } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case GET_HACKATHON_DETAILS:
      const { name, _id, leaderBoard, contact, rules } = action.payload.data;
      const lbJson = JSON.parse(leaderBoard);
      const contactJson = JSON.parse(contact);
      const rulesJson = JSON.parse(rules);
      const trimmedJson = {
        name,
        _id,
        leaderBoard: lbJson,
        contact: contactJson,
        rules: rulesJson
      };
      return trimmedJson;
  }
  return state;
}
