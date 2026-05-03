import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/services";
import { Zap, Shield, MessageCircle, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BoostFollowers — Buy followers, likes and views" },
      {
        name: "description",
        content:
          "The #1 social growth platform since 2011. Buy Instagram, TikTok, YouTube followers and more. Fast delivery, secure payments.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const grouped = services.reduce<Record<string, typeof services>>((acc, s) => {
    (acc[s.platform] ??= []).push(s);
    return acc;
  }, {});

  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="container mx-auto px-6 pt-24 pb-32 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 backdrop-blur px-3 py-1 text-xs">
              <span className="size-1.5 rounded-full bg-success animate-pulse" />
              50,000+ customers since 2011
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.02] text-gradient">
              Social growth, without friction.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Boost your Instagram, TikTok, YouTube and 20+ platforms with high-quality followers,
              likes and views. Fast delivery, full security, 24/7 support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/auth"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary text-primary-foreground px-6 py-3.5 font-medium shadow-glow hover:opacity-90 transition"
              >
                Create my free account <ArrowRight className="size-4" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center rounded-xl bg-secondary/70 backdrop-blur px-6 py-3.5 font-medium border border-border hover:bg-secondary transition"
              >
                See all pricing
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { icon: Zap, label: "Delivery within minutes" },
                { icon: Shield, label: "Secure payments" },
                { icon: MessageCircle, label: "24/7 support" },
                { icon: Sparkles, label: "200+ services" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2.5 rounded-xl bg-card/60 backdrop-blur border border-border px-4 py-2.5 text-sm"
                >
                  <Icon className="size-4 text-accent" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Our services by platform</h2>
          <a href="/services" className="text-sm text-accent hover:underline">See all →</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(grouped).map(([platform, items]) => (
            <div key={platform} className="rounded-2xl border border-border bg-gradient-card backdrop-blur p-6 hover:border-primary/40 transition">
              <h3 className="font-display font-semibold text-lg">{platform}</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {items.map((s) => (
                  <li key={s.slug}>
                    <a
                      href={`/${s.slug}`}
                      className="flex items-center justify-between text-muted-foreground hover:text-foreground transition"
                    >
                      <span>{s.shortLabel}</span>
                      <span className="text-xs text-accent">from {s.startPrice}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
