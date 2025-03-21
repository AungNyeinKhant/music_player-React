export type Track = {
  id: string;
  title: string;
  artist: string;
  cover: string;
}

export type TrendingTrack = {
  title: string;
  artist: string;
  duration: string;
  cover: string;
}

export type PlaylistCard = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  songCount?: number;
  duration?: string;
}

export type Playlist = {
  id: string;
  name: string;
}

export type SidebarItem = {
  icon: React.ReactNode;
  label: string;
  path: string;
}