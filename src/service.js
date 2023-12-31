import { Axios } from "axios"

// base url for axios
const API_URL = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_9zLazwhedqY57YjmEW8ZCBzKBg3MI&ipAddress=8.8.8';

// create instance of axios with the base url of the api
const api = new Axios({
  baseURL: API_URL
})

export default api;
