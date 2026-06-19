import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { allProjects, getProjectBySlug } from "@/content/projects";
import YoutubeEmbed from "@/components/YoutubeEmbed";
import ProjectGallery from "@/components/ProjectGallery";
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

  const meta = [
    { label: "Type", value: project.type },
    { label: "Location", value: project.area },
    { label: "Method", value: trackLabel },
    ...(project.year ? [{ label: "Year", value: project.year }] : []),
    { label: "Status", value: project.status.charAt(0).toUpperCase() + project.status.slice(1) },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <div className="relative min-h-[72vh] w-full overflow-hidden bg-[var(--charcoal)]">
        {project.cover && (
          <Image
            src={project.cover}
            alt={project.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

        {/* Back */}
        <div className="absolute left-6 top-6 z-10 lg:left-10 lg:top-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All work
          </Link>
        </div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 lg:px-10 lg:pb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
            {project.type}
          </p>
          <h1 className="mt-3 font-[var(--font-fraunces)] text-5xl font-light text-white sm:text-6xl lg:text-7xl">
            {project.name}
          </h1>
          <p className="mt-2 text-base text-white/55">
            {project.area}{project.year ? ` · ${project.year}` : ""}
          </p>
        </div>
      </div>

      {/* ── Meta strip ── */}
      <div className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-10 gap-y-4 px-6 py-5 lg:px-10">
          {meta.map((item) => (
            <div key={item.label}>
              <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">{item.label}</p>
              <p className="mt-0.5 text-sm font-medium text-[var(--text)]">{item.value}</p>
            </div>
          ))}
          {project.mapUrl && (
            <a
              href={project.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 text-sm text-[var(--accent)] hover:underline"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              View on map
            </a>
          )}
        </div>
      </div>

      {/* ── Narrative + Highlights ── */}
      <section className="bg-[var(--background)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[3fr_1fr]">
            <p className="text-lg leading-relaxed text-[var(--text-muted)]">{project.body}</p>
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Highlights</p>
                <ul className="mt-4 space-y-3">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      {project.gallery.length > 0 && (
        <section className="bg-[var(--surface)] pb-20 pt-4 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Gallery</p>
            <ProjectGallery images={project.gallery} projectName={project.name} />
          </div>
        </section>
      )}

      {/* ── Videos ── */}
      {project.videos && project.videos.length > 0 && (
        <section className="bg-[var(--background)] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="font-[var(--font-fraunces)] text-2xl font-light text-[var(--text)]">
              Video walkthrough
            </h2>
            <div className="mt-8 space-y-6">
              {project.videos.map((url, i) => (
                <YoutubeEmbed key={i} url={url} title={`${project.name} — video ${i + 1}`} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-[var(--charcoal)] py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <h2 className="font-[var(--font-fraunces)] text-2xl font-light text-white sm:text-3xl">
            Like what you see?
          </h2>
          <p className="mt-3 text-white/65">Tell us about your project and we&apos;ll get back to you.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-[var(--accent)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-dark)]"
            >
              Enquire about your project
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-8 py-3.5 text-sm font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
