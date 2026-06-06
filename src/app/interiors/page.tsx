import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Interiors",
  description:
    "Full interior fit-outs in Bangalore — modular kitchens, wardrobes, false ceilings, flooring, lighting, plumbing. We do interiors alongside construction or standalone.",
  alternates: { canonical: `${SITE_URL}/interiors` },
};

const services = [
  { title: "Full fit-outs", desc: "A complete interior from bare shell to ready-to-move — every surface, fitting, and fixture finished to brief." },
  { title: "Modular kitchens", desc: "Designed around how you cook. Carcass, shutters, countertop, appliances, and plumbing — coordinated as one." },
  { title: "Wardrobes & storage", desc: "Full-height wardrobes, walk-in closets, study units, and built-in shelving — designed to last and easy to live with." },
  { title: "False ceilings", desc: "Gypsum, grid, or wood — designed to conceal services, improve acoustics, and add a finished layer to the room." },
  { title: "Flooring", desc: "Tile, natural stone, engineered wood, or marble — selected, sourced, and laid with the right bed and joint." },
  { title: "Lighting & electrical", desc: "Layout, wiring, and fixtures planned together so the lighting actually does what the design intends." },
  { title: "Plumbing & bath fit-outs", desc: "Complete bathroom fit-outs — sanitaryware, CP fittings, tile, mirrors, and accessories — co-ordinated with the plumbing run." },
];

export default function InteriorsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[var(--background)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Interiors</p>
          <h1 className="mt-4 font-[var(--font-fraunces)] text-4xl font-light text-[var(--text)] sm:text-5xl">
            The inside of<br />the building matters too.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
            We do interiors alongside construction — or as a standalone project. Full fit-outs, modular kitchens, wardrobes, flooring, lighting, and bathrooms — coordinated under one team so nothing falls through the gap between trades.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-dark)]">
              Start a project
            </Link>
            <Link href="/work" className="rounded-lg border border-[var(--border)] px-7 py-3.5 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">
              See our work
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-[var(--font-fraunces)] text-2xl font-light text-[var(--text)] sm:text-3xl">
            What we cover
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-6">
                <h3 className="font-semibold text-[var(--text)]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process note ── */}
      <section className="bg-[var(--background)] py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-[var(--font-fraunces)] text-2xl font-light text-[var(--text)] sm:text-3xl">
              Same team, same process.
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
              Whether we&apos;re building the shell and finishing the interior together, or taking over a new bare shell someone else built, we run interiors the same way as our construction projects — clear scope, agreed milestones, regular progress updates, and a final walkthrough before handover.
            </p>
            <Link href="/contact" className="mt-8 inline-block rounded-lg bg-[var(--accent)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-dark)]">
              Tell us about your space
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
