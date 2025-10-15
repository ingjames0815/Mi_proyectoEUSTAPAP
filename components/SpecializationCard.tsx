
import React from 'react';
import { Link } from 'react-router-dom';
import { Specialization } from '../types';
import { APP_ROUTES } from '../constants';
import { HeartIcon as HeartOutlineIcon, ArrowRightCircleIcon } from './icons/HeroIcons'; // Outline for not interested
import { HeartIconSolid as HeartSolidIcon } from './icons/HeroIconsSolid'; // Solid for interested

interface SpecializationCardProps {
  specialization: Specialization;
  isInterested: boolean;
  onToggleInterest: (id: string) => void;
}

export const SpecializationCard: React.FC<SpecializationCardProps> = ({ specialization, isInterested, onToggleInterest }) => {
  const handleInterestClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation if clicking the heart icon
    e.stopPropagation();
    onToggleInterest(specialization.id);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col h-full">
      <img className="w-full h-48 object-cover" src={specialization.imageUrl} alt={specialization.name} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-sky-800 mb-2">{specialization.name}</h3>
        <p className="text-slate-600 text-sm mb-4 flex-grow">{specialization.shortDescription}</p>
        <div className="mt-auto flex justify-between items-center">
          <Link
            to={`${APP_ROUTES.SPECIALIZATION}/${specialization.id}`}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
          >
            Ver Más
            <ArrowRightCircleIcon className="ml-2 h-5 w-5" />
          </Link>
          <button
            onClick={handleInterestClick}
            className={`p-2 rounded-full transition-colors ${
              isInterested ? 'text-red-500 hover:bg-red-100' : 'text-slate-400 hover:text-red-500 hover:bg-red-100'
            }`}
            aria-label={isInterested ? 'Quitar de mis intereses' : 'Agregar a mis intereses'}
          >
            {isInterested ? <HeartSolidIcon className="h-7 w-7" /> : <HeartOutlineIcon className="h-7 w-7" />}
          </button>
        </div>
      </div>
    </div>
  );
};
    