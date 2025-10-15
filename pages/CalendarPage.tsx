
import React from 'react';
import { CalendarIcon as CalendarOutlineIcon } from '../components/icons/HeroIcons';

interface Event {
  id: string;
  date: string;
  time: string;
  title: string;
  description: string;
  location: string;
}

const mockEvents: Event[] = [
  { 
    id: '1', 
    date: '2025-09-15', 
    time: '10:00 AM - 12:00 PM', 
    title: 'Charla Informativa: Especialidades Técnicas', 
    description: 'Presentación general de todas las especialidades técnicas ofrecidas por el colegio. Dirigido a estudiantes y padres.',
    location: 'Auditorio Principal - Sede Central' 
  },
  { 
    id: '2', 
    date: '2025-09-22', 
    time: '2:00 PM - 4:00 PM', 
    title: 'Taller Vivencial: Desarrollo de Software', 
    description: 'Una introducción práctica al mundo de la programación. Cupos limitados.',
    location: 'Laboratorio de Informática 1'
  },
  { 
    id: '3', 
    date: '2025-09-29', 
    time: 'Todo el día', 
    title: 'Feria Vocacional EustAPP', 
    description: 'Stands informativos de cada especialidad, demostraciones y charlas con egresados.',
    location: 'Tele Aula'
  },
];


export const CalendarPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <CalendarOutlineIcon className="w-20 h-20 mx-auto mb-4 text-sky-600" />
        <h1 className="text-4xl font-bold text-sky-800 mb-3">Calendario de Eventos</h1>
        <p className="text-lg text-slate-700">Mantente al día con las próximas charlas, talleres y ferias vocacionales.</p>
      </div>

      {mockEvents.length > 0 ? (
        <div className="space-y-6">
          {mockEvents.map(event => (
            <div key={event.id} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-sky-500">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                <h2 className="text-2xl font-semibold text-sky-700">{event.title}</h2>
                <span className="text-sm text-sky-600 font-medium bg-sky-100 px-3 py-1 rounded-full mt-2 sm:mt-0">
                  {new Date(event.date + 'T00:00:00').toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <p className="text-slate-500 text-sm mb-1">{event.time}</p>
              <p className="text-slate-600 mb-3">{event.description}</p>
              <p className="text-sm text-slate-500"><strong>Lugar:</strong> {event.location}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-600 text-lg">No hay eventos programados en este momento. Vuelve a consultar pronto.</p>
      )}
    </div>
  );
};
    