import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Portfolio/',
  build: {
    assetsInlineLimit: 0, // Evita que los assets pequeños se conviertan en base64
  },
});