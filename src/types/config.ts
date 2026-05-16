// ─────────────────────────────────────────────────────────────
// Types for Zutrabio site-config.ts
// ─────────────────────────────────────────────────────────────

export type ThemePreset = "minimal" | "modern" | "neobrutalist";
export type ColorMode = "light" | "dark" | "system";
export type IdentityType = "person" | "organization";
export type OGType = "profile" | "website" | "business.business";
export type TwitterCard = "summary" | "summary_large_image";

// ── Site Config ───────────────────────────────────────────────

export interface SiteConfig {
  identity: IdentityConfig;
  siteUrl: string;
  promo: PromoConfig;
  theme: ThemeConfig;
  analytics: AnalyticsConfig;
  seo: SeoConfig;
  openGraph: OpenGraphConfig;
  twitter: TwitterConfig;
  schema: SchemaConfig;
  geo: GeoConfig;
  features: FeaturesConfig;
  footer: FooterConfig;
  floatingCta?: FloatingCtaConfig;
  exitIntent?: ExitIntentConfig;
  slideInCard?: SlideInCardConfig;
}

export interface FloatingCtaConfig {
  enabled: boolean;
  label: string;
  icon?: string;
  href: string;
}

export interface ExitIntentConfig {
  enabled: boolean;
  /** Delay in ms after page load before the exit intent is armed (default 3000) */
  armDelay?: number;
  bgImage?: string;
  title: string;
  subtitle?: string;
  cta: { label: string; url: string };
  secondaryCta?: { label: string; url: string };
}

export interface SlideInCardConfig {
  enabled: boolean;
  /** Delay in ms before the card slides in (default 7000) */
  delay?: number;
  /** "left" | "right" — corner the card slides in from (default "right") */
  side?: "left" | "right";
  message: string;
  cta: { label: string; url: string };
}

export interface IdentityConfig {
  type: IdentityType;
  name: string;
  handle: string;
  bio: string;
  bioExtended: string;
  avatar: string;
  avatarAlt: string;
  /** Banner image shown behind the avatar — path or remote URL */
  banner?: string;
  location: string;
  pronouns: string;
  timezone: string;
  verificationLinks: string[];
}

export interface ThemeConfig {
  /** Which theme to load by default (user can override via the floating switcher) */
  default: ThemePreset;
  /** Starting color mode. "system" follows the OS preference */
  colorMode: ColorMode;
  /** Override accent color per theme. Leave blank to use the theme default */
  accentColors: Partial<Record<ThemePreset, string>>;
  /** Show the floating theme/color-mode switcher */
  showThemeSwitcher: boolean;
}

export interface PromoConfig {
  /** Set to false to hide the top promotional banner */
  enabled: boolean;
  /** Main message shown in the banner */
  message: string;
  /** Call-to-action button */
  cta: { label: string; url: string };
  /** Allow visitors to dismiss the banner (stores preference in localStorage) */
  dismissible: boolean;
}

export interface AnalyticsConfig {
  gtmId: string;
  cloudflareBeacon: string;
  umamiWebsiteId: string;
  umamiSrc: string;
  plausibleDomain: string;
  plausibleSrc: string;
  fathomSiteId: string;
}

export interface SeoConfig {
  title: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
  canonical: string;
  robots: string;
  excludeFromSitemap: string[];
  alternateLanguages: Array<{ lang: string; url: string }>;
}

export interface OpenGraphConfig {
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  locale: string;
  type: OGType | string;
}

export interface TwitterConfig {
  card: TwitterCard;
  creator: string;
  site: string;
}

export interface SchemaConfig {
  enabled: boolean;
  person: PersonSchemaConfig;
  organization: OrganizationSchemaConfig;
}

export interface PersonSchemaConfig {
  name: string;
  jobTitle: string;
  worksFor: string;
  knowsAbout: string[];
  alumniOf: string;
  award: string;
  sameAs: string[];
}

