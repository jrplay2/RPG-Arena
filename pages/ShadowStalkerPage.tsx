import React from 'react';

interface ShadowStalkerPageProps {
  onBack: () => void;
}

const ShadowStalkerPage: React.FC<ShadowStalkerPageProps> = ({ onBack }) => {
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
          <span>Voltar para a Galeria</span>
        </button>

        {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
        <header class="mb-10">
            {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
            <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Espreitador das Sombras
            </h1>
        </header>

        {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
        <div class="space-y-12">
          <section>
            {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">História</h2>
            {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
            <p class="text-slate-300 leading-relaxed text-lg">
              Ninguém sabe ao certo de onde vieram os Espreitadores das Sombras. Alguns dizem que são descendentes de elfos corrompidos pela escuridão, outros que são uma raça vinda de um plano de sombras. Eles são definidos por sua ausência; sua habilidade de se mover sem serem vistos ou ouvidos é lendária. Vivem à margem da sociedade, em ruínas esquecidas ou nos becos mais escuros das cidades. Silenciosos e observadores, eles valorizam o segredo e a eficiência, agindo como espiões, assassinos ou guardiões de conhecimentos proibidos.
            </p>
          </section>

          <section>
            {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Atributos (15 pontos)</h2>
            {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
            <ul class="list-disc list-inside text-slate-300 space-y-2 text-lg">
              <li><strong>Destreza:</strong> 5</li>
              <li><strong>Força de Vontade:</strong> 3</li>
              <li><strong>Inteligência:</strong> 2</li>
              <li><strong>Vigor:</strong> 2</li>
              <li><strong>Força:</strong> 2</li>
              <li><strong>Aparência:</strong> 1</li>
            </ul>
          </section>

          <section>
            {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Perícias (50 pontos)</h2>
            {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 text-slate-300 text-lg">
                <span><strong>Furtividade:</strong> 7</span>
                <span><strong>Percepção:</strong> 5</span>
                <span><strong>Ladinagem:</strong> 5</span>
                <span><strong>Habilidade com Armas Brancas:</strong> 4</span>
                <span><strong>Sobrevivência:</strong> 4</span>
                <span><strong>Atletismo:</strong> 3</span>
                <span><strong>Investigação:</strong> 3</span>
                <span><strong>Armas de Projétil:</strong> 2</span>
                <span><strong>Manha (Lábia):</strong> 2</span>
                <span><strong>Conhecimento (Geral):</strong> 2</span>
                <span><strong>Cavalgar:</strong> 1</span>
                <span><strong>Intimidação:</strong> 1</span>
                <span><strong>Persuasão:</strong> 1</span>
                <span><strong>Empatia:</strong> 1</span>
                <span><strong>Etiqueta:</strong> 1</span>
                <span><strong>Liderança:</strong> 1</span>
                <span><strong>Herbalismo:</strong> 1</span>
                <span><strong>Ofício:</strong> 1</span>
                <span><strong>Linguística:</strong> 1</span>
                <span><strong>Medicina:</strong> 1</span>
                <span><strong>Conhecimento (Arcano):</strong> 1</span>
            </div>
          </section>

          {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
          <section class="grid lg:grid-cols-2 gap-12">
            <div>
              {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
              <h2 class="text-3xl font-bold text-green-400 mb-4 border-b-2 border-green-500/30 pb-2">Vantagens</h2>
              {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
              <ul class="list-disc list-inside text-slate-300 space-y-3 text-lg">
                <li><strong>Mestre das Sombras:</strong> Possuem um bônus incomparável em Furtividade, tornando-se quase indetectáveis na penumbra ou escuridão.</li>
                <li><strong>Camuflagem Natural:</strong> Podem ficar parados e se misturar ao ambiente, tornando-se praticamente invisíveis.</li>
                <li><strong>Ataque Surpresa:</strong> Recebem um bônus massivo de dano ao atacar um inimigo que não tenha notado sua presença.</li>
                <li><strong>Visão no Escuro Superior:</strong> Enxergam perfeitamente na escuridão total, não apenas na penumbra.</li>
              </ul>
            </div>
            <div>
              {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
              <h2 class="text-3xl font-bold text-red-400 mb-4 border-b-2 border-red-500/30 pb-2">Desvantagens</h2>
              {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
              <ul class="list-disc list-inside text-slate-300 space-y-3 text-lg">
                <li><strong>Baixa Presença Social:</strong> Sua natureza reclusa e aparência inquietante lhes conferem uma penalidade severa em todas as perícias sociais.</li>
                <li><strong>Vulnerabilidade à Luz:</strong> Luz solar direta ou magias de luz ofuscam sua visão e podem impor penalidades em suas ações.</li>
                <li><strong>Combate Direto Limitado:</strong> São extremamente vulneráveis se forem forçados a um combate frente a frente.</li>
              </ul>
            </div>
          </section>

          <section>
            {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
            <h2 class="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Afinidades</h2>
            {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
            <div class="text-slate-300 space-y-2 text-lg">
              {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
              <p><strong class="text-green-400">Melhores:</strong> Tiefling, Goblin Civilizado.</p>
              {/* FIX: Replaced 'className' with 'class' to match expected JSX properties. */}
              <p><strong class="text-red-400">Piores:</strong> Humano, Elfo, Draconato.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ShadowStalkerPage;