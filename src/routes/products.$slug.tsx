import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getProduct, products } from "@/lib/products";
import { PageShell, SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { slug: product.slug };
  },
  head: ({ loaderData }) => {
    const product = loaderData ? getProduct(loaderData.slug) : undefined;
    if (!product) {
      return {
        meta: [
          { title: "Not found — Vellure" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        { title: `${product.name} — Vellure` },
        {
          name: "description",
          content: product.tagline,
        },
        { property: "og:title", content: `${product.name} — Vellure` },
        { property: "og:description", content: product.tagline },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { slug } = Route.useParams();
  const product = getProduct(slug)!;
  const [added, setAdded] = useState(false);
  const related = products.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <PageShell>
      <SiteHeader />

      <section className="grid grid-cols-1 gap-10 py-14 md:grid-cols-2 md:py-20">
        {/* image */}
        <div className="relative fade-up">
          <div className="anim-b absolute -inset-4 rounded-[2rem] bg-primary/20 blur-2xl" />
          <img
            src={product.image}
            alt={product.name}
            width={1024}
            height={1024}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] object-cover outline-1 -outline-offset-1 outline-white/10"
          />
        </div>

        {/* info */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              ← Back to shop
            </Link>
            <span className="font-mono text-[10px] uppercase tracking-widest text-glow-cyan">
              {product.category}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
              {product.size}
            </span>
          </div>

          <h1 className="mt-5 text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl">
            {product.name}
          </h1>
          <p className="mt-4 font-mono text-2xl text-muted-foreground">
            ${product.price}
          </p>
          <p className="mt-6 max-w-[46ch] leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-9 space-y-3 border-t border-white/10 pt-6">
            <div className="flex items-baseline justify-between text-sm">
              <span className="font-mono text-[10px] uppercase tracking-widest text-glow-cyan">
                Key actives
              </span>
              <span>{product.actives}</span>
            </div>
            <div className="flex items-baseline justify-between text-sm">
              <span className="font-mono text-[10px] uppercase tracking-widest text-glow-violet">
                Benefit
              </span>
              <span>{product.benefit}</span>
            </div>
            <div className="flex items-baseline justify-between text-sm">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Texture
              </span>
              <span>{product.texture}</span>
            </div>
            <div className="flex items-baseline justify-between text-sm">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Best for
              </span>
              <span>{product.bestFor}</span>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-9 flex gap-3">
            <button
              onClick={() => setAdded(true)}
              className="inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-white px-10 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-glow-cyan"
            >
              {added ? "Added to cart ✓" : `Add to bag — $${product.price}`}
            </button>
            <button className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold backdrop-blur-md">
              View rituals
            </button>
          </div>
        </div>
      </section>

      {/* related */}
      <section className="mt-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Pairs well with</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground/80">
            03 products
          </span>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              to="/products/$slug"
              params={{ slug: p.slug }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:border-primary/50 hover:bg-white/[0.07]"
            >
              <img
                src={p.image}
                alt={p.name}
                width={1024}
                height={1024}
                loading="lazy"
                className="mb-5 aspect-square w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-white/10"
              />
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-glow-cyan">
                  {p.category}
                </span>
                <span className="font-mono text-sm text-muted-foreground">${p.price}</span>
              </div>
              <h3 className="mt-1 text-lg font-semibold">{p.name}</h3>
              <span className="mt-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground">
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
