
import { Specialization } from './types';

export const APP_NAME = "EustAPP";
export const APP_SUBTITLE = "Mi Futuro";

export const APP_ROUTES = {
  HOME: '/inicio',
  EXPLORE: '/explorar-especialidades',
  SPECIALIZATION: '/especialidad', // will be /especialidad/:id
  MY_INTERESTS: '/mis-intereses',
  PARENTS_PANEL: '/panel-padres',
  CALENDAR: '/calendario',
  NEWS: '/noticias',
};

export const MOCK_SPECIALIZATIONS: Specialization[] = [
  {
    id: 'mantenimiento-computadores-redes',
    name: 'Mantenimiento de Computadores y Redes',
    shortDescription: 'Asegura el funcionamiento óptimo de equipos y redes informáticas.',
    longDescription: 'Aprende a diagnosticar, reparar y mantener computadoras, así como a configurar y administrar redes locales. Conviértete en el experto que mantiene la tecnología funcionando sin problemas.',
    imageUrl: 'https://picsum.photos/seed/mantenimiento_pc/600/400',
    whatYouLearn: [
      "Ensamblaje y desensamblaje de PCs", 
      "Diagnóstico de fallas de hardware y software", 
      "Instalación y configuración de sistemas operativos", 
      "Configuración de redes LAN y Wi-Fi", 
      "Seguridad informática básica"
    ],
    careerOpportunities: [
      "Técnico de Soporte IT", 
      "Administrador de Redes Junior", 
      "Técnico de Mantenimiento de Hardware", 
      "Especialista en Help Desk", 
      "Consultor Informático"
    ],
    idealProfile: 'Personas con interés en la tecnología, resolución de problemas, atención al detalle y paciencia. Habilidad para el trabajo metódico.',
    requirements: [
      "Bachillerato aprobado.", 
      "Interés práctico en computadoras.", 
      "Prueba de aptitud técnica."
    ],
    faqs: [
      { question: "¿Necesito tener conocimientos previos avanzados?", answer: "No, empezamos con los fundamentos, pero una familiaridad básica con el uso de computadoras es útil." },
      { question: "¿Hay mucha demanda para estos técnicos?", answer: "Sí, todas las empresas y organizaciones dependen de la tecnología, por lo que los técnicos de mantenimiento y redes son muy solicitados." }
    ],
    brochureUrl: '#',
  },
  {
    id: 'diseno-grafico',
    name: 'Diseño Gráfico',
    shortDescription: 'Comunica ideas visualmente con creatividad e impacto.',
    longDescription: 'Desarrolla tu creatividad y habilidades técnicas para crear identidades de marca, ilustraciones, diseños web y contenido multimedia. Aprenderás a usar software profesional y a conceptualizar proyectos visuales efectivos.',
    imageUrl: 'https://picsum.photos/seed/diseno_grafico_nuevo/600/400',
    whatYouLearn: [
      'Principios de diseño (color, tipografía, composición).',
      'Software de diseño (Adobe Photoshop, Illustrator, InDesign).',
      'Diseño de logotipos e identidad de marca.',
      'Ilustración digital y fotografía.',
      'Diseño web y UX/UI básico.',
    ],
    careerOpportunities: [
      'Diseñador Gráfico',
      'Ilustrador Digital',
      'Diseñador Web Jr.',
      'Especialista en Branding',
      'Creativo Multimedia',
    ],
    idealProfile: 'Personas creativas, con sensibilidad estética, atención al detalle, buena comunicación visual y pasión por las artes gráficas y la tecnología.',
    requirements: ['Bachillerato aprobado.', 'Portafolio básico (opcional).', 'Prueba de creatividad.'],
    faqs: [
      { question: '¿Necesito saber dibujar para ser diseñador?', answer: 'Saber dibujar es una ventaja, pero no es indispensable. Se enseñan técnicas y el uso de herramientas digitales que facilitan la creación.' },
      { question: '¿Qué software aprenderé a usar?', answer: 'Nos enfocamos en la suite de Adobe (Photoshop, Illustrator, InDesign) y otras herramientas relevantes del mercado.' },
    ],
    brochureUrl: '#',
  },
  {
    id: 'alimentos',
    name: 'Alimentos',
    shortDescription: 'Transforma ingredientes en deliciosas creaciones culinarias.',
    longDescription: 'Explora el arte y la ciencia de la gastronomía. Aprende técnicas de cocina, panadería, repostería, y gestión de servicios de alimentos, preparando platos innovadores y tradicionales con los más altos estándares de calidad e higiene.',
    imageUrl: 'https://picsum.photos/seed/alimentos/600/400',
    whatYouLearn: [
      "Técnicas culinarias básicas y avanzadas", 
      "Panadería y repostería", 
      "Higiene y manipulación de alimentos (BPM)", 
      "Nutrición y dietética básica", 
      "Gestión de costos y menús"
    ],
    careerOpportunities: [
      "Cocinero Profesional", 
      "Chef de Partie", 
      "Panadero/Repostero", 
      "Supervisor de Alimentos y Bebidas", 
      "Emprendedor Gastronómico"
    ],
    idealProfile: 'Personas creativas, apasionadas por la cocina, con buen paladar, organizadas, capaces de trabajar bajo presión y en equipo.',
    requirements: [
      "Bachillerato aprobado.", 
      "Certificado de salud.", 
      "Entrevista vocacional."
    ],
    faqs: [
      { question: "¿Se enfoca solo en cocina o también en administración?", answer: "Combina ambas áreas, aprenderás a cocinar y también aspectos básicos de la gestión de un negocio gastronómico." },
      { question: "¿Tendré prácticas en cocinas reales?", answer: "Sí, el programa incluye módulos de prácticas para aplicar lo aprendido en entornos profesionales." }
    ],
    brochureUrl: '#',
  },
  {
    id: 'electricidad',
    name: 'Electricidad',
    shortDescription: 'Instala y mantiene sistemas eléctricos seguros y eficientes.',
    longDescription: 'Domina los principios de la electricidad residencial e industrial. Aprende a realizar instalaciones, mantenimiento y reparación de sistemas eléctricos, asegurando el cumplimiento de normativas y la seguridad.',
    imageUrl: 'https://picsum.photos/seed/electricidad/600/400',
    whatYouLearn: [
      "Circuitos eléctricos básicos y avanzados", 
      "Instalaciones eléctricas residenciales e industriales", 
      "Lectura de planos eléctricos", 
      "Normativas de seguridad eléctrica", 
      "Mantenimiento de equipos eléctricos"
    ],
    careerOpportunities: [
      "Electricista Residencial", 
      "Electricista Industrial", 
      "Técnico en Mantenimiento Eléctrico", 
      "Instalador de Sistemas de Energía Solar (básico)", 
      "Supervisor de Obras Eléctricas"
    ],
    idealProfile: 'Personas con habilidad manual, atención al detalle, responsables, con capacidad de seguir instrucciones precisas y un fuerte sentido de la seguridad.',
    requirements: [
      "Bachillerato aprobado.", 
      "Aptitud física para el trabajo.", 
      "Prueba de conocimientos básicos en física."
    ],
    faqs: [
      { question: "¿Es un trabajo peligroso?", answer: "La electricidad requiere precaución, pero te formaremos exhaustivamente en normas de seguridad para minimizar cualquier riesgo." },
      { question: "¿Hay mucha matemática involucrada?", answer: "Se utilizan conceptos matemáticos básicos para cálculos de circuitos y cargas, pero te guiaremos en su aplicación." }
    ],
    brochureUrl: '#',
  },
  {
    id: 'viveros',
    name: 'Viveros',
    shortDescription: 'Cultiva y propaga plantas, contribuyendo al medio ambiente.',
    longDescription: 'Aprende sobre la producción de plantas ornamentales, forestales y hortícolas. Domina técnicas de siembra, propagación, cuidado de cultivos en vivero y paisajismo básico.',
    imageUrl: 'https://picsum.photos/seed/viveros/600/400',
    whatYouLearn: [
      "Botánica básica y fisiología vegetal", 
      "Técnicas de propagación de plantas (semillas, esquejes, injertos)", 
      "Manejo de sustratos y fertilización", 
      "Control de plagas y enfermedades en viveros", 
      "Diseño y mantenimiento de jardines básicos"
    ],
    careerOpportunities: [
      "Técnico de Vivero", 
      "Jardinero Profesional", 
      "Auxiliar de Paisajismo", 
      "Productor de Plantas Ornamentales", 
      "Encargado de Huertos Urbanos"
    ],
    idealProfile: 'Amantes de la naturaleza y las plantas, con paciencia, habilidad manual, observadores y con disposición para el trabajo al aire libre.',
    requirements: [
      "Bachillerato aprobado.", 
      "Interés en la agricultura y el medio ambiente.", 
      "Disposición para actividades prácticas."
    ],
    faqs: [
      { question: "¿El trabajo es mayormente al aire libre?", answer: "Sí, gran parte de las actividades se desarrollan en viveros, invernaderos y áreas verdes." },
      { question: "¿Puedo especializarme en algún tipo de planta?", answer: "El programa te da una base general, pero podrás enfocar tu interés en plantas ornamentales, frutales, forestales, etc., a medida que avanzas." }
    ],
    brochureUrl: '#',
  },
  {
    id: 'deportes',
    name: 'Deportes',
    shortDescription: 'Fomenta la actividad física, el bienestar y el rendimiento deportivo.',
    longDescription: 'Desarrolla habilidades para la instrucción deportiva, la preparación física y la gestión de actividades recreativas. Aprende sobre anatomía, fisiología del ejercicio, y metodologías de entrenamiento para diferentes poblaciones.',
    imageUrl: 'https://picsum.photos/seed/deportes/600/400',
    whatYouLearn: [
      "Anatomía y fisiología humana aplicada al deporte", 
      "Principios del entrenamiento deportivo", 
      "Planificación de sesiones de actividad física", 
      "Primeros auxilios y prevención de lesiones deportivas", 
      "Gestión de eventos deportivos y recreativos"
    ],
    careerOpportunities: [
      "Instructor Deportivo", 
      "Entrenador Personal Asistente", 
      "Monitor de Actividades Recreativas", 
      "Promotor de Salud y Bienestar", 
      "Auxiliar en Fisioterapia Deportiva"
    ],
    idealProfile: 'Personas activas, con pasión por el deporte y la salud, buenas habilidades de comunicación, liderazgo y motivación.',
    requirements: [
      "Bachillerato aprobado.", 
      "Buena condición física.", 
      "Certificado médico de aptitud para la práctica deportiva."
    ],
    faqs: [
      { question: "¿Necesito ser un atleta de élite para estudiar esto?", answer: "No, lo importante es tu pasión por el deporte y el deseo de promover la actividad física en otros. Se valora la actitud y el compromiso." },
      { question: "¿Podré trabajar con niños o con adultos?", answer: "El programa te prepara para trabajar con diversas poblaciones, desde niños hasta adultos mayores, adaptando las actividades a sus necesidades." }
    ],
    brochureUrl: '#',
  }
];
