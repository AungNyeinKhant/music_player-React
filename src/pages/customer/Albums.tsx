import { FC } from "react";
import Template from "../../layouts/Template";
import PlaylistCard from "../../components/cards/PlaylistCard";
import { PlaylistCard as PlaylistCardType } from "../../types";

const Albums: FC = () => {
  const albums: PlaylistCardType[] = [
    {
      id: "1",
      title: "Music of the Spheres",
      description: "Coldplay",
      coverImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3",
      songCount: 12,
      duration: "45min"
    },
    {
      id: "2",
      title: "Native",
      description: "OneRepublic",
      coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3",
      songCount: 14,
      duration: "52min"
    },
    {
      id: "3",
      title: "Evolve",
      description: "Imagine Dragons",
      coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3",
      songCount: 11,
      duration: "39min"
    },
    {
      id: "4",
      title: "Starboy",
      description: "The Weeknd",
      coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3",
      songCount: 18,
      duration: "68min"
    }
  ];

  return (
    <Template>
      <div className='flex-1 bg-gradient-to-b from-primary to-black p-8 overflow-auto pb-28'>
        <div className='mb-8'>
          <h2 className='text-2xl font-bold text-primaryText mb-4'>Albums</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {albums.map((album) => (
              <PlaylistCard key={album.id} playlist={album} />
            ))}
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Albums;
