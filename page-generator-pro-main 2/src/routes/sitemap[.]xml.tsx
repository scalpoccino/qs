import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/services";
import { LOCALES } from "@/i18n/config";
import { buildPath } from "@/i18n/slugs";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const urls: string[] = [`${origin}/`, `${origin}/services`, `${origin}/auth`];
        for (const locale of LOCALES) {
          for (const s of services) {
            urls.push(`${origin}${buildPath(locale, s)}`);
          }
        }
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`).join("\n")}
</urlset>`;
        return new Response(body, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
