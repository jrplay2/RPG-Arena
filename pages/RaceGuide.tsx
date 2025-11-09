import React, { useState } from 'react';
import RaceCard from '../components/RaceCard.tsx';
import { RACES } from '../constants.ts';
import HumanPage from './HumanPage.tsx';
import ElfPage from './ElfPage.tsx';
import DwarfPage from './DwarfPage.tsx';
import HalflingPage from './HalflingPage.tsx';
import OrcPage from './OrcPage.tsx';
import HalfElfPage from './HalfElfPage.tsx';
import GnomePage from './GnomePage.tsx';
import DragonbornPage from './DragonbornPage.tsx';
import TieflingPage from './TieflingPage.tsx';
import CivilizedGoblinPage from './CivilizedGoblinPage.tsx';
import FelinePage from './FelinePage.tsx';
import MinotaurPage from './MinotaurPage.tsx';
import ShadowStalkerPage from './ShadowStalkerPage.tsx';

interface RaceGuideProps {
  onBack: () => void;
}

const RaceGuide: React.FC<RaceGuideProps> = ({ onBack }) => {
  const [selectedRace, setSelectedRace] = useState<string | null>(null);

  const handleSelectRace = (raceName: string) => {
    if (['Humano', 'Elfo', 'Anão', 'Halfling', 'Orc', 'Meio-elfo', 'Gnomo', 'Draconato', 'Tiefling', 'Goblin civilizado', 'Felino antropomórfico', 'Minotauro', 'Espreitador das Sombras'].includes(raceName)) {
      setSelectedRace(raceName);
    }
  };

  const handleBackToGallery = () => {
    setSelectedRace(null);
  };

  if (selectedRace === 'Humano') {
    return <HumanPage onBack={handleBackToGallery} />;
  }

  if (selectedRace === 'Elfo') {
    return <ElfPage onBack={handleBackToGallery} />;
  }
  
  if (selectedRace === 'Anão') {
    return <DwarfPage onBack={handleBackToGallery} />;
  }

  if (selectedRace === 'Halfling') {
    return <HalflingPage onBack={handleBackToGallery} />;
  }

  if (selectedRace === 'Orc') {
    return <OrcPage onBack={handleBackToGallery} />;
  }

  if (selectedRace === 'Meio-elfo') {
    return <HalfElfPage onBack={handleBackToGallery} />;
  }

  if (selectedRace === 'Gnomo') {
    return <GnomePage onBack={handleBackToGallery} />;
  }

  if (selectedRace === 'Draconato') {
    return <DragonbornPage onBack={handleBackToGallery} />;
  }

  if (selectedRace === 'Tiefling') {
    return <TieflingPage onBack={handleBackToGallery} />;
  }

  if (selectedRace === 'Goblin civilizado') {
    return <CivilizedGoblinPage onBack={handleBackToGallery} />;
  }

  if (selectedRace === 'Felino antropomórfico') {
    return <FelinePage onBack={handleBackToGallery} />;
  }

  if (selectedRace === 'Minotauro') {
    return <MinotaurPage onBack={handleBackToGallery} />;
  }

  if (selectedRace === 'Espreitador das Sombras') {
    return <ShadowStalkerPage onBack={handleBackToGallery} />;
  }

  return (
    // FIX: Replaced 'className' with 'class' to match expected JSX properties.
    <div class="min-h-screen bg-slate-900 text-white font-sans">
      {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
      <main class="container mx-auto px-4 py-8 sm:py-16">
        <button
          onClick={onBack}
          // FIX: Replaced 'className' with 'class' to match expected JSX properties.
          class="mb-8 bg-purple-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-purple-600 transition-colors duration-300 flex items-center space-x-2"
        >
          {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            {/* FIX: Replaced camelCase SVG props with kebab-case. */}
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span>Voltar ao Início</span>
        </button>
        {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
        <header class="text-center mb-12">
          {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Guia de Raças de RPG
          </h1>
          {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
          <p class="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Explore uma coleção visual de raças fantásticas para sua próxima aventura.
          </p>
        </header>

        {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {RACES.map((race) => (
            <RaceCard 
              key={race.name} 
              race={race} 
              onRaceClick={handleSelectRace} 
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default RaceGuide;