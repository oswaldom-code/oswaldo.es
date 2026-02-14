import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://oswaldo.es",
  output: "static",
  integrations: [react(), mdx(), tailwind()],
  vite: {
    css: {
      modules: {
        localsConvention: "camelCase",
      },
    },
  },
});
