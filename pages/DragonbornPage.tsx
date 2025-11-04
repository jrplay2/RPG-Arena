import React from 'react';

interface DragonbornPageProps {
  onBack: () => void;
}

const DragonbornPage: React.FC<DragonbornPageProps> = ({ onBack }) => {
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
            Draconato
            </h1>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">História</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Os Draconatos são uma raça nobre e poderosa, que carrega em seu sangue a linhagem dos antigos dragões. Nascidos para a batalha, eles são guiados por um código de honra rigoroso e uma lealdade inabalável ao seu clã. Sua pele escamosa lhes oferece uma defesa natural, e seu poder ancestral se manifesta em um sopro elemental devastador. Embora sejam frequentemente vistos como arrogantes ou distantes, os Draconatos valorizam a força, a honra e a coragem acima de tudo.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Atributos (15 pontos)</h2>
            <ul className="list-disc list-inside text-slate-300 space-y-2 text-lg">
              <li><strong>Força:</strong> 5</li>
              <li><strong>Vigor:</strong> 4</li>
              <li><strong>Aparência:</strong> 3</li>
              <li><strong>Inteligência:</strong> 2</li>
              <li><strong>Destreza:</strong> 1</li>
              <li><strong>Força de Vontade:</strong> 1</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Perícias (50 pontos)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 text-slate-300 text-lg">
                <span><strong>Armas Brancas:</strong> 7</span>
                <span><strong>Intimidação:</strong> 6</span>
                <span><strong>Atletismo:</strong> 5</span>
                <span><strong>Liderança:</strong> 4</span>
                <span><strong>Sobrevivência:</strong> 4</span>
                <span><strong>Percepção:</strong> 3</span>
                <span><strong>Conhecimento (Geral):</strong> 3</span>
                <span><strong>Persuasão:</strong> 2</span>
                <span><strong>Etiqueta:</strong> 2</span>
                <span><strong>Investigação:</strong> 2</span>
                <span><strong>Conhecimento (Arcano):</strong> 2</span>
                <span><strong>Furtividade:</strong> 1</span>
                <span><strong>Armas de Projétil:</strong> 1</span>
                <span><strong>Ladinagem:</strong> 1</span>
                <span><strong>Cavalgar:</strong> 1</span>
                <span><strong>Manha:</strong> 1</span>
                <span><strong>Empatia:</strong> 1</span>
                <span><strong>Herbalismo:</strong> 1</span>
                <span><strong>Ofício:</strong> 1</span>
                <span><strong>Linguística:</strong> 1</span>
                <span><strong>Medicina:</strong> 1</span>
            </div>
          </section>

          <section className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-green-400 mb-4 border-b-2 border-green-500/30 pb-2">Vantagens</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-3 text-lg">
                <li><strong>Força Dracônica:</strong> Possuem um dos maiores bônus naturais em Força, tornando-os combatentes corpo a corpo formidáveis.</li>
                <li><strong>Sopro Elemental:</strong> São capazes de cuspir uma rajada de energia elemental (fogo, gelo, ácido, etc., dependendo de sua ancestralidade).</li>
                <li><strong>Defesa Natural:</strong> Sua pele escamosa lhes proporciona uma proteção natural, funcionando como uma armadura leve.</li>
                <li><strong>Presença Imponente:</strong> Sua herança dracônica lhes confere uma vantagem em testes de Liderança e Intimidação.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-red-400 mb-4 border-b-2 border-red-500/30 pb-2">Desvantagens</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-3 text-lg">
                <li><strong>Lentos e Pesados:</strong> Sua baixa Destreza os torna alvos fáceis para ataques rápidos e os impede de realizar manobras ágeis ou furtivas.</li>
                <li><strong>Arrogância:</strong> Sua natureza orgulhosa pode gerar atritos com outras raças, que os consideram prepotentes.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Afinidades</h2>
            <div className="text-slate-300 space-y-2 text-lg">
              <p><strong className="text-green-400">Melhores:</strong> Humano, Anão.</p>
              <p><strong className="text-red-400">Piores:</strong> Goblin, Halfling.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DragonbornPage;