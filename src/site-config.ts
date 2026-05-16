import type { SiteConfig } from "./types/config";

// ─────────────────────────────────────────────────────────────────────────────
// PROFILE — change the active profile here
// Options: freelancer | creator | musician | founder | professional | localbusiness
// ─────────────────────────────────────────────────────────────────────────────
export { pageItems } from "./profiles/freelancer";

// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────────────────────────────────────
export const siteConfig: SiteConfig = {

  // ── Identity ────────────────────────────────────────────────────────────────
  // Who this page belongs to. Used in the profile header, SEO, and schema.org.
  identity: {
    type: "person",                    // "person" | "organization"
    name: "Jane Doe",
    handle: "@janedoe",
    bio: "Designer, developer & coffee enthusiast ☕",
    bioExtended: "",                   // Optional second line shown below the main bio
    avatar: "https://i.pravatar.cc/192?img=47",
    avatarAlt: "Photo of Jane Doe",
    banner: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    location: "Santiago, Chile 🇨🇱",
    pronouns: "she/her",
    timezone: "America/Santiago",
    verificationLinks: [],             // Mastodon / Fediverse rel="me" URLs
  },

  // ── Site URL ─────────────────────────────────────────────────────────────────
  siteUrl: "https://janedoe.com",

  // ── Promo Banner ─────────────────────────────────────────────────────────────
  // Top-of-page announcement strip. Set enabled: false to hide it completely.
  promo: {
    enabled: true,
    message: "✨ Built with Zutrabio — the link-in-bio Astro theme.",
    cta: {
      label: "Get it free →",
      url:   "https://zutra.gumroad.com/l/zutrabio",
    },
    dismissible: true,                 // Let visitors close the banner
  },

  // ── Theme ────────────────────────────────────────────────────────────────────
  // Controls the visual appearance of the page.
  theme: {
    // Starting theme. Visitors can change it via the floating switcher.
    // Options: "minimal" | "modern" | "neobrutalist"
    default: "modern",

    // Starting color mode. Visitors can also toggle it.
    // Options: "light" | "dark" | "system" (follows OS preference)
    colorMode: "system",

    // Override the accent color for any theme.
    // Leave a theme key out (or set "") to keep its built-in default.
    // Hex colors only: "#rrggbb"
    accentColors: {
      // minimal:      "#18181b",   // default: near-black
      // modern:       "#6c47ff",   // default: vivid purple
      // neobrutalist: "#ff6b35",   // default: orange
    },

    // Show the floating theme / color-mode switcher in the bottom-left corner.
    // Set to false to lock the design — useful once you've chosen a final look.
    showThemeSwitcher: true,
  },

  // ── Analytics ────────────────────────────────────────────────────────────────
  // Leave values empty ("") to disable a provider.
  analytics: {
    gtmId:           "",              // Google Tag Manager  e.g. "GTM-XXXXXXX"
    cloudflareBeacon:"",              // Cloudflare Web Analytics token
    umamiWebsiteId:  "",              // Umami website ID
    umamiSrc:        "https://analytics.umami.is/script.js",
    plausibleDomain: "",              // e.g. "janedoe.com"
    plausibleSrc:    "https://plausible.io/js/script.js",
    fathomSiteId:    "",              // e.g. "ABCDEFGH"
  },

  // ── SEO ──────────────────────────────────────────────────────────────────────
  seo: {
    title:         "Jane Doe — Designer & Developer",
    titleTemplate: "%s | Jane Doe",
    description:   "Designer, developer & coffee enthusiast based in Santiago, Chile.",
    keywords:      ["designer", "developer", "chile", "jane doe"],
    canonical:     "",                // Override canonical URL (leave empty to auto-generate)
    robots:        "index, follow",
    excludeFromSitemap: [],
    alternateLanguages: [],           // [{ lang: "es", url: "https://..." }]
  },

  // ── Open Graph ───────────────────────────────────────────────────────────────
  openGraph: {
    image:       "/og/og-default.svg",
    imageWidth:  1200,
    imageHeight: 630,
    imageAlt:    "Jane Doe — Designer & Developer",
    locale:      "en_US",
    type:        "profile",
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────────────
  twitter: {
    card:    "summary_large_image",
    creator: "@janedoe",
    site:    "@janedoe",
  },

  // ── Schema.org ───────────────────────────────────────────────────────────────
  // Structured data for search engines. Fill in what's relevant to you.
  schema: {
    enabled: true,
    person: {
      name:       "",
      jobTitle:   "Designer & Developer",
      worksFor:   "",
      knowsAbout: ["Web Design", "Front-end Development", "UX"],
      alumniOf:   "",
      award:      "",
      sameAs: [
        "https://twitter.com/janedoe",
        "https://github.com/janedoe",
        "https://linkedin.com/in/janedoe",
      ],
    },
    organization: {
      legalName:         "",
      foundingDate:      "",
      numberOfEmployees: 0,
      logo:              "",
      sameAs:            [],
    },
  },

  // ── Geo Meta ─────────────────────────────────────────────────────────────────
  // Only needed for local businesses / physical locations.
  geo: {
    enabled:   false,
    region:    "CL-RM",
    placename: "Santiago, Chile",
    latitude:  -33.4489,
    longitude: -70.6693,
    icbm:      "-33.4489, -70.6693",
  },

  // ── Features ─────────────────────────────────────────────────────────────────
  features: {
    showPoweredBy:  true,   // "Powered by Zutrabio" in the footer
    showLastUpdated: true,  // Last-updated timestamp in the footer
    showLinkCount:  false,  // Badge showing total number of links
    animateCards:   true,   // Fade-in animation on cards
    avatarRing:     true,   // Accent ring around the avatar
    skeletonLoading: true,  // Skeleton placeholders while media loads
    showCopyLink:   true,   // Copy-profile-URL button in the header
  },

  // ── Footer ───────────────────────────────────────────────────────────────────
  footer: {
    copyright: "",          // e.g. "© 2025 Jane Doe. All rights reserved."
    links: [],              // [{ label: "Privacy", href: "/privacy" }]
  },

  // ── Exit-Intent Popup ────────────────────────────────────────────────────────
  // Modal that appears when the cursor leaves the browser window (before closing).
  // Armed after `armDelay` ms so it doesn't fire immediately on page load.
  // Set enabled: false to disable.
  exitIntent: {
    enabled: true,
    armDelay: 3000,
    bgImage: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f664?w=1200&q=80",
    title: "Before you go…",
    subtitle: "Zutrabio is free and open-source. If you like it, check out our other Astro themes and free resources for creators.",
    cta: {
      label: "Browse Free Resources →",
      url:   "https://zutra.agency/recursos",
    },
    secondaryCta: {
      label: "More Astro Themes",
      url:   "https://astro.build/themes/author/2995",
    },
  },

  // ── Slide-In Card ─────────────────────────────────────────────────────────────
  // Small toast-style card that slides in from the bottom corner after `delay` ms.
  // Set enabled: false to disable.
  slideInCard: {
    enabled: true,
    delay:   7000,
    side:    "right",
    message: "Like what you see? We have other projects you might love. ✨",
    cta: {
      label: "See them here",
      url:   "https://astro.build/themes/author/2995",
    },
  },

  // ── Floating CTA Button ───────────────────────────────────────────────────────
  // Fixed action button in the bottom-right corner — great for WhatsApp, booking, etc.
  // Set enabled: false to hide it completely.
  floatingCta: {
    enabled: true,
    label:   "Let's Talk",
    icon:    "lucide:message-circle",
    href:    "mailto:hello@yourdomain.com",
  },
};
