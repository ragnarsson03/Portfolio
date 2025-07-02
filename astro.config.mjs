import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  output: "static",
  base: "https://github.com/ragnarsson03/Portfolio", // Reemplaza con tu repo real
  integrations: [tailwind(), react()],
});