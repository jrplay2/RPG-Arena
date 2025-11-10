// Fix: Replaced `className` with `class` to align with the expected JSX transform.
import React from 'react';
import { Race } from '../types.ts';

interface RaceCardProps {
  race: Race;
  onRaceClick: (raceName: string) => void;
}

const RaceCard: React.FC<RaceCardProps> = ({ race, onRaceClick }) => {
  const isClickable = ['Humano', 'Elfo', 'Anão', 'Halfling', 'Orc', 'Meio-elfo', 'Gnomo', 'Draconato', 'Tiefling', 'Goblin civilizado', 'Felino antropomórfico', 'Minotauro', 'Espreitador das Sombras'].includes(race.name);

  return (
    <div
      class={`group bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 ease-in-out transform hover:-translate-y-2 ${isClickable ? 'cursor-pointer' : ''}`}
      onClick={() => isClickable && onRaceClick(race.name)}
    >
      <div class="relative">
        <img
          class="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
          src={race.imageUrl}
          alt={`Imagem da raça ${race.name}`}
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>
      <div class="p-6">
        <h3 class="text-2xl font-bold text-white text-center tracking-wider">{race.name}</h3>
      </div>
    </div>
  );
};

export default RaceCard;