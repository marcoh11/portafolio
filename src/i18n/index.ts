import { es } from './es';
import { en } from './en';
import { LANGS, type Dict, type Lang } from './types';

export { LANGS, type Lang, type Dict };

const dicts: Record<Lang, Dict> = { es, en };

export function useT(lang: Lang): Dict {
  return dicts[lang];
}

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (LANGS as readonly string[]).includes(value);
}

/** Datos que no dependen del idioma. */
export const PROFILE = {
  name: 'Marco Huanca',
  email: 'huancamarco11@gmail.com',
  linkedin: 'https://linkedin.com/in/marcoahm',
  github: 'https://github.com/marcoh11',
  cv: '/MarcoHuanca.pdf',
  typewriter: ['Design', 'Build', 'Ship'],
  stack: [
    'AWS', 'Amazon Bedrock', 'LangGraph', 'LangChain', 'Java 21', 'Python', 'Spring Boot',
    'Lambda', 'DynamoDB', 'Step Functions', 'Docker', 'Kubernetes', 'Vue.js', 'Angular', 'MCP',
  ],
} as const;
