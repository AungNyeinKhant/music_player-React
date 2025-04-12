import { FC, useState } from "react";
import Template from "../../layouts/Template";
import MusicCard from "../../components/cards/MusicCard";
import PlaylistCard from "../../components/cards/PlaylistCard";
import { Play } from "lucide-react";

const ArtistDetail: FC = () => {
  const [activeTab, setActiveTab] = useState<"tracks" | "albums">("tracks");

  return (
    <Template>
      <div className='flex-1 bg-gradient-to-b from-primary to-black p-8 overflow-auto pb-28'>
        {/* Artist Header Section */}
        <div className='relative mb-20'>
          <div className='relative h-[300px] w-full'>
            <img
              src='https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop'
              alt='Artist Cover'
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black bg-opacity-30'></div>
          </div>

          {/* Profile Image */}
          <div className='absolute -bottom-16 left-8 flex items-end gap-6'>
            <div className='relative'>
              <img
                src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop'
                alt='Artist Profile'
                className='w-36 h-36 rounded-full object-cover border-4 border-black'
              />
            </div>
            <div className='mb-4'>
              <h1 className='text-4xl font-bold text-white mb-2'>John</h1>
              <p className='text-gray-200'>2,223,254 monthly listeners</p>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className='mb-8'>
          <div className='flex gap-8 border-b border-gray-700'>
            <button
              onClick={() => setActiveTab("tracks")}
              className={`pb-4 font-medium text-sm transition-colors ${
                activeTab === "tracks"
                  ? "text-white border-b-2 border-purple-600"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Tracks
            </button>
            <button
              onClick={() => setActiveTab("albums")}
              className={`pb-4 font-medium text-sm transition-colors ${
                activeTab === "albums"
                  ? "text-white border-b-2 border-purple-600"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Albums
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div>
          {activeTab === "tracks" ? (
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
              {/* Example tracks - replace with actual data */}
              <MusicCard
                track={{
                  id: "1",
                  name: "Melbourne Sunset",
                  artist: { name: "John", image: "" },
                  album: {
                    image:
                      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
                    name: "Album 1",
                  },
                  audio: "",
                  description: "",
                  genre: { name: "" },
                  listen_count: 0,
                  created_at: "",
                  genre_id: "",
                  album_id: "",
                  artist_id: "",
                }}
              />
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {/* Example albums - replace with actual data */}
              <PlaylistCard
                playlist={{
                  id: "1",
                  title: "First Album",
                  description: "Debut album",
                  coverImage:
                    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
                  songCount: 12,
                  duration: "45 min",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </Template>
  );
};

export default ArtistDetail;
