import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, PHONE_DISPLAY, EMAIL, WHATSAPP_NUMBER, WHATSAPP_MESSAGE, ADDRESS_LINE1, ADDRESS_LINE2 } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Start your project",
  description:
    "Tell us about your construction or interiors project in Bangalore. We respond within 24 hours.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact B4 Builders | Start your project",
    description: "Tell us about your construction or interiors project in Bangalore.",
    url: `${SITE_URL}/contact`,
  },
};

const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

const projectTypes = [
  "Traditional & Eco-Friendly construction",
  "Modern & Conventional construction",
  "Interiors",
  "Not sure yet",
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[var(--background)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Contact</p>
          <h1 className="mt-4 font-[var(--font-fraunces)] text-4xl font-light text-[var(--text)] sm:text-5xl">
            Tell us about<br />your project.
          </h1>
          <p className="mt-4 max-w-xl text-[var(--text-muted)]">
            Whether you have a plot, a brief, or just an idea — share it and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">

            {/* Left: contact details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-base font-semibold text-[var(--text)]">Reach us directly</h2>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  Available Monday to Saturday, 9 AM – 6 PM.
                </p>
              </div>

              <address className="not-italic space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--border)]">
                    <svg className="h-5 w-5 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-muted)]">Phone</p>
                    <a href={`tel:+${WHATSAPP_NUMBER}`} className="mt-0.5 block text-sm text-[var(--text)] hover:text-[var(--accent)]">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--border)]">
                    <svg className="h-5 w-5 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-muted)]">Email</p>
                    <a href={`mailto:${EMAIL}`} className="mt-0.5 block text-sm text-[var(--text)] hover:text-[var(--accent)]">
                      {EMAIL}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/10">
                    <svg viewBox="0 0 32 32" className="h-5 w-5 text-[#25D366]" fill="currentColor" aria-hidden="true">
                      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.742 5.486 2.035 7.788L0 32l8.418-2.01A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.27 19.518c-.398-.199-2.352-1.16-2.717-1.292-.364-.133-.63-.199-.895.199-.265.398-1.028 1.292-1.26 1.558-.232.265-.464.298-.862.1-.398-.2-1.682-.62-3.203-1.976-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.2-.232.266-.398.398-.663.133-.265.067-.497-.033-.696-.1-.199-.895-2.157-1.227-2.952-.322-.775-.65-.67-.895-.682l-.762-.013c-.265 0-.696.1-1.061.497-.364.398-1.393 1.36-1.393 3.317s1.426 3.847 1.625 4.112c.199.265 2.806 4.285 6.798 6.01.95.41 1.692.655 2.27.839.953.304 1.822.261 2.508.158.765-.114 2.352-.961 2.684-1.889.332-.928.332-1.724.232-1.889-.1-.166-.364-.265-.762-.464z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-muted)]">WhatsApp</p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 block text-sm text-[var(--text)] hover:text-[#25D366]"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--border)]">
                    <svg className="h-5 w-5 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-muted)]">Office</p>
                    <p className="mt-0.5 text-sm text-[var(--text)]">{ADDRESS_LINE1}</p>
                    <p className="text-sm text-[var(--text)]">{ADDRESS_LINE2}</p>
                  </div>
                </div>
              </address>
            </div>

            {/* Right: form */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8">
              <h2 className="font-[var(--font-fraunces)] text-xl font-light text-[var(--text)]">Send an enquiry</h2>
              <p className="mt-1 text-sm text-[var(--text-muted)]">We respond within 24 hours.</p>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="mt-6 space-y-5"
                aria-label="Project enquiry form"
              >
                <input type="hidden" name="access_key" value={web3FormsKey} />
                <input type="hidden" name="redirect" value={`${SITE_URL}/thank-you`} />
                <input type="hidden" name="subject" value="New enquiry from b4builders.in" />
                <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />

                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--text)]">
                    Full name <span aria-hidden="true" className="text-[var(--accent)]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[var(--text)]">
                      Phone <span aria-hidden="true" className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      autoComplete="tel"
                      placeholder="+91 90000 00000"
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--text)]">
                      Email <span aria-hidden="true" className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="project_type" className="mb-1.5 block text-sm font-medium text-[var(--text)]">
                    Project type <span aria-hidden="true" className="text-[var(--accent)]">*</span>
                  </label>
                  <select
                    id="project_type"
                    name="project_type"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                  >
                    <option value="" disabled>Select a type</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="mb-1.5 block text-sm font-medium text-[var(--text)]">
                    Project location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="e.g. Sarjapur Road, Bangalore"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--text)]">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Plot size, brief, timeline, budget — anything that's useful context..."
                    className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-dark)]"
                >
                  Send enquiry
                </button>
                <p className="text-center text-xs text-[var(--text-muted)]">
                  We respond within 24 hours — Mon–Sat, 9 AM–6 PM.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
