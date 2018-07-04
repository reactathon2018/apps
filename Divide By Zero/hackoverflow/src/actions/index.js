import axios from "axios";

const ROOT_URL = "http://localhost:3001";

export const FETCH_ALL_HACKATHONS = "FETCH_ALL_HACKATHONS";
export const GET_HACKATHON_DETAILS = "GET_HACKATHON_DETAILS";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";

export function fetchAllHackathons() {
  const url = `${ROOT_URL}/hackathons`;
  const request = axios.get(url);

  return {
    type: FETCH_ALL_HACKATHONS,
    payload: request
  };
}

export function getHackathon(id) {
  const url = `${ROOT_URL}/hackathon/${id}`;
  const request = axios.get(url);
  return {
    type: GET_HACKATHON_DETAILS,
    payload: request
  };
}
export function loginUser(username, password) {
  const url = `${ROOT_URL}/userlogin`;
  const params = { username, password };
  const request = axios.post(url, params);
  return {
    type: USER_LOGIN,
    payload: request
  };
}

export function logoutUser(username, password) {
  return {
    type: USER_LOGOUT,
    payload: {}
  };
}
