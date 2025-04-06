import { AuthContextType } from "../types";
import { adminAPI, artistAPI, userAPI } from "./httpService";
import { getRefreshToken } from "../utils/crypto";

//========================= user =========================

export const userLogin = async (email: string, password: string) => {
  try {
    const response: any = await userAPI.post("/auth/login", {
      email,
      password,
    });

    userAPI.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response?.data?.data?.accessToken}`;
    return response;
  } catch (error) {
    console.error("userLogin error:", error);
    throw error;
  }
};

export const userRegister = async (userData: {
  name: string;
  email: string;
  password: string;
  phone: string;
  dob?: string;
  image?: File;
}) => {
  try {
    const formData = new FormData();
    Object.entries(userData).forEach(([key, value]) => {
      if (value !== undefined) {
        formData.append(key, value);
      }
    });

    const response: any = await userAPI.post("/auth/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("userRegister response:", response);

    userAPI.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response?.data?.data?.accessToken}`;
    return response;
  } catch (error) {
    console.error("userRegister error:", error);
    throw error;
  }
};

//========================= artist ================
export const artistLogin = async (email: string, password: string) => {
  try {
    const response: any = await artistAPI.post("/auth/login", {
      email,
      password,
    });
    artistAPI.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response?.data?.data?.accessToken}`;
    return response;
  } catch (error) {
    console.error("artistLogin error:", error);
    throw error;
  }
};

export const artistRegister = async (artistData: {
  name: string;
  email: string;
  password: string;
  phone: string;
  dob: string;
  image?: File;
  bg_image?: File;
  nrc_front: File;
  nrc_back?: File;
}) => {
  try {
    const formData = new FormData();
    Object.entries(artistData).forEach(([key, value]) => {
      if (value !== undefined) {
        formData.append(key, value);
      }
    });

    const response = await artistAPI.post("/auth/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (error) {
    console.error("artistRegister error:", error);
    throw error;
  }
};

//========================= admin =====================
export const adminLogin = async (email: string, password: string) => {
  try {
    const response: any = await adminAPI.post("/auth/login", {
      email,
      password,
    });
    adminAPI.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response?.data?.data?.accessToken}`;
    return response;
  } catch (error) {
    console.error("adminLogin error:", error);
    throw error;
  }
};

export const adminRegister = async (adminData: {
  name: string;
  email: string;
  password: string;
  staff_id: string;
  image?: File;
}) => {
  try {
    const formData = new FormData();
    Object.entries(adminData).forEach(([key, value]) => {
      if (value !== undefined) {
        formData.append(key, value);
      }
    });

    const response = await adminAPI.post("/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("adminRegister response:", response);
    return response;
  } catch (error) {
    console.error("adminRegister error:", error);
    throw error;
  }
};

export const logout = (auth:AuthContextType | null) =>{
  localStorage.removeItem("refreshToken");
  auth?.setUser(null);
  userAPI.defaults.headers.common["Authorization"] = "";
  artistAPI.defaults.headers.common["Authorization"] = ""
  adminAPI.defaults.headers.common["Authorization"] = ""
}