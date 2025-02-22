import { FC } from "react";
import {
  Play,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Volume2,
} from "lucide-react";

const Player: FC = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-[#181818] border-t border-[#282828] p-4 z-50'>
      <div className='flex justify-between items-center max-w-screen-xl mx-auto'>
        <div className='flex items-center w-[30%]'>
          <img
            src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745'
            alt='Current track'
            className='w-14 h-14 rounded-lg'
          />
          <div className='ml-4'>
            <h4 className='text-primaryText text-sm'>Higher Power</h4>
            <p className='text-gray-400 text-xs'>Coldplay</p>
          </div>
        </div>

        <div className='flex flex-col items-center w-[40%]'>
          <div className='flex items-center gap-4'>
            <Shuffle className='w-5 h-5 text-gray-400 hover:text-primaryText cursor-pointer' />
            <SkipBack className='w-5 h-5 text-gray-400 hover:text-primaryText cursor-pointer' />
            <div className='w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer'>
              <Play className='w-5 h-5 text-black' />
            </div>
            <SkipForward className='w-5 h-5 text-gray-400 hover:text-primaryText cursor-pointer' />
            <Repeat className='w-5 h-5 text-gray-400 hover:text-primaryText cursor-pointer' />
          </div>
          <div className='flex items-center gap-2 w-full mt-2'>
            <span className='text-xs text-gray-400'>1:12</span>
            <div className='h-1 flex-grow rounded-full bg-[#4d4d4d]'>
              <div className='h-full w-[30%] bg-white rounded-full'></div>
            </div>
            <span className='text-xs text-gray-400'>3:28</span>
          </div>
        </div>

        <div className='flex items-center gap-2 w-[30%] justify-end'>
          <Volume2 className='w-5 h-5 text-gray-400' />
          <div className='h-1 w-24 rounded-full bg-[#4d4d4d]'>
            <div className='h-full w-[70%] bg-white rounded-full'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
