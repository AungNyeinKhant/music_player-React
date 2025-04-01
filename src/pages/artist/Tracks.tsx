import { FC, useState } from "react";
import Dashboard from "../../layouts/Dashboard";
import { Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import CreateTrack from "./form/CreateTrack";

interface Track {
  id: string;
  name: string;
  genre: string;
  description: string;
  audioUrl: string;
}

interface Album {
  id: string;
  name: string;
}

const Tracks: FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [tracks, setTracks] = useState<Track[]>([
    {
      id: "1",
      name: "Summer Nights",
      genre: "Pop Rock",
      description:
        "A vibrant summer anthem with energetic guitar riffs and powerful vocals. The perfect soundtrack for those warm evening drives along the coast.",
      audioUrl:
        "https://cdn.pixabay.com/download/audio/2022/11/22/audio_febc508520.mp3",
    },
    {
      id: "2",
      name: "Midnight Dreams",
      genre: "Alternative Rock",
      description:
        "A melodic journey through the night, featuring atmospheric synthesizers and dreamy lyrics. Takes listeners on an emotional ride through the darkness.",
      audioUrl:
        "https://cdn.pixabay.com/download/audio/2022/10/25/audio_f8cac506d3.mp3",
    },
    {
      id: "3",
      name: "Ocean Breeze",
      genre: "Ambient",
      description:
        "Calming waves of sound wash over gentle synthesizer pads, creating a peaceful atmosphere perfect for relaxation and meditation.",
      audioUrl:
        "https://cdn.pixabay.com/download/audio/2022/09/02/audio_8209b2333f.mp3",
    },
    {
      id: "4",
      name: "Urban Groove",
      genre: "Hip Hop",
      description:
        "Modern beats mixed with classic hip-hop elements create an infectious rhythm that captures the essence of city life.",
      audioUrl:
        "https://cdn.pixabay.com/download/audio/2022/08/04/audio_2dde668d05.mp3",
    },
    {
      id: "5",
      name: "Electric Dreams",
      genre: "Electronic",
      description:
        "Pulsating synthesizers and dynamic beats combine in this energetic electronic track that transports listeners to a futuristic soundscape.",
      audioUrl:
        "https://cdn.pixabay.com/download/audio/2022/12/15/audio_c41e33d50d.mp3",
    },
    {
      id: "6",
      name: "Acoustic Sunrise",
      genre: "Folk",
      description:
        "Warm acoustic guitars and gentle percussion create a peaceful morning atmosphere, perfect for starting your day.",
      audioUrl:
        "https://cdn.pixabay.com/download/audio/2023/01/05/audio_c5a1290311.mp3",
    },
    {
      id: "7",
      name: "Jazz Cafe",
      genre: "Jazz",
      description:
        "Smooth jazz arrangements with piano and saxophone create the perfect ambiance for a sophisticated evening.",
      audioUrl:
        "https://cdn.pixabay.com/download/audio/2022/07/26/audio_fb53b4df75.mp3",
    },
    {
      id: "8",
      name: "Neon Lights",
      genre: "Synthwave",
      description:
        "Retro-futuristic beats and synthesizers combine to create a nostalgic journey through an electronic landscape.",
      audioUrl:
        "https://cdn.pixabay.com/download/audio/2022/11/15/audio_5b5f54d9d5.mp3",
    },
  ]);

  const [albums] = useState<Album[]>([
    { id: "67de5b0a1c15745e62bb4fef", name: "Summer Collection" },
    { id: "67ec292b4d2f3913c6c875b4", name: "Winter Beats" },
    { id: "67ec29cc4d2f3913c6c875b5", name: "Spring Melodies" },
  ]);

  const handleRowClick = (id: string) => {
    alert(`Track ID: ${id}`);
  };

  const handleDelete = async (e: React.MouseEvent, track: Track) => {
    e.stopPropagation();
    if (window.confirm(`Do you want to delete ${track.name}?`)) {
      try {
        // await artistAPI.delete(`/tracks/${track.id}`);
        // setTracks(tracks.filter((t) => t.id !== track.id));
      } catch (error) {
        console.error("Error deleting track:", error);
        alert("Failed to delete track");
      }
    }
  };

  return (
    <Dashboard>
      <div className='bg-dashboard-primary rounded-lg shadow-lg p-6'>
        <div className='mb-6'>
          <h1 className='text-2xl font-bold text-dashboard-primaryText mb-2'>
            Tracks
          </h1>
          <p className='text-dashboard-primaryText opacity-80 mb-4'>
            Choose an album
          </p>
          <div className='flex gap-4 items-center'>
            <select
              value={selectedAlbum}
              onChange={(e) => setSelectedAlbum(e.target.value)}
              className='bg-dashboard-primaryDark text-dashboard-primaryText px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-dashboard-secondary'
            >
              <option value=''>Choose album</option>
              {albums.map((album) => (
                <option key={album.id} value={album.id}>
                  {album.name}
                </option>
              ))}
            </select>
            <button
              // to={`/artist/tracks/create?albumId=${selectedAlbum}`}
              className={`flex items-center gap-2 ${
                selectedAlbum
                  ? "bg-dashboard-secondary"
                  : "bg-gray-500 cursor-not-allowed"
              } text-white px-4 py-2 rounded-md transition-colors`}
              onClick={(e) => {
                e.preventDefault();
                if (selectedAlbum) {
                  setShowModal(true);
                }
              }}
            >
              <Plus size={18} />
              Create Track
            </button>
            <Modal
              title='Create Track'
              showModal={showModal}
              setShowModal={setShowModal}
            >
              <CreateTrack selectedAlbum={selectedAlbum} albums={albums} />
            </Modal>
          </div>
        </div>

        <div className='overflow-x-auto  overflow-y-auto'>
          <table className='w-full border-collapse min-w-[800px]'>
            <thead>
              <tr className='bg-dashboard-primaryDark text-dashboard-primaryText border-b border-dashboard-accent border-opacity-20'>
                <th className='text-left py-3 px-4'>Name</th>
                <th className='text-left py-3 px-4'>Genre</th>
                <th className='text-left py-3 px-4'>Description</th>
                <th className='text-left py-3 px-4'>Audio</th>
                <th className='text-left py-3 px-4'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((track) => (
                <tr
                  key={track.id}
                  onClick={() => handleRowClick(track.id)}
                  className='border-b border-dashboard-accent border-opacity-10 hover:bg-dashboard-primaryDark cursor-pointer transition-colors'
                >
                  <td className='py-3 px-4 text-dashboard-primaryText'>
                    {track.name}
                  </td>
                  <td className='py-3 px-4 text-dashboard-primaryText'>
                    {track.genre}
                  </td>
                  <td className='py-3 px-4 text-dashboard-primaryText'>
                    <div className='line-clamp-2'>{track.description}</div>
                  </td>
                  <td className='py-3 px-4 text-dashboard-primaryText'>
                    <audio controls className='h-8'>
                      <source src={track.audioUrl} type='audio/mpeg' />
                      Your browser does not support the audio element.
                    </audio>
                  </td>
                  <td className='py-3 px-4 text-dashboard-primaryText'>
                    <button
                      onClick={(e) => handleDelete(e, track)}
                      className='text-red-500 hover:text-red-700 transition-colors'
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Dashboard>
  );
};

export default Tracks;
