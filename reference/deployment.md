# Deployment Guide

Both **Chrono Steps UI** (`chrono-steps-ui/`) and this **VitePress documentation site** (`chrono-steps-docs/`) compile or run as **100% static files**—requiring no Node.js runtime, database, or backend server in production.

## Deploying Chrono Steps UI (`chrono-steps-ui/`)

Because `chrono-steps-ui/` has no build step and bundles all vendor libraries locally:

1. Copy the contents of `chrono-steps-ui/` to any static host (Nginx, Apache, GitHub Pages, Cloudflare Pages, Netlify, S3, or an internal IIS/intranet folder).
2. Ensure the site is served over **HTTPS** (or `localhost`) so browsers allow `getDisplayMedia()` screen recording.

### Example Nginx Config

```nginx
server {
    listen 443 ssl;
    server_name chronosteps.example.com;

    root /var/www/chrono-steps-ui;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

---

## Deploying This VitePress Docs Site (`chrono-steps-docs/`)

### 1. Build Static Output

```bash
cd chrono-steps-docs
npm ci
npm run docs:build
```

VitePress outputs the static site to `chrono-steps-docs/.vitepress/dist/`.

### 2. GitHub Pages (GitHub Actions)

If hosting under a repository subpath (e.g., `https://org.github.io/chrono-steps/`), set `base: "/chrono-steps/"` in `.vitepress/config.mts`, then add `.github/workflows/deploy-docs.yml`:

```yaml
name: Deploy Chrono Steps Docs
on:
  push:
    branches: [main]
    paths: ["chrono-steps-docs/**"]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: cd chrono-steps-docs && npm ci && npm run docs:build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: chrono-steps-docs/.vitepress/dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### 3. Cloudflare Pages / Netlify / Vercel

- **Root directory**: `chrono-steps-docs`
- **Build command**: `npm run docs:build`
- **Output directory**: `.vitepress/dist`

### 4. Air-Gapped / Self-Hosted Alongside the UI

Copy `chrono-steps-docs/.vitepress/dist/*` into `/var/www/chrono-steps-ui/docs/` (with `base: "/docs/"` in `.vitepress/config.mts`). Both the app and its searchable documentation will run completely offline on your local network.

