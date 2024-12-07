import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const getAuthToken = (): string | null => {
  return localStorage.getItem("accessToken");
};

const handleRequest = (config: any) => {
  const token = getAuthToken();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
};

const handleRequestError = (error: any) => {
  return Promise.reject(error);
};

const handleResponseError = async (error: any) => {
  if (error.response?.status === 401) {
    window.location.href = "/";
  }
  return Promise.reject(error);
};

const tokenInstance = axios.create({
  baseURL,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

tokenInstance.interceptors.request.use(handleRequest, handleRequestError);

tokenInstance.interceptors.response.use(
  (response) => response,
  handleResponseError
);

export default tokenInstance;
