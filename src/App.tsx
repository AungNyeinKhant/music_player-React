import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home';
import Header from './components/header/Header';
import Player from './components/player/Player';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col md:pl-0">
        <Header />
        <main className="flex-1 overflow-auto">
          <Home />
        </main>
        <Player />
      </div>
    </div>
  );
};

export default App;
