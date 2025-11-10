// Use React-compliant className attributes.
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
    <div
      className="group bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/50 transition-all duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
      onClick={() => onClick(magic.name)}
    >
      <div className="relative">
        <img
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
          src={magic.imageUrl}
          alt={`Imagem da magia ${magic.name}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <button
          onClick={handleUploadClick}
          title="Alterar imagem"
          className="absolute top-3 right-3 bg-slate-900/60 hover:bg-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 opacity-50 group-hover:opacity-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white text-center tracking-wider">{magic.name}</h3>
      </div>
    </div>
  );
};

export default MagicCard;