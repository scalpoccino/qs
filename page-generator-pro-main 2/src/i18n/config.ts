export const LOCALES = ["en", "fr", "es", "de", "pt", "ar", "zh", "ja"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, { name: string; flag: string; dir: "ltr" | "rtl" }> = {
  en: { name: "English", flag: "🇬🇧", dir: "ltr" },
  fr: { name: "Français", flag: "🇫🇷", dir: "ltr" },
  es: { name: "Español", flag: "🇪🇸", dir: "ltr" },
  de: { name: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  pt: { name: "Português", flag: "🇵🇹", dir: "ltr" },
  ar: { name: "العربية", flag: "🇸🇦", dir: "rtl" },
  zh: { name: "中文", flag: "🇨🇳", dir: "ltr" },
  ja: { name: "日本語", flag: "🇯🇵", dir: "ltr" },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
