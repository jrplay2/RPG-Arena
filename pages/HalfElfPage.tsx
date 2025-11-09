import React from 'react';

interface HalfElfPageProps {
  onBack: () => void;
}

const HalfElfPage: React.FC<HalfElfPageProps> = ({ onBack }) => {
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
            Meio-Elfo
            </h1>
        </header>

        {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
        <div class="space-y-12">
          <section>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">História</h2>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <p class="text-slate-300 leading-relaxed text-lg">
              Os Meio-Elfos são a personificação do elo entre duas culturas, nascidos da união entre humanos e elfos. Eles carregam a ambição e a adaptabilidade de sua herança humana, juntamente com a graça, a percepção aguçada e a longevidade (ainda que menor que a dos elfos puros) de sua linhagem élfica. Muitas vezes, vivem como diplomatas, comerciantes ou aventureiros, transitando entre as sociedades de seus pais, mas raramente se sentindo completamente em casa em nenhuma delas.
            </p>
          </section>

          <section>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Atributos (15 pontos)</h2>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <ul class="list-disc list-inside text-slate-300 space-y-2 text-lg">
              <li><strong>Aparência:</strong> 4</li>
              <li><strong>Destreza:</strong> 3</li>
              <li><strong>Força:</strong> 2</li>
              <li><strong>Vigor:</strong> 2</li>
              <li><strong>Inteligência:</strong> 2</li>
              <li><strong>Força de Vontade:</strong> 2</li>
            </ul>
          </section>

          <section>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Perícias (50 pontos)</h2>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 text-slate-300 text-lg">
                <span><strong>Persuasão:</strong> 5</span>
                <span><strong>Empatia:</strong> 5</span>
                <span><strong>Etiqueta:</strong> 4</span>
                <span><strong>Armas Brancas:</strong> 3</span>
                <span><strong>Armas de Projétil:</strong> 3</span>
                <span><strong>Percepção:</strong> 3</span>
                <span><strong>Atletismo:</strong> 3</span>
                <span><strong>Linguística:</strong> 3</span>
                <span><strong>Conhecimento (Geral):</strong> 3</span>
                <span><strong>Manha:</strong> 2</span>
                <span><strong>Furtividade:</strong> 2</span>
                <span><strong>Ladinagem:</strong> 2</span>
                <span><strong>Liderança:</strong> 2</span>
                <span><strong>Sobrevivência:</strong> 2</span>
                <span><strong>Conhecimento (Arcano):</strong> 2</span>
                <span><strong>Cavalgar:</strong> 1</span>
                <span><strong>Intimidação:</strong> 1</span>
                <span><strong>Herbalismo:</strong> 1</span>
                <span><strong>Ofício:</strong> 1</span>
                <span><strong>Investigação:</strong> 1</span>
                <span><strong>Medicina:</strong> 1</span>
            </div>
          </section>

          {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
          <section class="grid lg:grid-cols-2 gap-12">
            <div>
              {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
              <h2 class="text-3xl font-bold text-green-400 mb-4 border-b-2 border-green-500/30 pb-2">Vantagens</h2>
              {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
              <ul class="list-disc list-inside text-slate-300 space-y-3 text-lg">
                <li><strong>Charme e Diplomacia:</strong> Sua aparência agradável e capacidade de entender diferentes pontos de vista lhes conferem um bônus natural em interações sociais.</li>
                <li><strong>Visão na Penumbra:</strong> Herdam uma versão da visão no escuro élfica, permitindo-lhes enxergar em condições de pouca luz.</li>
                <li><strong>Versatilidade Aprimorada:</strong> Possuem a flexibilidade dos humanos com um toque da especialização élfica, adaptando-se facilmente a diferentes papéis.</li>
              </ul>
            </div>
            <div>
              {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
              <h2 class="text-3xl font-bold text-red-400 mb-4 border-b-2 border-red-500/30 pb-2">Desvantagens</h2>
              {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
              <ul class="list-disc list-inside text-slate-300 space-y-3 text-lg">
                <li><strong>Crise de Identidade:</strong> Frequentemente se sentem deslocados, não sendo totalmente aceitos nem como humanos, nem como elfos.</li>
                <li><strong>Mestre de Nada:</strong> Embora versáteis, raramente atingem o pico de maestria que um humano focado ou um elfo especialista podem alcançar.</li>
              </ul>
            </div>
          </section>

          <section>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Afinidades</h2>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <div class="text-slate-300 space-y-2 text-lg">
              {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
              <p><strong class="text-green-400">Melhores:</strong> Humano, Elfo.</p>
              {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
              <p><strong class="text-red-400">Piores:</strong> Orc, Anão.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HalfElfPage;