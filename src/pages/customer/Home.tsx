import { FC, useState, useEffect } from "react";
import MusicCard from "../../components/cards/MusicCard";
import PlaylistCard from "../../components/cards/PlaylistCard";
import {
  Track,
  PlaylistCard as PlaylistCardType,
  TrendingTrack,
  TrackContextType,
} from "../../types";
import NoImage from "../../assets/image/no-album-image.svg";

import { MoreVertical } from "lucide-react";
import Template from "../../layouts/Template";
import {
  recentTracks,
  playTrack,
  newTrendingTracksServ,
  mostPlayedTracksServ,
} from "../../services/trackService";
import { useTrack } from "../../context/TrackContext";
const Home: FC = () => {
  const chosenTracks: TrackContextType | null = useTrack();
  const [recentPlayTracks, setRecentPlayTracks] = useState<Track[]>([]);
  const [newTrendingTracks, setNewTrendingTracks] = useState<Track[] | null>(
    null
  );
  const [mostPlayedTracks, setMostPlayedTracks] = useState<Track[] | null>(
    null
  );
  const fetchRecentTracks = async () => {
    try {
      const response: any = await recentTracks(20);
      if (response.data.success) {
        setRecentPlayTracks(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching recent tracks:", error);
    }
  };

  const fetchMostPlayedTracks = async () => {
    try {
      const response: any = await mostPlayedTracksServ(20);
      if (response.data.success) {
        setMostPlayedTracks(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching most played tracks:", error);
    }
  };

  useEffect(() => {
    fetchRecentTracks();
    fetchTrendingTracks();
    fetchMostPlayedTracks();
  }, []);

  const fetchTrendingTracks = async () => {
    try {
      const response: any = await newTrendingTracksServ(5);
      if (response.data.success) {
        setNewTrendingTracks(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching trending tracks:", error);
    }
  };

  const playlists: PlaylistCardType[] = [
    {
      id: "1",
      title: "Lo-Fi Beats",
      description: "Chill beats to relax/study to",
      coverImage:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3",
      songCount: 45,
      duration: "2hr 55min",
    },
    {
      id: "2",
      title: "90s Rock",
      description: "Best of 90s rock music",
      coverImage:
        "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-4.0.3",
      songCount: 45,
      duration: "3hr 15min",
    },
    {
      id: "3",
      title: "Night Mode",
      description: "Perfect for late night coding",
      coverImage:
        "https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-4.0.3",
      songCount: 40,
      duration: "2hr 45min",
    },
  ];

  return (
    <Template>
      <div className='flex-1 bg-gradient-to-b from-primary to-black p-8 overflow-auto pb-28'>
        <section className='mb-8'>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-primaryText text-xl font-bold'>
              Recently plays
            </h2>
            <a
              href='#'
              className='text-gray-400 text-sm hover:text-primaryText'
            >
              See all
            </a>
          </div>
          <div className='relative w-full'>
            <div className='flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide'>
              {recentPlayTracks
                ? recentPlayTracks.map((track) => (
                    <div key={track.id} className='flex-none snap-start'>
                      <button
                        onClick={async () => {
                          try {
                            const response: any = await playTrack(track.id);
                            if (response.data.success) {
                              chosenTracks?.setChosenTrack({
                                playTrack: track,
                                queTracks: recentPlayTracks,
                              });
                            }
                          } catch (error) {
                            console.error("Error playing track:", error);
                          }
                        }}
                        className='focus:outline-none'
                      >
                        <MusicCard track={track} />
                      </button>
                    </div>
                  ))
                : "No recent tracks"}
            </div>
          </div>
        </section>

        <div className='mb-8'>
          <h2 className='text-2xl font-bold text-primaryText mb-4'>
            New Trending Tracks
          </h2>
          <div className='bg-[#181818] rounded-lg p-4'>
            {newTrendingTracks
              ? newTrendingTracks.map((track, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between p-2 hover:bg-[#282828] rounded-lg group'
                  >
                    {/* <div className='flex items-center flex-1'> */}
                    <button
                      className='flex items-center flex-1'
                      onClick={async () => {
                        try {
                          const response: any = await playTrack(track.id);
                          if (response.data.success) {
                            chosenTracks?.setChosenTrack({
                              playTrack: track,
                              queTracks: newTrendingTracks,
                            });
                          }
                        } catch (error) {
                          console.error("Error playing track:", error);
                        }
                      }}
                    >
                      <span className='text-gray-400 w-8'>{index + 1}</span>
                      <img
                        src={
                          track.album ? track.album.image || NoImage : NoImage
                        }
                        alt={track.name}
                        className='w-12 h-12 rounded object-cover'
                      />
                      <div className='ml-4'>
                        <h4 className='text-primaryText text-sm'>
                          {track.name}
                        </h4>
                        <p className='text-gray-400 text-xs'>
                          {track?.artist?.name}
                        </p>
                      </div>
                    </button>
                    {/* </div> */}
                    <div className='flex items-center gap-3'>
                      <span className='text-gray-400 text-sm'>
                        {track.listen_count.toLocaleString()} streams
                      </span>

                      <button
                        onClick={() => {
                          alert(track.id);
                        }}
                        className='w-8 h-8 rounded-full bg-secondary items-center justify-center flex hover:bg-opacity-80'
                      >
                        <MoreVertical className='w-4 h-4 text-primary' />
                      </button>
                    </div>
                  </div>
                ))
              : "No new Tracks"}
          </div>
        </div>

        <section className='mb-8'>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-primaryText text-2xl font-bold'>
              Most played tracks of the month
            </h2>
            {/* <a
              href='#'
              className='text-gray-400 text-sm hover:text-primaryText'
            >
              See all
            </a> */}
          </div>
          <div className='relative w-full'>
            <div className='flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide'>
              {mostPlayedTracks
                ? mostPlayedTracks.map((track) => (
                    <div key={track.id} className='flex-none snap-start'>
                      <button
                        onClick={async () => {
                          try {
                            const response: any = await playTrack(track.id);
                            if (response.data.success) {
                              chosenTracks?.setChosenTrack({
                                playTrack: track,
                                queTracks: mostPlayedTracks,
                              });
                            }
                          } catch (error) {
                            console.error("Error playing track:", error);
                          }
                        }}
                        className='focus:outline-none'
                      >
                        <MusicCard track={track} />
                      </button>
                    </div>
                  ))
                : "No recent tracks"}
            </div>
          </div>
        </section>

        <div className='mb-8'>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-2xl font-bold text-primaryText'>
              Top playlists for you
            </h2>
            <a
              href='#'
              className='text-sm text-gray-400 hover:text-primaryText'
            >
              See all
            </a>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6'>
            {playlists.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Home;
