// Profile: Emprendedor / Startup Founder — Diego Castillo, founder de SaaS
import type {
  PageItem, LinkItem, SectionHeader, Divider, TextBlock,
  RichMediaItem, LeadGenItem, SocialProofItem, UtilityItem,
  TimelineItem, NewsletterInlineItem, PriceItem,
} from "@/types/config";

export const pageItems: PageItem[] = [

  {
    type: "text-block",
    style: "bento",
    label: "Building in public",
    content: "Founder de <a href='https://shipfast.io'>ShipFast</a> — el boilerplate de Astro + Stripe que lleva $48k en MRR. Comparto cada número, error y aprendizaje.",
    enabled: true,
  } satisfies TextBlock,

  { type: "section-header", label: "Tracción actual" } satisfies SectionHeader,

  {
    type: "social-proof",
    proofType: "stats",
    stats: [
      { label: "MRR", value: "$48K" },
      { label: "Clientes", value: "1,240" },
      { label: "Churn", value: "1.8%" },
      { label: "NPS", value: "71" },
    ],
    enabled: true,
  } satisfies SocialProofItem,

  {
    type: "text-block",
    style: "announcement",
    label: "🚀 Lanzando v2.0 el 1 de julio",
    content: "Multi-tenancy, roles y billing mejorado. Early access con 30% off — <strong>50 cupos</strong>.",
    enabled: true,
  } satisfies TextBlock,

  { type: "section-header", label: "Mis productos" } satisfies SectionHeader,

  {
    type: "price", label: "Starter", price: "$199", period: "único",
    description: "Todo lo que necesitas para lanzar tu SaaS en un fin de semana.",
    features: ["Astro + Stripe", "Auth completo", "Dashboard admin", "1 año de updates"],
    buttonLabel: "Comprar Starter", url: "https://shipfast.io/starter",
    enabled: true, width: "half",
  } satisfies PriceItem,

  {
    type: "price", label: "Pro + Soporte", price: "$399", period: "único",
    description: "Todo Starter + soporte directo conmigo y acceso a comunidad privada.",
    features: ["Todo en Starter", "Comunidad privada", "Soporte prioritario", "Lifetime updates"],
    buttonLabel: "Comprar Pro", url: "https://shipfast.io/pro",
    enabled: true, width: "half",
  } satisfies PriceItem,

  {
    type: "social-proof",
    proofType: "testimonial",
    quote: "ShipFast me ahorró 3 semanas de setup. Lancé mi SaaS en 4 días y ya tengo 12 clientes de pago. Fue la mejor inversión del año.",
    author: "Sofía Herrera",
    authorTitle: "Founder, InvoiceAI",
    authorAvatar: "https://i.pravatar.cc/64?img=25",
    enabled: true,
  } satisfies SocialProofItem,

  { type: "section-header", label: "Contenido" } satisfies SectionHeader,

  {
    type: "rich-media",
    mediaType: "youtube-video",
    label: "Cómo llegué a $10K MRR desde cero",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "El video más honesto que he grabado — números reales, errores reales",
    enabled: true,
  } satisfies RichMediaItem,

  {
    type: "newsletter-inline",
    label: "Building in Public — Weekly",
    description: "Cada lunes: mis métricas reales, decisiones difíciles y lo que aprendí esa semana.",
    placeholder: "tu@email.com",
    buttonLabel: "Suscribirme gratis",
    actionUrl: "https://shipfast.beehiiv.com/subscribe",
    enabled: true,
  } satisfies NewsletterInlineItem,

  {
    type: "lead-gen",
    leadType: "typeform",
    label: "¿Tienes un SaaS en mente?",
    description: "Cuéntame sobre tu idea — doy feedback gratuito cada viernes.",
    formUrl: "https://form.typeform.com/to/uZgRKSzH",
    buttonLabel: "Enviar mi idea →",
    enabled: true,
  } satisfies LeadGenItem,

  { type: "section-header", label: "Mi trayecto" } satisfies SectionHeader,

  {
    type: "timeline",
    label: "Hitos",
    items: [
      { date: "Ene 2024", title: "ShipFast llega a $48K MRR", description: "El producto creció de forma orgánica — cero ads, solo contenido.", icon: "lucide:trending-up" },
      { date: "Jun 2023", title: "Primer $1K en un día", description: "Un tweet viral y 6 ventas en 24 horas. El punto de inflexión.", icon: "lucide:zap" },
      { date: "Mar 2023", title: "Lanzamiento de ShipFast", description: "Lancé con $0 de marketing y 200 seguidores en Twitter.", icon: "lucide:rocket" },
      { date: "2021", title: "Salida de mi trabajo corporativo", description: "Dejé un puesto de senior dev para apostar por mis propios productos.", icon: "lucide:door-open" },
    ],
    enabled: true,
  } satisfies TimelineItem,

  { type: "divider", style: "line" } satisfies Divider,
  { type: "section-header", label: "Encuéntrame" } satisfies SectionHeader,

  { type: "link", platform: "x",        label: "X (Twitter)",  url: "https://x.com/diegocastillo", description: "Building in public diario", enabled: true } satisfies LinkItem,
  { type: "link", platform: "linkedin", label: "LinkedIn",     url: "https://linkedin.com/in/diegocastillo", enabled: true, width: "half" } satisfies LinkItem,
  { type: "link", platform: "github",   label: "GitHub",       url: "https://github.com/diegocastillo", enabled: true, width: "half" } satisfies LinkItem,
  { type: "link", platform: "youtube",  label: "YouTube",      url: "https://youtube.com/@diegocastillo", description: "Tutoriales y vlogs de founder", enabled: true } satisfies LinkItem,

  { type: "divider", style: "dots" } satisfies Divider,

  { type: "link", platform: "email",    label: "Inversores & Prensa", url: "mailto:diego@shipfast.io", description: "Para propuestas serias", enabled: true } satisfies LinkItem,
  { type: "link", platform: "calendly", label: "30 min coffee chat", url: "https://calendly.com/diegocastillo/30min", highlight: true, enabled: true } satisfies LinkItem,
  { type: "utility", utilityType: "clock", label: "Mi hora local", timezone: "America/Bogota", enabled: true } satisfies UtilityItem,
];
