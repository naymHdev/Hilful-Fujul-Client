import axios from "axios";

const PrivateAxios = axios.create({
  baseURL: import.meta.env.VITE_API_LOCALHOST,
  withCredentials: true,
});

export default PrivateAxios;
