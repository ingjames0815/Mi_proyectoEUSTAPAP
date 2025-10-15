
import React from 'react';
import { SpecializationCard } from '../components/SpecializationCard';
import { Specialization } from '../types';

interface ExploreSpecializationsPageProps {
  specializations: Specialization[];
  interestedIds: string[];
  toggleInterest: (id: string) => void;
}

export const ExploreSpecializationsPage: React.FC<ExploreSpecializationsPageProps> = ({ specializations, interestedIds, toggleInterest }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-sky-800 mb-8 text-center">Catálogo de Especialidades Técnicas</h1>
      <p className="text-lg text-slate-700 mb-10 text-center max-w-3xl mx-auto">
        Descubre todas las opciones disponibles en tu colegio. Cada tarjeta te ofrece un vistazo rápido. Haz clic en "Ver Más" para conocer todos los detalles. ¡Guarda las que te llamen la atención!
      </p>
      {specializations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map(spec => (
            <SpecializationCard 
              key={spec.id} 
              specialization={spec}
              isInterested={interestedIds.includes(spec.id)}
              onToggleInterest={toggleInterest}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-600 text-lg">No hay especialidades disponibles en este momento.</p>
      )}
    </div>
  );
};
    