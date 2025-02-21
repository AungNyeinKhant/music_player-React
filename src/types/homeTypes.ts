export interface Track {
  id: string;
  title: string;
  artist: string;
  cover: string;
}

export interface PlaylistCard {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  songCount?: number;
  duration?: string;
}

export interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}