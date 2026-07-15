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

## Deploying to Netlify

1. Push this repository to GitHub.
2. In Netlify, choose **Add new site → Import an existing project**.
3. Select the GitHub repository.
4. Netlify will detect Next.js automatically.
5. Use `npm run build` as the build command if Netlify does not populate it automatically.
6. Deploy the site.

No environment variables, database, or external server configuration are required.

## Project structure

- `app/page.tsx` — page content and interactions
- `app/globals.css` — complete site styling
- `app/layout.tsx` — metadata and root layout
- `public/gym/` — gym photography and brand assets
