import React from 'react';
import MusicCard from '../components/cards/MusicCard';
import PlaylistCard from '../components/cards/PlaylistCard';
import { Track, PlaylistCard as PlaylistCardType } from '../types/homeTypes';
import { Play } from 'lucide-react';

interface TrendingTrack {
  title: string;
  artist: string;
  duration: string;
  cover: string;
}

const Home: React.FC = () => {
  const recentlyPlayed: Track[] = [
    {
      id: '1',
      title: 'Music of the Spheres',
      artist: 'Coldplay',
      cover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3'
    },
    {
      id: '2',
      title: 'Native',
      artist: 'OneRepublic',
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3'
    },
    {
      id: '3',
      title: 'Evolve',
      artist: 'Imagine Dragons',
      cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3'
    },
    {
      id: '4',
      title: 'Starboy',
      artist: 'The Weeknd',
      cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3'
    }
  ];

  const trendingTracks: TrendingTrack[] = [
    {
      title: 'Rodrigo',
      artist: 'Foster Olive',
      duration: '3:45',
      cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3'
    },
    {
      title: 'Hard Works',
      artist: 'Justin AMDNA',
      duration: '2:58',
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3'
    },
    {
      title: 'Kiss Me More',
      artist: 'Doja Cat ft. SZA',
      duration: '5:30',
      cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3'
    },
    {
      title: 'Save Your Tears',
      artist: 'The Weeknd',
      duration: '5:35',
      cover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3'
    }
  ];

  const playlists: PlaylistCardType[] = [
    {
      id: '1',
      title: 'Lo-Fi Beats',
      description: 'Chill beats to relax/study to',
      coverImage: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3',
      songCount: 45,
      duration: '2hr 55min'
    },
    {
      id: '2',
      title: '90s Rock',
      description: 'Best of 90s rock music',
      coverImage: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-4.0.3',
      songCount: 45,
      duration: '3hr 15min'
    },
    {
      id: '3',
      title: 'Night Mode',
      description: 'Perfect for late night coding',
      coverImage: 'https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-4.0.3',
      songCount: 40,
      duration: '2hr 45min'
    }
  ];

  return (
    <div className="flex-1 bg-gradient-to-b from-gray-900 to-black p-8 overflow-auto pb-28">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Recently plays</h2>
          <a href="#" className="text-sm text-gray-400 hover:text-white">See all</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {recentlyPlayed.map(track => (
            <MusicCard key={track.id} track={track} />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Trending</h2>
        <div className="bg-[#181818] rounded-lg p-4">
          {trendingTracks.map((track, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 hover:bg-[#282828] rounded-lg group"
            >
              <div className="flex items-center flex-1">
                <span className="text-gray-400 w-8">{index + 1}</span>
                <img src={track.cover} alt={track.title} className="w-12 h-12 rounded object-cover" />
                <div className="ml-4">
                  <h4 className="text-white text-sm">{track.title}</h4>
                  <p className="text-gray-400 text-xs">{track.artist}</p>
                </div>
              </div>
              <span className="text-gray-400 text-sm mr-4">{track.duration}</span>
              <button className="w-8 h-8 rounded-full bg-green-500 items-center justify-center hidden group-hover:flex">
                <Play className="w-4 h-4 text-black" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Top playlists for you</h2>
          <a href="#" className="text-sm text-gray-400 hover:text-white">See all</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {playlists.map(playlist => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
