import axios from 'axios';
import config from "../config";

const httpInstance = axios.create({
  baseURL: config.API_URL
})

// Add a request interceptor

httpInstance.interceptors.request.use(
  async config => {
    // newConfig.headers.Authorization = ``;
    return { ...config };
  },
  error => {
    return Promise.reject(error);
  }
)

httpInstance.interceptors.response.use(
  async response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
)

export default httpInstance;