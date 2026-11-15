export const LANGS = ['es', 'en'] as const;
export type Lang = (typeof LANGS)[number];

export interface Job {
  company: string;
  role: string;
  years: string;
  location: string;
  highlights: string[];
  tech: string[];
}

export interface Hobby {
  icon: 'gamepad' | 'film' | 'mountain';
  name: string;
  line: string;
  tag: string;
}

export interface Cert {
  name: string;
  org: string;
  year: string;
}

export interface Dict {
  meta: { title: string; description: string; locale: string };
  nav: {
    label: string;
    exp: string;
    about: string;
    contact: string;
    lang: string;
    themeToLight: string;
    themeToDark: string;
    skip: string;
  };
  hero: { eyebrow: string; location: string; role: string; text: string };
  exp: { title: string; sub: string; jobs: Job[] };
  what: { title: string; cta: string; photo: string; services: string[] };
  stack: { title: string; text: string };
  edu: { title: string; sub: string; certs: Cert[] };
  about: {
    title: string;
    photo: string;
    lead: string;
    text: string;
    hobbyTitle: string;
    hobbySub: string;
    hobbies: Hobby[];
  };
  foot: { title: string; cta: string; social: string; cv: string; madeIn: string };
  cv: { label: string };
  notFound: { title: string; text: string; back: string };
  /** Contenido reservado para etapas siguientes (aún no se renderiza). */
  later: {
    featured: { title: string; meta: string; name: string; text: string; tags: string[] };
    projects: { title: string; sub: string; github: string };
  };
}
