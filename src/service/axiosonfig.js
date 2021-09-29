import axios from "axios";

//client api
const baseURL = "https://api.tvmaze.com";

const axiosObj = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosObj;
