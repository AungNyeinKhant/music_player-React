import { adminAPI, userAPI } from "./httpService";



export const getPurchases = async (): Promise<any> => {
  try {
    const response = await adminAPI.get("/purchase");
    return response;
  } catch (error) {
    console.error("Error fetching purchases:", error);
    throw error;
  }
};

export const handleStatus = async (purchaseId: string, reject?: boolean): Promise<any> => {
  try {
    const response = await adminAPI.post(`/purchase/handle`, {
      purchase_id:purchaseId,
      reject,
    });
    return response;
  } catch (error) {
    console.error("Error handling status:", error);
}
}
export const getPackages = async (): Promise<any> => {
  try {
    const response = await userAPI.get("/packages");
    return response;
  } catch (error) {
    console.error("Error fetching packages:", error);
    throw error;
  }
};

export const purchasePackage = async (
  packageId: string,
  transitionImage: File
): Promise<any> => {
  try {
    const formData = new FormData();
    formData.append("package_id", packageId);
    formData.append("transition", transitionImage);

    const response = await userAPI.post("/subscribe-package", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.error("Error purchasing package:", error);
    throw error;
  }
};
