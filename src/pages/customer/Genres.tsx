import { FC, useState } from "react";
import Template from "../../layouts/Template";

const genres = [
  {
    name: "Indie Mix",
    image:
      "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?ixlib=rb-4.0.3",
  },
  {
    name: "House Mix",
    image:
      "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?ixlib=rb-4.0.3",
  },
  {
    name: "Pop Mix",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3",
  },
  {
    name: "Rock Mix",
    image:
      "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-4.0.3",
  },
  {
    name: "Chill Mix",
    image:
      "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-4.0.3",
  },
  {
    name: "Classical Mix",
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3",
  },
  {
    name: "Punk Mix",
    image:
      "https://images.unsplash.com/photo-1604514813560-1e4f5726db65?ixlib=rb-4.0.3",
  },
  {
    name: "Romantic Mix",
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3",
  },
];

const Genres: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGenres = genres.filter((genre) =>
    genre.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Template>
      <div className='flex-1 bg-gradient-to-b from-primary to-black p-8 overflow-auto pb-28'>
        <div className='mb-6'>
          <input
            type='text'
            placeholder='Search genres...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full px-4 py-3 rounded-lg bg-[#282828] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition-all'
          />
        </div>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {filteredGenres.map((genre, index) => (
            <div
              key={index}
              className='relative h-48 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105'
              style={{
                backgroundImage: `url(${genre.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
                <h2 className='text-white text-xl font-bold'>{genre.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Template>
  );
};

export default Genres;
