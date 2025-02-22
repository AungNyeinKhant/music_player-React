import { FC } from "react";
import { Track } from "../../types";

type MusicCardProps = {
  track: Track;
  size?: "small" | "medium" | "large";
};

const MusicCard: FC<MusicCardProps> = ({ track, size = "medium" }) => {
  const sizeClasses = {
    small: "w-32 h-32",
    medium: "w-48 h-48",
    large: "w-64 h-64",
  };

  return (
    <div className='group relative cursor-pointer w-[180px] sm:w-[220px] md:w-[240px] lg:w-[260px] mx-2'>
      <div className={`${sizeClasses[size]} rounded-lg overflow-hidden mx-auto`}>
        <img
          src={track.cover}
          alt={track.title}
          className='w-full h-full object-cover transform transition-transform group-hover:scale-105'
        />
      </div>
      <div className='mt-3'>
        <h3 className='text-primaryText font-semibold truncate'>{track.title}</h3>
        <p className='text-gray-400 text-sm truncate'>{track.artist}</p>
      </div>
    </div>
  );
};

export default MusicCard;
