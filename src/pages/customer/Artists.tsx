import { FC, useEffect, useState } from "react";
import Template from "../../layouts/Template";
import ArtistCard from "../../components/cards/ArtistCard";
import { useNavigate } from "react-router-dom";
import { userArtistList } from "../../services/artistService";
import { Artist4User } from "../../types";

const Artists: FC = () => {
  const navigate = useNavigate();
  const [artists, setArtists] = useState<Artist4User[]>([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response: any = await userArtistList();
        setArtists(response.data.data);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };

    fetchArtists();
  }, []);

  return (
    <Template>
      <div className='flex-1 bg-gradient-to-b from-primary to-black p-8 overflow-auto pb-28'>
        <h2 className='text-2xl font-bold text-primaryText mb-6'>
          Popular Artists
        </h2>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
          {artists.map((artist) => (
            <div key={artist.id} className='flex flex-col items-center'>
              <ArtistCard
                onClick={() => {
                  navigate(`/app/artist-detail/${artist.id}`);
                }}
                artist={artist}
              />
            </div>
          ))}
        </div>
      </div>
    </Template>
  );
};

export default Artists;
