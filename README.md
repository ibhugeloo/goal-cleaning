# Goal Cleaning

Site vitrine pour **Goal Cleaning** — service de lavage et detailing automobile premium à Saint-Denis, La Réunion.

**URL de production :** [https://www.goalcleaning.re](https://www.goalcleaning.re)

---

## Stack technique

| Technologie | Rôle |
|---|---|
| [Next.js 16](https://nextjs.org/) App Router | Framework — rendu statique + server actions |
| [React 19](https://react.dev/) | UI |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styles via CSS variables |
| [shadcn/ui](https://ui.shadcn.com/) (new-york) | Composants UI primitifs |
| [Cal.com Embed](https://cal.com/docs/embed) | Prise de rendez-vous intégrée |
| [Resend](https://resend.com/) | Envoi d'emails (formulaire de contact) |
| TypeScript | Typage statique |

---

## Direction artistique

Palette **Deep Green × Butter Yellow** — Premium & Clean.

| Token | Valeur | Usage |
|---|---|---|
| Deep Green | `#003631` | Fond principal, arrière-plans |
| Butter Yellow | `#FFEDA8` | Textes, CTAs, accents |
| Vert sombre | `#002e29` | Sections alternées |
| Noir | `#0D0D0D` | Footer uniquement |

Typographies : **Bricolage Grotesque** (`font-display`) pour les titres, **DM Sans** pour le corps.

---

## Structure du projet

```
app/
├── page.tsx                  # Page d'accueil — assemble toutes les sections
├── layout.tsx                # Layout global (Navbar + Footer + fonts)
├── globals.css               # Variables CSS (design tokens)
├── contact/
│   ├── page.tsx
│   ├── ContactForm.tsx       # Formulaire client
│   └── actions.ts            # Server action Resend
├── gallery/
│   └── page.tsx              # Page galerie
├── sitemap.ts                # Sitemap dynamique
├── robots.ts                 # robots.txt
├── cgv/
├── mentions-legales/
└── politique-confidentialite/

components/
├── layout/
│   ├── Navbar.tsx            # Navigation fixe (deep green + butter yellow)
│   └── Footer.tsx            # Footer noir
├── sections/                 # Une section = un fichier
│   ├── Hero.tsx
│   ├── SocialProof.tsx
│   ├── Benefits.tsx
│   ├── Process.tsx
│   ├── Gallery.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   └── FAQ.tsx
├── gallery/
│   └── GalleryGrid.tsx       # Grille avec useSearchParams (Suspense requis)
└── ui/
    ├── cal-button.tsx        # Bouton Cal.com (popup RDV)
    ├── animate-in-view.tsx   # Animation scroll-triggered
    ├── border-beam.tsx       # Effet bordure animée
    └── ...                   # Composants shadcn/ui

public/
└── images/
    ├── hero-bg.jpg
    └── gallery/
        └── gallery-1..6.jpg
```

---

## Démarrage local

```bash
# Installation
npm install

# Dev (hot reload)
npm run dev        # → http://localhost:3000

# Build production
npm run build

# Lint
npm run lint

# Type-check
npx tsc --noEmit
```

### Variables d'environnement

Créer un fichier `.env.local` :

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=contact@goalcleaning.re
```

---

## Déploiement (Coolify)

Le projet se déploie via **Nixpacks** sur Coolify (self-hosted).

| Paramètre | Valeur |
|---|---|
| Build Command | `npm run build` |
| Start Command | `npm run start` |
| Port | `3000` |

> ⚠️ Ne pas définir `NODE_ENV=production` dans les variables d'environnement Coolify : Nixpacks l'injecte déjà et définit `NPM_CONFIG_PRODUCTION=false` pour installer les devDependencies correctement.

---

## Intégrations

### Cal.com
Le composant `CalButton` ouvre une popup de réservation Cal.com.
Les liens de calendrier sont définis dans `components/ui/cal-button.tsx` :

```ts
export const CAL_GENERIC   = "YOUR_CAL_USERNAME/rdv"
export const CAL_COMPLET   = "YOUR_CAL_USERNAME/rdv-complet"
export const CAL_INTERIEUR = "YOUR_CAL_USERNAME/rdv-interieur"
export const CAL_EXTERIEUR = "YOUR_CAL_USERNAME/rdv-exterieur"
```

Remplacer `YOUR_CAL_USERNAME` après création du compte Cal.com.

### Resend
Le formulaire de contact (`app/contact/actions.ts`) envoie les emails via Resend.
Nécessite `RESEND_API_KEY` dans les variables d'environnement.

---

## SEO

- **JSON-LD** LocalBusiness schema dans `app/page.tsx`
- **Sitemap** dynamique via `app/sitemap.ts`
- **robots.txt** via `app/robots.ts`
- Locale : `fr-RE` (La Réunion)
- Canonical : `https://www.goalcleaning.re`
