import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in / Sign up — BoostFollowers" },
      { name: "description", content: "Create your free account or sign in." },
    ],
  }),
  component: Auth,
});

function Auth() {
  const [mode, setMode] = useState<"signin" | "signup">("signup");

  return (
    <section className="relative overflow-hidden bg-hero min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="container mx-auto px-6 py-20 relative">
        <div className="max-w-md mx-auto rounded-2xl border border-border bg-card/70 backdrop-blur-xl p-8 shadow-card">
          <div className="flex gap-1 p-1 rounded-xl bg-secondary/60 mb-6">
            {(["signup", "signin"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 py-2 text-sm rounded-lg transition ${
                  mode === m ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {m === "signup" ? "Create account" : "Sign in"}
              </button>
            ))}
          </div>

          <h1 className="font-display text-2xl font-bold">
            {mode === "signup" ? "Create your free account" : "Welcome back"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {mode === "signup"
              ? "30 seconds, no credit card required."
              : "Sign in to manage your orders."}
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 space-y-3"
          >
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-primary text-primary-foreground px-4 py-3 font-medium shadow-glow hover:opacity-90 transition"
            >
              {mode === "signup" ? "Create my account" : "Sign in"}
            </button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-6">
            By continuing, you agree to our terms of service.
          </p>
        </div>
      </div>
    </section>
  );
}
