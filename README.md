# Portal Carriers Turboship

Sitio de documentacion y newsletter para carriers y white labels de Turboship.

Este repo usa Bun como package manager.

## Instalacion

```bash
bun install
```

## Desarrollo local

```bash
bun start
```

## Build

```bash
bun run build
```

## Estructura de contenido

- Documentacion: `docs/`
- Newsletter: `blog/` (publica en `/newsletter`)
- Home: `src/pages/index.tsx`

## Publicar una nueva guia

1. Crea el archivo Markdown dentro de `docs/`.
2. Si aplica, agrega categoria o agrupa por modulo.
3. Verifica enlaces internos y rutas.

## Publicar una nueva entrada de newsletter

1. Crea un archivo en `blog/` con formato `YYYY-MM-DD-titulo.md`.
2. Usa frontmatter con `title`, `authors`, `tags`.
3. Incluye resumen corto y `<!-- truncate -->`.

## Checklist antes de merge

1. `bun run build` pasa sin errores.
2. No hay placeholders visibles en home ni docs.
3. Enlaces clave funcionan: `/`, `/docs/intro`, `/docs/plataforma/introduccion`, `/docs/integraciones/mercadopago`, `/newsletter`.
