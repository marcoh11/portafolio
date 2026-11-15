// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Cambia esta URL cuando tengas la definitiva (workers.dev o dominio propio).
export const SITE = 'https://portafolio.marcoh11.workers.dev';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  compressHTML: true,
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-PE', en: 'en-US' },
      },
      filter: (page) => !page.endsWith('/404/') && page !== `${SITE}/`,
    }),
  ],
});
