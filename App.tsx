import React, { useState } from 'react';
import HomePage from './pages/HomePage.tsx';
import RaceGuide from './pages/RaceGuide.tsx';
import SpellsGuide from './pages/SpellsGuide.tsx';

type Page = 'home' | 'races' | 'spells';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'races':
        return <RaceGuide onBack={() => navigateTo('home')} />;
      case 'spells':
        return <SpellsGuide onBack={() => navigateTo('home')} />;
      case 'home':
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <>
      {/* Botão fixo de menu no canto superior direito */}
      <button
        aria-label="Abrir menu"
        onClick={() => setMenuOpen(true)}
        className="fixed top-4 right-4 z-50 rounded-full bg-slate-800/70 backdrop-blur px-3 py-3 shadow-lg hover:bg-slate-700 transition-colors"
      >
        {/* Ícone de hambúrguer */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-white"
        >
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Overlay e Drawer lateral */}
      {menuOpen && (
        <div className="fixed inset-0 z-40">
          {/* Fundo semitransparente para fechar */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMenuOpen(false)}
          />
          {/* Drawer */}
          <aside className="absolute right-0 top-0 h-full w-72 bg-slate-900 shadow-xl border-l border-slate-800 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-xl font-semibold">Menu</h2>
              <button
                aria-label="Fechar menu"
                onClick={() => setMenuOpen(false)}
                className="rounded-md p-2 hover:bg-slate-800 text-slate-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                  <path d="M6 6l12 12M6 18L18 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <nav className="space-y-3">
              <button
                className="w-full text-left px-4 py-3 rounded-lg bg-slate-800 text-white hover:bg-slate-700"
                onClick={() => navigateTo('home')}
              >
                Início
              </button>
              <button
                className="w-full text-left px-4 py-3 rounded-lg bg-slate-800 text-white hover:bg-slate-700"
                onClick={() => navigateTo('races')}
              >
                Guia de Raças
              </button>
              <button
                className="w-full text-left px-4 py-3 rounded-lg bg-slate-800 text-white hover:bg-slate-700"
                onClick={() => navigateTo('spells')}
              >
                Magias
              </button>
            </nav>
          </aside>
        </div>
      )}

      {renderPage()}
    </>
  );
}

export default App;