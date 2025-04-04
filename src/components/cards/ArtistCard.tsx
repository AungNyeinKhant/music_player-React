import { FC } from "react";

type Artist = {
  id: string;
  name: string;
  image: string;
  listen_count?: number;
};

type ArtistCardProps = {
  artist: Artist;
  size?: "small" | "medium" | "large";
};

const ArtistCard: FC<ArtistCardProps> = ({ artist, size = "medium" }) => {
  const sizeClasses = {
    small: "w-32 h-32",
    medium: "w-48 h-48",
    large: "w-64 h-64",
  };

  return (
    <div className='group relative cursor-pointer w-[180px] sm:w-[220px] md:w-[240px] lg:w-[240px] mx-2'>
      <div
        className={`${sizeClasses[size]} rounded-lg overflow-hidden mx-auto relative`}
      >
        <img
          src={artist.image}
          alt={artist.name}
          className='w-full h-full object-cover transform transition-transform group-hover:scale-105'
        />
      </div>
      <div className='mt-3 text-center'>
        <h3 className='text-primaryText font-semibold truncate'>
          {artist.name}
        </h3>
        {artist.listen_count && (
          <p className='text-gray-400 text-sm truncate'>
            {artist.listen_count.toLocaleString()} listeners
          </p>
        )}
      </div>
    </div>
  );
};

export default ArtistCard;
