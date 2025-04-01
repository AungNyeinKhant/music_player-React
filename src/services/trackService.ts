import { artistAPI } from "./httpService";

export const createTrack = async (trackData: {
  name: string;
  audio: File;
  genre_id: string;
  album_id: string;
  description?: string;
}) => {
  try {
    const formData = new FormData();
    Object.entries(trackData).forEach(([key, value]) => {
      if (value !== undefined) {
        formData.append(key, value);
      }
    });

    const response = await artistAPI.post("/track/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (error) {
    console.error("createTrack error:", error);
    throw error;
  }
};
