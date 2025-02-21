import React from "react";
import { Menu, Search, Bell } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className='bg-black sticky top-0 z-50'>
      <div className='flex items-center justify-between p-4'>
        <button
          onClick={onMenuClick}
          className='p-2 hover:bg-[#282828] rounded-lg md:hidden'
        >
          <Menu className='w-6 h-6 text-gray-400 hover:text-primaryText' />
        </button>

        <div className='flex-1 mx-4'>
          <div className='relative max-w-md'>
            <Search className='w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2' />
            <input
              type='text'
              placeholder='Search for songs, artists...'
              className='w-full pl-10 pr-4 py-2 bg-[#242424] text-primaryText rounded-full focus:outline-none focus:ring-2 focus:ring-secondary'
            />
          </div>
        </div>

        <button className='p-2 hover:bg-[#282828] rounded-lg'>
          <Bell className='w-6 h-6 text-gray-400 hover:text-primaryText' />
        </button>
      </div>
    </header>
  );
};

export default Header;
