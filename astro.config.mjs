// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://page-libreria-component.pages.dev',
  compressHTML: true,
  outDir: '_site',
  build: {
    assets: 'assets',
  },
});
