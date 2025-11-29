# Deployment Guide - GeometryDash.ie

## 🚀 Cloudflare Pages Deployment

### Prerequisites
- Cloudflare account
- GitHub repository (or GitLab/Bitbucket)
- Domain name (geometrydash.ie)

### Step 1: Push to GitHub

```bash
cd /home/ubuntu/geometrydash-ie
git init
git add .
git commit -m "Initial commit: SEO-optimized Geometry Dash website"
git branch -M main
git remote add origin https://github.com/yourusername/geometrydash-ie.git
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Pages** in the left sidebar
3. Click **Create a project**
4. Click **Connect to Git**
5. Select your repository: `geometrydash-ie`
6. Configure build settings:

**Build Configuration:**
```
Framework preset: Astro
Build command: pnpm build
Build output directory: dist
Root directory: /
Node version: 22
```

**Environment Variables:**
```
NODE_VERSION=22
```

7. Click **Save and Deploy**

### Step 3: Configure Custom Domain

1. In Cloudflare Pages project settings, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter: `geometrydash.ie`
4. Follow DNS configuration instructions
5. Wait for DNS propagation (usually 5-30 minutes)

### Step 4: Configure Cloudflare Settings

#### Enable Performance Features
1. Go to **Speed** → **Optimization**
2. Enable:
   - Auto Minify (HTML, CSS, JS)
   - Brotli compression
   - Early Hints
   - HTTP/3 (QUIC)
   - 0-RTT Connection Resumption

#### Configure Caching
1. Go to **Caching** → **Configuration**
2. Set caching level: **Standard**
3. Browser Cache TTL: **Respect Existing Headers**
4. Create cache rules:
   - Cache static assets: `*.css`, `*.js`, `*.woff2`, `*.png`, `*.jpg`, `*.webp`
   - Cache time: 1 year

#### Security Settings
1. Go to **Security** → **Settings**
2. Security Level: **Medium**
3. Challenge Passage: **30 minutes**
4. Browser Integrity Check: **On**

The `_headers` file in `/public` will automatically configure:
- Content Security Policy
- X-Frame-Options
- HSTS
- Other security headers

### Step 5: SSL/TLS Configuration

1. Go to **SSL/TLS** → **Overview**
2. Set encryption mode: **Full (strict)**
3. Go to **Edge Certificates**
4. Enable:
   - Always Use HTTPS
   - HTTP Strict Transport Security (HSTS)
   - Minimum TLS Version: 1.2
   - Opportunistic Encryption
   - TLS 1.3

### Step 6: DNS Configuration

If using Cloudflare DNS:
```
Type: CNAME
Name: @
Target: geometrydash-ie.pages.dev
Proxy status: Proxied (orange cloud)

Type: CNAME
Name: www
Target: geometrydash-ie.pages.dev
Proxy status: Proxied (orange cloud)
```

### Step 7: Post-Deployment Verification

#### Test Website
- [ ] Visit https://geometrydash.ie
- [ ] Test all game pages load correctly
- [ ] Verify iframes work
- [ ] Test mobile responsiveness
- [ ] Check all internal links
- [ ] Test 404 page

#### Run Lighthouse Audit
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse https://geometrydash.ie --view
```

**Target Scores:**
- Performance: 95-100
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 100

