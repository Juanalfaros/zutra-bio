# Zutrabio 🔗

> The most complete, SEO-first Link in Bio theme for Astro.

[![Astro](https://img.shields.io/badge/Astro-6.3-FF5D01?logo=astro)](https://astro.build)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages-F38020?logo=cloudflare)](https://pages.cloudflare.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Gumroad](https://img.shields.io/badge/Download-Gumroad-FF90E8?logo=gumroad)](https://zutra.gumroad.com/l/zutrabio)
[![Astro Themes](https://img.shields.io/badge/Astro-Themes-FF5D01?logo=astro)](https://astro.build/themes/author/2995)
[![Resources](https://img.shields.io/badge/Free-Resources-6c47ff)](https://zutra.cl/recursos)

---

## ✨ What is Zutrabio?

Zutrabio is a **production-ready Link in Bio theme** built with Astro 6. Drop in your profile, pick a theme, and deploy to Cloudflare Pages in minutes — all from a single config file. No framework knowledge required.

---

## 🎨 Three Visual Themes

| Theme | Description |
|---|---|
| **Minimal** | Clean, editorial, generous whitespace. Serif display font (DM Serif). |
| **Modern** | Glassmorphism, vivid purple accent, gradient backgrounds. |
| **Neobrutalist** | Bold 2px borders, flat color, raw energy. No gradients, no blur. |

All three themes support **light / dark / system** color mode with zero flash (FOUC-free inline script).

Users can switch themes and color mode live via the **floating theme switcher** — or you can lock it by setting `showThemeSwitcher: false` in the config.

Custom accent colors per theme are supported via `accentColors` in `site-config.ts`.

---

## 👤 Six Ready-to-Use Profiles

Swap the active profile with a single import in `site-config.ts`:

| Profile | Who it's for |
|---|---|
| `freelancer` | Designer / developer personal page |
| `creator` | Tech content creator, newsletter + YouTube |
| `musician` | Artist with Spotify embed, shows & merch |
| `founder` | Indie hacker building in public, SaaS |
| `professional` | Corporate — timeline, credentials, mentoring |
| `localbusiness` | Café / restaurant — menu, delivery, reservations |

Each profile is a standalone `.ts` file in `src/profiles/`. Create your own by duplicating any of them.

---

## 🔗 50+ Supported Platforms

**Social** — Instagram, TikTok, X, Bluesky, Threads, Mastodon, Facebook, Pinterest, Snapchat, LinkedIn, XING

**Messaging** — WhatsApp, Telegram, Signal, Discord, Slack, LINE, WeChat

**Content** — YouTube, Twitch, Vimeo, Spotify, SoundCloud, Bandcamp, Apple Music, Podcast, Substack, Medium, Dev.to, Hashnode, Ghost, WordPress

**Code** — GitHub, GitLab, Bitbucket, npm, Figma, Dribbble, Behance, Read.cv

**Monetization** — Ko-fi, Buy Me a Coffee, Patreon, PayPal, MercadoPago, Stripe, GitHub Sponsors, Gumroad, Etsy, Shopify, Lemon Squeezy

**Booking** — Calendly, Cal.com, Acuity, TidyCal

**Local business** — WhatsApp ordering, table reservation, menu, Rappi, iFood delivery

**Other** — App Store, Google Play, Ticketing, Email, Phone, Book

---

## 📦 Rich Content Blocks

- **Link cards** — with icon, description, highlight state, half/full width
- **Text blocks** — card, announcement, or bento style
- **Rich media** — YouTube, Vimeo, Spotify track/album/playlist, SoundCloud, PDF
- **Newsletter** — inline subscribe form (Beehiiv, Substack, Mailchimp, ConvertKit…)
- **Social proof** — stats grid, testimonial, client logo wall, badges, awards
- **Timeline** — experience / education with icons and dates
- **Pricing cards** — half or full width, feature list, CTA
- **Utility widgets** — live clock (timezone-aware), map link, QR code, coupon code (copy), vCard download
- **Section headers** and **dividers** (line, dots, fade)

---

## 🔍 Full SEO Stack

- `<title>`, `<meta description>`, keywords, canonical
- **Open Graph** — og:title, og:image, og:type, og:locale, og:site_name
- **Twitter/X Cards** — `summary_large_image`
- **Schema.org JSON-LD** — `ProfilePage` + `Person` or `Organization`
- **GEO meta tags** — `geo.region`, `geo.placename`, `ICBM`
- **hreflang** alternate language links
- **Mastodon / Fediverse** `rel="me"` verification
- Auto-generated **sitemap** via `@astrojs/sitemap`
- Configurable `robots.txt`

---

## 📈 Analytics (all optional)

| Provider | Config key |
|---|---|
| Google Tag Manager | `analytics.gtmId` |
| Cloudflare Web Analytics | `analytics.cloudflareBeacon` |
| Umami | `analytics.umamiWebsiteId` |
| Plausible | `analytics.plausibleDomain` |
| Fathom | `analytics.fathomSiteId` |

---

## ✅ Before You Publish — Checklist

Replace every placeholder value before going live:

| What | Where | Default (replace this) |
|---|---|---|
| Your name & handle | `identity.name` / `identity.handle` | `"Jane Doe"` / `"@janedoe"` |
| Avatar & banner | `identity.avatar` / `identity.banner` | Unsplash/Pravatar URLs |
| Site URL | `siteUrl` | `"https://janedoe.com"` |
| SEO title & description | `seo.title` / `seo.description` | Jane Doe defaults |
| OG image | `openGraph.image` → `public/og/` | Placeholder SVG |
| Favicon | `public/favicon.svg` | Generic "Z" icon |
| Web manifest | `public/site.webmanifest` | `"My Link in Bio"` |
| Twitter/schema handles | `twitter.creator` / `schema.person.sameAs` | `@janedoe` |
| Floating CTA | `floatingCta.href` | `mailto:hello@yourdomain.com` |

> **Tip:** Run `pnpm build` and check the browser console for any 404s before deploying.

---

## 🚀 Getting Started

```bash
# 1. Clone
git clone https://github.com/YOUR_USERNAME/zutrabio.git my-site
cd my-site

# 2. Install
pnpm install   # or npm install

# 3. Start dev server
pnpm dev

# 4. Edit your config
# → src/site-config.ts  (identity, theme, SEO, analytics)
# → src/profiles/       (your links and content blocks)

# 5. Build
pnpm build
```

---

## ⚙️ Configuration

Everything lives in **`src/site-config.ts`**. The file is organized in clearly commented sections:

```ts
// ── Change the active profile ─────────────────────────
export { pageItems } from "./profiles/freelancer";
// Options: freelancer | creator | musician | founder | professional | localbusiness

export const siteConfig: SiteConfig = {

  // Who this page belongs to
  identity: {
    name: "Jane Doe",
    handle: "@janedoe",
    bio: "Designer & developer",
    avatar: "https://...",
    banner: "https://...",        // full-width hero image
    location: "Santiago, Chile",
    timezone: "America/Santiago",
  },

  siteUrl: "https://janedoe.com",

  // Top promotional banner
  promo: {
    enabled: true,
    message: "✨ Check out my new course!",
    cta: { label: "Learn more", url: "https://..." },
    dismissible: true,
  },

  // Visual theme
  theme: {
    default: "modern",            // "minimal" | "modern" | "neobrutalist"
    colorMode: "system",          // "light" | "dark" | "system"
    accentColors: {
      modern: "#6c47ff",          // override per-theme accent
    },
    showThemeSwitcher: true,      // false = lock the design
  },

  // Analytics, SEO, Schema, GEO, features, footer…
};
```

### Adding a custom link

```ts
// src/profiles/freelancer.ts  (or any profile)
import type { PageItem, LinkItem } from "@/types/config";

export const pageItems: PageItem[] = [
  {
    type: "link",
    platform: "github",
    label: "My GitHub",
    url: "https://github.com/yourname",
    description: "Open-source projects",
    enabled: true,
  },
  // half-width links sit side by side:
  { type: "link", platform: "x",       url: "...", enabled: true, width: "half" },
  { type: "link", platform: "bluesky", url: "...", enabled: true, width: "half" },
];
```

---

## 📁 Project Structure

```
zutrabio/
├── src/
│   ├── site-config.ts            ← The only file you need to edit
│   ├── profiles/                 ← One file per persona
│   │   ├── freelancer.ts
│   │   ├── creator.ts
│   │   ├── musician.ts
│   │   ├── founder.ts
│   │   ├── professional.ts
│   │   └── localbusiness.ts
│   ├── types/
│   │   └── config.ts             ← TypeScript types (all item types)
│   ├── layouts/
│   │   └── BaseLayout.astro      ← Full SEO <head>
│   ├── pages/
│   │   ├── index.astro           ← Main page
│   │   ├── changelog.astro       ← Release history
│   │   └── robots.txt.ts         ← Dynamic robots.txt
│   ├── components/
│   │   ├── seo/
│   │   │   ├── SchemaOrg.astro   ← JSON-LD structured data
│   │   │   └── Analytics.astro   ← All analytics providers
│   │   ├── themes/
│   │   │   ├── ThemeScript.astro ← Anti-FOUC inline script
│   │   │   └── FloatingThemeSwitcher.astro ← Live theme/mode switcher
│   │   ├── cards/
│   │   │   ├── LinkCard.astro
│   │   │   ├── SectionHeader.astro
│   │   │   ├── DividerItem.astro
│   │   │   ├── TextBlock.astro
│   │   │   ├── RichMediaCard.astro
│   │   │   ├── SocialProofCard.astro
│   │   │   ├── PriceCard.astro
│   │   │   ├── TimelineCard.astro
│   │   │   ├── NewsletterInline.astro
│   │   │   └── UtilityCard.astro
│   │   └── ui/
│   │       ├── TopBanner.astro   ← Dismissible promo bar
│   │       ├── ProfileHeader.astro
│   │       ├── PageRenderer.astro
│   │       ├── FloatingAction.astro
│   │       └── Footer.astro
│   ├── utils/
│   │   └── platforms.ts          ← 50+ platform metadata (icon, color, label)
│   └── styles/
│       └── global.css            ← 3 themes × 2 modes, all custom properties
├── public/
│   ├── og/                       ← OG images
│   └── site.webmanifest
├── astro.config.ts
├── wrangler.toml                 ← Cloudflare Pages + security headers
└── tsconfig.json
```

---

## 🌐 Deploy to Cloudflare Pages (free)

1. Push your repo to GitHub
2. Open [Cloudflare Dashboard](https://dash.cloudflare.com) → **Pages** → **Create project**
3. Connect your GitHub repo
4. Build settings:
   - **Build command**: `pnpm build`
   - **Output directory**: `dist`
   - **Node version**: `20`
5. Click **Deploy** — your site is live.

Security headers (CSP, HSTS, X-Frame-Options…) are pre-configured in `wrangler.toml`.

---

## 📄 License

MIT — free to use, modify, and distribute.

---

---

## 🛠 More from Zutra

| | |
|---|---|
| 🎁 **Free Resources** | Guides, templates & tools for creators → [zutra.cl/recursos](https://zutra.cl/recursos) |
| 🚀 **Astro Themes** | Browse all our Astro themes → [astro.build/themes/author/2995](https://astro.build/themes/author/2995) |
| 💜 **Get Zutrabio** | Download the full theme on Gumroad → [zutra.gumroad.com/l/zutrabio](https://zutra.gumroad.com/l/zutrabio) |

---

> Built with [Astro](https://astro.build) · Deployed on [Cloudflare Pages](https://pages.cloudflare.com) · [Free Resources](https://zutra.cl/recursos) · [More Themes](https://astro.build/themes/author/2995)
