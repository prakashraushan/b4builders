"use client";

import { useState } from "react";
import Image from "next/image";

interface YoutubeEmbedProps {
  url: string;
  title?: string;
}

function getYoutubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

export default function YoutubeEmbed({ url, title = "Project video" }: YoutubeEmbedProps) {
  const [active, setActive] = useState(false);
  const videoId = getYoutubeId(url);

  if (!videoId) return null;

  if (active) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setActive(true)}
      className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-[var(--charcoal)]"
      aria-label={`Play video: ${title}`}
    >
      <Image
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        fill
        className="object-cover opacity-70 transition-opacity group-hover:opacity-80"
        sizes="(max-width: 1024px) 100vw, 65vw"
      />
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
        <svg className="h-6 w-6 translate-x-0.5 text-[var(--charcoal)]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
