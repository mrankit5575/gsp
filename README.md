## JTTI Institute Website

A modern website built with Next.js App Router, React, Tailwind CSS, and Framer Motion.

### Tech stack
- **Framework**: Next.js 15 (App Router)
- **UI**: React 19, Tailwind CSS v4
- **Animation**: Framer Motion
- **Fonts**: `next/font` (Geist)

### Requirements
- **Node.js**: 18.18+ or 20+
- **Package manager**: npm, pnpm, yarn, or bun

### Getting started
```bash
git clone <your-repo-url>
cd project
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

### Available scripts
- **dev**: Start the development server
  - `npm run dev`
- **build**: Create a production build
  - `npm run build`
- **start**: Start the production server (after build)
  - `npm run start`
- **lint**: Run ESLint
  - `npm run lint`

### Project structure
```text
project/
  src/
    app/
      layout.js        # Root layout, fonts, global styles
      page.js          # Home page (uses Navbar and Hero)
      globals.css      # Tailwind base styles
    components/
      Navbar.jsx       # Top navigation bar
      Hero.jsx         # Hero section
  public/              # Static assets (images, SVGs)
  next.config.mjs      # Next.js configuration
  postcss.config.mjs   # Tailwind v4 via @tailwindcss/postcss
  package.json         # Scripts and dependencies
```

### Styling (Tailwind CSS v4)
- Tailwind v4 is enabled via PostCSS plugin `@tailwindcss/postcss` in `postcss.config.mjs`.
- Global styles are imported in `src/app/layout.js` from `src/app/globals.css`.
- Use utility classes directly in your React components.

### Fonts
`next/font` is configured in `src/app/layout.js` to load Geist Sans and Geist Mono with CSS variables for seamless usage.

### Deployment
- **Vercel** (recommended): Import the repo and deploy. Framework preset: Next.js. Build command: `next build`. Output: `.next`.
- **Self-hosted**: Build with `npm run build` and run with `npm run start` behind a reverse proxy.

### Contributing
1. Create a new branch: `feat/your-feature` or `fix/your-fix`
2. Run `npm run dev` and ensure no ESLint errors (`npm run lint`)
3. Open a PR with a clear description and screenshots if UI-related

### License
Add a license if applicable (e.g., MIT). If unspecified, all rights reserved by default.
