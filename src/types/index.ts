import React from "react";

export type TrendingTrack = {
  title: string;
  artist: string;
  duration: string;
  cover: string;
};

export type PlaylistCard = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  songCount?: number;
  duration?: string;
};

export type Playlist = {
  id: string;
  name: string;
};

export type SidebarItem = {
  icon: React.ReactNode;
  label: string;
  path: string;
};

export type UserAuth = {
  id: string;
  role: string;
};

export type AuthContextType = {
  user: UserAuth | null;
  setUser: React.Dispatch<React.SetStateAction<UserAuth | null>>;
};

export type Track = {
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
};

export type TrackContextFormat = {
  playTrack: Track;
  queTracks: Track[];
};
export type TrackContextType = {
  chosenTrack: TrackContextFormat | null;
  setChosenTrack: React.Dispatch<
    React.SetStateAction<TrackContextFormat | null>
  >;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  togglePlay: () => void;
  handleProgressChange: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleVolumeChange: (e: React.MouseEvent<HTMLDivElement>) => void;
  formatTime: (time: number) => string;
  handleNextTrack: () => void;
  handlePreviousTrack: () => void;
};
