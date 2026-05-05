// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wisftock.gitlab.io/page-libreria-component',
  base: '/page-libreria-component/',
  compressHTML: true,
  build: {
    assets: '_assets',
  },
});
