# Mannock Granite

A premium, luxury stone worktop website built with modern web technologies. Showcasing granite, quartz, marble and porcelain worktops with a dark charcoal aesthetic, champagne gold accents, and smooth animations.

## Live Demo

Visit the live site: [mannock-granite.lovable.app](https://mannock-granite.lovable.app)

## Tech Stack

- **Framework:** [TanStack Start v1](https://tanstack.com/start) (React 19 + Vite 7)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (`motion`)
- **UI Components:** Radix UI primitives + shadcn/ui patterns
- **Icons:** Lucide React
- **Package Manager:** Bun
- **Build Output:** Cloudflare Worker (Nitro)

## Features

- **Home** — Parallax hero, trust indicators, animated stats, material showcase, project gallery preview, reviews, process overview, quote CTA
- **About** — Company story and values
- **Materials** — Stone catalogue (granite, quartz, marble, porcelain)
- **Services** — Full service breakdown with benefits
- **Projects / Gallery** — Filterable masonry layout with lightbox
- **Process** — 7-step animated timeline
- **Contact** — Multi-step premium enquiry form with validation
- **SEO** — Route-level metadata, semantic HTML, responsive design

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed globally

### Installation

```bash
# Clone the repository
git clone https://github.com/hobnob240/granite-guardian-angel.git
cd granite-guardian-angel

# Install dependencies
bun install
```

### Development

```bash
bun run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Build

```bash
bun run build
```

The production build is output to `.output/`.

### Preview Production Build

```bash
bun run preview
```

## Deployment

### Cloudflare Workers (recommended — automated via GitHub Actions)

This repo ships with `wrangler.toml` and `.github/workflows/deploy.yml`. Every push to `main` builds and deploys to Cloudflare Workers automatically — the code lives on GitHub, Cloudflare runs the hosting.

**One-time setup:**

1. Create a Cloudflare account at [cloudflare.com](https://cloudflare.com) and grab your **Account ID** (Workers & Pages → right sidebar).
2. Create an API token at [dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens) using the **"Edit Cloudflare Workers"** template.
3. In your GitHub repo go to **Settings → Secrets and variables → Actions → New repository secret** and add:
   - `CLOUDFLARE_API_TOKEN` — the token from step 2
   - `CLOUDFLARE_ACCOUNT_ID` — the account ID from step 1
4. Push to `main`. The workflow builds and deploys; your site goes live at `https://mannock-granite.<your-subdomain>.workers.dev`.

To rename the Worker, edit the `name` field in `wrangler.toml`. To attach a custom domain, add a route in the Cloudflare dashboard under your Worker → Settings → Triggers → Custom Domains.

**Manual deploy (optional):**

```bash
bun run build
npx wrangler deploy
```

### Vercel

1. Connect your GitHub repo to [Vercel](https://vercel.com)
2. Set the framework preset to **Other**
3. Set build command: `bun run build`
4. Set output directory: `.output/public`

### Netlify

1. Connect your GitHub repo to [Netlify](https://netlify.com)
2. Set build command: `bun run build`
3. Set publish directory: `.output/public`

### Static Export (Node server)

For a traditional Node server deployment:

```bash
bun run build
node .output/server/index.mjs
```

## Project Structure

```
src/
  routes/           # Page routes (TanStack file-based routing)
  components/       # React components
    site/           # Site-specific components (Nav, Footer, etc.)
    ui/             # Reusable UI primitives
  lib/              # Utilities and helpers
  hooks/            # Custom React hooks
  assets/           # Static images
  styles.css        # Global styles and design tokens
```

## Scripts

| Command             | Description                      |
| ------------------- | -------------------------------- |
| `bun run dev`       | Start development server         |
| `bun run build`     | Production build                 |
| `bun run build:dev` | Development build                |
| `bun run preview`   | Preview production build locally |
| `bun run lint`      | Run ESLint                       |
| `bun run format`    | Format with Prettier             |

## License

All rights reserved. This project was built for Mannock Granite.
