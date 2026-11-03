# Pacific Crest Concrete – Web Application

A modern, responsive, and high-performance React & TypeScript web application for **Pacific Crest Concrete** (California C-8 License #1090874), serving commercial and residential concrete contracting across Southern California.

---

## Tech Stack
- **Framework:** React 19 + TypeScript
- **Bundler & Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4 (Centralized theme tokens in `src/index.css`)
- **Routing:** React Router v7
- **Icons:** Lucide React
- **Linter:** Oxlint

---

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Run Lint Checks
```bash
npm run lint
```

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## Deployment Instructions

This project is pre-configured and ready to deploy to any modern hosting platform or static server.

### Deploy to Vercel (Recommended)
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In [Vercel](https://vercel.com/), click **Add New Project** and import the repository.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build` (auto-detected).
5. Output Directory: `dist` (auto-detected).
6. Click **Deploy**. SPA routing rewrites are already handled by `vercel.json`.

### Deploy to Netlify
1. Connect your repository in [Netlify](https://www.netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy site**. SPA rewrites are already handled by `public/_redirects`.

### Deploy to Cloudflare Pages
1. In Cloudflare Dashboard, navigate to **Compute (Workers) > Pages**.
2. Connect your Git repository.
3. Build preset: **Vite**.
4. Build command: `npm run build`.
5. Output folder: `dist`.
6. Click **Save and Deploy**.

### Deploy to Traditional VPS (Nginx / Apache)
Run `npm run build` and upload the contents of the generated `dist/` directory to your web root (e.g. `/var/www/html`).

#### Example Nginx Configuration for React Router:
```nginx
server {
    listen 80;
    server_name pacificcrestcon.com www.pacificcrestcon.com;
    root /var/www/pacificcrestcon/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;
}
```

---

## Included Production Files
- `vercel.json`: Handles client-side route redirects on Vercel.
- `public/_redirects`: Handles client-side route redirects on Netlify & Cloudflare Pages.
- `public/robots.txt`: Search engine crawling rules.
- `public/sitemap.xml`: SEO sitemap covering all routes (`/`, `/services`, `/gallery`, `/contact`).
- `public/favicon.svg`: Modern vector favicon.
