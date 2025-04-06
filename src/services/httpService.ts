import axios from "axios";

let navigateFunction: (path: string) => void = () => {
  console.warn(
    "Navigation handler not yet set. Ensure useNavigationSetup is called in a component."
  );
};

export const setNavigationHandler = (handler: (path: string) => void) => {
  navigateFunction = handler;
};

export const navigateTo = (path: string) => {
  navigateFunction(path);
};

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
