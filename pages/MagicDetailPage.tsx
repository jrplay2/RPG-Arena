import React from 'react';
import { Magic } from '../types.ts';

interface MagicDetailPageProps {
  magic: Magic;
  onBack: () => void;
}

const MagicDetailPage: React.FC<MagicDetailPageProps> = ({ magic, onBack }) => {
  return (
    // FIX: Replaced 'className' with 'class' to match expected JSX properties.
    <div class="min-h-screen bg-slate-900 text-white font-sans p-4 sm:p-8">
      {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
      <main class="container mx-auto">
        <button
          onClick={onBack}
          // FIX: Replaced 'className' with 'class' to match expected JSX properties.
          class="mb-8 bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-cyan-600 transition-colors duration-300 flex items-center space-x-2"
        >
          {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            {/* FIX: Replaced camelCase SVG props with kebab-case. */}
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span>Voltar para Magias</span>
        </button>

        {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
        <header class="mb-10 text-center">
            {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
            <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            {magic.name}
            </h1>
        </header>

        {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
        <div class="space-y-12">
          <section>
            {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Resumo da Magia</h2>
            {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
            <p class="text-slate-300 leading-relaxed text-lg">
              {magic.summary}
            </p>
          </section>

          <section>
            {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Poderes</h2>
            {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
            <p class="text-slate-300 leading-relaxed text-lg">
              {magic.powers}
            </p>
          </section>

          <section>
            {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Atributos da Magia</h2>
            {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-slate-300 text-lg">
                {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
                <div class="bg-slate-800 p-4 rounded-lg text-center"><strong>Dano:</strong> {magic.damage}</div>
                {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
                <div class="bg-slate-800 p-4 rounded-lg text-center"><strong>Custo de MP:</strong> {magic.mpCost}</div>
                {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
                <div class="bg-slate-800 p-4 rounded-lg text-center"><strong>Turnos p/ Conjurar:</strong> {magic.castingTurns}</div>
                {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
                <div class="bg-slate-800 p-4 rounded-lg text-center"><strong>Alcance:</strong> {magic.range}</div>
                {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
                <div class="bg-slate-800 p-4 rounded-lg text-center"><strong>Custo:</strong> {magic.purchasePoints} Pontos</div>
            </div>
          </section>

          {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
          <section class="grid lg:grid-cols-2 gap-12">
            <div>
              {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
              <h2 class="text-3xl font-bold text-green-400 mb-4 border-b-2 border-green-500/30 pb-2">Vantagens</h2>
              {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
              <ul class="list-disc list-inside text-slate-300 space-y-3 text-lg">
                {magic.advantages.map((adv, index) => <li key={index}>{adv}</li>)}
              </ul>
            </div>
            <div>
              {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
              <h2 class="text-3xl font-bold text-red-400 mb-4 border-b-2 border-red-500/30 pb-2">Desvantagens</h2>
              {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
              <ul class="list-disc list-inside text-slate-300 space-y-3 text-lg">
                {magic.disadvantages.map((dis, index) => <li key={index}>{dis}</li>)}
              </ul>
            </div>
          </section>

          <section>
            {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Bônus e Penalidades de Raça para Compra</h2>
            {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
            <ul class="list-disc list-inside text-slate-300 space-y-2 text-lg">
                {magic.raceBonuses.map((bonus, index) => (
                    <li key={index}><strong>{bonus.race}:</strong> {bonus.modifier}</li>
                ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MagicDetailPage;