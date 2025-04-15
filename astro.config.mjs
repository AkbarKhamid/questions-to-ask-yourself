import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://www.questionstoaskyourself.com",

  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      priority: 0.9,
      lastmod: new Date(),
      changefreq: "weekly",
    }),
  ],
});
