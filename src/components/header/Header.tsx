import { FC } from "react";
import { Search } from "lucide-react";

interface HeaderProps {
  onSidebarOpen: () => void;
}

const Header: FC<HeaderProps> = ({ onSidebarOpen }) => {
  return (
    <div className='flex items-center justify-between p-4 bg-primaryDark'>
      {/* Clickable Logo */}
      <button
        onClick={onSidebarOpen}
        className='text-secondary text-xl font-bold  items-center gap-2  md:hidden'
      >
        <span>Legacy</span>
      </button>

      {/* Search Bar */}
      <div className='flex items-center flex-1 max-w-md mx-4'>
        <div className='relative w-full'>
          <input
            type='text'
            placeholder='Search...'
            className='w-full py-2 pl-10 pr-4 text-sm bg-[#282828] text-primaryText rounded-full focus:outline-none focus:ring-1 focus:ring-secondary'
          />
          <Search className='absolute left-3 top-2.5 w-5 h-5 text-gray-400' />
        </div>
      </div>

      {/* User Profile */}
      <div className='flex items-center'>
        <div className='flex items-center'>
          <img
            src='https://github.com/shadcn.png'
            alt='User'
            className='w-8 h-8 rounded-full'
          />
          <span className='text-primaryText mx-2 hidden sm:block'>Taylor</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
