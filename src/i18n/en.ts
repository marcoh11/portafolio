import type { Dict } from './types';

export const en = {
  meta: {
    title: 'Marco Huanca — Backend Engineer & AI Solutions Architect',
    description:
      'Portfolio of Marco Huanca: scalable cloud architectures on AWS and Generative AI in production with Amazon Bedrock, LangChain and LangGraph.',
    locale: 'en_US',
  },
  nav: {
    label: 'Main',
    exp: 'Experience',
    about: 'About',
    contact: 'Contact',
    lang: 'Language',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    skip: 'Skip to content',
  },
  hero: {
    eyebrow: 'Open to new challenges',
    location: 'Lima, Peru',
    role: 'Backend Engineer & AI Solutions Architect',
    text: 'I design scalable cloud architectures on AWS and ship Generative AI to production with Amazon Bedrock, LangChain and LangGraph.',
  },
  exp: {
    title: 'Where I’ve worked',
    sub: '5+ years building production software',
    jobs: [
      {
        company: 'Innova Schools',
        role: 'Senior Software Engineer',
        years: '2026 — now',
        location: 'Lima, Peru',
        highlights: [
          'Solutions architect for new requirements: I assess technical feasibility and define the AWS architecture before development starts.',
          'I lead AI adoption across the company: agents and multi-agent systems with LangGraph/LangChain, and MCP evaluation to integrate external tools.',
          'Domain Driven Design, DevSecOps and continuous delivery.',
        ],
        tech: ['Java', 'Vue.js', 'Thymeleaf', 'MySQL', 'AWS', 'LangGraph'],
      },
      {
        company: 'Innova Schools',
        role: 'Programmer Analyst',
        years: '2023 — 2026',
        location: 'Lima, Peru',
        highlights: [
          'On my own initiative, I designed and built MIA, an AI Core Engine on Amazon Bedrock: a template-driven service that plugs in any AI feature without touching the codebase.',
          'New features and process optimization with DDD, DevSecOps and continuous delivery.',
        ],
        tech: ['Java', 'Vue.js', 'Amazon Bedrock', 'MySQL', 'AWS'],
      },
      {
        company: 'Grupo AJE',
        role: 'IT Development Analyst',
        years: '2023',
        location: 'Lima, Peru',
        highlights: [
          'AI solution to catalog products automatically inside Excel: a custom function with an embedded prompt that processes ~100,000 records, adopted seamlessly by the business team.',
          'Built and orchestrated business-process integrations on Oracle Cloud, automating critical internal workflows.',
        ],
        tech: ['Oracle OTBI', 'BIP', 'BICC', 'SQL', 'Java'],
      },
      {
        company: 'Lit Consulting',
        role: 'Software Analyst',
        years: '2022 — 2023',
        location: 'Lima, Peru',
        highlights: [
          'Built and maintained payroll and HR systems for government agencies, in an agile team of 4.',
          'Delivered scalable cloud solutions.',
        ],
        tech: ['Angular', 'Java 8', 'Spring Boot', 'AWS', 'SQL'],
      },
      {
        company: 'MINAM',
        role: 'Web Developer',
        years: '2021 — 2022',
        location: 'Lima, Peru',
        highlights: [
          'Institutional web app to manage protected natural areas for Peru’s Ministry of the Environment, covering both frontend and backend.',
        ],
        tech: ['Angular', 'Java 8', 'Spring Boot', 'Oracle'],
      },
    ],
  },
  what: {
    title: 'What I do',
    cta: 'LET’S TALK',
    photo: 'Photo · desk setup',
    services: [
      'Cloud architecture on AWS',
      'Generative AI and agents',
      'Backend in Java and Python',
      'DDD and microservices',
      'DevSecOps and CI/CD',
    ],
  },
  stack: {
    title: 'My stack',
    text: 'Hexagonal, microservices, DDD and event-driven. The tools I build with every day.',
  },
  edu: {
    title: 'Education',
    sub: 'Degree and certifications',
    certs: [
      { name: 'B.S. Systems Engineering', org: 'Universidad Nacional del Callao', year: '2017 — 2021' },
      { name: 'Artificial Intelligence Fundamentals', org: 'IBM SkillsBuild', year: '2026' },
      { name: 'AI Fundamentals (257 h)', org: 'Guayerd · in partnership with IBM', year: '2026' },
      { name: 'Google AI Essentials', org: 'Google', year: '2025' },
      { name: 'Introduction to Generative AI', org: 'AWS Educate', year: '2025' },
      { name: 'DevOps Engineering on AWS', org: 'Nectec', year: '2025' },
      { name: 'Digital Solutions Architecture', org: 'Universidad de Lima', year: '2025' },
      { name: 'Project Management and Quality', org: 'Pontificia Universidad Católica del Perú', year: '2021' },
    ],
  },
  about: {
    title: 'About me',
    photo: 'Your photo here',
    lead: 'Systems Engineer with 5+ years building production software. I believe well-applied AI is a competitive edge, and I enjoy taking it from prototype to something people use every day.',
    text: 'I’m currently a Senior Software Engineer and technical lead at Innova Schools: I design architectures, mentor developers and drive the adoption of agents, multi-agent systems and MCP across the company.',
    hobbyTitle: 'Off the clock',
    hobbySub: 'when the laptop closes',
    hobbies: [
      { icon: 'gamepad', name: 'Video games', line: 'Story-driven games and the occasional online match with friends.', tag: 'Leisure' },
      { icon: 'film', name: 'Film and music', line: 'A good movie, a coding playlist and discovering new artists.', tag: 'Culture' },
      { icon: 'mountain', name: 'Trekking', line: 'Still a beginner, always up for the next trail.', tag: 'Outdoors' },
    ],
  },
  foot: {
    title: 'Have an idea or a project in mind?',
    cta: 'GET IN TOUCH',
    social: 'Social',
    cv: 'Download CV',
    madeIn: 'Made in Lima, Peru',
  },
  cv: { label: 'Download CV' },
  notFound: {
    title: 'Page not found',
    text: 'The page you’re looking for doesn’t exist or has moved.',
    back: 'Back to home',
  },
  later: {
    featured: {
      title: 'Featured\nproject',
      meta: 'Innova Schools · 2023 — now',
      name: 'MIA — AI Core Engine',
      text: 'An AI Core Engine on Amazon Bedrock that I designed on my own initiative: a template-driven service that lets teams plug in any AI feature without touching the codebase. It now powers agents and multi-agent flows built with LangGraph.',
      tags: ['Amazon Bedrock', 'LangGraph', 'Lambda', 'DynamoDB', 'API Gateway'],
    },
    projects: {
      title: 'Side projects',
      sub: 'What I build after hours',
      github: 'VIEW GITHUB',
    },
  },
} satisfies Dict;
