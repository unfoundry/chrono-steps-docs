# Chrono Steps Docs

Chrono Steps Documentation — Static VitePress documentation site for Chrono Steps by Unfoundry.

---

## ⚡ Highlights

- **Full User & Developer Coverage**: Guides for screen recording, timed redactions, screenshot masking, step authoring, exports, `/recorder/`, `/view/`, configuration, and architecture.
- **Local Search**: Built-in VitePress client-side search with zero external search services.
- **Static & Portable**: Compiles to pure HTML/CSS/JS in `.vitepress/dist/` for GitHub Pages, Cloudflare Pages, Netlify, or air-gapped Nginx hosting.
- **Automated Deployment**: Includes `.github/workflows/deploy.yml` for GitHub Pages.

---

## 🚀 Running Locally

Install dependencies and start the VitePress dev server:

### Development Server
```bash
npm install
npm run docs:dev
```

### Production Build & Preview
```bash
npm run docs:build
npm run docs:preview
```

### Nginx / Production
Copy `.vitepress/dist/*` directly into `/usr/share/nginx/html/docs/` or your web server root.


## License

GNU General Public License Copyright &copy; 2026 Chrono Steps / Unfoundry.
