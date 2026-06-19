import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, packages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Construction Cost Guide — Bangalore",
  description:
    "What does it cost to build a home in Bangalore? A plain-language guide to construction costs, what drives them, and how lime and RCC compare. Get a detailed estimate for your project.",
  keywords: [
    "construction cost Bangalore",
    "house construction cost Bangalore",
    "construction cost per sq ft Bangalore",
    "lime construction cost Bangalore",
    "RCC construction cost Bangalore",
    "home building cost Bangalore",
  ],
  alternates: { canonical: `${SITE_URL}/cost-guide` },
  openGraph: {
    title: "Construction Cost Guide — Bangalore | B4 Builders",
    description:
      "What drives construction cost in Bangalore — and how lime vs RCC compare. A practical guide from B4 Builders.",
  },
};

const factors = [
  {
    title: "Site conditions",
    body: "Soil type affects foundation depth and cost. Rocky ground, high water tables, or unusual slope add to the structural work needed before the building even begins.",
  },
  {
    title: "Design complexity",
    body: "A straightforward rectangular plan is the most efficient to build. Cantilevers, curved walls, complex roof forms, and deep basements all add cost.",
  },
  {
    title: "Material choices",
    body: "The structural method (lime vs RCC, load-bearing vs framed) and the quality of finishes (basic tile vs marble, standard fixtures vs premium) have the biggest range in cost.",
  },
  {
    title: "Built area",
    body: "Total built-up area is the primary driver. Ground coverage, number of floors, covered parking, service areas — everything counts.",
  },
  {
    title: "Finishes and interiors",
    body: "The shell of a building is often 50–60% of the total cost. Finishes — flooring, kitchen, wardrobes, bathrooms — account for the rest and vary widely.",
  },
  {
    title: "Site access",
    body: "A difficult-to-reach plot, a narrow approach road, or a constrained urban site increases logistics and scaffolding cost.",
  },
];

const methods = [
  {
    title: "Traditional & Eco-Friendly (lime, surkhee, Madras Terrace)",
    profile: [
      "Skilled labour cost is higher — lime work takes more time and expertise than cement-based work.",
      "Material cost is broadly comparable; lime and brick are not inherently expensive.",
      "The build takes longer to cure — lime strengthens over months, which affects programme.",
      "Long-term payoff: lower maintenance, better thermal comfort, and a building that genuinely improves with age.",
      "Well-suited to plots where natural ventilation and passive cooling are priorities.",
    ],
  },
  {
    title: "Modern & Conventional (RCC, cement plaster, contemporary finishes)",
    profile: [
      "Faster and more predictable programme — RCC cures in days, not months.",
      "Labour cost is lower than lime for equivalent area; more standardised trades.",
      "Versatile finish options: tile, stone, paint, cladding — wide cost range.",
      "Scales well to larger built areas and multi-floor programs.",
      "Easier to price precisely because the process is well understood.",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the construction cost per sq ft in Bangalore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "B4 Builders' RCC turnkey packages run from about ₹2,100/sqft (Basic) to ₹3,000/sqft (Premium) of built-up area, covering structure to finishes. The exact rate depends on material choices, design complexity, finishes, and site conditions — contact B4 Builders for a firm estimate after a site visit.",
      },
    },
    {
      "@type": "Question",
      name: "Is lime construction more expensive than RCC in Bangalore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lime construction typically costs more in skilled labour but is broadly comparable in materials. The build takes longer to cure, but delivers better thermal comfort and longevity.",
      },
    },
  ],
};

export default function CostGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="bg-[var(--background)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Cost guide</p>
          <h1 className="mt-4 font-[var(--font-fraunces)] text-4xl font-light text-[var(--text)] sm:text-5xl lg:text-6xl">
            What does it cost to<br />build in Bangalore?
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
            A practical guide to what drives construction cost in Bangalore, how traditional and modern methods compare, and how to get a personalised estimate for your project.
          </p>
        </div>
      </section>

      {/* ── What drives cost ── */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-[var(--font-fraunces)] text-2xl font-light text-[var(--text)] sm:text-3xl">
            What drives construction cost
          </h2>
          <p className="mt-3 text-[var(--text-muted)]">
            No two projects cost the same. Here are the main factors that affect your final number.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {factors.map((f) => (
              <div key={f.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-6">
                <h3 className="font-semibold text-[var(--text)]">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Method comparison ── */}
      <section className="bg-[var(--background)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-[var(--font-fraunces)] text-2xl font-light text-[var(--text)] sm:text-3xl">
            How the two methods compare
          </h2>
          <p className="mt-3 max-w-xl text-[var(--text-muted)]">
            Both are valid choices — the right one depends on your brief, timeline, and priorities.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {methods.map((m) => (
              <div key={m.title} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8">
                <h3 className="font-semibold text-[var(--text)]">{m.title}</h3>
                <ul className="mt-5 space-y-3">
                  {m.profile.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages & indicative rates ── */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-[var(--font-fraunces)] text-2xl font-light text-[var(--text)] sm:text-3xl">
            RCC turnkey packages & indicative rates
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--text-muted)]">
            For a complete RCC home, foundation to handover, we offer three packages — Basic, Standard and Premium. Each is built end to end by one team on one bill, with the same structure throughout: same concrete, steel and cement. What changes is the finish — flooring, tiles, doors, paint, fittings, railings and elevation.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`rounded-xl border p-6 ${
                  p.highlight
                    ? "border-[var(--accent)] bg-[var(--accent)]/5"
                    : "border-[var(--border)] bg-[var(--background)]"
                }`}
              >
                {p.highlight && (
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Most popular</p>
                )}
                <h3 className="mt-2 font-[var(--font-fraunces)] text-xl font-light text-[var(--text)]">{p.name}</h3>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{p.tagline}</p>
                <p className="mt-5">
                  <span className="text-3xl font-semibold text-[var(--text)]">{p.rate}</span>
                  <span className="text-sm text-[var(--text-muted)]"> /sqft</span>
                </p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">Indicative band {p.band}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
            Rates are quoted on <span className="font-semibold text-[var(--text)]">built-up area</span> — the total slab area across all floors, including balconies, staircase, utility and parapet. As a working example, a 2,000 sqft home in the Standard package works out to about ₹50 lakh. These are indicative package rates for the agreed plan and standard site conditions — your firm rate is confirmed in the project quotation after a site visit. Design/structural drawings, plan-sanction and statutory charges, utility connections, and GST are quoted separately.
          </p>
          <p className="mt-4 text-[var(--text-muted)]">
            Want the full specification — materials, finishes and what&apos;s included at each level? <Link href="/contact" className="text-[var(--accent)] hover:underline">Get in touch</Link>{" "}and we&apos;ll walk you through it.
          </p>
        </div>
      </section>

      {/* ── Lead magnet form ── */}
      <section className="bg-[var(--background)] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="font-[var(--font-fraunces)] text-2xl font-light text-[var(--text)] sm:text-3xl">
            Get a detailed estimate for your project
          </h2>
          <p className="mt-3 text-[var(--text-muted)]">
            Share the basics — site size, location, construction type, and rough brief — and we&apos;ll come back with a realistic range.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-[var(--accent)] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-dark)]"
            >
              Request an estimate →
            </Link>
          </div>
          <p className="mt-4 text-sm text-[var(--text-muted)]">
            No commitment required. We respond within 24 hours, Mon–Sat.
          </p>
        </div>
      </section>
    </>
  );
}
