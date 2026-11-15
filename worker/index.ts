interface Env {
  ASSETS: Fetcher;
}

type Lang = 'es' | 'en';

// Países donde el español es idioma principal u oficial.
const SPANISH_COUNTRIES = new Set([
  'PE', 'MX', 'AR', 'CO', 'CL', 'ES', 'EC', 'VE', 'BO', 'UY', 'PY',
  'GT', 'HN', 'SV', 'NI', 'CR', 'PA', 'CU', 'DO', 'PR', 'GQ',
]);

function fromCookie(header: string | null): Lang | null {
  const match = header?.match(/(?:^|;\s*)lang=(es|en)(?:;|$)/);
  return (match?.[1] as Lang) ?? null;
}

function fromAcceptLanguage(header: string | null): Lang | null {
  if (!header) return null;
  const first = header.split(',')[0]?.trim().toLowerCase() ?? '';
  if (first.startsWith('es')) return 'es';
  if (first.startsWith('en')) return 'en';
  return null;
}

export function pickLang(request: Request): Lang {
  const cookie = fromCookie(request.headers.get('Cookie'));
  if (cookie) return cookie;

  const country = (request.cf?.country as string | undefined)?.toUpperCase();
  if (country) return SPANISH_COUNTRIES.has(country) ? 'es' : 'en';

  return fromAcceptLanguage(request.headers.get('Accept-Language')) ?? 'en';
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/') {
      const lang = pickLang(request);
      return new Response(null, {
        status: 302,
        headers: {
          Location: `/${lang}/${url.search}`,
          'Cache-Control': 'private, no-store',
          Vary: 'Cookie, Accept-Language',
        },
      });
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
