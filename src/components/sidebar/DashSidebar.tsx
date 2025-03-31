import { FC, ReactNode } from "react";
import { LayoutDashboard, Music, Album } from "lucide-react";
import { Link } from "react-router-dom";

const DashSidebar: FC<{ isSidebarOpen: boolean }> = ({ isSidebarOpen }) => {
  return (
    <aside
      className={`fixed md:static w-64 h-screen top-0 bg-dashboard-primaryDark transform transition-transform duration-300 ease-in-out z-50 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className='p-4 border-b border-dashboard-primary'>
        <span className='text-2xl font-bold text-dashboard-secondary md:hidden'>
          Legacy
        </span>
      </div>
      <nav className='p-4'>
        <ul className='space-y-2'>
          <li>
            <Link
              to='/artist'
              className='flex items-center p-3 rounded-md bg-dashboard-primary text-dashboard-primaryText'
            >
              <LayoutDashboard
                size={20}
                className='mr-3 text-dashboard-secondary'
              />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to='/artist/albums'
              className='flex items-center p-3 rounded-md hover:bg-dashboard-primary text-dashboard-primaryDarkText'
            >
              <Album size={20} className='mr-3' />
              Albums
            </Link>
          </li>
          <li>
            <Link
              to='/artist/tracks'
              className='flex items-center p-3 rounded-md hover:bg-dashboard-primary text-dashboard-primaryDarkText'
            >
              <Music size={20} className='mr-3' />
              Tracks
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default DashSidebar;
