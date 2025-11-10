// Fix: Replaced `className` with `class` to align with the expected JSX transform.
import React from 'react';
import { RACES, MAGICS } from '../constants.ts';
import RaceCard from '../components/RaceCard.tsx';
import MagicCard from '../components/MagicCard.tsx';

interface HomePageProps {
  onNavigate: (page: 'races' | 'spells') => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans p-4 sm:p-8">
      <header className="text-center mb-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          RPG ARENA
        </h1>
        <p className="mt-4 text-slate-300">Veja tudo na tela inicial: Raças e Magias</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate('races')}
            className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-cyan-600 transition-colors duration-300 text-lg shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
          >
            Guia de Raças
          </button>
          <button
            onClick={() => onNavigate('spells')}
            className="bg-purple-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-600 transition-colors duration-300 text-lg shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
          >
            Magias
          </button>
        </div>
      </header>

      <section className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Raças</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RACES.map((race) => (
            <RaceCard key={race.name} race={race} onRaceClick={() => onNavigate('races')} isClickable={true} />
          ))}
        </div>
      </section>

      <section className="container mx-auto mt-10">
        <h2 className="text-3xl font-bold mb-6">Magias</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MAGICS.map((magic) => (
            <MagicCard key={magic.name} magic={magic} onClick={() => onNavigate('spells')} onImageUpload={() => {}} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;