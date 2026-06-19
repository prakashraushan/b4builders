import Link from "next/link";
import Image from "next/image";
import { EMAIL, PHONE_DISPLAY, WHATSAPP_NUMBER, WHATSAPP_MESSAGE, ADDRESS_LINE1, ADDRESS_LINE2, socials } from "@/lib/data";

const quickLinks = [
  { label: "Work", href: "/work" },
  { label: "Traditional & Eco-Friendly", href: "/build/traditional" },
  { label: "Modern & Conventional", href: "/build/modern" },
  { label: "Interiors", href: "/interiors" },
  { label: "Cost guide", href: "/cost-guide" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--charcoal)] py-12" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="B4 Builders — home" className="flex items-center gap-2.5">
              <Image
                src="/brand/icon-b4.png"
                alt=""
                width={32}
                height={32}
                className="h-7 w-7"
              />
              <span className="font-[var(--font-fraunces)] text-lg font-medium tracking-tight text-white">
                B4 Builders
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              End-to-end construction and interiors in Bengaluru — in lime or concrete, design to handover.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/60">Quick links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/60">Contact</h3>
            <address className="mt-4 space-y-3 text-sm not-italic text-white/65">
              <p>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="transition-colors hover:text-white">
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p>
                <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-white">
                  {EMAIL}
                </a>
              </p>
              <p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#25D366]"
                >
                  WhatsApp us
                </a>
              </p>
              <p>{ADDRESS_LINE1}<br />{ADDRESS_LINE2}</p>
            </address>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/60">Start a project</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Tell us about your plot, brief, or idea — we&apos;ll take it from there.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-block rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-dark)]"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/40">
            &copy; {year} B4 Builders, Bengaluru. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-xs text-white/40 transition-colors hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
