import { FC } from "react";
import { Search } from "lucide-react";

const Header: FC = () => {
  return (
    <div className='flex items-center justify-between p-4 sticky top-0 bg-black/90 backdrop-blur-md z-50'>
      <div className='flex items-center flex-1'>
        <Search className='w-5 h-5 text-gray-400 min-w-[20px]' />
        <input
          type='text'
          placeholder='Search music, albums, artists...'
          className='bg-transparent border-none outline-none text-primaryText ml-2 w-full text-sm'
        />
      </div>
      <div className='flex items-center'>
        <div className='flex items-center bg-[#282828] rounded-full p-1 cursor-pointer'>
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
