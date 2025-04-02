import { artistAPI } from "./httpService";

interface Track {
  id: string;
  name: string;
  audio: string;
  genre_id: string;
  album_id: string;
  artist_id: string;
  listen_count: number;
  description: string;
  created_at: string;
  artist: {
    name: string;
    image: string;
  };
  genre: {
    name: string;
  };
  album: {
    name: string;
    image: string;
  };
}

export const findTracksByAlbumId = async (albumId: string) => {
  try {
    const response = await artistAPI.get(`/tracks?album_id=${albumId}`);

    return response;
  } catch (error) {
    console.error("findTracksByAlbumId error:", error);
    throw error;
  }
};

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
