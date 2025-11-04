import React, { useState } from 'react';
import RaceCard from './components/RaceCard.tsx';
import { RACES } from './constants.ts';
import HumanPage from './pages/HumanPage.tsx';
import ElfPage from './pages/ElfPage.tsx';
import DwarfPage from './pages/DwarfPage.tsx';
import HalflingPage from './pages/HalflingPage.tsx';
import OrcPage from './pages/OrcPage.tsx';
import HalfElfPage from './pages/HalfElfPage.tsx';
import GnomePage from './pages/GnomePage.tsx';
import DragonbornPage from './pages/DragonbornPage.tsx';
import TieflingPage from './pages/TieflingPage.tsx';
import CivilizedGoblinPage from './pages/CivilizedGoblinPage.tsx';
import FelinePage from './pages/FelinePage.tsx';
import MinotaurPage from './pages/MinotaurPage.tsx';
import ShadowStalkerPage from './pages/ShadowStalkerPage.tsx';

function App() {
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
}

export default App;