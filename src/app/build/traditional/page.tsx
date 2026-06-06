import type { Metadata } from "next";
import Link from "next/link";
import { allProjects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import { SITE_URL, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Traditional & Eco-Friendly Construction",
  description:
    "Lime mortar masonry, surkhee plastering, Madras Terrace roofing, and heritage restoration in Bangalore. Breathable buildings that age beautifully.",
  alternates: { canonical: `${SITE_URL}/build/traditional` },
  openGraph: {
    title: "Traditional & Eco-Friendly Construction | B4 Builders Bangalore",
    description:
      "Lime, surkhee, and Madras Terrace work — breathable buildings that age well.",
  },
};

const services = [
  { title: "Lime mortar masonry & plastering", desc: "Lime binds and breathes — it flexes with the structure, allows moisture to move, and improves with age." },
  { title: "Surkhee finishes", desc: "A traditional mix of brick powder and lime, surkhee gives a warm, textured surface that's durable and characterful." },
  { title: "Madras Terrace roofing", desc: "A layered brick-and-lime flat roof system that's naturally insulating — cooler in summer without any mechanical cooling." },
  { title: "Heritage restoration", desc: "Careful repair of pre-existing lime structures, using compatible traditional materials to preserve their integrity." },
  { title: "Mud & lime-stabilised construction", desc: "Earth-based construction for low-carbon, high-thermal-mass buildings suited to Bangalore's climate." },
  { title: "Traditional jaali, arches & detailing", desc: "Decorative and functional elements — stone jaalis for ventilation, brick arches, carved lime details — executed by skilled craftspeople." },
];

const strengths = [
  { title: "Breathable walls", body: "Lime walls allow moisture to pass through rather than trap it — older lime houses are often cooler in summer and drier in monsoon." },
  { title: "Ages well", body: "Lime hardens over decades. The older a well-built lime structure is, the stronger it typically becomes." },
  { title: "Lower embodied carbon", body: "Lime production emits less CO₂ than cement, and re-absorbs CO₂ as it cures — a meaningfully smaller carbon footprint." },
  { title: "Suited to Bangalore's climate", body: "High thermal mass + breathability = natural passive cooling in a warm, humid climate. Less dependence on air conditioning." },
];

export default function TraditionalPage() {
  const projects = allProjects.filter((p) => p.published && p.track === "traditional");

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[var(--background)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-[var(--text-muted)]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--text)]">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[var(--text)]">Traditional & Eco-Friendly</span>
          </nav>
          <span className="mt-6 inline-flex items-center rounded-md bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
            Traditional & Eco-Friendly
          </span>
          <h1 className="mt-4 font-[var(--font-fraunces)] text-4xl font-light text-[var(--text)] sm:text-5xl">
            Lime, surkhee, and<br />Madras Terrace work.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
            Traditional construction methods — lime mortar, surkhee plaster, Madras Terrace roofs — produce buildings that breathe, age well, and feel distinctly alive. We build in these methods alongside modern techniques because they&apos;re genuinely good: cooler in summer, drier in monsoon, and lower in embodied carbon.
          </p>
        </div>
      </section>

      {/* ── Strengths ── */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-[var(--font-fraunces)] text-2xl font-light text-[var(--text)] sm:text-3xl">
            Why traditional construction works
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
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--accent)]/10">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
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
            Traditional projects
          </h2>

          {projects.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
          ) : (
            <p className="mt-8 text-[var(--text-muted)]">
              Traditional project photos coming soon. <Link href="/contact" className="text-[var(--accent)] hover:underline">Get in touch</Link> to discuss your project.
            </p>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[var(--background)] py-16">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="font-[var(--font-fraunces)] text-2xl font-light text-[var(--text)] sm:text-3xl">
            Interested in building with lime?
          </h2>
          <p className="mt-3 text-[var(--text-muted)]">
            Tell us about your site and brief — we&apos;ll walk you through what&apos;s possible.
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
