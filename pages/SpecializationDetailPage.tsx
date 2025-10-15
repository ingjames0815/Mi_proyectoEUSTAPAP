
import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Specialization, FAQ } from '../types';
import { APP_ROUTES } from '../constants';
import { ChevronLeftIcon, DocumentArrowDownIcon, CheckCircleIcon, QuestionMarkCircleIcon, UserCircleIcon, BriefcaseIcon, AcademicCapIcon, HeartIcon as HeartOutlineIcon } from '../components/icons/HeroIcons';
import { HeartIconSolid as HeartSolidIcon } from '../components/icons/HeroIconsSolid';


interface SpecializationDetailPageProps {
  specializations: Specialization[];
  interestedIds: string[];
  toggleInterest: (id: string) => void;
}

const DetailSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center text-2xl font-semibold text-sky-700 mb-4">
      {icon}
      <h2 className="ml-3">{title}</h2>
    </div>
    {children}
  </div>
);

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start">
    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
    <span>{children}</span>
  </li>
);

export const SpecializationDetailPage: React.FC<SpecializationDetailPageProps> = ({ specializations, interestedIds, toggleInterest }) => {
  const { id } = useParams<{ id: string }>();
  const [specialization, setSpecialization] = useState<Specialization | null | undefined>(undefined);

  useEffect(() => {
    const foundSpecialization = specializations.find(spec => spec.id === id);
    setSpecialization(foundSpecialization);
  }, [id, specializations]);

  if (specialization === undefined) {
    return <div className="text-center py-10">Cargando detalles de la especialidad...</div>;
  }

  if (!specialization) {
    return <Navigate to={APP_ROUTES.EXPLORE} replace />;
  }
  
  const isInterested = interestedIds.includes(specialization.id);

  return (
    <div className="max-w-4xl mx-auto">
      <Link to={APP_ROUTES.EXPLORE} className="inline-flex items-center text-sky-600 hover:text-sky-800 mb-6 group">
        <ChevronLeftIcon className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" />
        Volver al catálogo
      </Link>

      <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
        <img className="w-full h-64 md:h-80 object-cover" src={specialization.imageUrl} alt={specialization.name} />
        <div className="p-8">
          <h1 className="text-4xl font-bold text-sky-800 mb-3">{specialization.name}</h1>
          <p className="text-lg text-slate-700 mb-6">{specialization.longDescription}</p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => toggleInterest(specialization.id)}
              className={`flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm transition-colors ${
                isInterested 
                ? 'text-red-700 bg-red-100 hover:bg-red-200' 
                : 'text-white bg-red-500 hover:bg-red-600'
              }`}
            >
              {isInterested ? <HeartSolidIcon className="h-6 w-6 mr-2" /> : <HeartOutlineIcon className="h-6 w-6 mr-2" />}
              {isInterested ? 'Quitar de Mis Intereses' : 'Me Interesa'}
            </button>
            {specialization.brochureUrl && specialization.brochureUrl !== '#' && (
               <a
                href={specialization.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-sky-600 text-base font-medium rounded-md text-sky-600 bg-white hover:bg-sky-50 transition-colors"
              >
                <DocumentArrowDownIcon className="h-6 w-6 mr-2" />
                Descargar Folleto
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <DetailSection title="¿Qué Aprenderás?" icon={<AcademicCapIcon className="h-7 w-7" />}>
          <ul className="space-y-2 text-slate-600">
            {specialization.whatYouLearn.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
          </ul>
        </DetailSection>

        <DetailSection title="Salidas Profesionales" icon={<BriefcaseIcon className="h-7 w-7" />}>
          <ul className="space-y-2 text-slate-600">
            {specialization.careerOpportunities.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
          </ul>
        </DetailSection>

        <DetailSection title="Perfil del Estudiante Ideal" icon={<UserCircleIcon className="h-7 w-7" />}>
          <p className="text-slate-600">{specialization.idealProfile}</p>
        </DetailSection>

        <DetailSection title="Requisitos" icon={<CheckCircleIcon className="h-7 w-7 text-sky-700" />}>
           <ul className="space-y-2 text-slate-600">
            {specialization.requirements.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
          </ul>
        </DetailSection>

        {specialization.faqs.length > 0 && (
          <DetailSection title="Preguntas Frecuentes" icon={<QuestionMarkCircleIcon className="h-7 w-7" />}>
            <div className="space-y-4">
              {specialization.faqs.map((faq: FAQ, index: number) => (
                <div key={index} className="border-b border-slate-200 pb-2">
                  <h4 className="font-semibold text-slate-700">{faq.question}</h4>
                  <p className="text-slate-600 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </DetailSection>
        )}
      </div>
    </div>
  );
};
    