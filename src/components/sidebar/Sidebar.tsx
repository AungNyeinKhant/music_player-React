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
import { SidebarItem, Playlist } from "../../types";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems: SidebarItem[] = [
    { icon: <Home className='w-6 h-6' />, label: "Home", path: "/" },
    {
      icon: <LayoutGrid className='w-6 h-6' />,
      label: "Genres",
      path: "/genres",
    },
    { icon: <Users className='w-6 h-6' />, label: "Artists", path: "/artists" },
    { icon: <Library className='w-6 h-6' />, label: "Albums", path: "/albums" },
    {
      icon: <Heart className='w-6 h-6' />,
      label: "Favorites",
      path: "/favorites",
    },
    {
      icon: <Clock className='w-6 h-6' />,
      label: "Recently Plays",
      path: "/recent",
    },
  ];

  const playlists: Playlist[] = [
    { id: "1", name: "Rock & Roll" },
    { id: "2", name: "Best of 90s" },
    { id: "3", name: "Work Time" },
    { id: "4", name: "Exercise mode" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden'
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static w-64 h-screen bg-black z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className='flex flex-col h-full p-6'>
          {/* Logo and Close Button */}
          <div className='flex items-center justify-between mb-8'>
            <span className='text-secondary text-xl font-bold'>Legacy</span>
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
              <a
                key={item.path}
                href={item.path}
                className='flex items-center text-gray-400 hover:text-secondary py-2'
              >
                {item.icon}
                <span className='ml-4'>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Playlists Section */}
          <div className='flex-1'>
            <div className='flex items-center justify-between mb-4'>
              <h2 className='text-gray-400 uppercase text-sm font-bold'>
                Playlists
              </h2>
              <button className='p-1 hover:bg-[#282828] rounded-lg'>
                <Plus className='w-5 h-5 text-gray-400 hover:text-primaryText' />
              </button>
            </div>
            <div className='space-y-2 overflow-y-auto'>
              {playlists.map((playlist) => (
                <a
                  key={playlist.id}
                  href={`/playlist/${playlist.id}`}
                  className='flex items-center text-gray-400 hover:text-primaryText py-2 text-sm'
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
