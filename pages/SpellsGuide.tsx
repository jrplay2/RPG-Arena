import React, { useState, useEffect } from 'react';
import MagicCard from '../components/MagicCard.tsx';
import { MAGICS } from '../constants.ts';
import MagicDetailPage from './MagicDetailPage.tsx';
import { Magic } from '../types.ts';

interface SpellsGuideProps {
  onBack: () => void;
}

const SpellsGuide: React.FC<SpellsGuideProps> = ({ onBack }) => {
  const [magics, setMagics] = useState<Magic[]>([]);
  const [selectedMagic, setSelectedMagic] = useState<Magic | null>(null);
  const [storageError, setStorageError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const savedMagics = localStorage.getItem('userMagics');
      if (savedMagics) {
        setMagics(JSON.parse(savedMagics));
      } else {
        setMagics(MAGICS);
      }
    } catch (error) {
      console.error("Failed to load magics from localStorage", error);
      setMagics(MAGICS);
    }
  }, []);

  const handleImageUpload = (magicName: string, newImageUrl: string) => {
    setStorageError(null); // Reset error on new upload attempt
    const updatedMagics = magics.map(magic => {
      if (magic.name === magicName) {
        return { ...magic, imageUrl: newImageUrl };
      }
      return magic;
    });

    setMagics(updatedMagics);

    try {
      localStorage.setItem('userMagics', JSON.stringify(updatedMagics));
    } catch (error) {
      console.error("Failed to save magics to localStorage", error);
      setStorageError("Não foi possível salvar a imagem. O armazenamento do navegador pode estar cheio. Por favor, tente usar uma imagem menor.");
    }
  };

  const handleSelectMagic = (magicName: string) => {
    const magic = magics.find(m => m.name === magicName);
    if (magic) {
      setSelectedMagic(magic);
    }
  };

  const handleBackToGallery = () => {
    setSelectedMagic(null);
  };
  
  if (selectedMagic) {
    return <MagicDetailPage magic={selectedMagic} onBack={handleBackToGallery} />;
  }

  return (
    // FIX: Replaced `className` with `class` to satisfy TypeScript compiler.
    <div class="min-h-screen bg-slate-900 text-white font-sans">
      {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
      <main class="container mx-auto px-4 py-8 sm:py-16">
        <button
          onClick={onBack}
          // FIX: Replaced `className` with `class` to satisfy TypeScript compiler.
          class="mb-8 bg-purple-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-purple-600 transition-colors duration-300 flex items-center space-x-2"
        >
          {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            {/* FIX: Replaced camelCase SVG props with kebab-case to satisfy TypeScript compiler. */}
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span>Voltar ao Início</span>
        </button>
        {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
        <header class="text-center mb-12">
          {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Grimório de Magias
          </h1>
          {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
          <p class="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Descubra feitiços poderosos para sua jornada.
          </p>
        </header>

        {storageError && (
          // FIX: Replaced `className` with `class` to satisfy TypeScript compiler.
          <div class="bg-red-800 border border-red-600 text-white px-4 py-3 rounded-lg relative mb-6" role="alert">
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <strong class="font-bold">Erro!</strong>
            {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
            <span class="block sm:inline ml-2">{storageError}</span>
          </div>
        )}

        {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {magics.map((magic) => (
            <MagicCard 
              key={magic.name} 
              magic={magic} 
              onClick={handleSelectMagic} 
              onImageUpload={handleImageUpload}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default SpellsGuide;