import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "About B4 Builders",
  description:
    "B4 Builders is an end-to-end construction and interiors company in Bengaluru, founded by Kaniska Sathe, Gaurav HS, and Prakash Raushan.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const team = [
  {
    name: "Kaniska Sathe",
    title: "Co-founder & Partner",
    bio: "TODO(Prakash): short bio for Kaniska.",
  },
  {
    name: "Gaurav HS",
    title: "Co-founder & Partner",
    bio: "TODO(Prakash): short bio for Gaurav.",
  },
  {
    name: "Prakash Raushan",
    title: "Co-founder & Managing Partner",
    bio: "TODO(Prakash): short bio for Prakash.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[var(--background)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">About us</p>
          <h1 className="mt-4 font-[var(--font-fraunces)] text-4xl font-light text-[var(--text)] sm:text-5xl">
            B4 Builders, Bengaluru.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
            We&apos;re an end-to-end construction and interiors company based in Bengaluru. We build in lime and concrete — traditional eco-friendly construction alongside modern RCC — and handle everything from design coordination to handover under one team.
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-[var(--font-fraunces)] text-2xl font-light text-[var(--text)] sm:text-3xl">
              What we stand for
            </h2>
            <div className="mt-6 space-y-4 text-[var(--text-muted)]">
              <p>
                TODO(Prakash): mission / motto — leave this block editable with your own words.
              </p>
              <p>
                Since 2022, we&apos;ve completed seven projects across Bengaluru — traditional lime homes, modern RCC villas, heritage restoration, and interior fit-outs. Every project is managed end to end, with one team and one point of accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-[var(--background)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-[var(--font-fraunces)] text-2xl font-light text-[var(--text)] sm:text-3xl">
            The team
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {team.map((member) => (
              <div key={member.name}>
                {/* Photo placeholder */}
                <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl bg-[var(--border)]">
                  <p className="px-4 text-center text-xs text-[var(--text-muted)]">
                    TODO(Prakash): photo for {member.name}
                  </p>
                </div>
                <h3 className="mt-5 font-semibold text-[var(--text)]">{member.name}</h3>
                <p className="text-sm text-[var(--accent)]">{member.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)] py-16">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="font-[var(--font-fraunces)] text-2xl font-light text-[var(--text)]">
            Want to work with us?
          </h2>
          <p className="mt-3 text-[var(--text-muted)]">Tell us about your project and we&apos;ll take it from there.</p>
          <Link href="/contact" className="mt-6 inline-block rounded-lg bg-[var(--accent)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-dark)]">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
