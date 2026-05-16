import type { Platform } from "@/types/config";

interface PlatformMeta {
  label: string;
  /** Iconify icon name (e.g. "simple-icons:instagram" or "lucide:link") */
  icon: string;
  /** Brand color (used for accent in themes) */
  color: string;
}

const platformMap: Record<Platform, PlatformMeta> = {
  // ── Social ──────────────────────────────────────────────────
  instagram:       { label: "Instagram",        icon: "simple-icons:instagram",    color: "#E1306C" },
  tiktok:          { label: "TikTok",           icon: "simple-icons:tiktok",       color: "#000000" },
  x:               { label: "X",                icon: "simple-icons:x",            color: "#000000" },
  twitter:         { label: "Twitter",          icon: "simple-icons:twitter",      color: "#1DA1F2" },
  bluesky:         { label: "Bluesky",          icon: "simple-icons:bluesky",      color: "#0085FF" },
  threads:         { label: "Threads",          icon: "simple-icons:threads",      color: "#000000" },
  mastodon:        { label: "Mastodon",         icon: "simple-icons:mastodon",     color: "#6364FF" },
  facebook:        { label: "Facebook",         icon: "simple-icons:facebook",     color: "#1877F2" },
  pinterest:       { label: "Pinterest",        icon: "simple-icons:pinterest",    color: "#E60023" },
  snapchat:        { label: "Snapchat",         icon: "simple-icons:snapchat",     color: "#FFFC00" },
  reddit:          { label: "Reddit",           icon: "simple-icons:reddit",       color: "#FF4500" },
  tumblr:          { label: "Tumblr",           icon: "simple-icons:tumblr",       color: "#35465C" },
  vk:              { label: "VKontakte",        icon: "simple-icons:vk",           color: "#4A76A8" },
  weibo:           { label: "Weibo",            icon: "simple-icons:sinaweibo",    color: "#E6162D" },

  // ── Messaging ────────────────────────────────────────────────
  whatsapp:        { label: "WhatsApp",         icon: "simple-icons:whatsapp",     color: "#25D366" },
  telegram:        { label: "Telegram",         icon: "simple-icons:telegram",     color: "#2CA5E0" },
  signal:          { label: "Signal",           icon: "simple-icons:signal",       color: "#3A76F0" },
  discord:         { label: "Discord",          icon: "simple-icons:discord",      color: "#5865F2" },
  slack:           { label: "Slack",            icon: "simple-icons:slack",        color: "#4A154B" },
  skype:           { label: "Skype",            icon: "simple-icons:skype",        color: "#00AFF0" },
  line:            { label: "LINE",             icon: "simple-icons:line",         color: "#00B900" },
  wechat:          { label: "WeChat",           icon: "simple-icons:wechat",       color: "#07C160" },
  messenger:       { label: "Messenger",        icon: "simple-icons:messenger",    color: "#0084FF" },
  viber:           { label: "Viber",            icon: "simple-icons:viber",        color: "#7360F2" },

  // ── Professional ─────────────────────────────────────────────
  linkedin:        { label: "LinkedIn",         icon: "simple-icons:linkedin",     color: "#0A66C2" },
  github:          { label: "GitHub",           icon: "simple-icons:github",       color: "#181717" },
  gitlab:          { label: "GitLab",           icon: "simple-icons:gitlab",       color: "#FC6D26" },
  stackoverflow:   { label: "Stack Overflow",   icon: "simple-icons:stackoverflow",color: "#F58025" },
  dribbble:        { label: "Dribbble",         icon: "simple-icons:dribbble",     color: "#EA4C89" },
  behance:         { label: "Behance",          icon: "simple-icons:behance",      color: "#1769FF" },
  figma:           { label: "Figma Community",  icon: "simple-icons:figma",        color: "#F24E1E" },
  cv:              { label: "Download CV",      icon: "lucide:file-text",          color: "#4F46E5" },
  portfolio:       { label: "Portfolio",        icon: "lucide:layout-grid",        color: "#4F46E5" },
  readcv:          { label: "Read.cv",          icon: "simple-icons:readdotcv",    color: "#1A1A1A" },
  producthunt:     { label: "Product Hunt",     icon: "simple-icons:producthunt",  color: "#DA552F" },
  hackernews:      { label: "Hacker News",      icon: "simple-icons:ycombinator",  color: "#FF6600" },
  xing:            { label: "XING",             icon: "simple-icons:xing",         color: "#026466" },

  // ── Content / Video ──────────────────────────────────────────
  youtube:         { label: "YouTube",          icon: "simple-icons:youtube",      color: "#FF0000" },
  twitch:          { label: "Twitch",           icon: "simple-icons:twitch",       color: "#9146FF" },
  vimeo:           { label: "Vimeo",            icon: "simple-icons:vimeo",        color: "#1AB7EA" },
  dailymotion:     { label: "Dailymotion",      icon: "simple-icons:dailymotion",  color: "#0066DC" },

  // ── Audio / Podcasts ─────────────────────────────────────────
  spotify:         { label: "Spotify",          icon: "simple-icons:spotify",      color: "#1DB954" },
  "spotify-podcast": { label: "Podcast on Spotify", icon: "simple-icons:spotify", color: "#1DB954" },
  "apple-podcasts":  { label: "Apple Podcasts", icon: "simple-icons:applepodcasts",color: "#872EC4" },
  soundcloud:      { label: "SoundCloud",       icon: "simple-icons:soundcloud",   color: "#FF5500" },
  bandcamp:        { label: "Bandcamp",         icon: "simple-icons:bandcamp",     color: "#1DA0C3" },
  "apple-music":   { label: "Apple Music",      icon: "simple-icons:applemusic",   color: "#FC3C44" },
  tidal:           { label: "Tidal",            icon: "simple-icons:tidal",        color: "#000000" },
  deezer:          { label: "Deezer",           icon: "simple-icons:deezer",       color: "#A238FF" },

  // ── Writing / Blog ───────────────────────────────────────────
  substack:        { label: "Substack",         icon: "simple-icons:substack",     color: "#FF6719" },
  medium:          { label: "Medium",           icon: "simple-icons:medium",       color: "#000000" },
  devto:           { label: "Dev.to",           icon: "simple-icons:devdotto",     color: "#0A0A0A" },
  hashnode:        { label: "Hashnode",         icon: "simple-icons:hashnode",     color: "#2962FF" },
  ghost:           { label: "Blog",             icon: "simple-icons:ghost",        color: "#15171A" },
  wordpress:       { label: "WordPress Blog",   icon: "simple-icons:wordpress",    color: "#21759B" },
  mirror:          { label: "Mirror.xyz",       icon: "lucide:globe",              color: "#007AFF" },

  // ── Monetization / Tips ──────────────────────────────────────
  kofi:            { label: "Ko-fi",            icon: "simple-icons:kofi",         color: "#FF5E5B" },
  buymeacoffee:    { label: "Buy Me a Coffee",  icon: "simple-icons:buymeacoffee", color: "#FFDD00" },
  patreon:         { label: "Patreon",          icon: "simple-icons:patreon",      color: "#FF424D" },
  paypal:          { label: "PayPal",           icon: "simple-icons:paypal",       color: "#003087" },
  mercadopago:     { label: "MercadoPago",      icon: "simple-icons:mercadopago",  color: "#00B1EA" },
  stripe:          { label: "Stripe",           icon: "simple-icons:stripe",       color: "#635BFF" },
  "github-sponsors": { label: "GitHub Sponsors", icon: "simple-icons:githubsponsors", color: "#EA4AAA" },
  opencollective:  { label: "Open Collective",  icon: "simple-icons:opencollective",color: "#7FADF2" },
  "cash-app":      { label: "Cash App",         icon: "simple-icons:cashapp",      color: "#00D632" },
  venmo:           { label: "Venmo",            icon: "simple-icons:venmo",        color: "#3D95CE" },
  wise:            { label: "Wise",             icon: "simple-icons:wise",         color: "#9FE870" },

  // ── Stores / Commerce ────────────────────────────────────────
  gumroad:         { label: "Gumroad",          icon: "simple-icons:gumroad",      color: "#FF90E8" },
  etsy:            { label: "Etsy",             icon: "simple-icons:etsy",         color: "#F1641E" },
  shopify:         { label: "Shopify Store",    icon: "simple-icons:shopify",      color: "#96BF48" },
  woocommerce:     { label: "WooCommerce",      icon: "simple-icons:woocommerce",  color: "#7F54B3" },
  lemonsqueezy:    { label: "Lemon Squeezy",    icon: "simple-icons:lemonsqueezy", color: "#FFC233" },
  amazon:          { label: "Amazon",           icon: "simple-icons:amazon",       color: "#FF9900" },
  redbubble:       { label: "Redbubble",        icon: "simple-icons:redbubble",    color: "#E41321" },
  teespring:       { label: "Teespring",        icon: "simple-icons:teespring",    color: "#39A8E0" },

  // ── Booking / Scheduling ─────────────────────────────────────
  calendly:        { label: "Book a Call",      icon: "simple-icons:calendly",     color: "#006BFF" },
  cal:             { label: "Cal.com",          icon: "simple-icons:caldotcom",    color: "#000000" },
  tidycal:         { label: "TidyCal",          icon: "lucide:calendar",           color: "#4F46E5" },
  acuity:          { label: "Book Appointment", icon: "lucide:calendar-clock",     color: "#3DBEF2" },

  // ── Events & Education ───────────────────────────────────────
  eventbrite:      { label: "Events",           icon: "simple-icons:eventbrite",   color: "#F05537" },
  luma:            { label: "Events",           icon: "lucide:calendar-days",      color: "#000000" },
  bandsintown:     { label: "Tour Dates",       icon: "simple-icons:bandsintown",  color: "#00B4B3" },
  teachable:       { label: "Online Course",    icon: "simple-icons:coursera",     color: "#45C5D9" },
  udemy:           { label: "Udemy Course",     icon: "simple-icons:udemy",        color: "#EC5252" },
  skillshare:      { label: "Skillshare",       icon: "simple-icons:skillshare",   color: "#00FF84" },
  notion:          { label: "Notion",           icon: "simple-icons:notion",       color: "#000000" },

  // ── Apps ─────────────────────────────────────────────────────
  "app-store":     { label: "App Store",        icon: "simple-icons:appstore",     color: "#0D96F6" },
  "play-store":    { label: "Google Play",      icon: "simple-icons:googleplay",   color: "#01875F" },

  // ── Contact / Misc ───────────────────────────────────────────
  email:           { label: "Email",            icon: "lucide:mail",               color: "#EA4335" },
  custom:          { label: "Link",             icon: "lucide:link",               color: "#4F46E5" },
  website:         { label: "Website",          icon: "lucide:globe",              color: "#4F46E5" },
  rss:             { label: "RSS Feed",         icon: "simple-icons:rss",          color: "#FF6600" },

  // ── Semantic / Local business ────────────────────────────────
  "order-whatsapp": { label: "Pedir por WhatsApp", icon: "simple-icons:whatsapp",   color: "#25D366" },
  reservation:      { label: "Reservar mesa",       icon: "lucide:calendar",          color: "#6366F1" },
  "menu-link":      { label: "Ver menú",            icon: "lucide:clipboard-list",    color: "#F59E0B" },
  "delivery-rappi": { label: "Rappi",               icon: "lucide:bike",              color: "#FF441F" },
  "delivery-ifood": { label: "iFood",               icon: "simple-icons:ifood",       color: "#EA1D2C" },
  ticketing:        { label: "Entradas",            icon: "lucide:ticket",            color: "#8B5CF6" },
  book:             { label: "Libro",               icon: "lucide:book-open",         color: "#4F46E5" },
};

export function getPlatformMeta(platform: Platform): PlatformMeta {
  return platformMap[platform] ?? { label: "Link", icon: "lucide:link", color: "#4F46E5" };
}

export function getPlatformColor(platform: Platform): string {
  return getPlatformMeta(platform).color;
}
