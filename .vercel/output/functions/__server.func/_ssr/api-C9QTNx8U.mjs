import { a as axios } from "../_libs/axios.mjs";
const API_URL = "http://localhost:5001/api";
const api = axios.create({
  baseURL: API_URL
});
api.interceptors.request.use((config) => {
  const adminInfo = localStorage.getItem("adminInfo");
  if (adminInfo) {
    const { token } = JSON.parse(adminInfo);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});
export {
  api as a
};
