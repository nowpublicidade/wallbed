import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wallbedbrasil.com.br',
  vite: {
    css: {
      preprocessorOptions: {}
    }
  },
  image: {
    domains: [],
  }
});
