import axios from "axios";

const PrivateAxios = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

export default PrivateAxios;
