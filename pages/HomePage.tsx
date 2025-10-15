
import React from 'react';
import { Link } from 'react-router-dom';
import { APP_ROUTES, APP_NAME, APP_SUBTITLE } from '../constants';
import { Specialization } from '../types';
import { ArrowRightIcon, LightBulbIcon, MagnifyingGlassIcon } from '../components/icons/HeroIcons';

interface HomePageProps {
  interestedSpecializations: Specialization[];
}

export const HomePage: React.FC<HomePageProps> = ({ interestedSpecializations }) => {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-r from-sky-600 to-cyan-500 rounded-xl shadow-xl text-white">
        <div className="container mx-auto px-6">
          <LightBulbIcon className="w-24 h-24 mx-auto mb-6 text-yellow-300" />
          <h1 className="text-5xl font-bold mb-4">
            Bienvenido a <span className="block md:inline">{APP_NAME}</span>
          </h1>
          <p className="text-2xl mb-8 font-light">{APP_SUBTITLE} - Tu Guía Hacia el Éxito</p>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Explora las especialidades técnicas, descubre tus pasiones y toma decisiones informadas para tu futuro profesional. ¡El camino hacia tu carrera ideal comienza aquí!
          </p>
          <Link
            to={APP_ROUTES.EXPLORE}
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-lg shadow-md text-sky-700 bg-white hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-600 focus:ring-white transition-transform transform hover:scale-105"
          >
            <MagnifyingGlassIcon className="w-6 h-6 mr-3" />
            Explorar Especialidades
          </Link>
        </div>
      </section>

      {interestedSpecializations.length > 0 && (
        <section className="py-8">
          <h2 className="text-3xl font-semibold text-sky-800 mb-6 text-center">Tus Especialidades de Interés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interestedSpecializations.slice(0,3).map(spec => (
              <Link to={`${APP_ROUTES.SPECIALIZATION}/${spec.id}`} key={spec.id} className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src={spec.imageUrl} alt={spec.name} className="w-full h-40 object-cover rounded-md mb-4"/>
                <h3 className="text-xl font-semibold text-sky-700 mb-2">{spec.name}</h3>
                <p className="text-slate-600 text-sm mb-3 truncate">{spec.shortDescription}</p>
                <span className="text-sky-600 font-medium hover:underline inline-flex items-center">
                  Ver Detalles <ArrowRightIcon className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
          {interestedSpecializations.length > 3 && (
             <div className="text-center mt-8">
                <Link
                    to={APP_ROUTES.MY_INTERESTS}
                    className="inline-flex items-center px-6 py-3 border border-sky-600 text-base font-medium rounded-md text-sky-600 bg-white hover:bg-sky-50 transition-colors"
                >
                    Ver todos mis intereses ({interestedSpecializations.length})
                </Link>
            </div>
          )}
        </section>
      )}

      <section className="grid md:grid-cols-3 gap-8 text-center py-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-sky-700 mb-2">Información Clara</h3>
          <p className="text-slate-600">Descripciones detalladas, perfiles de estudiante y salidas profesionales para cada especialidad.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-sky-700 mb-2">Visual y Atractivo</h3>
          <p className="text-slate-600">Explora con imágenes y un diseño intuitivo que facilita tu elección.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-sky-700 mb-2">A Tu Ritmo</h3>
          <p className="text-slate-600">Guarda tus intereses, compara opciones y decide cuándo estés listo.</p>
        </div>
      </section>
    </div>
  );
};
    