#### Verify SEO Elements
- [ ] Check robots.txt: https://geometrydash.ie/robots.txt
- [ ] Check sitemap: https://geometrydash.ie/sitemap-index.xml
- [ ] Verify meta tags in page source
- [ ] Test Open Graph tags (use https://www.opengraph.xyz/)
- [ ] Test Twitter Cards (use https://cards-dev.twitter.com/validator)
- [ ] Verify structured data (use https://search.google.com/test/rich-results)

## 📊 Post-Deployment SEO Setup

### Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Add Property**
3. Enter: `https://geometrydash.ie`
4. Verify ownership (DNS or HTML file method)
5. Submit sitemap: `https://geometrydash.ie/sitemap-index.xml`

**Monitor:**
- Index coverage
- Core Web Vitals
- Mobile usability
- Search performance
- Manual actions

### Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add site: `https://geometrydash.ie`
3. Verify ownership
4. Submit sitemap: `https://geometrydash.ie/sitemap-index.xml`

### Google Analytics 4 (Optional)

1. Create GA4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `BaseLayout.astro`:

```astro
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔧 Maintenance & Updates

### Update Content
```bash
# Make changes locally
git add .
git commit -m "Update: [description]"
git push origin main
```

Cloudflare Pages will automatically rebuild and deploy.

### Monitor Performance
- Check Cloudflare Analytics weekly
- Review Google Search Console monthly
- Run Lighthouse audits monthly
- Monitor Core Web Vitals
- Check for broken links quarterly

### Regular Tasks
- [ ] Update game content quarterly
- [ ] Review and update meta descriptions based on CTR
- [ ] Add new games as they're released
- [ ] Update legal pages annually
- [ ] Monitor and respond to user feedback
- [ ] Check for security updates

## 🎯 Performance Optimization Tips

### If Performance Drops
1. Check Cloudflare Analytics for issues
2. Run Lighthouse audit to identify problems
3. Check Core Web Vitals in Search Console
4. Review recent code changes
5. Test on multiple devices and networks

### Image Optimization
- All images should be WebP format
- Use appropriate sizes (no oversized images)
- Implement lazy loading for below-fold images
- Use `loading="lazy"` attribute

### JavaScript Optimization
- Minimize third-party scripts
- Use defer/async attributes
- Remove unused JavaScript
- Consider code splitting for large files

## 🔒 Security Maintenance

### Regular Security Checks
- [ ] Review Cloudflare security logs monthly
- [ ] Check for DDoS attacks
- [ ] Monitor bot traffic
- [ ] Update dependencies regularly
- [ ] Review and update CSP headers as needed

### Dependency Updates
```bash
# Check for updates
pnpm outdated

# Update dependencies
pnpm update

# Test after updates
pnpm build
```

## 📱 Mobile Optimization

### Test on Real Devices
- iOS Safari
- Android Chrome
- Various screen sizes
- Different network speeds

### Mobile-Specific Checks
- [ ] Touch targets are 44x44px minimum
- [ ] Text is readable without zooming
- [ ] No horizontal scrolling
- [ ] Forms are easy to fill
- [ ] Navigation is thumb-friendly

## 🌐 International Considerations

### If Expanding to Other Languages
1. Implement hreflang tags
2. Create language-specific sitemaps
3. Use proper URL structure (/en/, /es/, etc.)
4. Translate all content (not just UI)
5. Localize meta tags and structured data

## 📈 Growth Strategies

### Content Expansion
- Add blog section for news and updates
- Create video tutorials
- Add user guides
- Expand FAQ sections
- Create comparison pages

### Link Building
- Reach out to gaming websites
- Submit to gaming directories
- Create shareable content
- Engage with Geometry Dash community
- Guest posting on relevant blogs

### Social Media
- Create social media profiles
- Share new content regularly
- Engage with community
- Use relevant hashtags
- Cross-promote across platforms

## 🆘 Troubleshooting

### Common Issues

**Issue: Site not updating after push**
- Check Cloudflare Pages deployment logs
- Verify build completed successfully
- Clear Cloudflare cache
- Hard refresh browser (Ctrl+Shift+R)

**Issue: Slow loading times**
- Check Cloudflare Analytics
- Run Lighthouse audit
- Verify caching is working
- Check for large unoptimized assets

**Issue: Games not loading**
- Verify iframe URLs are correct
- Check CSP headers allow iframe sources
- Test in different browsers
- Check browser console for errors

**Issue: Low search rankings**
- Verify site is indexed (site:geometrydash.ie in Google)
- Check Google Search Console for issues
- Review content quality
- Build more backlinks
- Improve Core Web Vitals

## 📞 Support Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Astro Documentation](https://docs.astro.build/)
- [Google Search Central](https://developers.google.com/search)
- [Web.dev](https://web.dev/) - Performance guides
- [MDN Web Docs](https://developer.mozilla.org/) - Web standards

---

**Last Updated:** November 29, 2025
**Version:** 1.0
