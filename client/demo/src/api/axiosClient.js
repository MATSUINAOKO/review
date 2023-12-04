import axios from "axios";

const axiosClient = axios.create({
  baseURL: "api/vi",
});

export default axiosClient;
