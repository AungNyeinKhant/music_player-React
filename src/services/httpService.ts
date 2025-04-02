import axios from "axios";

export const userAPI = axios.create({
  baseURL: "http://localhost:3000/api/user",
  headers: {
    "Content-Type": "application/json",
  },
});

export const artistAPI = axios.create({
  baseURL: "http://localhost:3000/api/artist",
  headers: {
    "Content-Type": "application/json",
  },
});

export const adminAPI = axios.create({
  baseURL: "http://localhost:3000/api/admin",
  headers: {
    "Content-Type": "application/json",
  },
});

/*
// Interceptor for userAPI
userAPI.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("userAccessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Use string index signature for type safety
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Interceptor for artistAPI
artistAPI.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("artistAccessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Interceptor for adminAPI
adminAPI.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("adminAccessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// You can also add response interceptors in the same way:
userAPI.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Handle user API specific errors
    return Promise.reject(error);
  }
);
*/
