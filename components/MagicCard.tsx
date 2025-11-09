import React, { useRef } from 'react';
import { Magic } from '../types.ts';

interface MagicCardProps {
  magic: Magic;
  onClick: (magicName: string) => void;
  onImageUpload: (magicName: string, newImageUrl: string) => void;
}

const MagicCard: React.FC<MagicCardProps> = ({ magic, onClick, onImageUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onImageUpload(magic.name, reader.result);
      }
    };
    reader.readAsDataURL(file);
  };
  
  return (
    // FIX: Replaced `className` with `class` to satisfy TypeScript compiler.
    <div
      class="group bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/50 transition-all duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
      onClick={() => onClick(magic.name)}
    >
      {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
      <div class="relative">
        <img
          // FIX: Replaced `className` with `class` to satisfy TypeScript compiler.
          class="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
          src={magic.imageUrl}
          alt={`Imagem da magia ${magic.name}`}
        />
        {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <button
          onClick={handleUploadClick}
          title="Alterar imagem"
          // FIX: Replaced `className` with `class` to satisfy TypeScript compiler.
          class="absolute top-3 right-3 bg-slate-900/60 hover:bg-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 opacity-50 group-hover:opacity-100"
        >
          {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* FIX: Replaced camelCase SVG props with kebab-case to satisfy TypeScript compiler. */}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          // FIX: Replaced `className` with `class` to satisfy TypeScript compiler.
          class="hidden"
        />
      </div>
      {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
      <div class="p-6">
        {/* FIX: Replaced `className` with `class` to satisfy TypeScript compiler. */}
        <h3 class="text-2xl font-bold text-white text-center tracking-wider">{magic.name}</h3>
      </div>
    </div>
  );
};

export default MagicCard;