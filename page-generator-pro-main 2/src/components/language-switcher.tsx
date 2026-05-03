import { useState } from "react";
import { LOCALES, LOCALE_LABELS, type Locale } from "@/i18n/config";
import { services } from "@/data/services";
import { buildPath } from "@/i18n/slugs";

export function LanguageSwitcher({ currentLocale = "en" as Locale, currentServiceSlug }: { currentLocale?: Locale; currentServiceSlug?: string }) {
  const [open, setOpen] = useState(false);
  const current = LOCALE_LABELS[currentLocale];

  const linkFor = (loc: Locale): string => {
    if (currentServiceSlug) {
      const svc = services.find((s) => s.slug === currentServiceSlug);
      if (svc) return buildPath(loc, svc);
    }
    return "/";
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-secondary transition"
      >
        <span>{current.flag}</span>
        <span className="hidden sm:inline">{current.name}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-card/95 backdrop-blur-xl shadow-card z-50 overflow-hidden">
          {LOCALES.map((loc) => {
            const l = LOCALE_LABELS[loc];
            return (
              <a
                key={loc}
                href={linkFor(loc)}
                className={`flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-secondary transition ${loc === currentLocale ? "bg-secondary/60" : ""}`}
              >
                <span className="text-lg">{l.flag}</span>
                <span>{l.name}</span>
                {loc === currentLocale && <span className="ml-auto text-accent">✓</span>}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
