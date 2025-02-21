import React from 'react';
import { Home, LayoutGrid, Users, Library, Heart, Clock } from 'lucide-react';
import { SidebarItem } from '../../types/homeTypes';

const Sidebar: React.FC = () => {
  const menuItems: SidebarItem[] = [
    { icon: <Home className="w-6 h-6" />, label: 'Home', path: '/' },
    { icon: <LayoutGrid className="w-6 h-6" />, label: 'Genres', path: '/genres' },
    { icon: <Users className="w-6 h-6" />, label: 'Artists', path: '/artists' },
    { icon: <Library className="w-6 h-6" />, label: 'Albums', path: '/albums' },
    { icon: <Heart className="w-6 h-6" />, label: 'Favorites', path: '/favorites' },
    { icon: <Clock className="w-6 h-6" />, label: 'Recently Plays', path: '/recent' },
  ];

  return (
    <div className="w-64 bg-black h-screen p-6">
      <div className="flex items-center mb-8">
        <span className="text-white text-xl font-bold">Echo Music</span>
      </div>
      <nav>
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
    </div>
  );
};

export default Sidebar;
