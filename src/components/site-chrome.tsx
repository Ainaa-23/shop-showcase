import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

/** Ambient background: gradient light, drifting frosted panels, grain. */
export function Backdrop() {
  return (
    <>
      <div className="ambient-light pointer-events-none absolute inset-0" />
      <div className="anim-a pointer-events-none absolute -left-40 top-1/4 h-[520px] w-[360px] -rotate-12 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl" />
      <div className="anim-b pointer-events-none absolute right-[-120px] top-10 h-[420px] w-[300px] rotate-12 rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl" />
      <div className="grain pointer-events-none absolute inset-0 opacity-60" />
    </>
  );
}

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-glow-violet font-mono text-lg font-bold">
          V
        </span>
        <span className="text-sm font-bold uppercase tracking-[0.35em]">Vellure</span>
      </Link>
      <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground sm:flex">
        <span>Shop</span>
        <span>Rituals</span>
        <span>Journal</span>
      </nav>
      <button className="rounded-full border border-white/15 bg-white/5 px-5 py-2 font-mono text-xs uppercase tracking-widest backdrop-blur-md hover:bg-white/10">
        Cart · 0
      </button>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/10 pt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground/70">
      © 2026 Vellure · Glow Lab — engineered for motion
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-grotesk text-foreground">
      <Backdrop />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-8">
        {children}
      </div>
    </div>
  );
}
