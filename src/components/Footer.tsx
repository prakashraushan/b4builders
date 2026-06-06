import Link from "next/link";
import Image from "next/image";
import { EMAIL, PHONE_DISPLAY, WHATSAPP_NUMBER, WHATSAPP_MESSAGE, ADDRESS_LINE1 } from "@/lib/data";

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
            <Link href="/" aria-label="B4 Builders — home">
              <Image
                src="/brand/logo-b4.png"
                alt="B4 Builders"
                width={100}
                height={40}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              End-to-end construction and interiors in Bengaluru — in lime or concrete, design to handover.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">Quick links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">Contact</h3>
            <address className="mt-4 space-y-3 text-sm not-italic text-white/50">
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
              <p>{ADDRESS_LINE1}</p>
            </address>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">Start a project</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
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

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/25">
          &copy; {year} B4 Builders, Bengaluru. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
