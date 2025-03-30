import { FC, useState } from "react";
import {
  ChevronDown,
  LogOut,
  LayoutDashboard,
  Music,
  Album,
  Menu,
  X,
} from "lucide-react";

const Home: FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='flex flex-col h-screen bg-dashboard-primary text-dashboard-primaryText'>
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden'
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Header */}
      <header className='flex items-center justify-between p-4 bg-dashboard-primaryDark shadow-md'>
        <div className='flex items-center gap-4'>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className='md:hidden p-2 hover:bg-dashboard-primary rounded-lg'
          >
            {isSidebarOpen ? (
              <X className='w-6 h-6 text-dashboard-secondary' />
            ) : (
              <Menu className='w-6 h-6 text-dashboard-secondary' />
            )}
          </button>
          <div className='text-2xl font-bold text-dashboard-secondary'>
            Legacy
          </div>
        </div>

        <div className='relative'>
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className='flex items-center space-x-2 p-2 rounded-md hover:bg-dashboard-primary transition-colors'
          >
            <img
              src='https://github.com/shadcn.png'
              alt='Profile'
              className='w-8 h-8 rounded-full'
            />
            <span>Artist Name</span>
            <ChevronDown size={16} />
          </button>

          {isProfileOpen && (
            <div className='absolute right-0 mt-2 w-48 bg-dashboard-primaryDark rounded-md shadow-lg py-1 z-10'>
              <button className='flex items-center w-full px-4 py-2 text-sm hover:bg-dashboard-primary'>
                <LogOut size={16} className='mr-2' />
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      <div className='flex flex-1 overflow-hidden'>
        {/* Sidebar */}
        <aside
          className={`fixed md:static w-64 h-screen top-0 bg-dashboard-primaryDark transform transition-transform duration-300 ease-in-out z-50 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <div className='p-4 border-b border-dashboard-primary'>
            <span className='text-2xl font-bold text-dashboard-secondary'>
              Legacy
            </span>
          </div>
          <nav className='p-4'>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='flex items-center p-3 rounded-md bg-dashboard-primary text-dashboard-primaryText'
                >
                  <LayoutDashboard
                    size={20}
                    className='mr-3 text-dashboard-secondary'
                  />
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center p-3 rounded-md hover:bg-dashboard-primary text-dashboard-primaryDarkText'
                >
                  <Album size={20} className='mr-3' />
                  Albums
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center p-3 rounded-md hover:bg-dashboard-primary text-dashboard-primaryDarkText'
                >
                  <Music size={20} className='mr-3' />
                  Tracks
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className='flex-1 p-4 md:p-6 overflow-auto'>
          <div className='bg-dashboard-primary p-4 md:p-8 rounded-lg shadow-md'>
            <h1 className='text-3xl font-bold mb-6'>Welcome Dashboard</h1>
            <p className='text-dashboard-primaryDarkText'>
              Manage your music, albums, and tracks from this dashboard.
            </p>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className='p-4 bg-dashboard-primaryDark text-dashboard-primaryDarkText text-center'>
        <p>@2025 Legacy Music Entertainment CopyRight by ANK</p>
      </footer>
    </div>
  );
};

export default Home;