export interface OrganizationSchemaConfig {
  legalName: string;
  foundingDate: string;
  numberOfEmployees: number;
  logo: string;
  sameAs: string[];
}

export interface GeoConfig {
  enabled: boolean;
  region: string;
  placename: string;
  latitude: number;
  longitude: number;
  icbm: string;
}

export interface FeaturesConfig {
  showPoweredBy: boolean;
  showLastUpdated: boolean;
  showLinkCount: boolean;
  animateCards: boolean;
  avatarRing: boolean;
  skeletonLoading: boolean;
  showCopyLink: boolean;
}

export interface FooterConfig {
  copyright: string;
  links: Array<{ label: string; href: string }>;
}

// ─────────────────────────────────────────────────────────────
// Page Item Types — everything that can appear on the page
// ─────────────────────────────────────────────────────────────

// All platforms supported as link types
export type Platform =
  // Social
  | "instagram"
  | "tiktok"
  | "x"
  | "twitter"
  | "bluesky"
  | "threads"
  | "mastodon"
  | "facebook"
  | "pinterest"
  | "snapchat"
  | "reddit"
  | "tumblr"
  | "vk"
  | "weibo"
  // Messaging
  | "whatsapp"
  | "telegram"
  | "signal"
  | "discord"
  | "slack"
  | "skype"
  | "line"
  | "wechat"
  | "messenger"
  | "viber"
  // Professional
  | "linkedin"
  | "github"
  | "gitlab"
  | "stackoverflow"
  | "dribbble"
  | "behance"
  | "figma"
  | "cv"
  | "portfolio"
  | "readcv"
  | "producthunt"
  | "hackernews"
  | "xing"
  // Content / Video
  | "youtube"
  | "twitch"
  | "vimeo"
  | "dailymotion"
  // Audio / Podcasts
  | "spotify"
  | "spotify-podcast"
  | "apple-podcasts"
  | "soundcloud"
  | "bandcamp"
  | "apple-music"
  | "tidal"
  | "deezer"
  // Writing / Blog
  | "substack"
  | "medium"
  | "devto"
  | "hashnode"
  | "ghost"
  | "wordpress"
  | "mirror"
  // Monetization / Tips
  | "kofi"
  | "buymeacoffee"
  | "patreon"
  | "paypal"
  | "mercadopago"
  | "stripe"
  | "github-sponsors"
  | "opencollective"
  | "cash-app"
  | "venmo"
  | "wise"
  // Stores / Commerce
  | "gumroad"
  | "etsy"
  | "shopify"
  | "woocommerce"
  | "lemonsqueezy"
  | "amazon"
  | "redbubble"
  | "teespring"
  // Booking / Scheduling
  | "calendly"
  | "cal"
  | "tidycal"
  | "acuity"
  // Events & Education
  | "eventbrite"
  | "luma"
  | "bandsintown"
  | "teachable"
  | "udemy"
  | "skillshare"
  | "notion"
  // Apps
  | "app-store"
  | "play-store"
  // Contact
  | "email"
  // Semantic / Local business
  | "order-whatsapp"
  | "reservation"
  | "menu-link"
  | "delivery-rappi"
  | "delivery-ifood"
  | "ticketing"
  | "book"
  // Misc
  | "custom"
  | "website"
  | "rss";

export type RichMediaType =
  | "youtube-video"
  | "vimeo-video"
  | "twitch-stream"
  | "tiktok-video"
  | "spotify-track"
  | "spotify-playlist"
  | "spotify-album"
  | "soundcloud-track"
  | "apple-music"
  | "image-gallery"
  | "pdf-viewer"
  | "google-slides"
  | "video-embed";

export type LeadGenType =
  | "newsletter"
  | "waitlist"
  | "survey"
  | "typeform"
  | "tally"
  | "google-form"
  | "mailchimp";

export type SocialProofType =
  | "stats"
  | "testimonial"
  | "client-logos"
  | "badges"
  | "awards";

export type UtilityType =
  | "map"
  | "coupon"
  | "vcard"
  | "clock"
  | "qr-code";

