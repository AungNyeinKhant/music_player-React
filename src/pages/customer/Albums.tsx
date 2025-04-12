import { FC, useState, useEffect } from "react";
import Template from "../../layouts/Template";
import PlaylistCard from "../../components/cards/PlaylistCard";
import { PlaylistCard as PlaylistCardType } from "../../types";
import { userAlbumList } from "../../services/albumService";
import { useNavigate } from "react-router-dom";

const Albums: FC = () => {
  const [albums, setAlbums] = useState<PlaylistCardType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response: any = await userAlbumList();
        setAlbums(response.data);
      } catch (err) {
        setError("Failed to load albums");
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <Template>
      <div className='flex-1 bg-gradient-to-b from-primary to-black p-8 overflow-auto pb-28'>
        <div className='mb-8'>
          <h2 className='text-2xl font-bold text-primaryText mb-4'>Albums</h2>
          {loading ? (
            <div className='text-center py-8 text-gray-400'>
              Loading albums...
            </div>
          ) : error ? (
            <div className='text-center py-8 text-red-500'>{error}</div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {albums.map((album) => (
                <PlaylistCard
                  key={album.id}
                  playlist={album}
                  onClick={() => {
                    navigate(`/app/album-detail/${album.id}`);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Template>
  );
};

export default Albums;
