import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { findServiceAndLocaleBySlug } from "@/i18n/slugs";
import { t as getT } from "@/i18n/translations";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const found = findServiceAndLocaleBySlug(params.slug);
    if (!found) throw notFound();
    return found;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const { service, locale } = loaderData;
    const t = getT(locale);
    const m = t.metric[service.metric as keyof typeof t.metric] ?? service.metric;
    const title = t.meta.title(service.platform, m);
    const description = t.meta.description(service.platform, m);
    const keywords = [
      `buy ${service.platform} ${service.metricEn}`,
      `${service.platform} ${service.metricEn}`,
      `boost ${service.platform}`,
      `cheap ${service.platform} ${service.metricEn}`,
      `real ${service.platform} ${service.metricEn}`,
      `get ${service.platform} ${service.metricEn}`,
      `${service.metricEn} ${service.platform}`,
      `grow ${service.platform}`,
      `${service.platform} growth`,
      `boostfollowers`,
    ].join(", ");

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: keywords },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:locale", content: locale },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: title,
            description,
            brand: { "@type": "Brand", name: "BoostFollowers" },
            category: `${service.platform} Growth`,
            offers: {
              "@type": "Offer",
              price: service.startPrice.replace(/[^0-9.]/g, ""),
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "12450",
            },
          }),
        },
      ],
    };
  },
  component: Page,
  errorComponent: ({ error }) => <div className="container mx-auto py-20">{error.message}</div>,
  notFoundComponent: () => <div className="container mx-auto py-20 text-center">Page not found.</div>,
});

function Page() {
  const { service, locale } = Route.useLoaderData();
  return <ServicePage service={service} locale={locale} />;
}
