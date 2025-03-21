import { FC } from "react";
import { PlaylistCard as PlaylistCardType } from "../../types";

type PlaylistCardProps = {
  playlist: PlaylistCardType;
};

const PlaylistCard: FC<PlaylistCardProps> = ({ playlist }) => {
  return (
    <div className='bg-primaryDark rounded-lg p-4 hover:bg-gray-800 transition-colors'>
      <div className='relative aspect-square mb-4'>
        <img
          src={playlist.coverImage}
          alt={playlist.title}
          className='w-full h-full object-cover rounded-md'
        />
      </div>
      <h3 className='text-primaryText font-semibold truncate'>
        {playlist.title}
      </h3>
      <p className='text-gray-400 text-sm mt-1'>
        {playlist.songCount} songs • {playlist.duration}
      </p>
    </div>
  );
};

export default PlaylistCard;
