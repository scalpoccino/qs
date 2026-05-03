import type { Service } from "@/data/services";
import type { Locale } from "@/i18n/config";
import { t as getT } from "@/i18n/translations";
import type { MetricKey } from "@/i18n/translations";
import { Sparkles, Zap, Shield, MessageCircle, Star, Settings, Check } from "lucide-react";

type Props = { service: Service; locale: Locale };

export function ServicePage({ service, locale }: Props) {
  const t = getT(locale);
  const { platform, startPrice } = service;
  const m = t.metric[service.metric as MetricKey] ?? service.metric;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <div dir={dir}>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="container mx-auto px-6 pt-20 pb-28 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 backdrop-blur px-3 py-1 text-xs">
              <span className="size-1.5 rounded-full bg-success animate-pulse" />
              {t.hero.badge}
            </span>

            <h1 className="mt-6 font-display text-5xl md:text-6xl font-bold leading-[1.05] text-gradient">
              {t.hero.titlePrefix} {m} {platform} <br /> {t.hero.titleSuffix}
            </h1>

            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl">
              {t.hero.description(platform, m)}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/auth" className="inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-6 py-3.5 font-medium shadow-card hover:bg-foreground/90 transition">
                {t.hero.ctaSignup}
              </a>
              <a href="/auth" className="inline-flex items-center rounded-xl bg-secondary/70 backdrop-blur px-6 py-3.5 font-medium border border-border hover:bg-secondary transition">
                {t.hero.ctaSignin}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { icon: Zap, label: t.hero.fastDelivery },
                { icon: Shield, label: t.hero.securePayments },
                { icon: MessageCircle, label: t.hero.support247 },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="inline-flex items-center gap-2.5 rounded-xl bg-card/60 backdrop-blur border border-border px-4 py-2.5 text-sm">
                  <span className="size-7 rounded-lg bg-secondary flex items-center justify-center">
                    <Icon className="size-4 text-accent" />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="font-display text-3xl md:text-4xl font-bold max-w-2xl">
          {t.why.title(platform, m)}
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {t.why.items.map((item, i) => {
            const Icon = [Star, Zap, Settings, Sparkles][i] ?? Star;
            return (
              <div key={i} className="rounded-2xl border border-border bg-gradient-card backdrop-blur p-7 hover:border-primary/40 transition">
                <div className="size-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Icon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc(platform, m, startPrice)}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* STEPS */}
      <section className="border-y border-border bg-secondary/20">
        <div className="container mx-auto px-6 py-24">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center">
            {t.steps.title(platform, m)}
          </h2>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {t.steps.items.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-card/60 backdrop-blur p-7">
                <div className="size-10 rounded-xl bg-gradient-primary text-primary-foreground font-display font-bold flex items-center justify-center shadow-glow">
                  {s.n}
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc(platform, m)}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center gap-3">
            <a href="/auth" className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary text-primary-foreground px-6 py-3.5 font-medium shadow-glow hover:opacity-90 transition">
              {t.steps.cta}
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center">
          {t.pricing.title(platform, m)}
        </h2>
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          {t.pricing.subtitle}
        </p>
        <div className="mt-14 grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            { tier: t.pricing.starter, qty: "100", price: "$0.50", popular: false },
            { tier: t.pricing.popular, qty: "500", price: "$2.50", popular: true },
            { tier: t.pricing.pro, qty: "1000", price: "$5.00", popular: false },
          ].map((p) => (
            <div key={p.tier} className={`relative rounded-2xl border bg-card/60 backdrop-blur p-7 transition ${p.popular ? "border-primary shadow-glow" : "border-border hover:border-primary/40"}`}>
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1 shadow-glow">
                  {t.pricing.mostPopular}
                </span>
              )}
              <p className="text-xs font-semibold tracking-widest text-muted-foreground">{p.tier}</p>
              <p className="mt-4 font-display text-5xl font-bold">{p.qty}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.pricing.startingAt} {p.price}</p>
              <a href="/auth" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 font-medium transition ${p.popular ? "bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90" : "bg-foreground text-background hover:bg-foreground/90"}`}>
                {t.pricing.order}
              </a>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a href="/services" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
            {t.pricing.seeAll}
          </a>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="container mx-auto px-6 py-20">
        <div className="rounded-3xl border border-border bg-gradient-card backdrop-blur p-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold">{t.features.title}</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5 text-sm">
            {t.features.items(m).map((f) => (
              <div key={f} className="flex items-start gap-3">
                <span className="mt-0.5 size-5 rounded-md bg-success/15 text-success flex items-center justify-center flex-shrink-0">
                  <Check className="size-3.5" />
                </span>
                <span className="text-muted-foreground">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center">
          {t.faq.title(platform, m)}
        </h2>
        <div className="mt-12 max-w-3xl mx-auto space-y-3">
          {t.faq.items(platform, m).map((f, i) => (
            <details key={i} className="group rounded-2xl border border-border bg-card/60 backdrop-blur p-5 open:border-primary/40 transition">
              <summary className="cursor-pointer flex items-center justify-between gap-4 font-medium list-none">
                <span>{f.q}</span>
                <span className="size-7 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 md:p-14 shadow-glow">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                {t.cta.title(platform)}
              </h2>
              <p className="mt-2 text-primary-foreground/85">{t.cta.subtitle}</p>
            </div>
            <a href="/auth" className="inline-flex items-center gap-2 rounded-xl bg-background text-foreground px-6 py-3.5 font-medium hover:bg-background/90 transition">
              {t.cta.button}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
