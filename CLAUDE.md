# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
npx tsc --noEmit # Type-check without emitting
```

## Architecture

**Next.js 15 App Router** — fully static landing site + contact form with server action.

### Page structure
- `app/page.tsx` — homepage, assembles all section components in order
- `app/contact/` — contact page with `ContactForm.tsx` (client) + `actions.ts` (server action using Resend)
- `app/gallery/` — gallery page
- Legal pages: `/cgv`, `/mentions-legales`, `/politique-confidentialite`

### Component layers
```
components/layout/   — Navbar, Footer (present on all pages via app/layout.tsx)
components/sections/ — One file per homepage section (Hero, Benefits, Process, Gallery, Pricing, Testimonials, FAQ, SocialProof)
components/ui/       — Reusable primitives (shadcn/ui + custom)
```

### Key custom UI components
- `components/ui/cal-button.tsx` — Cal.com booking button. Exports `CalButton` component and 4 link constants (`CAL_GENERIC`, `CAL_COMPLET`, `CAL_INTERIEUR`, `CAL_EXTERIEUR`). The `YOUR_CAL_USERNAME` placeholder must be replaced after Cal.com account creation.
- `components/ui/animate-in-view.tsx` — Scroll-triggered fade/slide animation, used in every section with a `delay` prop.
- `components/ui/border-beam.tsx` — Animated border stroke used on hover in Navbar CTA.

### Styling
- **Tailwind CSS v4** with CSS variables defined in `app/globals.css`.
- Primary color: Forest Green `oklch(0.42 0.13 160)` (`#006341`). Background: Ivory.
- Fonts: Bricolage Grotesque (`font-display`) for headings, DM Sans for body — loaded via `next/font` in `app/layout.tsx`.
- shadcn/ui "new-york" style; add components with `npx shadcn@latest add <component>`.
- Class merging: always use `cn()` from `lib/utils.ts`.

### External services
- **Cal.com** (`@calcom/embed-react`) — booking popup, namespace `"rdv"`, brand color `#006341`.
- **Resend** — contact form emails via server action in `app/contact/actions.ts`. Requires `RESEND_API_KEY` env var; recipient defaults to `contact@goalcleaning.re` via `CONTACT_EMAIL`.

### SEO / metadata
- JSON-LD Local Business schema lives in `app/page.tsx`.
- `app/sitemap.ts` and `app/robots.ts` generate sitemap/robots dynamically.
- Site locale: `fr-RE` (Réunion Island). Business URL: `https://www.goalcleaning.re`.
