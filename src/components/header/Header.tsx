import { FC, useState } from "react";
import { Search, Menu, User, LogOut, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { logout } from "../../services/AuthService";

type HeaderProps = {
  onSidebarOpen: () => void;
};

const Header: FC<HeaderProps> = ({ onSidebarOpen }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogout = async () => {
    if (auth) {
      await logout(auth);
      navigate("/login");
    }
  };

  return (
    <div className='flex items-center justify-between p-4 bg-primaryDark'>
      {/* Mobile Logo and Menu */}
      <div className='flex items-center md:hidden'>
        <button
          onClick={onSidebarOpen}
          className='p-2 hover:bg-[#282828] rounded-full'
        >
          <span className='text-secondary text-xl font-bold'>Legacy</span>
        </button>
        <Link to='/' className='ml-2'>
          <img src='/logo.png' alt='Logo' className='h-8' />
        </Link>
      </div>

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
      <div className='relative'>
        <button
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className='flex items-center space-x-2 p-2 rounded-md hover:bg-[#282828] transition-colors'
        >
          <img
            src='https://github.com/shadcn.png'
            alt='User'
            className='w-8 h-8 rounded-full'
          />
          <span className='text-primaryText mx-2 hidden sm:block'>Taylor</span>
          <ChevronDown size={16} className="text-primaryText" />
        </button>

        {isProfileOpen && (
          <div className='absolute right-0 mt-2 w-48 bg-primaryDark rounded-md shadow-lg py-1 z-10'>
            <button 
              className='flex items-center w-full px-4 py-2 text-sm text-primaryText hover:bg-[#282828]'
              onClick={() => navigate("/profile")}
            >
              <User size={16} className='mr-2' />
              Profile
            </button>
            <button 
              className='flex items-center w-full px-4 py-2 text-sm text-primaryText hover:bg-[#282828]'
              onClick={handleLogout}
            >
              <LogOut size={16} className='mr-2' />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
