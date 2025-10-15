
import React from 'react';
import { APP_NAME } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-800 text-sky-200 py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} {APP_NAME}. Todos los derechos reservados.</p>
        <p className="text-sm mt-1">Tu guía hacia el éxito.</p>
      </div>
    </footer>
  );
};
    