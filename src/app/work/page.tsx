"use client";

import { useState } from "react";
import { allProjects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

type Filter = "all" | "traditional" | "modern" | "interiors";

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Traditional", value: "traditional" },
  { label: "Modern", value: "modern" },
  { label: "Interiors", value: "interiors" },
];

export default function WorkPage() {
  const [active, setActive] = useState<Filter>("all");

  const projects = allProjects.filter((p) => {
    if (!p.published) return false;
    if (active === "all") return true;
    if (active === "interiors") return p.isInterior;
    return p.track === active;
  });

  return (
    <>
      <section className="bg-[var(--background)] pt-20 pb-6 lg:pt-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Portfolio</p>
          <h1 className="mt-3 font-[var(--font-fraunces)] text-4xl font-light text-[var(--text)] sm:text-5xl">
            Our work
          </h1>
          <p className="mt-4 max-w-xl text-[var(--text-muted)]">
            Seven projects completed or underway — traditional, modern, and interiors.
          </p>

          {/* Filter */}
          <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  active === f.value
                    ? "bg-[var(--charcoal)] text-white"
                    : "border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--charcoal)] hover:text-[var(--text)]"
                }`}
                aria-pressed={active === f.value}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--background)] py-12 pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {projects.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          ) : (
            <p className="py-20 text-center text-[var(--text-muted)]">
              No projects in this category yet — check back soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
