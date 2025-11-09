import React, { useState } from 'react';
import HomePage from './pages/HomePage.tsx';
import RaceGuide from './pages/RaceGuide.tsx';
import SpellsGuide from './pages/SpellsGuide.tsx';

type Page = 'home' | 'races' | 'spells';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => setCurrentPage(page);

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

  return <>{renderPage()}</>;
}

export default App;