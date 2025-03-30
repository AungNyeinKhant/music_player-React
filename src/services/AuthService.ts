import { adminAPI, artistAPI, userAPI } from "./httpService";
//========================= user =========================
export const userLogin = async (email: string, password: string) => {
  try {
    const response = await userAPI.post("/login", {
      email,
      password,
    });
    console.log("userLogin response:", response);
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
  dateOfBirth?: string;
  image?: File;
}) => {
  try {
    const formData = new FormData();
    Object.entries(userData).forEach(([key, value]) => {
      if (value !== undefined) {
        formData.append(key, value);
      }
    });

    const response = await userAPI.post("/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("userRegister response:", response);
    return response;
  } catch (error) {
    console.error("userRegister error:", error);
    throw error;
  }
};
//========================= artist ================
export const artistLogin = async (email: string, password: string) => {
  try {
    const response = await artistAPI.post("/login", {
      email,
      password,
    });
    console.log("artistLogin response:", response);
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

    const response = await artistAPI.post("/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("artistRegister response:", response);
    return response;
  } catch (error) {
    console.error("artistRegister error:", error);
    throw error;
  }
};

//========================= admin =====================
export const adminLogin = async (email: string, password: string) => {
  try {
    const response = await adminAPI.post("/login", {
      email,
      password,
    });
    console.log("userLogin response:", response);
    return response;
  } catch (error) {
    console.error("userLogin error:", error);
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
