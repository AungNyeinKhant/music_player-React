import { artistAPI, userAPI } from "./httpService";

// ==================== user =============================
export const recentTracks = async (limit: number) => {
  try {
    const response = await userAPI.get(`/tracks/recent?limit=${limit}`);

    return response;
  } catch (error) {
    console.error("recentTracks error:", error);
    throw error;
  }
};

export const playTrack = async (track_id: string) => {
  try {
    const response = await userAPI.post("/play", { track_id });
    return response;
  } catch (error) {
    console.error("playTrack error:", error);
    throw error;
  }
};
export const newTrendingTracksServ = async (limit: number) => {
  try {
    const response = await userAPI.get(
      `/tracks/trending?limit=${limit}&offset=1`
    );
    return response;
  } catch (error) {
    console.error("trendingTracks error:", error);
    throw error;
  }
};

export const mostPlayedTracksServ = async (limit: number) => {
  try {
    const response = await userAPI.get(`/tracks/most-played?limit=${limit}`);
    return response;
  } catch (error) {
    console.error("mostPlayedTracks error:", error);
    throw error;
  }
};

// ==================== user end =============================
// ==================== artist =============================
export const findTracksByAlbumId = async (albumId: string) => {
  try {
    console.log("before findTracksByAlbumId: ", albumId);
    const response = await artistAPI.get(`/tracks?album_id=${albumId}`);
    console.log("after findTracksByAlbumId: ", response);
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
// ==================== artist end =============================
