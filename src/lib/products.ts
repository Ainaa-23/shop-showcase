import serumImg from "@/assets/product-serum.jpg";
import creamImg from "@/assets/product-cream.jpg";
import mistImg from "@/assets/product-mist.jpg";
import spfImg from "@/assets/product-spf.jpg";
import balmImg from "@/assets/product-balm.jpg";

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  size: string;
  tagline: string;
  description: string;
  actives: string;
  benefit: string;
  texture: string;
  bestFor: string;
  tags: string[];
  image: string;
};

export const products: Product[] = [
  {
    slug: "vellure-glow-serum",
    name: "Vellure Glow Serum",
    category: "Serum",
    price: 68,
    size: "30 ml",
    tagline: "24h radiance with 12% niacinamide + HA.",
    description:
      "A featherweight gel-serum engineered for luminosity that lasts. Twelve percent niacinamide evens tone and refines pores, while triple-weight hyaluronic acid draws moisture into every layer of the skin. Apply after cleansing, before moisturizer.",
    actives: "12% Niacinamide · HA",
    benefit: "24h radiance, even tone",
    texture: "Weightless gel, fast-absorbing",
    bestFor: "All skin types · AM & PM",
    tags: ["Niacinamide", "Hyaluronic Acid", "Fragrance-free", "Vegan"],
    image: serumImg,
  },
  {
    slug: "midnight-recovery-cream",
    name: "Midnight Recovery Cream",
    category: "Night",
    price: 54,
    size: "50 ml",
    tagline: "Peptide barrier repair while you sleep.",
    description:
      "A rich night cream built around signal peptides and ceramide NP, working with your skin's own overnight repair cycle. Wake to a calmer, cushioned barrier with visibly softened fine lines.",
    actives: "Peptides · Ceramide NP",
    benefit: "Overnight barrier repair",
    texture: "Cloud-soft cream",
    bestFor: "Dry & combination skin · PM",
    tags: ["Peptides", "Ceramides", "Shea Butter", "Dermatologist-tested"],
    image: creamImg,
  },
  {
    slug: "aqua-veil-mist",
    name: "Aqua Veil Mist",
    category: "Mist",
    price: 38,
    size: "100 ml",
    tagline: "Instant hydration, sets makeup like glass.",
    description:
      "A micro-fine hydrating mist with electrolyte minerals and panthenol. One spritz recharges thirsty skin, a second locks makeup in place with a glass-like finish. Non-sticky, alcohol-free.",
    actives: "Panthenol · Electrolytes",
    benefit: "Instant hydration, glass finish",
    texture: "Micro-fine, non-sticky spray",
    bestFor: "All skin types · Anytime",
    tags: ["Alcohol-free", "Panthenol", "Makeup-safe", "Travel-size ready"],
    image: mistImg,
  },
  {
    slug: "shield-spf-50-fluid",
    name: "Shield SPF 50 Fluid",
    category: "SPF",
    price: 46,
    size: "40 ml",
    tagline: "Invisible daily defense, zero white cast.",
    description:
      "A next-generation mineral-hybrid sunscreen fluid with SPF 50 PA++++. Filters of UVA and UVB in a transparent, water-light base that layers invisibly under makeup and never leaves a cast.",
    actives: "Mineral-hybrid filters",
    benefit: "Broad-spectrum UVA/UVB defense",
    texture: "Water-light fluid",
    bestFor: "Every skin tone · Daily",
    tags: ["SPF 50", "No white cast", "Reef-safe", "Sweat-resistant"],
    image: spfImg,
  },
  {
    slug: "velvet-lip-repair",
    name: "Velvet Lip Repair",
    category: "Balm",
    price: 42,
    size: "12 g",
    tagline: "Overnight ceramide + shea smoothing balm.",
    description:
      "An overnight treatment balm that melts on contact. Ceramides rebuild the lip barrier while cold-pressed shea and murumuru butter seal in softness. A sheer wash of violet light completes the ritual.",
    actives: "Ceramides · Shea Butter",
    benefit: "Overnight lip repair",
    texture: "Melting balm, sheer violet tint",
    bestFor: "Dry lips · PM treatment",
    tags: ["Ceramides", "Shea Butter", "Sheer tint", "Cruelty-free"],
    image: balmImg,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
