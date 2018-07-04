import axios from 'axios';
var baseURL = 'http://localhost:4000/';
export function doGet(url){
  return axios.get(baseURL + url);
}

export function doPost(url,req){
  return axios.post(baseURL + url,req);
}
