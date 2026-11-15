# portafolio

Portafolio personal de Marco Huanca. Astro (estático) + Cloudflare Workers, bilingüe ES/EN y con modo día/noche.

## Comandos

| Comando           | Qué hace                                                              |
| ----------------- | --------------------------------------------------------------------- |
| `bun install`     | Instala dependencias                                                  |
| `bun run dev`     | Servidor de desarrollo en `localhost:4321`                            |
| `bun run build`   | Genera el sitio estático en `dist/`                                   |
| `bun run cf:dev`  | Build + `wrangler dev` en `localhost:8787` (incluye el Worker de idioma) |
| `bun run deploy`  | Build + deploy manual a Cloudflare                                    |

## Cómo funciona

- **Idiomas:** rutas `/es/` y `/en/` (i18n nativo de Astro). Los textos están en `src/i18n/es.ts` y `src/i18n/en.ts`, tipados con `Dict`, así que si falta una clave en un idioma el build falla.
- **Idioma automático:** `worker/index.ts` solo se ejecuta en `/`. Decide así: primero la cookie `lang` (si la persona eligió un idioma a mano), luego el país (`request.cf.country`, hispanohablante → ES), luego `Accept-Language`, y si nada aplica, EN. Todo lo demás se sirve como asset estático.
- **Tema:** sigue la configuración del sistema; el botón del header la sobrescribe y la guarda en `localStorage`.
- **Fotos:** los espacios marcados como «Foto…» usan `src/components/Placeholder.astro`. Pon la imagen en `src/assets/` y pásala como `src={miFoto}`.
- **CV:** `public/MarcoHuanca.pdf`.
- **URL del sitio:** constante `SITE` en `astro.config.mjs` (y en `public/robots.txt`).

## Despliegue

Cloudflare Workers Builds, conectado a este repo: cada push a `main` despliega a producción y cada rama genera una URL de preview.

- Build command: `bun run build`
- Deploy command: `bunx wrangler deploy`
