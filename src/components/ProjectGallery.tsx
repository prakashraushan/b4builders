"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface Props {
  images: string[];
  projectName: string;
}

export default function ProjectGallery({ images, projectName }: Props) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i !== null ? Math.max(0, i - 1) : null)),
    []
  );
  const next = useCallback(
    () => setActive((i) => (i !== null ? Math.min(images.length - 1, i + 1) : null)),
    [images.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  return (
    <>
      {/* Grid — every 3rd image (0, 3, 6…) spans full width */}
      <div className="grid grid-cols-2 gap-3">
        {images.map((src, i) => {
          const full = i % 3 === 0;
          return (
            <button
              key={src}
              onClick={() => setActive(i)}
              aria-label={`Open photo ${i + 1}`}
              className={`group relative overflow-hidden rounded-xl bg-[var(--border)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                full ? "col-span-2 aspect-video" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={src}
                alt={`${projectName} — photo ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes={full ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                loading={i < 3 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              {/* Expand hint */}
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                </svg>
              </span>
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={close}
        >
          {/* Counter */}
          <p className="absolute left-6 top-6 z-10 text-sm tabular-nums text-white/50">
            {active + 1} <span className="text-white/25">/</span> {images.length}
          </p>

          {/* Close */}
          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative h-[90vh] w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active]}
              alt={`${projectName} — photo ${active + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Prev */}
          {active > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next */}
          {active < images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  );
}
