import axios from "axios";

const api = axios.create({
  baseURL: "https://api.tenrai.org/v1"
});

export default api;