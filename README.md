# Buckeye Gym

Production Next.js website for Buckeye Gym in Tallmadge, Ohio.

## Requirements

- Node.js 22 or newer
- npm

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Deploying to Cloudflare Workers

1. Push this repository to GitHub.
2. Connect the repository to the `buckeyegym` Worker in Cloudflare.
3. Use `npm run build` as the build command.
4. Use `npx wrangler deploy` as the deploy command.

The checked-in `wrangler.jsonc` deploys the static `out/` directory. It intentionally
contains no Worker service bindings.

No environment variables, database, or external server configuration are required.

## Project structure

- `app/page.tsx` — page content and interactions
- `app/globals.css` — complete site styling
- `app/layout.tsx` — metadata and root layout
- `public/gym/` — gym photography and brand assets
