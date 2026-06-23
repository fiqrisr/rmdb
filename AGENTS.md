# AGENTS.md — RMDB

Compact guidance for OpenCode sessions in this repo.

## Project shape

- Next.js 14 (pages router), TypeScript 5, React 18.
- UI kit: `@nextui-org/react` v2 + Tailwind CSS. `tailwind.config.ts` already includes the NextUI theme path.
- State/data: TanStack Query v5, Jotai. HTTP: `ky` with TMDB bearer token.
- Package manager: **Yarn** (`yarn.lock` present). Use `yarn install`, not `npm install`.
- No test runner is configured; `package.json` only has `dev`, `build`, `start`, `lint`.
- No CI workflows or pre-commit hooks are present.

## Required environment

- Copy `.env.example` to `.env` and set `NEXT_PUBLIC_TMDB_ACCESS_TOKEN` before running. The dev server and build read the public env var at `src/configs/index.ts`.

## Commands

```bash
yarn install      # install deps
yarn dev          # local dev server on localhost:3000
yarn build        # production build
yarn start        # serve the built bundle
yarn lint         # eslint via next/core-web-vitals + prettier
```

There is no `typecheck` or `test` script. To type-check, run `yarn tsc --noEmit` manually.

## Layout conventions

- Path alias `@/*` maps to `./src/*` (see `tsconfig.json`).
- Pages live under `src/pages/` (pages router). Feature pages are implemented in `src/modules/movies/pages/` and re-exported from `src/modules/movies/index.ts`.
- TMDB API client is in `src/http/index.ts`; request services are in `src/modules/movies/services/`.

## Style/format

- Prettier: `trailingComma: "none"`, `endOfLine: "lf"`.
- ESLint extends `next/core-web-vitals` and `prettier`.

## Gotchas

- NextUI v2 requires Tailwind content scanning to include `node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}` — already configured; do not remove it.
- The app fetches TMDB data client-side through TanStack Query hooks, so a missing or invalid token surfaces as runtime fetch failures.
