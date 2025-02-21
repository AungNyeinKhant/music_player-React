import React, { useState } from 'react';
import { Home, LayoutGrid, Users, Library, Heart, Clock, Menu, Plus, X } from 'lucide-react';
import { SidebarItem } from '../../types/homeTypes';

interface Playlist {
  id: string;
  name: string;
}

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems: SidebarItem[] = [
    { icon: <Home className="w-6 h-6" />, label: 'Home', path: '/' },
    { icon: <LayoutGrid className="w-6 h-6" />, label: 'Genres', path: '/genres' },
    { icon: <Users className="w-6 h-6" />, label: 'Artists', path: '/artists' },
    { icon: <Library className="w-6 h-6" />, label: 'Albums', path: '/albums' },
    { icon: <Heart className="w-6 h-6" />, label: 'Favorites', path: '/favorites' },
    { icon: <Clock className="w-6 h-6" />, label: 'Recently Plays', path: '/recent' },
  ];

  const playlists: Playlist[] = [
    { id: '1', name: 'Rock & Roll' },
    { id: '2', name: 'Best of 90s' },
    { id: '3', name: 'Work Time' },
    { id: '4', name: 'Exercise mode' },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Menu Button - Only visible on tablet and below */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-black md:hidden"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static w-64 h-screen bg-black z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <span className="text-white text-xl font-bold">Echo Music</span>
          </div>

          {/* Main Navigation */}
          <nav className="mb-8">
            {menuItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="flex items-center text-gray-400 hover:text-white py-2"
              >
                {item.icon}
                <span className="ml-4">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Playlists Section */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-400 uppercase text-sm font-bold">Playlists</h2>
              <button className="p-1 hover:bg-[#282828] rounded-lg">
                <Plus className="w-5 h-5 text-gray-400 hover:text-white" />
              </button>
            </div>
            <div className="space-y-2 overflow-y-auto">
              {playlists.map((playlist) => (
                <a
                  key={playlist.id}
                  href={`/playlist/${playlist.id}`}
                  className="flex items-center text-gray-400 hover:text-white py-2 text-sm"
                >
                  {playlist.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
