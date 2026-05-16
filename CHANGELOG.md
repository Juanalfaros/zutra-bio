# Changelog

All notable changes to Zutrabio are documented here.
Follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and [Semantic Versioning](https://semver.org/).

---

## [1.1.1] — 2026-05-16

### Fixed
- Deprecated `scrolling="no"` attribute removed from iframe in `LeadGenCard.astro`.
- Missing `is:inline` directive added to analytics and schema scripts (`Analytics.astro`, `SchemaOrg.astro`) to fix Astro compilation warnings.
- Unused `LeadGenItem` import removed from `freelancer.ts` profile.

---

## [1.1.0] — 2026-05-12

### Added
- **Top promotional banner** (`TopBanner.astro`) — dismissible strip at the top of the page, fully configurable from `site-config.ts` via the new `promo` section. Stores dismiss state in `localStorage`.
- **Floating theme switcher** (`FloatingThemeSwitcher.astro`) — replaces the old inline header toggle. Bottom-left pill on desktop, top-right icon-only on mobile. Panel includes light/dark/auto buttons and theme swatches with live preview.
- **Custom accent colors per theme** — new `theme.accentColors` config object accepts a hex color per theme preset. Luminance is computed automatically to set the correct foreground (black/white). Applied without FOUC via `ThemeScript`.
- **Six ready-to-use profiles** in `src/profiles/`: `freelancer`, `creator`, `musician`, `founder`, `professional`, `localbusiness`. Swap the active one with a single import line in `site-config.ts`.
- **Semantic platform entries** for local businesses: `order-whatsapp`, `reservation`, `menu-link`, `delivery-rappi`, `delivery-ifood`, `ticketing`, `book` — each with brand-accurate icon and color.
- **`showThemeSwitcher`** config flag — set to `false` to lock the design and hide the switcher (useful for production deployments).
- **`theme.colorMode`** config flag — set default color mode to `"light"`, `"dark"`, or `"system"`.
- **Changelog page** at `/changelog`.

### Changed
- **Theme "tech" renamed to "modern"** — redesigned with glassmorphism, vivid purple accent (`#6c47ff`), gradient background, and Outfit font. Dark variant uses deep purple with glass cards.
- **`site-config.ts` reorganized** — every field now has an inline comment explaining its purpose. Sections are clearly separated with banners. Any user can edit it without reading the docs.
- **`theme.showThemeToggle` → `theme.showThemeSwitcher`** — field renamed for clarity.
- **`theme.accentColor: string` → `theme.accentColors: Partial<Record<ThemePreset, string>>`** — now per-theme instead of global.
- **`promo`** added as a top-level field in `SiteConfig`.
- Banner image is now full-width behind the profile header. Avatar lifts out of the banner with a negative margin.
- All hover states wrapped in `@media (hover: hover) and (pointer: fine)` — no sticky-hover artifacts on touch/mobile.
- Highlight link cards (`highlight: true`) now correctly retain accent background on hover across all themes, including the glassmorphism modern theme override.

### Fixed
- `[data-theme="modern"].dark` selectors had no effect — `ThemeScript` sets `data-color-mode` attribute, not a `.dark` class. All dark overrides updated to `:where(.dark, [data-color-mode="dark"])`.
- Emoji icon detection used `icon.length <= 2` which failed with multi-codepoint emoji (e.g. `"🎟️"` has length 3 due to variation selector U+FE0F). Replaced with `icon.includes(":")` — completely reliable.
- `--accent-rgb` CSS variable was referenced in the newsletter focus ring but never defined → replaced with `var(--border-hover)`.
- Social proof logo/badge images loaded from `cdn.simpleicons.org` and Clearbit were broken. Replaced with `astro-icon` `<Icon>` components using `simple-icons:*` names.
- Invalid icon names corrected: `simple-icons:amazonaws` → `simple-icons:amazonwebservices`, `lucide:code-2` → `lucide:code`, `simple-icons:readcv` → `simple-icons:readdotcv`, `simple-icons:mirror` → `lucide:globe`, `simple-icons:teachable` → `simple-icons:coursera`.
- `platform: "applemusic"` → `platform: "apple-music"` (TypeScript error).
- Clock utility layout broken — restructured HTML and CSS using `justify-content: space-between` and a left-group wrapper.
- Map/vCard utility cards had excessive padding from inheriting wrong base styles.
- Duplicate `@media (max-width: 480px)` grid block merged.
- `overflow-x: hidden` added to `html, body` to prevent horizontal scroll on mobile.

---

## [1.0.0] — 2025-12-01

### Added
- Initial release of Zutrabio.
- Three themes: `minimal`, `tech`, `neobrutalist`.
- Dark / light / system color mode with FOUC-free inline script.
- 50+ platform metadata entries in `platforms.ts`.
- Full SEO stack: Open Graph, Twitter Cards, Schema.org JSON-LD, GEO meta, hreflang, sitemap.
- Five analytics integrations: GTM, Cloudflare, Umami, Plausible, Fathom.
- Content blocks: `link`, `text-block`, `rich-media`, `newsletter-inline`, `social-proof`, `timeline`, `price`, `utility`, `section-header`, `divider`.
- Utility widgets: clock, map, QR code, coupon, vCard.
- Rich media embeds: YouTube, Vimeo, Spotify, SoundCloud, PDF.
- Cloudflare Pages deployment with security headers (`wrangler.toml`).
- Static output, zero JavaScript required for core content.