// ── Item Interfaces ───────────────────────────────────────────

export interface BaseItem {
  /** Whether this item is visible on the page */
  enabled: boolean;
  /** Optional label for accessibility / display */
  label?: string;
  /** Optional description shown below the label */
  description?: string;
  /** Optional CSS class for custom styling */
  className?: string;
  /** Width of the item: "full" (default) or "half" for 2-column grid */
  width?: "full" | "half";
}

export interface LinkItem extends BaseItem {
  type: "link";
  platform: Platform;
  url: string;
  label: string;
  /** Emoji or path to a custom icon (for platform: "custom") */
  icon?: string;
  /** rel attribute (e.g., "me" for Mastodon verification) */
  rel?: string;
  /** Open in new tab? Default: true */
  newTab?: boolean;
  /** Highlight this link (accent color background) */
  highlight?: boolean;
  /** Show a badge / pill next to the label */
  badge?: string;
}

export interface SectionHeader {
  type: "section-header";
  label: string;
  /** Optional icon (emoji or path) */
  icon?: string;
}

export interface Divider {
  type: "divider";
  /** Divider style: "line" | "space" | "dots" */
  style?: "line" | "space" | "dots";
}

export interface TextBlock {
  type: "text-block";
  content: string; // Supports basic HTML
  label?: string;
  enabled: boolean;
  /** Visual style: "default" | "card" | "announcement" | "bento" */
  style?: "default" | "card" | "announcement" | "bento";
}

export interface RichMediaItem extends BaseItem {
  type: "rich-media";
  mediaType: RichMediaType;
  url?: string;
  label?: string;
  /** For image gallery */
  images?: Array<{ src: string; alt: string; href?: string }>;
}

export interface LeadGenItem extends BaseItem {
  type: "lead-gen";
  leadType: LeadGenType;
  label: string;
  provider?: string;
  formUrl: string;
  /** Button label — defaults to "Subscribe" */
  buttonLabel?: string;
  /** Placeholder text for email input */
  placeholder?: string;
}

export interface SocialProofItem extends BaseItem {
  type: "social-proof";
  proofType: SocialProofType;
  /** For stats */
  stats?: Array<{ label: string; value: string }>;
  /** For testimonial */
  quote?: string;
  author?: string;
  authorTitle?: string;
  authorAvatar?: string;
  /** For client logos */
  logos?: Array<{ name: string; icon?: string; src?: string; url?: string; color?: string }>;
  /** For badges/certifications */
  badges?: Array<{ name: string; icon?: string; src?: string; url?: string; color?: string }>;
  /** For awards */
  awards?: Array<{ name: string; org?: string; year?: string; image?: string; url?: string }>;
}

export interface UtilityItem extends BaseItem {
  type: "utility";
  utilityType: UtilityType;
  /** For map */
  address?: string;
  mapUrl?: string;
  /** For coupon */
  code?: string;
  /** For clock */
  timezone?: string;
  /** For qr-code */
  qrData?: string;
}

export interface TimelineItem extends BaseItem {
  type: "timeline";
  items: Array<{
    date: string;
    title: string;
    description?: string;
    icon?: string;
  }>;
}

export interface NewsletterInlineItem extends BaseItem {
  type: "newsletter-inline";
  label: string;
  description?: string;
  buttonLabel?: string;
  placeholder?: string;
  /** Action URL for the form (e.g. Beehiiv/Mailchimp endpoint) */
  actionUrl: string;
}

export interface PriceItem extends BaseItem {
  type: "price";
  label: string;
  price: string;
  period?: string;
  features?: string[];
  buttonLabel?: string;
  url?: string;
}

// Union type of ALL possible page items
export type PageItem =
  | LinkItem
  | SectionHeader
  | Divider
  | TextBlock
  | RichMediaItem
  | LeadGenItem
  | SocialProofItem
  | UtilityItem
  | PriceItem
  | TimelineItem
  | NewsletterInlineItem;
