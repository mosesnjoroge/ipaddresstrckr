import { Axios } from "axios"

// create instance of axios with the base url of the api
const IpifyApi = new Axios({
  baseURL: import.meta.VITE_IPIFY_API_URL
})

export default IpifyApi;
