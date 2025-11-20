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
    <div className="min-h-screen bg-gradient-to-b from-[#3a2a1a] via-[#2b2217] to-[#1a130b] text-amber-100 font-serif relative p-4 sm:p-8">
      {/* textura suave por cima do fundo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),rgba(0,0,0,0.25))]"></div>

      <header className="relative text-center mb-12 pt-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-wider text-amber-300 drop-shadow-[0_2px_0_rgba(0,0,0,0.6)]">
          RPG ARENA
        </h1>
        <p className="mt-3 text-amber-200/80">Um compêndio de raças e magias</p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate('races')}
            className="bg-amber-700 text-amber-50 font-bold py-3 px-8 rounded-lg hover:bg-amber-800 transition-colors duration-300 text-lg shadow-md shadow-black/30 ring-1 ring-amber-900/40"
          >
            Guia de Raças
          </button>
          <button
            onClick={() => onNavigate('spells')}
            className="bg-stone-700 text-amber-50 font-bold py-3 px-8 rounded-lg hover:bg-stone-800 transition-colors duration-300 text-lg shadow-md shadow-black/30 ring-1 ring-stone-900/40"
          >
            Magias
          </button>
        </div>
      </header>

      <section className="relative container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-amber-300 border-b border-amber-700/40 pb-2">
          Raças
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RACES.map((race) => (
            <RaceCard key={race.name} race={race} onRaceClick={() => onNavigate('races')} isClickable={true} />
          ))}
        </div>
      </section>

      <section className="relative container mx-auto mt-12">
        <h2 className="text-3xl font-bold mb-6 text-amber-300 border-b border-amber-700/40 pb-2">
          Magias
        </h2>
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