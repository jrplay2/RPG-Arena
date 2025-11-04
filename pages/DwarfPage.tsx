import React from 'react';

interface DwarfPageProps {
  onBack: () => void;
}

const DwarfPage: React.FC<DwarfPageProps> = ({ onBack }) => {
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
            Anão
            </h1>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">História</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Os Anões são uma raça antiga e orgulhosa, nascida nas profundezas das montanhas. Escultores da pedra e mestres do metal, eles construíram vastos reinos subterrâneos, repletos de tesouros e maravilhas da engenharia. São conhecidos por sua resistência inabalável, lealdade feroz ao clã e um amor profundo por cerveja, ouro e batalhas. Um anão valoriza a honra e a tradição acima de tudo, e sua palavra, uma vez dada, é tão sólida quanto a rocha de sua terra natal.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Atributos (15 pontos)</h2>
            <ul className="list-disc list-inside text-slate-300 space-y-2 text-lg">
              <li><strong>Força:</strong> 4</li>
              <li><strong>Vigor:</strong> 4</li>
              <li><strong>Inteligência:</strong> 2</li>
              <li><strong>Força de Vontade:</strong> 2</li>
              <li><strong>Destreza:</strong> 2</li>
              <li><strong>Aparência:</strong> 1</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Perícias (50 pontos)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 text-slate-300 text-lg">
                <span><strong>Armas Brancas:</strong> 6</span>
                <span><strong>Ofício:</strong> 6</span>
                <span><strong>Sobrevivência:</strong> 5</span>
                <span><strong>Intimidação:</strong> 5</span>
                <span><strong>Atletismo:</strong> 4</span>
                <span><strong>Percepção:</strong> 4</span>
                <span><strong>Conhecimento (Geral):</strong> 3</span>
                <span><strong>Liderança:</strong> 2</span>
                <span><strong>Persuasão:</strong> 2</span>
                <span><strong>Investigação:</strong> 2</span>
                <span><strong>Furtividade:</strong> 1</span>
                <span><strong>Armas de Projétil:</strong> 1</span>
                <span><strong>Ladinagem:</strong> 1</span>
                <span><strong>Cavalgar:</strong> 1</span>
                <span><strong>Manha:</strong> 1</span>
                <span><strong>Empatia:</strong> 1</span>
                <span><strong>Etiqueta:</strong> 1</span>
                <span><strong>Herbalismo:</strong> 1</span>
                <span><strong>Linguística:</strong> 1</span>
                <span><strong>Medicina:</strong> 1</span>
                <span><strong>Conhecimento (Arcano):</strong> 1</span>
            </div>
          </section>

          <section className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-green-400 mb-4 border-b-2 border-green-500/30 pb-2">Vantagens</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-3 text-lg">
                <li><strong>Robustez e Vigor:</strong> Possuem bônus naturais em Força e Vigor, o que lhes confere mais pontos de vida e resistência a venenos e doenças.</li>
                <li><strong>Mestres Artesãos:</strong> Sua perícia em Ofício é incomparável, permitindo-lhes criar armas e armaduras de qualidade superior.</li>
                <li><strong>Visão no Escuro:</strong> Adaptados à vida subterrânea, enxergam com clareza em ambientes de pouca ou nenhuma luz.</li>
                <li><strong>Determinação Feroz:</strong> São extremamente teimosos e resilientes, com alta resistência a intimidação e efeitos de medo.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-red-400 mb-4 border-b-2 border-red-500/30 pb-2">Desvantagens</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-3 text-lg">
                <li><strong>Lentidão e Pouca Agilidade:</strong> Sua baixa Destreza os torna mais lentos e menos aptos para esquivar de ataques rápidos.</li>
                <li><strong>Desconfiança com Magia:</strong> Encaram o conhecimento arcano com ceticismo, o que resulta em uma perícia inicial muito baixa na área.</li>
                <li><strong>Teimosia e Orgulho:</strong> Seu forte senso de honra e tradição pode torná-los inflexíveis e gerar conflitos diplomáticos.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-500/30 pb-2">Afinidades</h2>
            <div className="text-slate-300 space-y-2 text-lg">
              <p><strong className="text-green-400">Melhores:</strong> Humano, Gnomo.</p>
              <p><strong className="text-red-400">Piores:</strong> Elfo (rivalidade histórica), Orc.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DwarfPage;