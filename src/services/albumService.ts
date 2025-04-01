import { artistAPI } from "./httpService";

export const createAlbum = async (albumData: {
  name: string;
  description: string;
  genre_id: string;
  image?: File;
  bg_image?: File;
}) => {
  try {
    const formData = new FormData();
    Object.entries(albumData).forEach(([key, value]) => {
      if (value !== undefined) {
        formData.append(key, value);
      }
    });

    const response = await artistAPI.post("/album/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (error) {
    console.error("createAlbum error:", error);
    throw error;
  }
};
