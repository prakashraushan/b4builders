import type { Metadata } from "next";
import Link from "next/link";
import { allProjects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import { SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Modern & Conventional Construction",
  description:
    "RCC framed structures, turnkey villas, renovations, and modern exterior finishes in Bangalore. Fast and predictable builds delivered end to end.",
  alternates: { canonical: `${SITE_URL}/build/modern` },
  openGraph: {
    title: "Modern & Conventional Construction | B4 Builders Bangalore",
    description:
      "RCC homes, turnkey villas, and renovations — built to spec, on schedule.",
  },
};

const services = [
  { title: "RCC framed structures", desc: "Reinforced concrete frames sized to the program, engineered to last — the backbone of most modern Bangalore homes." },
  { title: "Load-bearing brick", desc: "For compact structures, load-bearing brick is economic, thermally solid, and fast — a good fit for smaller footprints." },
  { title: "Turnkey villas & independent homes", desc: "Complete design-to-handover delivery, coordinating every trade under one contract so you have a single point of contact." },
  { title: "Renovations & extensions", desc: "Adding a floor, reworking a layout, or freshening finishes — we handle renovation work alongside new construction." },
  { title: "Modern exterior finishes", desc: "Texture, stone cladding, painted finishes, or a combination — applied with care so the building ages without looking tired." },
  { title: "Structural consulting", desc: "We work with structural engineers to ensure every build is right for its soil type, load, and local seismic conditions." },
];

const strengths = [
  { title: "Fast and predictable", body: "RCC construction follows a well-understood process — concrete cures in days, not weeks, so the build proceeds on schedule." },
  { title: "Versatile finishes", body: "Modern buildings accept almost any finish — tile, stone, paint, texture, cladding — giving maximum design flexibility." },
  { title: "Suited to most programs", body: "Apartment-style flats, large villas, commercial spaces — RCC scales to almost any brief, height, or footprint." },
  { title: "Turnkey delivery", body: "We manage the full build — structure, MEP, finishes, and interiors — under one contract, no loose ends at handover." },
];

export default function ModernPage() {
  const projects = allProjects.filter((p) => p.published && p.track === "modern");

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[var(--background)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-[var(--text-muted)]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--text)]">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[var(--text)]">Modern & Conventional</span>
          </nav>
          <span className="mt-6 inline-flex items-center rounded-md bg-[var(--charcoal)]/8 px-3 py-1 text-xs font-semibold text-[var(--text)]">
            Modern & Conventional
          </span>
          <h1 className="mt-4 font-[var(--font-fraunces)] text-4xl font-light text-[var(--text)] sm:text-5xl">
            RCC homes, villas,<br />and renovations.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
            Modern construction — reinforced concrete, load-bearing brick, contemporary finishes — is predictable, versatile, and well-suited to most briefs in Bangalore. We build this way every day: turnkey villas, independent homes, extensions, and renovations, managed end to end.
          </p>
        </div>
      </section>

      {/* ── Strengths ── */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-[var(--font-fraunces)] text-2xl font-light text-[var(--text)] sm:text-3xl">
            What modern construction delivers
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((s) => (
              <div key={s.title}>
                <h3 className="font-semibold text-[var(--text)]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-[var(--background)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-[var(--font-fraunces)] text-2xl font-light text-[var(--text)] sm:text-3xl">
            What we do
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--charcoal)]/6">
                  <span className="h-2 w-2 rounded-full bg-[var(--charcoal)]" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-semibold text-[var(--text)]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-[var(--font-fraunces)] text-2xl font-light text-[var(--text)] sm:text-3xl">
            Modern projects
          </h2>

          {projects.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
          ) : (
            <p className="mt-8 text-[var(--text-muted)]">Project photos coming soon.</p>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[var(--background)] py-16">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="font-[var(--font-fraunces)] text-2xl font-light text-[var(--text)] sm:text-3xl">
            Ready to build?
          </h2>
          <p className="mt-3 text-[var(--text-muted)]">
            Share your plot details and brief — we&apos;ll give you an honest picture of scope and cost.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded-lg bg-[var(--accent)] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-dark)]">
              Start the conversation
            </Link>
            <Link href="/work" className="rounded-lg border border-[var(--border)] px-7 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">
              See all work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
