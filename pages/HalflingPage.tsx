import React from 'react';

interface HalflingPageProps {
  onBack: () => void;
}

const HalflingPage: React.FC<HalflingPageProps> = ({ onBack }) => {
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
            Halfling
            </h1>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">História</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Halflings são um povo pequeno e de bom coração, que valoriza os prazeres simples da vida: uma boa refeição, uma canção alegre e a companhia de amigos e familiares. Eles vivem em comunidades rurais pacíficas, muitas vezes em tocas cavadas nas colinas. Apesar de sua aversão a conflitos, sua agilidade notável, pés silenciosos e uma sorte inacreditável os tornam excelentes ladrões, batedores ou simplesmente sobreviventes engenhosos quando a aventura os chama para longe de casa.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Atributos (15 pontos)</h2>
            <ul className="list-disc list-inside text-slate-300 space-y-2 text-lg">
              <li><strong>Destreza:</strong> 5</li>
              <li><strong>Aparência:</strong> 3</li>
              <li><strong>Vigor:</strong> 2</li>
              <li><strong>Inteligência:</strong> 2</li>
              <li><strong>Força de Vontade:</strong> 2</li>
              <li><strong>Força:</strong> 1</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Perícias (50 pontos)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 text-slate-300 text-lg">
                <span><strong>Furtividade:</strong> 6</span>
                <span><strong>Ladinagem:</strong> 5</span>
                <span><strong>Manha (Lábia):</strong> 5</span>
                <span><strong>Armas de Projétil:</strong> 4</span>
                <span><strong>Persuasão:</strong> 4</span>
                <span><strong>Percepção:</strong> 4</span>
                <span><strong>Sobrevivência:</strong> 3</span>
                <span><strong>Empatia:</strong> 3</span>
                <span><strong>Atletismo:</strong> 2</span>
                <span><strong>Armas Brancas:</strong> 2</span>
                <span><strong>Etiqueta:</strong> 2</span>
                <span><strong>Ofício:</strong> 2</span>
                <span><strong>Herbalismo:</strong> 2</span>
                <span><strong>Cavalgar:</strong> 1</span>
                <span><strong>Intimidação:</strong> 1</span>
                <span><strong>Liderança:</strong> 1</span>
                <span><strong>Linguística:</strong> 1</span>
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
                <li><strong>Agilidade e Furtividade:</strong> Com um bônus natural em Destreza, são mestres em se mover sem serem vistos ou ouvidos.</li>
                <li><strong>Sorte Acima da Média:</strong> Frequentemente escapam de situações perigosas de maneiras inexplicáveis, como se o destino estivesse ao seu lado.</li>
                <li><strong>Tamanho Reduzido:</strong> Seu tamanho pequeno os torna alvos difíceis em combate e permite que acessem lugares que raças maiores não conseguem.</li>
                <li><strong>Natureza Afável:</strong> Sua aparência inofensiva e personalidade amigável lhes conferem uma vantagem em situações sociais.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-red-400 mb-4 border-b-2 border-red-500/30 pb-2">Desvantagens</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-3 text-lg">
                <li><strong>Força Física Mínima:</strong> Sua pequena estatura os torna incapazes de usar armas pesadas ou realizar grandes feitos de força.</li>
                <li><strong>Vulnerabilidade em Combate Direto:</strong> São presas fáceis em um confronto direto contra inimigos maiores e mais fortes.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Afinidades</h2>
            <div className="text-slate-300 space-y-2 text-lg">
              <p><strong className="text-green-400">Melhores:</strong> Humano, Gnomo.</p>
              <p><strong className="text-red-400">Piores:</strong> Orc, Minotauro.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HalflingPage;