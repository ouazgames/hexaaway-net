# Hexa Away Website - Deployment Guide

## Project Overview
This is the hexaaway.net website built with Astro framework, optimized for the Hexa Away puzzle game.

## What's Included
- ✅ Hexa Away game with iframe integration
- ✅ Custom logo and icons
- ✅ SEO-optimized content and article
- ✅ Responsive design
- ✅ Sitemap and structured data
- ✅ Privacy policy, terms of service, contact pages

## Quick Start (Development)

### Prerequisites
- Node.js 18+ or 20+
- pnpm package manager

### Installation
```bash
cd hexaaway-net
pnpm install
```

### Run Development Server
```bash
pnpm dev
```
The site will be available at http://localhost:4321

### Build for Production
```bash
pnpm build
```
The built files will be in the `dist/` directory.

## Deployment Options

### Option 1: Static Hosting (Netlify, Vercel, Cloudflare Pages)

#### Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `pnpm build`
3. Publish directory: `dist`
4. Deploy!

#### Vercel
1. Import your GitHub repository to Vercel
2. Framework preset: Astro
3. Build command: `pnpm build`
4. Output directory: `dist`
5. Deploy!

#### Cloudflare Pages
1. Connect your GitHub repository to Cloudflare Pages
2. Build command: `pnpm build`
3. Build output directory: `dist`
4. Deploy!

### Option 2: Traditional Web Hosting (cPanel, etc.)

1. Build the project locally:
   ```bash
   pnpm build
   ```

2. Upload the contents of the `dist/` folder to your web hosting:
   - Via FTP/SFTP to your public_html or www directory
   - Via cPanel File Manager

3. Ensure your domain (hexaaway.net) points to the hosting server

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   pnpm add -D gh-pages
   ```

2. Add deploy script to package.json:
   ```json
   "scripts": {
     "deploy": "pnpm build && gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   pnpm deploy
   ```

## Domain Configuration

### DNS Settings for hexaaway.net
Point your domain to your hosting provider:
- **A Record**: Point to your hosting IP
- **CNAME**: Or use www subdomain pointing to your hosting

### SSL Certificate
Most modern hosting providers offer free SSL certificates via Let's Encrypt. Enable HTTPS for your domain.

## File Structure
```
hexaaway-net/
├── dist/                 # Built files (production-ready)
├── public/              # Static assets
│   ├── assets/
│   │   ├── icons/      # Hexa Away icons and logo
│   │   └── covers/     # Game cover images
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/     # Reusable components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   ├── data/           # Game data
│   └── styles/         # Global styles
├── astro.config.mjs    # Astro configuration
└── package.json        # Dependencies
```

## Customization

### Update Game Iframe
Edit `src/pages/index.astro` and change the iframe URL:
```astro
<GameIframe 
  src="YOUR_GAME_URL_HERE"
  title="Play Hexa Away Online"
/>
```

### Update Content
- Main page content: `src/pages/index.astro`
- Game data: `src/data/games.ts`
- Header/Footer: `src/components/Header.astro` and `Footer.astro`

### Update Images
Replace images in `public/assets/icons/` and `public/assets/covers/`

## SEO Features
- ✅ Structured data (JSON-LD)
- ✅ Open Graph tags
- ✅ Sitemap generation
- ✅ Meta descriptions
- ✅ Semantic HTML

## Performance
- ✅ Optimized images (WebP format)
- ✅ Minified CSS/JS
- ✅ Fast loading times
- ✅ Mobile-responsive

## Support
For issues or questions about the website structure, refer to the Astro documentation:
https://docs.astro.build

## License
All rights reserved.
