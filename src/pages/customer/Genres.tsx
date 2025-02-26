import { FC } from "react";
import Template from "../../layouts/Template";

const genres = [
  { name: "Indie Mix", image: "/genres/indie.jpg" },
  { name: "House Mix", image: "/genres/house.jpg" },
  { name: "Pop Mix", image: "/genres/pop.jpg" },
  { name: "Rock Mix", image: "/genres/rock.jpg" },
  { name: "Chill Mix", image: "/genres/chill.jpg" },
  { name: "Classical Mix", image: "/genres/classical.jpg" },
  { name: "Punk Mix", image: "/genres/punk.jpg" },
  { name: "Romantic Mix", image: "/genres/romantic.jpg" },
];

const Genres: FC = () => {
  return (
    <Template>
      <div className='flex-1 bg-gradient-to-b from-primary to-black p-8 overflow-auto pb-28'>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {genres.map((genre, index) => (
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
