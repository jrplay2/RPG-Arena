import React from 'react';

interface HomePageProps {
  onNavigate: (page: 'races' | 'spells') => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    // FIX: Replaced 'className' with 'class' to match expected JSX properties.
    <div class="min-h-screen bg-slate-900 text-white font-sans flex flex-col items-center justify-center p-4">
      {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
      <header class="text-center mb-12">
        {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          RPG ARENA
        </h1>
      </header>
      {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
      <div class="flex flex-col sm:flex-row gap-6">
        <button
          onClick={() => onNavigate('races')}
          // FIX: Replaced 'className' with 'class' to match expected JSX properties.
          class="bg-cyan-500 text-white font-bold py-4 px-10 rounded-lg hover:bg-cyan-600 transition-colors duration-300 text-xl shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
        >
          Guia de Raças
        </button>
        <button
          onClick={() => onNavigate('spells')}
          // FIX: Replaced 'className' with 'class' to match expected JSX properties.
          class="bg-purple-500 text-white font-bold py-4 px-10 rounded-lg hover:bg-purple-600 transition-colors duration-300 text-xl shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
        >
          Magias
        </button>
      </div>
    </div>
  );
};

export default HomePage;