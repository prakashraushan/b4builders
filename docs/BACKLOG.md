# Backlog — post-launch

These are deferred intentionally. Do not build until after the site has launched and been reviewed.

## Content & copy
- Real testimonials (Prakash to collect from clients).
- Team photos and bios for Kaniska, Gaurav, Prakash.
- Mission/motto for the About page.
- Office address + optional map embed on Contact.
- Vaikunth: 10–15 photos, 1–2 YouTube links, short narrative.
- Cost-guide figures/ranges approved by Prakash before publish.
- Hero placeholder image (elegant architectural photo, not Vaikunth).
- Real social links (Instagram, Facebook, YouTube, LinkedIn).

## Features
- Blog / insights section (lime vs cement explainers, Madras Terrace articles, etc.) — high SEO value, defer until content ready.
- Standalone "How we work" page if the home strip proves too small.
- Real testimonials component (currently commented out on Home).

## Infrastructure
- Cloudinary image hosting once projects exceed ~50 (keeps the repo lean, auto-encodes on upload). The `next/image` component is already abstracted enough to make this a low-effort swap.
- Headless CMS (Sanity or similar) if non-technical team members need to add projects without git.

## Domains & redirects
- 301 redirect from **baserabuilders.com → b4builders.in** — set up after Prakash retires that Vercel project.
- Acquire **b4builders.com** when available, then 301 it to .in.

## Design
- Logo refinement (current logo is v1).
- Font upgrade: swap Geist for Switzer or Satoshi (Fontshare) for body/UI once comfortable with the codebase.
