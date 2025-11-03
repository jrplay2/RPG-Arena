
import React from 'react';
import RaceCard from './components/RaceCard';
import { RACES } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <main className="container mx-auto px-4 py-8 sm:py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Guia de Raças de RPG
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Explore uma coleção visual de raças fantásticas para sua próxima aventura.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {RACES.map((race) => (
            <RaceCard key={race.name} race={race} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
