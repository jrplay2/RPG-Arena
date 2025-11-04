import React from 'react';

interface CivilizedGoblinPageProps {
  onBack: () => void;
}

const CivilizedGoblinPage: React.FC<CivilizedGoblinPageProps> = ({ onBack }) => {
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
            Goblin Civilizado
            </h1>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">História</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Diferente de seus primos selvagens, os Goblins Civilizados abandonaram as tribos e cavernas para tentar a sorte nas cidades das raças maiores. São sobreviventes natos, usando sua agilidade, tamanho e uma astúcia impressionante para prosperar nos becos e telhados das metrópoles. Embora "civilizados", eles ainda carregam o estigma de sua raça, sendo frequentemente vistos com desconfiança e preconceito, o que os tornou mestres em passar despercebidos e aproveitar oportunidades que ninguém mais vê.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Atributos (15 pontos)</h2>
            <ul className="list-disc list-inside text-slate-300 space-y-2 text-lg">
              <li><strong>Destreza:</strong> 5</li>
              <li><strong>Inteligência:</strong> 3</li>
              <li><strong>Vigor:</strong> 2</li>
              <li><strong>Força de Vontade:</strong> 2</li>
              <li><strong>Força:</strong> 1</li>
              <li><strong>Aparência:</strong> 1</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Perícias (50 pontos)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 text-slate-300 text-lg">
                <span><strong>Furtividade:</strong> 7</span>
                <span><strong>Ladinagem:</strong> 6</span>
                <span><strong>Manha (Lábia):</strong> 5</span>
                <span><strong>Percepção:</strong> 4</span>
                <span><strong>Armas de Projétil:</strong> 4</span>
                <span><strong>Investigação:</strong> 3</span>
                <span><strong>Sobrevivência:</strong> 3</span>
                <span><strong>Atletismo:</strong> 2</span>
                <span><strong>Armas Brancas:</strong> 2</span>
                <span><strong>Persuasão:</strong> 2</span>
                <span><strong>Empatia:</strong> 2</span>
                <span><strong>Conhecimento (Geral):</strong> 2</span>
                <span><strong>Linguística:</strong> 1</span>
                <span><strong>Cavalgar:</strong> 1</span>
                <span><strong>Intimidação:</strong> 1</span>
                <span><strong>Etiqueta:</strong> 1</span>
                <span><strong>Liderança:</strong> 1</span>
                <span><strong>Herbalismo:</strong> 1</span>
                <span><strong>Ofício:</strong> 1</span>
                <span><strong>Medicina:</strong> 1</span>
                <span><strong>Conhecimento (Arcano):</strong> 1</span>
            </div>
          </section>

          <section className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-green-400 mb-4 border-b-2 border-green-500/30 pb-2">Vantagens</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-3 text-lg">
                <li><strong>Agilidade Excepcional:</strong> Possuem um bônus natural em Destreza, o que os torna incrivelmente rápidos e difíceis de acertar.</li>
                <li><strong>Mestres da Ladinagem:</strong> Sua perícia em Furtividade e Ladinagem é inigualável, sendo os melhores batedores e ladrões.</li>
                <li><strong>Sobrevivente Urbano:</strong> São especialistas em encontrar recursos e se esconder em ambientes urbanos.</li>
                <li><strong>Tamanho Pequeno:</strong> Sua estatura diminuta permite que se escondam com facilidade e alcancem lugares inacessíveis para raças maiores.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-red-400 mb-4 border-b-2 border-red-500/30 pb-2">Desvantagens</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-3 text-lg">
                <li><strong>Fisicamente Fracos:</strong> Sua baixa Força e Vigor os tornam extremamente vulneráveis em combate direto.</li>
                <li><strong>Estigma Social:</strong> São universalmente vistos com desconfiança, sofrendo penalidades em interações sociais com a maioria das outras raças.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Afinidades</h2>
            <div className="text-slate-300 space-y-2 text-lg">
              <p><strong className="text-green-400">Melhores:</strong> Halfling, Tiefling.</p>
              <p><strong className="text-red-400">Piores:</strong> Draconato, Anão.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CivilizedGoblinPage;