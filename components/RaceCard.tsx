import React from 'react';
import { Race } from '../types.ts';

interface RaceCardProps {
  race: Race;
}

const RaceCard: React.FC<RaceCardProps> = ({ race }) => {
  return (
    <div className="group bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 ease-in-out transform hover:-translate-y-2">
      <div className="relative">
        <img
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
          src={race.imageUrl}
          alt={`Imagem da raça ${race.name}`}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white text-center tracking-wider">{race.name}</h3>
      </div>
    </div>
  );
};

export default RaceCard;