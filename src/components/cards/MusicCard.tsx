import React from "react";
import { Track } from "../../types";

type MusicCardProps = {
  track: Track;
  size?: "small" | "medium" | "large";
}

const MusicCard: React.FC<MusicCardProps> = ({ track, size = "medium" }) => {
  const sizeClasses = {
    small: "w-32 h-32",
    medium: "w-48 h-48",
    large: "w-64 h-64",
  };

  return (
    <div className='group relative cursor-pointer'>
      <div className={`${sizeClasses[size]} rounded-lg overflow-hidden`}>
        <img
          src={track.cover}
          alt={track.title}
          className='w-full h-full object-cover transform transition-transform group-hover:scale-105'
        />
      </div>
      <div className='mt-2'>
        <h3 className='text-primaryText font-semibold'>{track.title}</h3>
        <p className='text-gray-400 text-sm'>{track.artist}</p>
      </div>
    </div>
  );
};

export default MusicCard;
