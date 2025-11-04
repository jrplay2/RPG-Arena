import React from 'react';

interface MinotaurPageProps {
  onBack: () => void;
}

const MinotaurPage: React.FC<MinotaurPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans p-4 sm:p-8">
      <main className="container mx-auto">
        <button
          onClick={onBack}
          className="mb-8 bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-cyan-600 transition-colors duration-300 flex items-center space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span>Voltar para a Galeria</span>
        </button>

        <header className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Minotauro
            </h1>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">História</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Minotauros são uma raça de gigantes humanoides com cabeça de touro, conhecidos por sua força colossal e fúria em batalha. Criados em labirintos e arenas para o combate, eles valorizam a força física e a dominação acima de tudo. Um Minotauro vive para o desafio da luta e para provar sua superioridade. Embora muitos sejam vistos como monstros irracionais, alguns seguem um código de honra guerreiro, respeitando apenas aqueles que conseguem igualar sua força.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Atributos (15 pontos)</h2>
            <ul className="list-disc list-inside text-slate-300 space-y-2 text-lg">
              <li><strong>Força:</strong> 6</li>
              <li><strong>Vigor:</strong> 5</li>
              <li><strong>Força de Vontade:</strong> 1</li>
              <li><strong>Destreza:</strong> 1</li>
              <li><strong>Aparência:</strong> 1</li>
              <li><strong>Inteligência:</strong> 1</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Perícias (50 pontos)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 text-slate-300 text-lg">
                <span><strong>Habilidade com Armas Brancas:</strong> 8</span>
                <span><strong>Atletismo:</strong> 7</span>
                <span><strong>Intimidação:</strong> 7</span>
                <span><strong>Sobrevivência:</strong> 4</span>
                <span><strong>Percepção:</strong> 3</span>
                <span><strong>Liderança:</strong> 2</span>
                <span><strong>Manha:</strong> 2</span>
                <span><strong>Furtividade:</strong> 1</span>
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

          <section className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-green-400 mb-4 border-b-2 border-green-500/30 pb-2">Vantagens</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-3 text-lg">
                <li><strong>Força Inigualável:</strong> Possuem o maior bônus de Força do jogo, tornando seus ataques corpo a corpo devastadores.</li>
                <li><strong>Constituição Robusta:</strong> Seu Vigor massivo lhes confere uma quantidade enorme de pontos de vida e resistência a danos.</li>
                <li><strong>Chifres:</strong> Seus chifres são armas naturais que podem ser usadas para ataques de investida poderosos.</li>
                <li><strong>Fúria de Batalha:</strong> Em combate, podem entrar em um estado de fúria que aumenta ainda mais seu dano, mas diminui sua capacidade de defesa e raciocínio.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-red-400 mb-4 border-b-2 border-red-500/30 pb-2">Desvantagens</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-3 text-lg">
                <li><strong>Inaptidão Social e Intelectual:</strong> São extremamente limitados em todas as perícias que não envolvem força bruta.</li>
                <li><strong>Lentidão:</strong> Sua baixa Destreza os torna lentos e desajeitados fora do combate direto.</li>
                <li><strong>Natureza Bestial:</strong> Sua mentalidade é focada em dominação, tornando quase impossível qualquer tipo de diplomacia ou interação social sutil.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Afinidades</h2>
            <div className="text-slate-300 space-y-2 text-lg">
              <p><strong className="text-green-400">Melhores:</strong> Orc, Goblin.</p>
              <p><strong className="text-red-400">Piores:</strong> Elfo, Halfling, Gnomo.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MinotaurPage;