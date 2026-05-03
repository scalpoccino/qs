import type { Locale } from "./config";
import { services, type Service } from "@/data/services";

type MetricKey = "followers" | "likes" | "views" | "subscribers" | "plays" | "connections" | "reviews";

const ACTION: Record<Locale, string> = {
  en: "buy",
  fr: "acheter",
  es: "comprar",
  de: "kaufen",
  pt: "comprar",
  ar: "shira",
  zh: "goumai",
  ja: "kounyu",
};

const METRIC: Record<Locale, Record<MetricKey, string>> = {
  en: {
    followers: "followers", likes: "likes", views: "views",
    subscribers: "subscribers", plays: "plays", connections: "connections", reviews: "reviews",
  },
  fr: {
    followers: "abonnes", likes: "likes", views: "vues",
    subscribers: "abonnes", plays: "ecoutes", connections: "connexions", reviews: "avis",
  },
  es: {
    followers: "seguidores", likes: "likes", views: "vistas",
    subscribers: "suscriptores", plays: "reproducciones", connections: "conexiones", reviews: "resenas",
  },
  de: {
    followers: "follower", likes: "likes", views: "aufrufe",
    subscribers: "abonnenten", plays: "wiedergaben", connections: "kontakte", reviews: "bewertungen",
  },
  pt: {
    followers: "seguidores", likes: "curtidas", views: "visualizacoes",
    subscribers: "inscritos", plays: "reproducoes", connections: "conexoes", reviews: "avaliacoes",
  },
  ar: {
    followers: "motabieen", likes: "ijabiyat", views: "moshahadat",
    subscribers: "moshtarikeen", plays: "tashghilat", connections: "ittisalat", reviews: "muraja3at",
  },
  zh: {
    followers: "fensi", likes: "dianzan", views: "guankan",
    subscribers: "dingyue", plays: "bofang", connections: "lianxiren", reviews: "pinglun",
  },
  ja: {
    followers: "follower", likes: "iine", views: "saisei",
    subscribers: "toukuokusha", plays: "saisei", connections: "tsunagari", reviews: "rebyu",
  },
};

function platformSlug(platform: string): string {
  return platform.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function buildSlug(locale: Locale, service: Service): string {
  const action = ACTION[locale];
  const metric = METRIC[locale][service.metric as MetricKey] ?? service.metric;
  const plat = platformSlug(service.platform);
  return `${action}-${metric}-${plat}`;
}

export function buildPath(locale: Locale, service: Service): string {
  if (locale === "en") return `/${service.slug}`;
  return `/${buildSlug(locale, service)}`;
}

export function findServiceBySlug(locale: Locale, slug: string): Service | undefined {
  return services.find((s) => buildSlug(locale, s) === slug);
}

export function findServiceAndLocaleBySlug(slug: string): { service: Service; locale: Locale } | undefined {
  // Try English (the original slug)
  const en = services.find((s) => s.slug === slug);
  if (en) return { service: en, locale: "en" };
  // Try every other locale
  for (const locale of Object.keys(ACTION) as Locale[]) {
    if (locale === "en") continue;
    const svc = services.find((s) => buildSlug(locale, s) === slug);
    if (svc) return { service: svc, locale };
  }
  return undefined;
}

export function allLocalizedSlugs(): { locale: Locale; slug: string; service: Service }[] {
  const out: { locale: Locale; slug: string; service: Service }[] = [];
  for (const locale of Object.keys(ACTION) as Locale[]) {
    if (locale === "en") continue;
    for (const s of services) {
      out.push({ locale, slug: buildSlug(locale, s), service: s });
    }
  }
  return out;
}
