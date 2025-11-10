// Fix: Replaced `className` with `class` and updated SVG attributes to use kebab-case instead of camelCase to align with the expected JSX transform.
import React from 'react';

interface OrcPageProps {
  onBack: () => void;
}

const OrcPage: React.FC<OrcPageProps> = ({ onBack }) => {
  return (
    <div class="min-h-screen bg-slate-900 text-white font-sans p-4 sm:p-8">
      <main class="container mx-auto">
        <button
          onClick={onBack}
          class="mb-8 bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-cyan-600 transition-colors duration-300 flex items-center space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span>Voltar para a Galeria</span>
        </button>

        <header class="mb-10">
            <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Orc
            </h1>
        </header>

        <div class="space-y-12">
          <section>
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">História</h2>
            <p class="text-slate-300 leading-relaxed text-lg">
              Nascidos para o combate, os Orcs são uma raça movida pela força e pela honra tribal. Eles vivem em clãs nômades nas terras selvagens, onde apenas os mais fortes sobrevivem e lideram. Sua cultura valoriza a proeza em batalha acima de tudo, e sua aparência intimidadora, aliada a uma reputação de brutalidade, faz com que sejam temidos e incompreendidos por quase todas as outras raças. Para um Orc, a vida é uma luta constante por glória, território e respeito.
            </p>
          </section>

          <section>
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Atributos (15 pontos)</h2>
            <ul class="list-disc list-inside text-slate-300 space-y-2 text-lg">
              <li><strong>Força:</strong> 5</li>
              <li><strong>Vigor:</strong> 4</li>
              <li><strong>Destreza:</strong> 2</li>
              <li><strong>Força de Vontade:</strong> 2</li>
              <li><strong>Aparência:</strong> 1</li>
              <li><strong>Inteligência:</strong> 1</li>
            </ul>
          </section>

          <section>
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Perícias (50 pontos)</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 text-slate-300 text-lg">
                <span><strong>Armas Brancas:</strong> 7</span>
                <span><strong>Intimidação:</strong> 6</span>
                <span><strong>Atletismo:</strong> 5</span>
                <span><strong>Sobrevivência:</strong> 5</span>
                <span><strong>Percepção:</strong> 3</span>
                <span><strong>Liderança:</strong> 2</span>
                <span><strong>Manha:</strong> 2</span>
                <span><strong>Furtividade:</strong> 2</span>
                <span><strong>Armas de Projétil:</strong> 1</span>
                <span><strong>Ladinagem:</strong> 1</span>
                <span><strong>Cavalgar:</strong> 1</span>
                <span><strong>Persuasão:</strong> 1</span>
                <span><strong>Empatia:</strong> 1</span>
                <span><strong>Etiqueta:</strong> 1</span>
                <span><strong>Herbalismo:</strong> 1</span>
                <span><strong>Linguística:</strong> 1</span>
                <span><strong>Ofício:</strong> 1</span>
                <span><strong>Investigação:</strong> 1</span>
                <span><strong>Medicina:</strong> 1</span>
                <span><strong>Conhecimento (Geral):</strong> 1</span>
                <span><strong>Conhecimento (Arcano):</strong> 1</span>
            </div>
          </section>

          <section class="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 class="text-3xl font-bold text-green-400 mb-4 border-b-2 border-green-500/30 pb-2">Vantagens</h2>
              <ul class="list-disc list-inside text-slate-300 space-y-3 text-lg">
                <li><strong>Força Bruta Excepcional:</strong> Possuem o maior bônus natural em Força, o que lhes permite causar dano massivo com armas corpo a corpo.</li>
                <li><strong>Resistência de Batalha:</strong> Seu Vigor elevado os torna extremamente resistentes à dor e ao cansaço em combate.</li>
                <li><strong>Presença Aterradora:</strong> Sua aparência e reputação lhes conferem uma vantagem natural em testes de Intimidação.</li>
              </ul>
            </div>
            <div>
              <h2 class="text-3xl font-bold text-red-400 mb-4 border-b-2 border-red-500/30 pb-2">Desvantagens</h2>
              <ul class="list-disc list-inside text-slate-300 space-y-3 text-lg">
                <li><strong>Intelecto e Sociabilidade Baixos:</strong> Possuem grande dificuldade em tarefas que exigem raciocínio complexo ou delicadeza social.</li>
                <li><strong>Reputação Terrível:</strong> São vistos como monstros pela maioria das outras raças, dificultando qualquer tipo de interação pacífica.</li>
                <li><strong>Inaptidão para Magia:</strong> Sua conexão com o mundo arcano é quase nula.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Afinidades</h2>
            <div class="text-slate-300 space-y-2 text-lg">
              <p><strong class="text-green-400">Melhores:</strong> Minotauro, Goblin.</p>
              <p><strong class="text-red-400">Piores:</strong> Elfo, Anão, Humano.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default OrcPage;