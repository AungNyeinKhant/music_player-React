import { userAPI } from "./httpService";
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
//========================= artist ================
export const artistLogin = async (email: string, password: string) => {
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
//========================= admin =====================
export const adminLogin = async (email: string, password: string) => {
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
