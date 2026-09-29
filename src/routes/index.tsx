import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-serum.jpg";
import { products } from "@/lib/products";
import { PageShell, SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vellure — Glow Lab | The Collection" },
      {
        name: "description",
        content:
          "Shop clean, high-performance cosmetics: serums, night creams, mists, SPF and repair balms. Small batch, engineered for motion.",
      },
      { property: "og:title", content: "Vellure — Glow Lab | The Collection" },
      {
        property: "og:description",
        content: "Skin that moves with you. Clean, high-performance cosmetic science.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <SiteHeader />

      {/* hero */}
      <section className="mt-20 grid items-end gap-10 lg:grid-cols-2">
        <div className="fade-up">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            New · Glow Lab 04
          </p>
          <h1 className="mt-4 text-6xl font-bold leading-[0.9] tracking-tight sm:text-7xl">
            Skin that
            <br />
            <span className="gradient-hero-text">moves</span> with you.
          </h1>
          <p className="mt-6 max-w-md text-muted-foreground">
            Clean, high-performance cosmetic science for the modern athlete. Small
            batch, fast shipping, zero compromise.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#collection"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-background"
            >
              Shop the drop
            </a>
            <button className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold backdrop-blur-md">
              View rituals
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="anim-b absolute -inset-4 rounded-[2rem] bg-primary/20 blur-2xl" />
          <img
            src={heroImg}
            alt="Frosted glass serum bottle with blue light streaks"
            width={1088}
            height={1280}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] object-cover"
          />
        </div>
      </section>

      {/* product grid */}
      <section id="collection" className="mt-24">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-bold tracking-tight">The collection</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground/80">
            05 products
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Link
              key={product.slug}
              to="/products/$slug"
              params={{ slug: product.slug }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:border-primary/50 hover:bg-white/[0.07]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img
                src={product.image}
                alt={product.name}
                width={1024}
                height={1024}
                loading="lazy"
                className="mb-5 aspect-square w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-white/10"
              />
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-glow-cyan">
                  {product.category}
                </span>
                <span className="font-mono text-sm text-muted-foreground">
                  ${product.price}
                </span>
              </div>
              <h3 className="mt-1 text-lg font-semibold">{product.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground">
                View <span className="transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </PageShell>
  );
}
