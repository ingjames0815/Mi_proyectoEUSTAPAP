
import React from 'react';
import { BriefcaseIcon as NewsIcon } from '../components/icons/HeroIcons'; // Using Briefcase as a placeholder news icon

interface NewsArticle {
  id: string;
  date: string;
  title: string;
  summary: string;
  imageUrl?: string;
  link?: string;
}

const mockNews: NewsArticle[] = [
  {
    id: '1',
    date: '2024-08-15',
    title: '¡Nueva Especialidad Técnica en Energías Renovables para el Próximo Año!',
    summary: 'El colegio se complace en anunciar la incorporación de una nueva especialidad enfocada en las tecnologías del futuro. Más detalles pronto.',
    imageUrl: 'https://picsum.photos/seed/energia/400/200',
    link: '#',
  },
  {
    id: '2',
    date: '2024-08-10',
    title: 'Nuestros Estudiantes de Electrónica Ganan Concurso Nacional de Robótica',
    summary: 'El equipo "CyberTitanes" se llevó el primer lugar con su innovador proyecto de robot asistente. ¡Felicitaciones!',
    imageUrl: 'https://picsum.photos/seed/robotica/400/200',
    link: '#',
  },
  {
    id: '3',
    date: '2024-08-01',
    title: 'Abiertas las Inscripciones para Talleres Vocacionales de Septiembre',
    summary: 'No te pierdas la oportunidad de explorar de cerca las especialidades que te interesan. Inscríbete en la secretaría del colegio.',
    link: '#',
  }
];

export const NewsPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <NewsIcon className="w-20 h-20 mx-auto mb-4 text-sky-600" />
        <h1 className="text-4xl font-bold text-sky-800 mb-3">Noticias y Anuncios</h1>
        <p className="text-lg text-slate-700">Las últimas novedades importantes del colegio y sobre nuestras especialidades técnicas.</p>
      </div>

      {mockNews.length > 0 ? (
        <div className="space-y-8">
          {mockNews.map(article => (
            <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
              {article.imageUrl && (
                <img src={article.imageUrl} alt={article.title} className="w-full md:w-1/3 h-48 md:h-auto object-cover" />
              )}
              <div className="p-6 flex-1">
                <p className="text-sm text-slate-500 mb-1">{new Date(article.date + 'T00:00:00').toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <h2 className="text-xl font-semibold text-sky-700 mb-2">{article.title}</h2>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">{article.summary}</p>
                {article.link && article.link !== '#' && (
                  <a 
                    href={article.link} 
                    className="text-sky-600 hover:text-sky-800 font-medium text-sm hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Leer más...
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
         <p className="text-center text-slate-600 text-lg">No hay noticias recientes. Vuelve a consultar pronto.</p>
      )}
    </div>
  );
};
    