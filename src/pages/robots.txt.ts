import type { APIRoute } from "astro";
import { siteConfig } from "@/site-config";

export const GET: APIRoute = () => {
  const { seo, siteUrl } = siteConfig;
  const isIndexable = seo.robots.includes("index");

  const content = `User-agent: *
${isIndexable ? "Allow: /" : "Disallow: /"}

# Sitemaps
Sitemap: ${siteUrl}/sitemap-index.xml
`.trim();

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
