import axios from "axios";

//client api
const baseURL = "https://api.tvmaze.com";

const axiosObj = axios.create({
  baseURL,
});
export default axiosObj;
