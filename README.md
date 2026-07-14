# TanStack Start + Tailwind demo

This project is a TanStack Start app with file-based routing, TanStack Query, Tailwind CSS, and Cloudflare deployment support.

## Getting started

Install dependencies and start the development server:

```bash
bun install
bun run dev
```

## Scripts

The following scripts are available:

```bash
bun run dev
bun run generate-routes
bun run build
bun run preview
bun run test
bun run typecheck
bun run lint
bun run lint:fix
bun run format
bun run format:check
bun run deploy
```

## Styling

This project uses Tailwind CSS v4 with the Vite plugin and custom utilities defined in [src/styles.css](src/styles.css).

The demo pages under [src/routes/demo](src/routes/demo) are intended as examples and can be removed if you do not need them.

## Linting and formatting

This project uses:

- [oxlint](https://oxc.rs/docs/guide/usage/linter.html) for linting
- [oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) for formatting

Configuration lives in [oxlint.config.ts](oxlint.config.ts) and [.oxfmtrc.json](.oxfmtrc.json).

## Routing

This app uses TanStack Router with file-based routing. Routes are defined in [src/routes](src/routes), and the root layout is configured in [src/routes/__root.tsx](src/routes/__root.tsx).

To add a route, create a new file in [src/routes](src/routes). The router plugin will generate the route tree automatically.

## Deployment

The project is set up for deployment to Cloudflare Workers via [vite.config.ts](vite.config.ts) and [wrangler.jsonc](wrangler.jsonc).

Typical deployment steps:

```bash
bun run build
bunx wrangler deploy
```

For environment variables, use Wrangler secrets for sensitive values and [wrangler.jsonc](wrangler.jsonc) for public values.

## Demo files

Files prefixed with `demo` are starter examples and can be safely deleted once you no longer need them.
