import type { Dict } from './types';

export const es = {
  meta: {
    title: 'Marco Huanca — Backend Engineer & AI Solutions Architect',
    description:
      'Portafolio de Marco Huanca: arquitecturas cloud escalables sobre AWS e IA Generativa en producción con Amazon Bedrock, LangChain y LangGraph.',
    locale: 'es_PE',
  },
  nav: {
    label: 'Principal',
    exp: 'Experiencia',
    about: 'Sobre mí',
    contact: 'Contacto',
    lang: 'Idioma',
    themeToLight: 'Activar modo día',
    themeToDark: 'Activar modo noche',
    skip: 'Saltar al contenido',
  },
  hero: {
    eyebrow: 'Disponible para nuevos retos',
    location: 'Lima, Perú',
    role: 'Backend Engineer & AI Solutions Architect',
    text: 'Diseño arquitecturas cloud escalables sobre AWS y llevo IA Generativa a producción con Amazon Bedrock, LangChain y LangGraph.',
  },
  exp: {
    title: 'Dónde he trabajado',
    sub: '5+ años construyendo software en producción',
    jobs: [
      {
        company: 'Innova Schools',
        role: 'Software Engineer Senior',
        years: '2026 — hoy',
        location: 'Lima, Perú',
        highlights: [
          'Arquitecto de soluciones en nuevos requerimientos: evalúo viabilidad técnica y defino la arquitectura sobre AWS antes de iniciar el desarrollo.',
          'Lidero la adopción de IA en la organización: agentes y multi-agentes con LangGraph/LangChain y evaluación de MCPs para integrar herramientas externas.',
          'Domain Driven Design, DevSecOps y despliegue continuo.',
        ],
        tech: ['Java', 'Vue.js', 'Thymeleaf', 'MySQL', 'AWS', 'LangGraph'],
      },
      {
        company: 'Innova Schools',
        role: 'Analista Programador',
        years: '2023 — 2026',
        location: 'Lima, Perú',
        highlights: [
          'Diseñé e implementé por iniciativa propia MIA, un AI Core Engine sobre Amazon Bedrock: un servicio configurable mediante plantillas que integra cualquier funcionalidad de IA sin modificar el código base.',
          'Nuevas funcionalidades y optimización de procesos con DDD, DevSecOps y despliegue continuo.',
        ],
        tech: ['Java', 'Vue.js', 'Amazon Bedrock', 'MySQL', 'AWS'],
      },
      {
        company: 'Grupo AJE',
        role: 'Analista de Desarrollo IT',
        years: '2023',
        location: 'Lima, Perú',
        highlights: [
          'Solución de IA para catalogar productos de forma automática dentro de Excel: una función con prompt interno que procesa ~100 000 registros, adoptada sin fricción por el equipo de negocio.',
          'Creé y orquesté integraciones de procesos de negocio sobre Oracle Cloud, automatizando flujos internos críticos.',
        ],
        tech: ['Oracle OTBI', 'BIP', 'BICC', 'SQL', 'Java'],
      },
      {
        company: 'Lit Consulting',
        role: 'Analista de Software',
        years: '2022 — 2023',
        location: 'Lima, Perú',
        highlights: [
          'Desarrollé y mantuve sistemas de planilla y RR. HH. para entidades del Estado, en un equipo ágil de 4 personas.',
          'Implementación de soluciones escalables en la nube.',
        ],
        tech: ['Angular', 'Java 8', 'Spring Boot', 'AWS', 'SQL'],
      },
      {
        company: 'MINAM',
        role: 'Desarrollador Web',
        years: '2021 — 2022',
        location: 'Lima, Perú',
        highlights: [
          'Aplicación web institucional para la gestión de áreas protegidas del Ministerio del Ambiente, con desarrollo completo de frontend y backend.',
        ],
        tech: ['Angular', 'Java 8', 'Spring Boot', 'Oracle'],
      },
    ],
  },
  what: {
    title: 'Lo que hago',
    cta: 'HABLEMOS',
    photo: 'Mi setup de escritorio',
    services: [
      'Arquitectura cloud en AWS',
      'IA Generativa y agentes',
      'Backend en Java y Python',
      'DDD y microservicios',
      'DevSecOps y CI/CD',
    ],
  },
  stack: {
    title: 'Tecnologías',
    text: 'Hexagonal, microservicios, DDD y event-driven. Las herramientas con las que construyo todos los días.',
  },
  edu: {
    title: 'Formación',
    sub: 'Educación y certificaciones',
    certs: [
      { name: 'Ingeniería de Sistemas', org: 'Universidad Nacional del Callao', year: '2017 — 2021' },
      { name: 'Artificial Intelligence Fundamentals', org: 'IBM SkillsBuild', year: '2026' },
      { name: 'Fundamentos de Inteligencia Artificial (257 h)', org: 'Guayerd · convenio con IBM', year: '2026' },
      { name: 'Google AI Essentials', org: 'Google', year: '2025' },
      { name: 'Introduction to Generative AI', org: 'AWS Educate', year: '2025' },
      { name: 'DevOps Engineering on AWS', org: 'Nectec', year: '2025' },
      { name: 'Arquitectura de Soluciones Digitales', org: 'Universidad de Lima', year: '2025' },
      { name: 'Gerencia de Proyectos y Calidad', org: 'Pontificia Universidad Católica del Perú', year: '2021' },
    ],
  },
  about: {
    title: 'Sobre mí',
    photo: 'Foto de Marco Huanca',
    lead: 'Ingeniero de Sistemas con 5+ años construyendo software en producción. Creo que la IA bien aplicada es una ventaja competitiva, y disfruto llevarla del prototipo a algo que la gente usa todos los días.',
    text: 'Hoy soy Software Engineer Senior y referente técnico en Innova Schools: diseño arquitecturas, guío a otros desarrolladores y lidero la adopción de agentes, multi-agentes y MCP en la organización.',
    hobbyTitle: 'Fuera del código',
    hobbySub: 'cuando cierro la laptop',
    hobbies: [
      { icon: 'gamepad', name: 'Videojuegos', line: 'Historias que se juegan y alguna partida en línea con amigos.', tag: 'Ocio' },
      { icon: 'film', name: 'Cine y música', line: 'Una buena película, una playlist para programar y descubrir artistas nuevos.', tag: 'Cultura' },
      { icon: 'mountain', name: 'Trekking', line: 'Principiante, pero siempre listo para la siguiente ruta.', tag: 'Aire libre' },
    ],
  },
  foot: {
    title: '¿Tienes una idea o un proyecto en mente?',
    cta: 'ESCRÍBEME',
    social: 'Redes',
    cv: 'Descargar CV',
    madeIn: 'Hecho en Lima, Perú',
  },
  cv: { label: 'Descargar CV' },
  notFound: {
    title: 'Página no encontrada',
    text: 'La página que buscas no existe o se movió.',
    back: 'Volver al inicio',
  },
  later: {
    featured: {
      title: 'Proyecto\ndestacado',
      meta: 'Innova Schools · 2023 — hoy',
      name: 'MIA — Motor de Inteligencia Artificial',
      text: 'Un AI Core Engine sobre Amazon Bedrock, diseñado por iniciativa propia: un servicio configurable mediante plantillas que permite integrar cualquier funcionalidad de IA sin modificar el código base. Hoy es la base de agentes y multi-agentes con LangGraph.',
      tags: ['Amazon Bedrock', 'LangGraph', 'Lambda', 'DynamoDB', 'API Gateway'],
    },
    projects: {
      title: 'Proyectos personales',
      sub: 'Lo que construyo fuera del horario de oficina',
      github: 'VER GITHUB',
    },
  },
} satisfies Dict;
