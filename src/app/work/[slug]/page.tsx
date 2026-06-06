import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { allProjects, getProjectBySlug } from "@/content/projects";
import YoutubeEmbed from "@/components/YoutubeEmbed";
import { SITE_URL, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.name} — ${project.type}`,
    description: `${project.name}: a ${project.type} in ${project.area}. ${project.highlights?.join(". ") ?? ""}`,
    alternates: { canonical: `${SITE_URL}/work/${slug}` },
    openGraph: {
      title: `${project.name} | B4 Builders`,
      description: `${project.type} in ${project.area}.`,
      images: project.cover ? [{ url: project.cover }] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.published) notFound();

  const trackLabel =
    project.track === "traditional" ? "Traditional & Eco-Friendly" : "Modern & Conventional";
  const trackHref = `/build/${project.track}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: project.name,
    description: project.body,
    address: {
      "@type": "PostalAddress",
      streetAddress: project.area,
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Cover ── */}
      {project.gallery[0] || project.cover ? (
        <div className="relative aspect-[16/7] w-full overflow-hidden bg-[var(--border)]">
          <Image
            src={project.gallery[0] ?? project.cover}
            alt={project.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/7] w-full items-center justify-center bg-[var(--border)]">
          <p className="text-sm text-[var(--text-muted)]">TODO(Prakash): add photos to /public/projects/{project.slug}/</p>
        </div>
      )}

      {/* ── Content ── */}
      <section className="bg-[var(--background)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">

            {/* Left */}
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-[var(--text-muted)]" aria-label="Breadcrumb">
                <Link href="/work" className="hover:text-[var(--text)]">Work</Link>
                <span aria-hidden="true">/</span>
                <span className="text-[var(--text)]">{project.name}</span>
              </nav>

              <h1 className="mt-5 font-[var(--font-fraunces)] text-4xl font-light text-[var(--text)] sm:text-5xl">
                {project.name}
              </h1>
              <p className="mt-2 text-[var(--text-muted)]">
                {project.type} · {project.area}
                {project.year ? ` · ${project.year}` : ""}
              </p>

              {/* Narrative */}
              <div className="mt-8 prose prose-sm max-w-none text-[var(--text-muted)] leading-relaxed">
                <p>{project.body}</p>
              </div>

              {/* Gallery grid */}
              {project.gallery.length > 1 && (
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {project.gallery.slice(1).map((src, i) => (
                    <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[var(--border)]">
                      <Image
                        src={src}
                        alt={`${project.name} — photo ${i + 2}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Videos */}
              {project.videos && project.videos.length > 0 && (
                <div className="mt-10 space-y-6">
                  <h2 className="font-[var(--font-fraunces)] text-2xl font-light text-[var(--text)]">Video walkthrough</h2>
                  {project.videos.map((url, i) => (
                    <YoutubeEmbed key={i} url={url} title={`${project.name} — video ${i + 1}`} />
                  ))}
                </div>
              )}
            </div>

            {/* Right: sidebar facts */}
            <div className="space-y-6">
              {/* Project facts */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Project details</h3>
                <dl className="mt-4 space-y-4">
                  <div>
                    <dt className="text-xs text-[var(--text-muted)]">Type</dt>
                    <dd className="mt-0.5 text-sm font-medium text-[var(--text)]">{project.type}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[var(--text-muted)]">Location</dt>
                    <dd className="mt-0.5 text-sm font-medium text-[var(--text)]">{project.area}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[var(--text-muted)]">Construction method</dt>
                    <dd className="mt-0.5 text-sm font-medium text-[var(--text)]">
                      <Link href={trackHref} className="text-[var(--accent)] hover:underline">{trackLabel}</Link>
                    </dd>
                  </div>
                  {project.status && (
                    <div>
                      <dt className="text-xs text-[var(--text-muted)]">Status</dt>
                      <dd className="mt-0.5 text-sm font-medium text-[var(--text)] capitalize">{project.status}</dd>
                    </div>
                  )}
                  {project.year && (
                    <div>
                      <dt className="text-xs text-[var(--text-muted)]">Year</dt>
                      <dd className="mt-0.5 text-sm font-medium text-[var(--text)]">{project.year}</dd>
                    </div>
                  )}
                </dl>

                {project.mapUrl && (
                  <a
                    href={project.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center gap-2 text-sm text-[var(--accent)] hover:underline"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    View on map
                  </a>
                )}
              </div>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Highlights</h3>
                  <ul className="mt-4 space-y-2">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Enquire CTA */}
              <div className="rounded-xl bg-[var(--charcoal)] p-6">
                <h3 className="font-[var(--font-fraunces)] text-lg font-light text-white">Like what you see?</h3>
                <p className="mt-2 text-sm text-white/60">Tell us about your project and we&apos;ll get back to you.</p>
                <Link
                  href="/contact"
                  className="mt-5 block rounded-lg bg-[var(--accent)] px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-dark)]"
                >
                  Enquire about your project
                </Link>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block rounded-lg border border-white/20 px-5 py-3 text-center text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  Or chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
