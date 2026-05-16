// Profile: Freelancer / Consultor — Jane Doe, diseñadora y dev
import type {
  PageItem, LinkItem, SectionHeader, Divider, TextBlock,
  RichMediaItem, SocialProofItem, UtilityItem,
  TimelineItem, NewsletterInlineItem, PriceItem,
} from "@/types/config";

export const pageItems: PageItem[] = [

  { type: "section-header", label: "Social proof" } satisfies SectionHeader,

  {
    type: "social-proof",
    proofType: "stats",
    stats: [
      { label: "Followers", value: "48K+" },
      { label: "Projects", value: "120+" },
      { label: "Years XP", value: "9" },
      { label: "Countries", value: "18" },
    ],
    enabled: true,
  } satisfies SocialProofItem,

  {
    type: "social-proof",
    proofType: "testimonial",
    quote: "Jane is an exceptional designer who truly understands user needs. She delivered our rebrand in record time and the results exceeded every expectation.",
    author: "Carlos Méndez",
    authorTitle: "CEO, Acme Corp",
    authorAvatar: "https://i.pravatar.cc/64?img=12",
    enabled: true,
  } satisfies SocialProofItem,

  {
    type: "social-proof",
    proofType: "client-logos",
    label: "Trusted by",
    logos: [
      { name: "GitHub",  icon: "simple-icons:github",  color: "#24292e" },
      { name: "Figma",   icon: "simple-icons:figma",   color: "#F24E1E" },
      { name: "Notion",  icon: "simple-icons:notion",  color: "#000000" },
      { name: "Vercel",  icon: "simple-icons:vercel",  color: "#000000" },
      { name: "Linear",  icon: "simple-icons:linear",  color: "#5E6AD2" },
    ],
    enabled: true,
  } satisfies SocialProofItem,

  {
    type: "social-proof",
    proofType: "badges",
    label: "Certifications",
    badges: [
      { name: "Google UX Design",       icon: "simple-icons:google",    color: "#4285F4", url: "https://grow.google/certificates/ux-design/" },
      { name: "AWS Solutions Architect", icon: "simple-icons:amazonwebservices", color: "#FF9900", url: "https://aws.amazon.com/certification/" },
      { name: "Figma Expert",            icon: "simple-icons:figma",     color: "#F24E1E", url: "https://figma.com" },
    ],
    enabled: true,
  } satisfies SocialProofItem,

  {
    type: "social-proof",
    proofType: "awards",
    label: "Awards",
    awards: [
      { name: "Awwwards Site of the Day", org: "Awwwards", year: "2024" },
      { name: "CSS Design Awards Winner", org: "CSSDA", year: "2023" },
      { name: "Webby Award Honoree", org: "The Webby Awards", year: "2023" },
    ],
    enabled: true,
  } satisfies SocialProofItem,

  { type: "section-header", label: "Text blocks" } satisfies SectionHeader,

  {
    type: "text-block",
    style: "announcement",
    label: "New course dropping soon!",
    content: "Enroll before June 30 and get 40% off with code <strong>EARLY40</strong>.",
    enabled: true,
  } satisfies TextBlock,

  {
    type: "text-block",
    style: "bento",
    label: "Currently building",
    content: "A design system for Latin American startups. If you're interested in collaborating, <a href='mailto:hello@janedoe.com'>reach out</a>.",
    enabled: true,
  } satisfies TextBlock,

  { type: "section-header", label: "Rich media" } satisfies SectionHeader,

  {
    type: "rich-media",
    mediaType: "youtube-video",
    label: "Latest tutorial",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "How I design landing pages in 30 minutes",
    enabled: true,
  } satisfies RichMediaItem,

  {
    type: "rich-media",
    mediaType: "image-gallery",
    label: "Portfolio",
    images: [
      { src: "https://picsum.photos/seed/a1/400/400", alt: "Project 1" },
      { src: "https://picsum.photos/seed/b2/400/400", alt: "Project 2" },
      { src: "https://picsum.photos/seed/c3/400/400", alt: "Project 3" },
      { src: "https://picsum.photos/seed/d4/400/400", alt: "Project 4" },
      { src: "https://picsum.photos/seed/e5/400/400", alt: "Project 5" },
      { src: "https://picsum.photos/seed/f6/400/400", alt: "Project 6" },
    ],
    description: "Selected work — 2022–2024",
    enabled: true,
  } satisfies RichMediaItem,

  { type: "section-header", label: "My Journey" } satisfies SectionHeader,

  {
    type: "timeline",
    label: "Experience",
    items: [
      { date: "2022 — Present", title: "Senior Product Designer at Artifices", description: "Leading the design system team and UX for the core platform.", icon: "lucide:briefcase" },
      { date: "2019 — 2022", title: "Fullstack Developer at CreativeFlow", description: "Developed high-traffic client websites using Astro and React.", icon: "lucide:code" },
      { date: "2017 — 2019", title: "UI Designer at DigitalPulse", description: "Started my career focusing on mobile app interfaces and branding.", icon: "lucide:palette" },
    ],
    enabled: true,
  } satisfies TimelineItem,

  { type: "section-header", label: "Work with me" } satisfies SectionHeader,

  {
    type: "price", label: "Strategy Session", price: "$150", period: "session",
    description: "A 60-minute deep dive into your project or brand strategy.",
    features: ["1:1 Video Call", "Actionable Plan", "Recording included"],
    buttonLabel: "Book Session", url: "https://calendly.com/janedoe/strategy",
    enabled: true, width: "half",
  } satisfies PriceItem,

  {
    type: "price", label: "Monthly Retainer", price: "$2k", period: "month",
    description: "Ongoing design and development support for your team.",
    features: ["Priority Support", "Weekly Syncs", "Unlimited Edits"],
    buttonLabel: "Inquire Now", url: "mailto:hello@janedoe.com",
    enabled: true, width: "half",
  } satisfies PriceItem,

  { type: "section-header", label: "Lead gen" } satisfies SectionHeader,

  {
    type: "newsletter-inline",
    label: "Join the Inner Circle",
    description: "Weekly design tips and dev resources — every Tuesday.",
    placeholder: "your@email.com",
    buttonLabel: "Subscribe",
    actionUrl: "https://herman.beehiiv.com/subscribe",
    enabled: true,
  } satisfies NewsletterInlineItem,

  { type: "section-header", label: "Find me" } satisfies SectionHeader,

  { type: "link", platform: "instagram", label: "Instagram", url: "https://instagram.com/janedoe", enabled: true, width: "half" } satisfies LinkItem,
  { type: "link", platform: "tiktok", label: "TikTok", url: "https://tiktok.com/@janedoe", enabled: true, width: "half" } satisfies LinkItem,
  { type: "link", platform: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/janedoe", enabled: true, width: "half" } satisfies LinkItem,
  { type: "link", platform: "github", label: "GitHub", url: "https://github.com/janedoe", enabled: true, width: "half" } satisfies LinkItem,
  { type: "link", platform: "dribbble", label: "Dribbble", url: "https://dribbble.com/janedoe", enabled: true } satisfies LinkItem,
  { type: "link", platform: "gumroad", label: "Gumroad Store", url: "https://janedoe.gumroad.com", description: "Design templates & resources", enabled: true } satisfies LinkItem,

  { type: "divider", style: "line" } satisfies Divider,

  { type: "link", platform: "kofi", label: "Buy me a Ko-fi ☕", url: "https://ko-fi.com/janedoe", highlight: true, enabled: true } satisfies LinkItem,
  { type: "link", platform: "calendly", label: "Book a Call", url: "https://calendly.com/janedoe", highlight: true, enabled: true } satisfies LinkItem,
  { type: "link", platform: "email", label: "Email me", url: "mailto:hello@janedoe.com", enabled: true } satisfies LinkItem,

  { type: "section-header", label: "Utilities" } satisfies SectionHeader,

  { type: "utility", utilityType: "clock", label: "My local time", timezone: "America/Santiago", enabled: true } satisfies UtilityItem,
  { type: "utility", utilityType: "coupon", label: "Get 20% off", description: "Use at checkout on my Gumroad store", code: "JANEDOE20", enabled: true } satisfies UtilityItem,
  { type: "utility", utilityType: "map", label: "Find me here", address: "Santiago, Chile", mapUrl: "https://maps.google.com/?q=Santiago,Chile", enabled: true } satisfies UtilityItem,
  { type: "utility", utilityType: "vcard", label: "Save my contact", description: "Add me to your phone contacts", enabled: true } satisfies UtilityItem,
  { type: "utility", utilityType: "qr-code", label: "Scan to visit", description: "Share this page offline", qrData: "https://janedoe.com", enabled: true } satisfies UtilityItem,
];
