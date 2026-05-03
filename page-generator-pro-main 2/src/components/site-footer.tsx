import { services } from "@/data/services";

export function SiteFooter() {
  const grouped = services.reduce<Record<string, typeof services>>((acc, s) => {
    (acc[s.platform] ??= []).push(s);
    return acc;
  }, {});

  return (
    <footer className="border-t border-border bg-background/60 mt-24">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          <div className="col-span-2">
            <div className="font-display font-bold text-lg">
              Boost<span className="text-gradient">Followers</span>
            </div>
            <p className="text-muted-foreground mt-3 max-w-xs">
              The #1 social growth platform. 200+ services to grow your social media.
            </p>
          </div>
          {Object.entries(grouped).slice(0, 3).map(([platform, items]) => (
            <div key={platform}>
              <div className="font-semibold mb-3">{platform}</div>
              <ul className="space-y-2 text-muted-foreground">
                {items.slice(0, 4).map((s) => (
                  <li key={s.slug}>
                    <a href={`/${s.slug}`} className="hover:text-foreground transition">
                      {s.shortLabel}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} BoostFollowers — All rights reserved.</div>
          <div className="flex gap-5">
            <a href="/services" className="hover:text-foreground">All pricing</a>
            <a href="/auth" className="hover:text-foreground">Sign in</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
