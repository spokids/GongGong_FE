import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const tokenInstance = axios.create({
  baseURL,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

tokenInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default tokenInstance;
