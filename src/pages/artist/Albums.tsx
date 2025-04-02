import React, { useState, useEffect } from "react";
import { artistAlbumList } from "../../services/albumService";
import Dashboard from "../../layouts/Dashboard";
import { Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { artistAPI } from "../../services/httpService";
import DEFAULT_ALBUM_IMAGE from "../../assets/image/no-album-image.svg";

type Album = {
  id: string;
  name: string;
  image: string | null;
  description: string;
  genre_id: string;
  created_at: string;
  genre: { name: string };
};

const Albums: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response: any = await artistAlbumList();
        if (response.success) {
          setAlbums(response.data);
        }
      } catch (error) {
        console.error("Error fetching albums:", error);
        alert("Failed to fetch albums");
      }
    };

    fetchAlbums();
  }, []);

  // Removed dummy data

  const handleRowClick = (id: string) => {
    alert(`Album ID: ${id}`);
  };

  const handleDelete = async (e: React.MouseEvent, album: Album) => {
    e.stopPropagation();
    if (window.confirm(`Do you want to delete ${album.name} id ${album.id}?`)) {
      try {
        // await artistAPI.delete(`/albums/${album.id}`);
        // setAlbums(albums.filter((a) => a.id !== album.id));
      } catch (error) {
        console.error("Error deleting album:", error);
        alert("Failed to delete album");
      }
    }
  };

  return (
    <Dashboard>
      <div className='bg-dashboard-primary rounded-lg shadow-lg p-6'>
        {/* Header with title and create button */}
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-bold text-dashboard-primaryText'>
            Album List
          </h1>
          <Link
            to='/artist/albums/create'
            className='flex items-center gap-2 bg-dashboard-secondary hover:bg-opacity-80 text-white px-4 py-2 rounded-md transition-colors'
          >
            <Plus size={18} />
            Create Album
          </Link>
        </div>

        {/* Albums table */}
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='bg-dashboard-primaryDark text-dashboard-primaryText border-b border-dashboard-accent border-opacity-20'>
                <th className='text-left py-3 px-4'>Name</th>
                <th className='text-left py-3 px-4'>Cover</th>
                <th className='text-left py-3 px-4'>Genre</th>
                <th className='text-left py-3 px-4'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {albums.map((album) => (
                <tr
                  key={album.id}
                  onClick={() => handleRowClick(album.id)}
                  className='border-b border-dashboard-accent border-opacity-10 hover:bg-dashboard-primaryDark cursor-pointer transition-colors'
                >
                  <td className='py-3 px-4 text-dashboard-primaryText'>
                    {album.name}
                  </td>
                  <td className='py-3 px-4 text-dashboard-primaryText'>
                    <div className='w-12 h-12 rounded overflow-hidden'>
                      <img
                        src={
                          album.image ? `${album.image}` : DEFAULT_ALBUM_IMAGE
                        }
                        alt={album.name}
                        className='w-full h-full object-cover'
                      />
                    </div>
                  </td>

                  <td className='py-3 px-4 text-dashboard-primaryText'>
                    {album.genre.name}
                  </td>
                  <td className='py-3 px-4 text-dashboard-primaryText'>
                    <button
                      onClick={(e) => handleDelete(e, album)}
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

export default Albums;
