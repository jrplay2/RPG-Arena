import React from 'react';

interface FelinePageProps {
  onBack: () => void;
}

const FelinePage: React.FC<FelinePageProps> = ({ onBack }) => {
  return (
    // FIX: Replaced `className` with `class` to satisfy TypeScript compiler.
    <div class="min-h-screen bg-slate-900 text-white font-sans p-4 sm:p-8">
      {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
      <main class="container mx-auto">
        <button
          onClick={onBack}
          // FIX: Replaced `className` with `class` to satisfy TypeScript compiler.
          class="mb-8 bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-cyan-600 transition-colors duration-300 flex items-center space-x-2"
        >
          {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            {/* FIX: Replaced camelCase SVG props with kebab-case to satisfy TypeScript compiler. */}
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span>Voltar para a Galeria</span>
        </button>

        {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
        <header class="mb-10">
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Felino Antropomórfico
            </h1>
        </header>

        {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
        <div class="space-y-12">
          <section>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">História</h2>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <p class="text-slate-300 leading-relaxed text-lg">
              Os Felinos são um povo caçador, que personifica a graça e a ferocidade das bestas selvagens. Vivendo em tribos nômades que percorrem savanas e florestas densas, eles valorizam a liberdade, a força e a astúcia. Seus sentidos aguçados e reflexos sobre-humanos os tornam predadores natos, capazes de rastrear presas por dias e atacar com uma velocidade estonteante. Para um Felino, a vida é um ciclo de caça e descanso, e eles confiam em seus instintos para sobreviver em um mundo que muitas vezes não compreende sua natureza primal.
            </p>
          </section>

          <section>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Atributos (15 pontos)</h2>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <ul class="list-disc list-inside text-slate-300 space-y-2 text-lg">
              <li><strong>Destreza:</strong> 5</li>
              <li><strong>Força:</strong> 3</li>
              <li><strong>Vigor:</strong> 3</li>
              <li><strong>Aparência:</strong> 2</li>
              <li><strong>Inteligência:</strong> 1</li>
              <li><strong>Força de Vontade:</strong> 1</li>
            </ul>
          </section>

          <section>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Perícias (50 pontos)</h2>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 text-slate-300 text-lg">
                <span><strong>Percepção:</strong> 6</span>
                <span><strong>Furtividade:</strong> 6</span>
                <span><strong>Atletismo:</strong> 5</span>
                <span><strong>Armas Brancas:</strong> 4</span>
                <span><strong>Sobrevivência:</strong> 4</span>
                <span><strong>Investigação:</strong> 3</span>
                <span><strong>Ladinagem:</strong> 3</span>
                <span><strong>Armas de Projétil:</strong> 2</span>
                <span><strong>Intimidação:</strong> 2</span>
                <span><strong>Manha (Lábia):</strong> 2</span>
                <span><strong>Empatia:</strong> 2</span>
                <span><strong>Persuasão:</strong> 1</span>
                <span><strong>Cavalgar:</strong> 1</span>
                <span><strong>Etiqueta:</strong> 1</span>
                <span><strong>Liderança:</strong> 1</span>
                <span><strong>Herbalismo:</strong> 1</span>
                <span><strong>Ofício:</strong> 1</span>
                <span><strong>Linguística:</strong> 1</span>
                <span><strong>Medicina:</strong> 1</span>
                <span><strong>Conhecimento (Geral):</strong> 1</span>
                <span><strong>Conhecimento (Arcano):</strong> 1</span>
            </div>
          </section>

          {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
          <section class="grid lg:grid-cols-2 gap-12">
            <div>
              {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
              <h2 class="text-3xl font-bold text-green-400 mb-4 border-b-2 border-green-500/30 pb-2">Vantagens</h2>
              {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
              <ul class="list-disc list-inside text-slate-300 space-y-3 text-lg">
                <li><strong>Agilidade Felina:</strong> Possuem um bônus natural massivo em Destreza, o que os torna acrobatas e combatentes excepcionais.</li>
                <li><strong>Sentidos Superiores:</strong> Sua Percepção é incomparável, e possuem visão noturna superior, sendo quase impossível surpreendê-los.</li>
                <li><strong>Armas Naturais:</strong> Suas garras retráteis são consideradas armas naturais, permitindo-lhes atacar mesmo quando desarmados.</li>
                <li><strong>Instinto de Caçador:</strong> São mestres em Sobrevivência e rastreamento.</li>
              </ul>
            </div>
            <div>
              {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
              <h2 class="text-3xl font-bold text-red-400 mb-4 border-b-2 border-red-500/30 pb-2">Desvantagens</h2>
              {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
              <ul class="list-disc list-inside text-slate-300 space-y-3 text-lg">
                <li><strong>Intelecto Limitado:</strong> Possuem grande dificuldade com tarefas que exigem conhecimento formal, como magia arcana ou estudos acadêmicos.</li>
                <li><strong>Natureza Impulsiva:</strong> Seus instintos selvagens podem levá-los a agir de forma imprudente ou agressiva, dificultando interações sociais.</li>
              </ul>
            </div>
          </section>

          <section>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Afinidades</h2>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <div class="text-slate-300 space-y-2 text-lg">
              {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
              <p><strong class="text-green-400">Melhores:</strong> Meio-Elfo, Humano.</p>
              {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
              <p><strong class="text-red-400">Piores:</strong> Anão, Draconato.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default FelinePage;