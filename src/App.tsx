import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Home />
      </main>
    </div>
  );
};

export default App;
