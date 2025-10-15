
import React from 'react';
import { Link } from 'react-router-dom';
import { Specialization } from '../types';
import { APP_ROUTES } from '../constants';
import { HeartIconSolid, TrashIcon, CalendarDaysIcon, ArrowRightCircleIcon } from '../components/icons/HeroIconsSolid';

interface MyInterestsPageProps {
  interestedSpecializations: Specialization[];
  toggleInterest: (id: string) => void;
}

export const MyInterestsPage: React.FC<MyInterestsPageProps> = ({ interestedSpecializations, toggleInterest }) => {
  const handleScheduleMeeting = (specializationName: string) => {
    alert(`Redirigiendo para agendar una sesión de orientación sobre ${specializationName}.\n(Esta es una funcionalidad simulada)`);
    // Here you would typically redirect to a scheduling page or open a modal
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-4 border-b border-slate-300">
        <h1 className="text-4xl font-bold text-sky-800 mb-4 sm:mb-0">
          <HeartIconSolid className="inline-block h-10 w-10 mr-3 text-red-500" />
          Mis Intereses
        </h1>
        {interestedSpecializations.length > 0 && (
           <p className="text-slate-600 text-lg">Tienes {interestedSpecializations.length} especialidad{interestedSpecializations.length === 1 ? '' : 'es'} guardada{interestedSpecializations.length === 1 ? '' : 's'}.</p>
        )}
      </div>

      {interestedSpecializations.length === 0 ? (
        <div className="text-center py-12">
          <HeartIconSolid className="w-24 h-24 mx-auto mb-6 text-slate-300" />
          <p className="text-xl text-slate-600 mb-4">Aún no has guardado ninguna especialidad.</p>
          <p className="text-slate-500 mb-8">¡Explora el catálogo y encuentra las que más te gusten!</p>
          <Link
            to={APP_ROUTES.EXPLORE}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
          >
            Explorar Especialidades
            <ArrowRightCircleIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {interestedSpecializations.map(spec => (
            <div key={spec.id} className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <img src={spec.imageUrl} alt={spec.name} className="w-full md:w-48 h-40 md:h-32 object-cover rounded-lg flex-shrink-0" />
              <div className="flex-grow">
                <h2 className="text-2xl font-semibold text-sky-700 mb-1">{spec.name}</h2>
                <p className="text-slate-600 text-sm mb-3 line-clamp-2">{spec.shortDescription}</p>
                <Link
                  to={`${APP_ROUTES.SPECIALIZATION}/${spec.id}`}
                  className="text-sky-600 hover:text-sky-800 font-medium text-sm inline-flex items-center"
                >
                  Ver detalles <ArrowRightCircleIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-0 md:space-y-2 w-full md:w-auto self-stretch md:self-center">
                <button
                  onClick={() => toggleInterest(spec.id)}
                  className="flex items-center justify-center w-full px-4 py-2 border border-red-500 text-sm font-medium rounded-md text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                >
                  <TrashIcon className="h-5 w-5 mr-2" />
                  Desmarcar
                </button>
                <button
                  onClick={() => handleScheduleMeeting(spec.name)}
                  className="flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
                >
                  <CalendarDaysIcon className="h-5 w-5 mr-2" />
                  Agendar Orientación
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
    