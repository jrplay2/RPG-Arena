import React from 'react';

interface HumanPageProps {
  onBack: () => void;
}

const HumanPage: React.FC<HumanPageProps> = ({ onBack }) => {
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
            Humano
            </h1>
        </header>

        {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
        <div class="space-y-12">
          <section>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">História</h2>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <p class="text-slate-300 leading-relaxed text-lg">
              Os humanos são uma raça versátil e adaptável, conhecida por sua capacidade de sobreviver e prosperar em diversos ambientes. Sua curiosidade e determinação os impulsionam a explorar o mundo, a dominar diferentes habilidades e a construir civilizações complexas. Apesar de não possuírem características físicas excepcionais, sua inteligência e engenhosidade os tornam líderes naturais e sobreviventes resilientes.
            </p>
          </section>

          <section>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Atributos (15 pontos)</h2>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <ul class="list-disc list-inside text-slate-300 space-y-2 text-lg">
              <li><strong>Força:</strong> 3</li>
              <li><strong>Vigor:</strong> 3</li>
              <li><strong>Destreza:</strong> 3</li>
              <li><strong>Aparência:</strong> 2</li>
              <li><strong>Inteligência:</strong> 2</li>
              <li><strong>Força de Vontade:</strong> 2</li>
            </ul>
          </section>

          <section>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Perícias (50 pontos)</h2>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 text-slate-300 text-lg">
              <span><strong>Persuasão:</strong> 4</span>
              <span><strong>Armas Brancas:</strong> 4</span>
              <span><strong>Atletismo:</strong> 3</span>
              <span><strong>Ladinagem:</strong> 3</span>
              <span><strong>Liderança:</strong> 3</span>
              <span><strong>Ofício:</strong> 3</span>
              <span><strong>Sobrevivência:</strong> 3</span>
              <span><strong>Percepção:</strong> 3</span>
              <span><strong>Furtividade:</strong> 2</span>
              <span><strong>Armas de Projétil:</strong> 2</span>
              <span><strong>Cavalgar:</strong> 2</span>
              <span><strong>Intimidação:</strong> 2</span>
              <span><strong>Manha:</strong> 2</span>
              <span><strong>Empatia:</strong> 2</span>
              <span><strong>Investigação:</strong> 2</span>
              <span><strong>Conhecimento (Geral):</strong> 2</span>
              <span><strong>Etiqueta:</strong> 1</span>
              <span><strong>Herbalismo:</strong> 1</span>
              <span><strong>Linguística:</strong> 1</span>
              <span><strong>Medicina:</strong> 1</span>
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
                <li><strong>Versatilidade:</strong> Possuem uma distribuição equilibrada de pontos que lhes permite seguir qualquer carreira sem grandes penalidades.</li>
                <li><strong>Adaptação Rápida:</strong> Aprendem novas habilidades com facilidade e se ajustam a diferentes situações de combate ou interação social.</li>
                <li><strong>Bônus de Perícia:</strong> Como mestres da adaptação, recebem um bônus em uma perícia à sua escolha no início da aventura.</li>
              </ul>
            </div>
            <div>
              {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
              <h2 class="text-3xl font-bold text-red-400 mb-4 border-b-2 border-red-500/30 pb-2">Desvantagens</h2>
              {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
              <ul class="list-disc list-inside text-slate-300 space-y-3 text-lg">
                <li><strong>Sem Especialização Natural:</strong> A falta de bônus inatos significa que não possuem a mesma maestria inicial de outras raças em áreas específicas.</li>
                <li><strong>Vulnerabilidade Física:</strong> Não possuem vantagens naturais de defesa, dependendo totalmente de equipamentos para proteção.</li>
              </ul>
            </div>
          </section>

          <section>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Afinidades</h2>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <div class="text-slate-300 space-y-2 text-lg">
              {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
              <p><strong class="text-green-400">Melhores:</strong> Meio-elfo, Gnomo.</p>
              {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
              <p><strong class="text-red-400">Piores:</strong> Orc, Espreitador das Sombras.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HumanPage;