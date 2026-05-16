// Profile: Profesional Corporativo — Ana García, Head of Product
import type {
  PageItem, LinkItem, SectionHeader, Divider, TextBlock,
  RichMediaItem, SocialProofItem, UtilityItem, TimelineItem,
  NewsletterInlineItem, PriceItem,
} from "@/types/config";

export const pageItems: PageItem[] = [

  {
    type: "text-block",
    style: "bento",
    label: "Head of Product @ Stripe",
    content: "10 años construyendo productos que usan millones de personas. Mentora, speaker y autora de <a href='#'>\"Producto sin Ego\"</a>.",
    enabled: true,
  } satisfies TextBlock,

  { type: "section-header", label: "Por números" } satisfies SectionHeader,

  {
    type: "social-proof",
    proofType: "stats",
    stats: [
      { label: "Años XP", value: "10" },
      { label: "Productos", value: "23" },
      { label: "Mentees", value: "140+" },
      { label: "Charlas", value: "38" },
    ],
    enabled: true,
  } satisfies SocialProofItem,

  { type: "section-header", label: "Trayectoria" } satisfies SectionHeader,

  {
    type: "timeline",
    label: "Experiencia",
    items: [
      { date: "2022 — hoy",   title: "Head of Product — Stripe", description: "Lidero un equipo de 24 PMs responsables del checkout global.", icon: "lucide:briefcase" },
      { date: "2019 — 2022", title: "Senior PM — Notion",        description: "Desarrollé el sistema de bases de datos que usaron 10M de usuarios.", icon: "lucide:layout-dashboard" },
      { date: "2016 — 2019", title: "Product Manager — Mercado Libre", description: "Lideré la plataforma de pagos para la región andina.", icon: "lucide:shopping-cart" },
      { date: "2014 — 2016", title: "UX Designer — BBVA",       description: "Primer rol, diseñando la app móvil para banca personal.", icon: "lucide:smartphone" },
    ],
    enabled: true,
  } satisfies TimelineItem,

  { type: "section-header", label: "Credenciales" } satisfies SectionHeader,

  {
    type: "social-proof",
    proofType: "badges",
    label: "Certificaciones",
    badges: [
      { name: "Google Product Management",  icon: "simple-icons:google",    color: "#4285F4", url: "#" },
      { name: "AWS Cloud Practitioner",     icon: "simple-icons:amazonwebservices", color: "#FF9900", url: "#" },
      { name: "Scrum Master Certified",     icon: "simple-icons:scrumalliance", color: "#009FDA", url: "#" },
    ],
    enabled: true,
  } satisfies SocialProofItem,

  {
    type: "social-proof",
    proofType: "awards",
    label: "Reconocimientos",
    awards: [
      { name: "Forbes 30 Under 30 — Tech", org: "Forbes Latinoamérica", year: "2022" },
      { name: "Product Leader of the Year", org: "ProductCon LATAM", year: "2023" },
      { name: "Women in Tech Award", org: "Google for Startups", year: "2021" },
    ],
    enabled: true,
  } satisfies SocialProofItem,

  { type: "section-header", label: "Contenido" } satisfies SectionHeader,

  {
    type: "rich-media",
    mediaType: "youtube-video",
    label: "Charla: Cómo priorizar cuando todo es urgente",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "ProductCon LATAM 2023 — 2,800 asistentes",
    enabled: true,
  } satisfies RichMediaItem,

  {
    type: "newsletter-inline",
    label: "Producto Claro",
    description: "Quincenal — estrategia de producto sin jerga: casos reales, frameworks probados y errores que nadie cuenta.",
    placeholder: "tu@email.com",
    buttonLabel: "Suscribirme",
    actionUrl: "https://anagarcia.beehiiv.com/subscribe",
    enabled: true,
  } satisfies NewsletterInlineItem,

  { type: "section-header", label: "Trabaja conmigo" } satisfies SectionHeader,

  {
    type: "social-proof",
    proofType: "testimonial",
    quote: "Una sesión con Ana me ahorró seis meses de decisiones equivocadas. Su perspectiva es brutalmente honesta y exactamente lo que necesitaba.",
    author: "Rodrigo Vega",
    authorTitle: "CPO, FinTech startup",
    authorAvatar: "https://i.pravatar.cc/64?img=33",
    enabled: true,
  } satisfies SocialProofItem,

  {
    type: "price", label: "Mentoring 1:1", price: "$280", period: "sesión",
    description: "60 min de consultoría enfocada: estrategia de producto, carrera o roadmap.",
    features: ["Video call grabado", "Notas post-sesión", "Slack por 48h post-call"],
    buttonLabel: "Reservar sesión", url: "https://calendly.com/anagarcia/mentoring",
    enabled: true, width: "half",
  } satisfies PriceItem,

  {
    type: "price", label: "Advisory (3 meses)", price: "$1.5K", period: "mes",
    description: "Acompaño a tu equipo de producto como advisor estratégico.",
    features: ["4 calls/mes", "Review de roadmap", "Slack ilimitado", "Intro a mi red"],
    buttonLabel: "Conversemos", url: "mailto:advisory@anagarcia.com",
    enabled: true, width: "half",
  } satisfies PriceItem,

  { type: "divider", style: "line" } satisfies Divider,
  { type: "section-header", label: "Encuéntrame" } satisfies SectionHeader,

  { type: "link", platform: "linkedin", label: "LinkedIn",  url: "https://linkedin.com/in/anagarcia", description: "Mis artículos y reflexiones semanales", enabled: true } satisfies LinkItem,
  { type: "link", platform: "x",        label: "X",         url: "https://x.com/anagarcia", enabled: true, width: "half" } satisfies LinkItem,
  { type: "link", platform: "bluesky",  label: "Bluesky",   url: "https://bsky.app/profile/anagarcia.bsky.social", enabled: true, width: "half" } satisfies LinkItem,
  { type: "link", platform: "book",   label: "Mi libro: Producto sin Ego", url: "https://productosinego.com", description: "Disponible en Amazon y librerías", enabled: true } satisfies LinkItem,

  { type: "divider", style: "dots" } satisfies Divider,

  { type: "link", platform: "email",    label: "Speaking & Prensa",  url: "mailto:press@anagarcia.com", description: "Conferencias, podcasts y medios", enabled: true } satisfies LinkItem,
  { type: "link", platform: "calendly", label: "Intro call (gratis)", url: "https://calendly.com/anagarcia/intro", highlight: true, enabled: true } satisfies LinkItem,
  { type: "utility", utilityType: "clock",  label: "Mi hora local", timezone: "America/Lima", enabled: true } satisfies UtilityItem,
  { type: "utility", utilityType: "map",    label: "Ubicación",     address: "Lima, Perú", mapUrl: "https://maps.google.com/?q=Lima,Peru", enabled: true } satisfies UtilityItem,
];
