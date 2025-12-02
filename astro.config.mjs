import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hexaaway.net',
  trailingSlash: 'always',
  integrations: [],
  build: {
    inlineStylesheets: 'always',
    compressHTML: true,
  },
  vite: {
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
});
