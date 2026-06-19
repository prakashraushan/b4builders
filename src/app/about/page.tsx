import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "About B4 Builders",
  description:
    "B4 Builders is an end-to-end construction and interiors company in Bengaluru, founded by Kanishka Sathe, Gaurav HS, and Prakash Raushan.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const team = [
  {
    name: "Kanishka Sathe",
    title: "Co-founder & Partner",
    photo: "/team/kanishka.jpg" as string | null,
    bio: "A serial entrepreneur who has successfully built and scaled businesses including Manyavar and Shubh Sweets on HSR Layout's 27th Main, Kanishka brings sharp commercial instinct and natural leadership to B4 Builders. He believes the best businesses are built on genuine value — and that a home is no different.",
  },
  {
    name: "Gaurav HS",
    title: "Co-founder & Partner",
    photo: "/team/gaurav.jpg" as string | null,
    bio: "A practising lawyer and community builder who genuinely loves people, Gaurav brings the precision of legal thinking and the warmth of a natural connector to everything he does. His belief in accountability and doing right by people runs through how B4 Builders operates.",
  },
  {
    name: "Prakash Raushan",
    title: "Co-founder & Partner",
    photo: "/team/prakash.jpg" as string | null,
    bio: "With 13.5 years in India's tech ecosystem — across Redbus, MakeMyTrip, IamHere Labs and CredR — Prakash brings a product builder's mindset to construction. His conviction: the homebuilding experience in India deserves the same transparency and rigour as the best tech products. B4 Builders is his attempt to prove it.",
  },
];

function PersonIcon() {
  return (
    <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl bg-[var(--border)]">
      <svg
        className="h-20 w-20 text-[var(--text-muted)]/30"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12Zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8Z" />
      </svg>
    </div>
  );
}

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
              <p className="text-lg leading-relaxed">
                We build homes the way we&apos;d build our own — with quality materials, honest timelines, and complete transparency from the day we break ground to the day we hand over the keys.
              </p>
              <p className="leading-relaxed">
                Since 2022, we&apos;ve completed 3 homes across Bengaluru and have 3 more actively under construction — traditional lime homes, modern RCC villas, and interior fit-outs. Every project is managed end to end, with one team and one point of accountability.
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
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {team.map((member) => (
              <div key={member.name}>
                {member.photo ? (
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[var(--border)]">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                ) : (
                  <PersonIcon />
                )}
                <h3 className="mt-5 font-semibold text-[var(--text)]">{member.name}</h3>
                <p className="text-sm text-[var(--accent)]">{member.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{member.bio}</p>
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
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-[var(--accent)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-dark)]"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
