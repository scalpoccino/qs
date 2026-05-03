import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { getService } from "@/data/services";

const SLUG = "buy-kick-followers";

export const Route = createFileRoute("/buy-kick-followers")({
  loader: () => {
    const service = getService(SLUG);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [] };
    return {
      meta: [
        { title: `${s.title} — BoostFollowers` },
        { name: "description", content: s.description },
        { property: "og:title", content: `${s.title} — BoostFollowers` },
        { property: "og:description", content: s.description },
      ],
    };
  },
  component: Page,
  errorComponent: ({ error }) => <div className="container mx-auto py-20">{error.message}</div>,
  notFoundComponent: () => <div className="container mx-auto py-20">Service introuvable.</div>,
});

function Page() {
  const { service } = Route.useLoaderData();
  return <ServicePage service={service} locale="en" />;
}
