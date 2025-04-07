import { FC } from "react";
import { Track } from "../../types";
import { MoreVertical } from "lucide-react";
import NoImage from "../../assets/image/no-album-image.svg";

type MusicCardProps = {
  track: Track;
  size?: "small" | "medium" | "large";
  onFavoriteClick?: (id: string) => void;
  onMenuClick?: (id: string) => void;
};

const MusicCard: FC<MusicCardProps> = ({
  track,
  size = "medium",
  onFavoriteClick,
  onMenuClick,
}) => {
  const sizeClasses = {
    small: "w-32 h-32",
    medium: "w-48 h-48",
    large: "w-64 h-64",
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // console.log("Favorite clicked for track:", track.id);
    onFavoriteClick?.(track.id);
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // console.log("Menu clicked for track:", track.id);
    onMenuClick?.(track.id);
  };

  return (
    <div className='group relative cursor-pointer w-[180px] sm:w-[220px] md:w-[240px] lg:w-[240px] mx-2'>
      <div
        className={`${sizeClasses[size]} rounded-lg overflow-hidden mx-auto relative`}
      >
        <img
          src={track.album.image ? track.album.image : NoImage}
          alt={track.name}
          className='w-full h-full object-cover transform transition-transform group-hover:scale-105'
        />
        <div className='absolute top-2 right-2 flex gap-2'>
          <div
            onClick={handleMenuClick}
            className='p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 text-white transition-all'
          >
            <MoreVertical size={16} />
          </div>
        </div>
      </div>
      <div className='mt-3 text-center'>
        <h3 className='text-primaryText font-semibold truncate'>
          {track.name}
        </h3>
        <p className='text-gray-400 text-sm truncate'>{track.artist.name}</p>
      </div>
    </div>
  );
};

export default MusicCard;
