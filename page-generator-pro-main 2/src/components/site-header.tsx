import { LanguageSwitcher } from "./language-switcher";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-gradient-primary shadow-glow flex items-center justify-center font-display font-bold">
            B
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            Boost<span className="text-gradient">Followers</span>
          </span>
        </a>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href="/auth"
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm rounded-md text-foreground/90 hover:bg-secondary transition"
          >
            Sign in
          </a>
          <a
            href="/auth"
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            Create account
          </a>
        </div>
      </div>
    </header>
  );
}
