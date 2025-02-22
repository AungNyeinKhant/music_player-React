import { FC } from "react";
import { Search } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <div className='flex items-center justify-between p-4'>
      <button
        onClick={onMenuClick}
        className='text-secondary font-bold text-xl mr-4 hover:text-gray-300 transition-colors  md:hidden'
      >
        Legacy
      </button>
      <div className='flex items-center bg-[#282828] rounded-full px-4 py-2 w-[400px]'>
        <Search className='w-5 h-5 text-gray-400' />
        <input
          type='text'
          placeholder='Search music, albums, artists...'
          className='bg-transparent border-none outline-none text-primaryText ml-2 w-full'
        />
      </div>
      <div className='flex items-center'>
        <div className='flex items-center bg-[#282828] rounded-full p-1 cursor-pointer'>
          <img
            src='https://github.com/shadcn.png'
            alt='User'
            className='w-8 h-8 rounded-full'
          />
          <span className='text-primaryText mx-2'>Taylor</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
