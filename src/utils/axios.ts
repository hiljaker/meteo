import axiosInstance from "axios";

const axios = axiosInstance.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axios.interceptors.request.use(
  (config) => {
    config.params.key = import.meta.env.VITE_API_KEY;

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axios;
