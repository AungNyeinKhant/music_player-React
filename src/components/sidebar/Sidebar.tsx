import React, { useState } from "react";
import {
  Home,
  LayoutGrid,
  Users,
  Library,
  Heart,
  Clock,
  X,
  Plus,
} from "lucide-react";
import { SidebarItem } from "../../types/index";
import Logo from "../../assets/image/music-player-logo.svg";
import { Link } from "react-router-dom";
import { usePlaylist } from "../../context/PlaylistContext";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems: SidebarItem[] = [
    {
      icon: <Home className='w-6 h-6' />,
      label: "Home",
      path: "/app",
    },
    {
      icon: <LayoutGrid className='w-6 h-6' />,
      label: "Genres",
      path: "/app/genres",
    },
    {
      icon: <Users className='w-6 h-6' />,
      label: "Artists",
      path: "/app/artists",
    },
    {
      icon: <Library className='w-6 h-6' />,
      label: "Albums",
      path: "/app/albums",
    },
    {
      icon: <Heart className='w-6 h-6' />,
      label: "Favorites",
      path: "/app/favorites",
    },
    {
      icon: <Clock className='w-6 h-6' />,
      label: "Recently Plays",
      path: "/app/recent",
    },
  ];

  const { playlists, loading, createNewPlaylist } = usePlaylist();

  const handleCreatePlaylist = async () => {
    const name = prompt("Enter playlist name:");
    if (name) {
      await createNewPlaylist(name);
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-primaryDark bg-opacity-50 z-40 md:hidden'
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static w-64 h-screen bg-primaryDark z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className='h-full overflow-y-auto custom-scrollbar'>
          <div className='flex flex-col p-6 pb-32'>
            {/* Logo and Close Button */}
            <div className='flex items-center justify-between mb-8'>
              <div className='flex flex-row items-center'>
                <span className='text-secondary text-xl font-bold'>Legacy</span>
                <img
                  src={Logo}
                  alt='Music Player Logo'
                  className='w-[48px] h-[48px]'
                />
              </div>
              <button
                onClick={onClose}
                className='md:hidden p-1 hover:bg-[#282828] rounded-lg'
              >
                <X className='w-6 h-6 text-gray-400 hover:text-primaryText' />
              </button>
            </div>

            {/* Main Navigation */}
            <nav className='mb-8'>
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center text-gray-400 hover:text-secondary py-2 ${
                    window.location.pathname === item.path
                      ? "text-secondary"
                      : ""
                  }`}
                >
                  {item.icon}
                  <span className='ml-4'>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Playlists Section */}
            <div className='flex-1'>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='text-gray-400 uppercase text-sm font-bold'>
                  Playlists
                </h2>
                <button
                  className='p-1 hover:bg-[#282828] rounded-lg'
                  onClick={handleCreatePlaylist}
                >
                  <Plus className='w-5 h-5 text-gray-400 hover:text-primaryText' />
                </button>
              </div>
              <div className='space-y-2'>
                {loading ? (
                  <div className='text-gray-400 text-sm'>
                    Loading playlists...
                  </div>
                ) : (
                  playlists.map((playlist) => (
                    <Link
                      key={playlist.id}
                      to={`/playlist/${playlist.id}`}
                      className='flex items-center text-gray-400 hover:text-primaryText py-2 text-sm'
                    >
                      {playlist.name}
                    </Link>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
