# Bronco Drift — Studio Log

Personal portfolio for the Bronco Drift handle. Independent design + engineering practice.

## Stack

- **Next.js 16** (App Router)
- **Tailwind v4** (via `@tailwindcss/postcss`)
- **Motion 12** (`motion/react`)
- **TypeScript** (strict)

## Type system

- **Display**: Instrument Serif (italic = the drift gesture)
- **Sans**: Geist
- **Mono**: JetBrains Mono (telemetry / labels)

## Aesthetic

Tarmac & smoke — monochrome with a single ember accent used sparingly (live indicator, hover state). Motion vocabulary: `cubic-bezier(0.16, 1, 0.3, 1)` — the deceleration into apex.

## Local

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy

Push to `github.com/bronco-drift/<repo>`. Vercel Git Integration auto-deploys `main`.

## Adding a project

Edit `lib/projects.ts`. Each entry needs:

- `slug` (URL key)
- `number` (01, 02, ...)
- `name`, `tagline`, `description`
- `year`, `role`, `stack`, `status`
- `sections` (Brief / Approach / Outcome — or whatever fits)
- optional `url`, `repo`

Static pages are generated for each slug under `/work/<slug>`.
