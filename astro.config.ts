import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { siteConfig } from "./src/site-config";

// https://astro.build/config
export default defineConfig({
  site: siteConfig.siteUrl,
  output: "static", // 100% static — Cloudflare Pages free tier

  integrations: [
    icon({
      include: {
        "simple-icons": ["*"],
        lucide: ["*"],
      },
    }),
    sitemap({
      filter: (page) => !siteConfig.seo.excludeFromSitemap.some((p) => page.includes(p)),
    }),
  ],

  // Image optimization config
  image: {
    remotePatterns: [{ protocol: "https" }],
  },

  // Vite config
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Inline small assets for performance
      assetsInlineLimit: 4096,
    },
  },
});
