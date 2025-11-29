# Quick Start Guide - GeometryDash.ie

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies
```bash
cd geometrydash-ie
pnpm install
```

### Step 2: Start Development Server
```bash
pnpm dev
```
Open http://localhost:4321 in your browser.

### Step 3: Build for Production
```bash
pnpm build
```
Output will be in the `dist/` folder.

### Step 4: Deploy to Cloudflare Pages

**Option A: Via GitHub**
1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/geometrydash-ie.git
git push -u origin main
```

2. Go to [Cloudflare Pages](https://dash.cloudflare.com/)
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Configure:
   - Framework: **Astro**
   - Build command: **pnpm build**
   - Build output: **dist**
   - Node version: **22**
6. Click "Save and Deploy"

**Option B: Direct Upload**
1. Build the site: `pnpm build`
2. Go to Cloudflare Pages
3. Click "Upload assets"
4. Drag and drop the `dist/` folder

### Step 5: Configure Custom Domain
1. In Cloudflare Pages project settings
2. Go to "Custom domains"
3. Add: `geometrydash.ie`
4. Follow DNS instructions

## ✅ Post-Deployment Checklist

- [ ] Visit your live site
- [ ] Test all game pages
- [ ] Verify iframes load
- [ ] Test on mobile
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools

## 📊 Monitor Performance

### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: `https://geometrydash.ie`
3. Verify ownership
4. Submit sitemap: `https://geometrydash.ie/sitemap-index.xml`

### Check SEO
- Run Lighthouse: `lighthouse https://geometrydash.ie --view`
- Test structured data: https://search.google.com/test/rich-results
- Verify robots.txt: `https://geometrydash.ie/robots.txt`

## 🎯 Expected Results

### Lighthouse Scores
- Performance: 95-100
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 100

### SEO Timeline
- **Week 1:** Site indexed by Google
- **Month 1:** Start appearing in search results
- **Month 3:** Top 20 for primary keywords
- **Month 6:** Top 10 for primary keywords

## 📝 Common Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm astro check  # Check for errors
```

## 🆘 Troubleshooting

**Issue: Build fails**
- Run `pnpm install` again
- Check Node version: `node --version` (should be 18+)
- Delete `node_modules` and reinstall

**Issue: Games not loading**
- Check iframe URLs in each game page
- Verify CSP headers allow iframe sources
- Test in different browsers

**Issue: Slow loading**
- Run `pnpm build` to optimize
- Enable Cloudflare caching
- Check image sizes

## 📚 Documentation

- **README.md** - Full project documentation
- **DEPLOYMENT.md** - Complete deployment guide
- **SEO-IMPLEMENTATION.md** - SEO details
- **PROJECT-SUMMARY.md** - Project overview

## 🎉 You're Ready!

Your SEO-optimized Geometry Dash website is ready to launch. Follow the steps above and you'll be live in minutes!

---

**Need Help?**
- Check the documentation files
- Visit https://docs.astro.build/
- Visit https://developers.cloudflare.com/pages/
