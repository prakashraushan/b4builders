"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/data";

const buildLinks = [
  { label: "Traditional & Eco-Friendly", href: "/build/traditional" },
  { label: "Modern & Conventional", href: "/build/modern" },
  { label: "Interiors", href: "/interiors" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [buildOpen, setBuildOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" aria-label="B4 Builders — home" className="shrink-0">
          <Image
            src="/brand/logo-b4.png"
            alt="B4 Builders"
            width={100}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          <Link
            href="/work"
            className={`text-sm font-medium transition-colors ${
              isActive("/work") ? "text-[var(--accent)]" : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            Work
          </Link>

          {/* What we build dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setBuildOpen(true)}
            onMouseLeave={() => setBuildOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                pathname.startsWith("/build") || pathname === "/interiors"
                  ? "text-[var(--accent)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text)]"
              }`}
              aria-haspopup="true"
              aria-expanded={buildOpen}
            >
              What we build
              <svg
                className={`h-3.5 w-3.5 transition-transform ${buildOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {buildOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-xl border border-[var(--border)] bg-[var(--surface)] py-1 shadow-lg">
                {buildLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      isActive(link.href)
                        ? "text-[var(--accent)]"
                        : "text-[var(--text-muted)] hover:bg-[var(--background)] hover:text-[var(--text)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/cost-guide"
            className={`text-sm font-medium transition-colors ${
              isActive("/cost-guide") ? "text-[var(--accent)]" : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            Cost guide
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors ${
              isActive("/about") ? "text-[var(--accent)]" : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors ${
              isActive("/contact") ? "text-[var(--accent)]" : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-dark)] sm:inline-block"
          >
            Start your project
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-[var(--text)] transition-colors hover:bg-[var(--border)] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-[var(--border)] bg-[var(--surface)] lg:hidden">
          <div className="mx-auto max-w-7xl divide-y divide-[var(--border)] px-4">
            <Link href="/work" onClick={() => setOpen(false)} className="block py-3.5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)]">Work</Link>
            <div className="py-3.5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">What we build</p>
              {buildLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text)]">
                  {link.label}
                </Link>
              ))}
            </div>
            <Link href="/cost-guide" onClick={() => setOpen(false)} className="block py-3.5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)]">Cost guide</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="block py-3.5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)]">About</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="block py-3.5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)]">Contact</Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block py-4 text-sm font-semibold text-[var(--accent)]"
            >
              Start your project →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
