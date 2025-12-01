import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hexaaway.net',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
    compressHTML: true,
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
    inlineStylesheets: 'auto',
    compressHTML: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
});
