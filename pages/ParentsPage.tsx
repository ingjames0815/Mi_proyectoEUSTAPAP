
import React from 'react';
import { UsersIcon, ChatBubbleLeftRightIcon, LinkIcon } from '../components/icons/HeroIcons';

export const ParentsPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <UsersIcon className="w-20 h-20 mx-auto mb-4 text-sky-600" />
        <h1 className="text-4xl font-bold text-sky-800 mb-3">Panel para Padres y Apoderados</h1>
        <p className="text-lg text-slate-700">Recursos e información para acompañar a sus hijos en esta importante decisión.</p>
      </div>

      <div className="space-y-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center text-2xl font-semibold text-sky-700 mb-4">
            <LinkIcon className="h-7 w-7 mr-3 text-sky-600" />
            Recursos Útiles
          </div>
          <p className="text-slate-600 mb-4">
            Aquí encontrarán enlaces a artículos, guías y herramientas que pueden ayudarles a entender mejor las opciones técnicas y cómo apoyar a sus hijos en el proceso de elección.
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li><a href="#" className="text-sky-600 hover:underline">Guía para padres sobre orientación vocacional</a> (Próximamente)</li>
            <li><a href="#" className="text-sky-600 hover:underline">Importancia de las carreras técnicas en el siglo XXI</a> (Próximamente)</li>
            <li><a href="#" className="text-sky-600 hover:underline">Cómo hablar con tus hijos sobre su futuro</a> (Próximamente)</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center text-2xl font-semibold text-sky-700 mb-4">
            <ChatBubbleLeftRightIcon className="h-7 w-7 mr-3 text-sky-600" />
            Contacto con Orientación
          </div>
          <p className="text-slate-600 mb-4">
            Si tienen preguntas específicas o desean una reunión con el departamento de orientación del colegio, pueden contactarnos a través de los siguientes medios:
          </p>
          <ul className="text-slate-600 space-y-2">
            <li><strong>Email:</strong> <a href="mailto:orientacion@colegioejemplo.edu" className="text-sky-600 hover:underline">orientacion@colegioejemplo.edu</a> (Email de ejemplo)</li>
            <li><strong>Teléfono:</strong> <a href="tel:+123456789" className="text-sky-600 hover:underline">+123 456 789</a> (Teléfono de ejemplo)</li>
            <li><strong>Horario de atención:</strong> Lunes a Viernes de 9:00 AM a 3:00 PM (Horario de ejemplo)</li>
          </ul>
          <button
            onClick={() => alert('Formulario de contacto o sistema de agendamiento se abriría aquí (simulado).')}
            className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
          >
            Solicitar Cita con Orientación
          </button>
        </div>
      </div>
    </div>
  );
};
    