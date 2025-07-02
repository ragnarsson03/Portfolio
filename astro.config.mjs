import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  output: "static",
  base: "/Portfolio/", // Reemplaza con tu repo real
  integrations: [tailwind(), react()],
});