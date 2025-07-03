import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  output: "static",
  base: "/Portfolio/",
  build: {
    assets: "_assets", // Cambiamos el nombre de la carpeta de assets para evitar problemas
  },
  integrations: [tailwind(), react()],
  vite: {
    build: {
      assetsInlineLimit: 0, // Evita que los assets pequeños se conviertan en base64
    },
    resolve: {
      alias: {
        // Aseguramos que las importaciones de assets usen rutas absolutas
        '@assets': '/src/assets'
      }
    }
  }
});