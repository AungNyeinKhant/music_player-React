import { FC } from "react";
import Template from "../../layouts/Template";
import MusicCard from "../../components/cards/MusicCard";
import ArtistCard from "../../components/cards/ArtistCard";

interface Artist {
  id: string;
  name: string;
  cover: string;
  listenCount: number;
}

const Artists: FC = () => {
  const artists: Artist[] = [
    {
      id: "1",
      name: "The Weeknd",
      cover:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3",
      listenCount: 1234567,
    },
    {
      id: "2",
      name: "Imagine Dragons",
      cover:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3",
      listenCount: 987654,
    },
    {
      id: "3",
      name: "Coldplay",
      cover:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3",
      listenCount: 876543,
    },
    {
      id: "4",
      name: "OneRepublic",
      cover:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3",
      listenCount: 765432,
    },
  ];

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
                artist={{
                  id: artist.id,
                  name: artist.name,
                  listen_count: 300,
                  image: artist.cover,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </Template>
  );
};

export default Artists;
