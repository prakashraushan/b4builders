import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { existsSync, statSync } from "fs";
import { join } from "path";
import { SITE_URL, PHONE_DISPLAY, WHATSAPP_NUMBER, WHATSAPP_MESSAGE, EMAIL, packages } from "@/lib/data";
import { publishedProjects, featuredSlugs } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

const steps = [
  { title: "Estimate & BOQ", body: "We visit the site, understand the brief, and give you a detailed bill of quantities — no hidden line items." },
  { title: "Agreed milestones", body: "Work proceeds in clear stages, each tied to a payment milestone so you always know what's been completed." },
  { title: "Photo & video updates", body: "Regular photos and short videos from site, shared with you as the build moves forward." },
  { title: "Handover", body: "A final walkthrough together before keys are handed over. We stay reachable after." },
];

export default function HomePage() {
  const heroImagePath = join(process.cwd(), "public/hero/hero.jpg");
  const hasHeroImage = existsSync(heroImagePath);
  // Cache-bust on the file's mtime so swapping the photo (e.g. for Prakash's real project shots)
  // always invalidates browser/CDN caches instead of silently serving the old bytes.
  const heroImageVersion = hasHeroImage ? Math.floor(statSync(heroImagePath).mtimeMs) : 0;

  const featured = featuredSlugs
    .map((slug) => publishedProjects.find((p) => p.slug === slug))
    .filter(Boolean);

  const additionalProjects = publishedProjects
    .filter((p) => !featuredSlugs.includes(p.slug))
    .slice(0, 3 - featured.length);

  const displayProjects = [...featured, ...additionalProjects].slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      {/* TODO(Prakash): drop your hero photo at /public/hero/hero.jpg — it will load automatically */}
      <section className="relative flex min-h-[90vh] items-end overflow-hidden bg-[var(--charcoal)]">
        {hasHeroImage && (
          <Image
            src={`/hero/hero.jpg?v=${heroImageVersion}`}
            alt="A beautifully constructed home by B4 Builders, Bengaluru"
            fill
            className="object-cover object-center opacity-50"
            priority
            sizes="100vw"
          />
        )}
        {/* Photo is dimmed (not just darkened by an overlay) so it blends into the charcoal
            backdrop — the "faded" treatment basera builders uses on its hero, kept a touch
            clearer here. A left-to-right wash on top keeps the text column legible. */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[var(--charcoal)]/70 via-[var(--charcoal)]/35 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 lg:px-8 lg:pb-24">
          <h1
            className="animate-fade-in-up max-w-3xl font-[var(--font-fraunces)] text-5xl font-light leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Building dreams.<br />Homes built to last.
          </h1>
          <p className="animate-fade-in-up animate-delay-200 mt-6 max-w-xl text-lg leading-relaxed text-white/90 [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]">
            End-to-end construction and interiors — in lime or concrete, design to handover.
          </p>
          <div className="animate-fade-in-up animate-delay-300 mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-dark)]"
            >
              Start your project
            </Link>
            <Link
              href="/work"
              className="rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              See our work
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quick facts strip ── */}
      <div className="border-b border-[var(--border)] bg-[var(--surface)] py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-4 text-center sm:grid-cols-4 lg:px-8">
          <div>
            <p className="font-[var(--font-fraunces)] text-4xl font-semibold tracking-tight text-[var(--accent)] sm:text-5xl">2022</p>
            <p className="mt-1.5 text-sm font-medium text-[var(--text-muted)]">Founded</p>
          </div>
          <div>
            <p className="font-[var(--font-fraunces)] text-4xl font-semibold tracking-tight text-[var(--accent)] sm:text-5xl">3</p>
            <p className="mt-1.5 text-sm font-medium text-[var(--text-muted)]">Homes completed</p>
          </div>
          <div>
            <p className="font-[var(--font-fraunces)] text-4xl font-semibold tracking-tight text-[var(--accent)] sm:text-5xl">3</p>
            <p className="mt-1.5 text-sm font-medium text-[var(--text-muted)]">Active builds</p>
          </div>
          <div>
            <p className="font-[var(--font-fraunces)] text-4xl font-semibold tracking-tight text-[var(--accent)] sm:text-5xl">Bengaluru</p>
            <p className="mt-1.5 text-sm font-medium text-[var(--text-muted)]">Based in</p>
          </div>
        </div>
      </div>

      {/* ── Two tracks ── */}
      <section className="bg-[var(--background)] py-20 lg:py-28" aria-label="What we build">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-[var(--font-fraunces)] text-3xl font-light text-[var(--text)] sm:text-4xl">
            What we build
          </h2>
          <p className="mt-3 max-w-xl text-[var(--text-muted)]">
            Two distinct approaches to construction — both delivered end to end, under one team.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Traditional */}
            <Link
              href="/build/traditional"
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-shadow hover:shadow-lg md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center rounded-md bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                  Traditional & Eco-Friendly
                </span>
                <svg className="h-5 w-5 text-[var(--border)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <h3 className="mt-6 font-[var(--font-fraunces)] text-2xl font-light text-[var(--text)]">
                Lime, surkhee, and Madras Terrace
              </h3>
              <p className="mt-3 text-[var(--text-muted)]">
                Breathable buildings that age well — cooler in summer, drier in monsoon, lower embodied carbon.
              </p>
              <ul className="mt-5 space-y-1.5 text-sm text-[var(--text-muted)]">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                  Lime mortar masonry & plastering
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                  Surkhee & mud finishes
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                  Madras Terrace roofing
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                  Heritage restoration
                </li>
              </ul>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent)]">
                See traditional work
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>

            {/* Modern */}
            <Link
              href="/build/modern"
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-shadow hover:shadow-lg md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center rounded-md bg-[var(--charcoal)]/8 px-3 py-1 text-xs font-semibold text-[var(--text)]">
                  Modern & Conventional
                </span>
                <svg className="h-5 w-5 text-[var(--border)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <h3 className="mt-6 font-[var(--font-fraunces)] text-2xl font-light text-[var(--text)]">
                RCC homes, villas, and renovations
              </h3>
              <p className="mt-3 text-[var(--text-muted)]">
                Fast and predictable builds — versatile finishes, turnkey delivery, one point of accountability.
              </p>
              <ul className="mt-5 space-y-1.5 text-sm text-[var(--text-muted)]">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[var(--text-muted)]" aria-hidden="true" />
                  RCC framed structures
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[var(--text-muted)]" aria-hidden="true" />
                  Turnkey villas & independent homes
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[var(--text-muted)]" aria-hidden="true" />
                  Renovations & extensions
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[var(--text-muted)]" aria-hidden="true" />
                  Modern exterior finishes
                </li>
              </ul>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--text)]">
                See modern work
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── End-to-end band ── */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)] py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-[var(--text-muted)]">
            We handle the whole build — design coordination, structure, finishes, interiors, and handover — under one team, with one point of accountability.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {["Construction", "Interiors", "Project management"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-[var(--border)] px-5 py-2 text-sm font-medium text-[var(--text-muted)]"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Selected work ── */}
      <section className="bg-[var(--background)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 className="font-[var(--font-fraunces)] text-3xl font-light text-[var(--text)] sm:text-4xl">
              Selected work
            </h2>
            <Link href="/work" className="text-sm font-semibold text-[var(--accent)] hover:underline">
              View all →
            </Link>
          </div>

          {displayProjects.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {displayProjects.map((p) => p && <ProjectCard key={p.slug} project={p} />)}
            </div>
          ) : (
            <p className="mt-10 text-[var(--text-muted)]">Projects coming soon.</p>
          )}
        </div>
      </section>

      {/* ── How we work ── */}
      <section className="bg-[var(--charcoal)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-[var(--font-fraunces)] text-3xl font-light text-white sm:text-4xl">
            How we work
          </h2>
          <p className="mt-3 text-white/65">A clear process, every time.</p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title}>
                <span className="font-[var(--font-fraunces)] text-4xl font-light text-white/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cost guide teaser ── */}
      <section className="bg-[var(--background)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-[var(--font-fraunces)] text-3xl font-light text-[var(--text)] sm:text-4xl">
            What does it cost to build in Bangalore?
          </h2>

          {/* RCC turnkey package rates at a glance */}
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">RCC turnkey packages, foundation to handover</p>
            <div className="mt-5 grid gap-6 sm:grid-cols-3">
              {packages.map((p) => (
                <div
                  key={p.name}
                  className={`rounded-xl border p-6 ${
                    p.highlight
                      ? "border-[var(--accent)] bg-[var(--accent)]/5"
                      : "border-[var(--border)] bg-[var(--surface)]"
                  }`}
                >
                  {p.highlight && (
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Most popular</p>
                  )}
                  <h3 className="mt-2 font-[var(--font-fraunces)] text-lg font-light text-[var(--text)]">{p.name}</h3>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{p.tagline}</p>
                  <p className="mt-4">
                    <span className="text-2xl font-semibold text-[var(--text)]">{p.rate}</span>
                    <span className="text-sm text-[var(--text-muted)]"> /sqft</span>
                  </p>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">Indicative band {p.band}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-[var(--text-muted)]">
              Rates are indicative, on built-up area, for the agreed plan and standard site conditions. See the <Link href="/cost-guide" className="text-[var(--accent)] hover:underline">cost guide</Link> for what each package includes.
            </p>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="leading-relaxed text-[var(--text-muted)]">
                Construction cost in Bangalore depends on the site, design complexity, material choices, and finishes. Traditional lime construction costs more in skilled labour; modern RCC builds are faster and more predictable. Both can be done within a thoughtful budget.
              </p>
              <p className="mt-3 text-[var(--text-muted)]">
                Indicative starting range: <span className="font-semibold text-[var(--text)]">₹2,100 – ₹3,000 per sqft</span> for a complete RCC turnkey build (built-up area), depending on package and finish level.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/cost-guide"
                  className="rounded-lg border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Read the cost guide
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-dark)]"
                >
                  Get a detailed estimate
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Quick factors that affect cost</p>
              <ul className="mt-4 space-y-3">
                {[
                  "Site conditions and soil type",
                  "Design complexity and built area",
                  "Material choices (lime vs RCC, finishes)",
                  "Quality of electrical, plumbing, and joinery",
                  "Location and site access within Bengaluru",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── (hidden until Prakash supplies real quotes) */}
      {/* TODO(Prakash): add real client quotes — uncomment and populate this section */}

      {/* ── Closing CTA ── */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="font-[var(--font-fraunces)] text-3xl font-light text-[var(--text)] sm:text-4xl">
            Tell us about your project.
          </h2>
          <p className="mt-4 text-[var(--text-muted)]">
            Whether you have a plot, a plan, or just an idea — we can help you figure out the next step.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-[var(--accent)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-dark)]"
            >
              Start a conversation
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-[var(--border)] px-8 py-3.5 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[#25D366] hover:text-[#25D366]"
            >
              <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.742 5.486 2.035 7.788L0 32l8.418-2.01A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.27 19.518c-.398-.199-2.352-1.16-2.717-1.292-.364-.133-.63-.199-.895.199-.265.398-1.028 1.292-1.26 1.558-.232.265-.464.298-.862.1-.398-.2-1.682-.62-3.203-1.976-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.2-.232.266-.398.398-.663.133-.265.067-.497-.033-.696-.1-.199-.895-2.157-1.227-2.952-.322-.775-.65-.67-.895-.682l-.762-.013c-.265 0-.696.1-1.061.497-.364.398-1.393 1.36-1.393 3.317s1.426 3.847 1.625 4.112c.199.265 2.806 4.285 6.798 6.01.95.41 1.692.655 2.27.839.953.304 1.822.261 2.508.158.765-.114 2.352-.961 2.684-1.889.332-.928.332-1.724.232-1.889-.1-.166-.364-.265-.762-.464z" />
              </svg>
              WhatsApp
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="rounded-lg border border-[var(--border)] px-8 py-3.5 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
