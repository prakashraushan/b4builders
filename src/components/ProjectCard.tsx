import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const trackLabel =
    project.track === "traditional" ? "Traditional" : "Modern";

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--border)]">
        <Image
          src={project.cover}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-md bg-[var(--charcoal)]/80 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {trackLabel}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-[var(--text-muted)]">
          {project.type} · {project.area}
        </p>
        {project.highlights && project.highlights[0] && (
          <p className="mt-2 text-sm text-[var(--text-muted)] line-clamp-1">
            {project.highlights[0]}
          </p>
        )}
      </div>
    </Link>
  );
}
