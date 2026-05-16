// Profile: Creador de Contenido — Marco Reyes, lifestyle & tech
import type {
  PageItem, LinkItem, SectionHeader, Divider, TextBlock,
  RichMediaItem, SocialProofItem, UtilityItem, NewsletterInlineItem, PriceItem,
} from "@/types/config";

export const pageItems: PageItem[] = [

  {
    type: "text-block",
    style: "announcement",
    label: "🎬 Nuevo video cada miércoles",
    content: "Suscríbete para no perderte ningún episodio de <strong>Tech Sin Filtro</strong>.",
    enabled: true,
  } satisfies TextBlock,

  { type: "section-header", label: "Stats" } satisfies SectionHeader,

  {
    type: "social-proof",
    proofType: "stats",
    stats: [
      { label: "YouTube", value: "312K" },
      { label: "TikTok", value: "890K" },
      { label: "Instagram", value: "201K" },
      { label: "Videos", value: "540+" },
    ],
    enabled: true,
  } satisfies SocialProofItem,

  { type: "section-header", label: "Último video" } satisfies SectionHeader,

  {
    type: "rich-media",
    mediaType: "youtube-video",
    label: "¿Vale la pena el Vision Pro?",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Mi review honesta después de 30 días de uso",
    enabled: true,
  } satisfies RichMediaItem,

  { type: "section-header", label: "Mis redes" } satisfies SectionHeader,

  { type: "link", platform: "youtube", label: "YouTube", url: "https://youtube.com/@marcoreyes", description: "Tech Sin Filtro — reviews semanales", enabled: true } satisfies LinkItem,
  { type: "link", platform: "tiktok", label: "TikTok", url: "https://tiktok.com/@marcoreyes", enabled: true, width: "half" } satisfies LinkItem,
  { type: "link", platform: "instagram", label: "Instagram", url: "https://instagram.com/marcoreyes", enabled: true, width: "half" } satisfies LinkItem,
  { type: "link", platform: "x", label: "X (Twitter)", url: "https://x.com/marcoreyes", enabled: true, width: "half" } satisfies LinkItem,
  { type: "link", platform: "bluesky", label: "Bluesky", url: "https://bsky.app/profile/marcoreyes.bsky.social", enabled: true, width: "half" } satisfies LinkItem,
  { type: "link", platform: "twitch", label: "Twitch", url: "https://twitch.tv/marcoreyes", description: "Lives los viernes 8pm", enabled: true } satisfies LinkItem,

  { type: "divider", style: "line" } satisfies Divider,
  { type: "section-header", label: "Mis productos" } satisfies SectionHeader,

  {
    type: "price", label: "Membresía Creator", price: "$9", period: "mes",
    description: "Acceso exclusivo a mi comunidad privada, making-of y Q&As mensuales.",
    features: ["Discord exclusivo", "Videos anticipados", "Q&A mensual en vivo"],
    buttonLabel: "Unirme ahora", url: "https://patreon.com/marcoreyes",
    enabled: true, width: "half",
  } satisfies PriceItem,

  {
    type: "price", label: "Pack de Recursos", price: "$29", period: "único",
    description: "Mis presets de edición, plantillas de thumbnails y checklist de equipo.",
    features: ["20 presets LUT", "10 plantillas Canva", "Lista de equipo"],
    buttonLabel: "Descargar", url: "https://marcoreyes.gumroad.com",
    enabled: true, width: "half",
  } satisfies PriceItem,

  {
    type: "newsletter-inline",
    label: "La newsletter de Marco",
    description: "Una vez a la semana: el gadget más interesante de la semana y mis 3 links favoritos.",
    placeholder: "tu@email.com",
    buttonLabel: "Suscribirme",
    actionUrl: "https://marcoreyes.beehiiv.com/subscribe",
    enabled: true,
  } satisfies NewsletterInlineItem,

  { type: "divider", style: "line" } satisfies Divider,
  { type: "section-header", label: "Colabs y contacto" } satisfies SectionHeader,

  { type: "link", platform: "email", label: "Colabs & Sponsors", url: "mailto:colabs@marcoreyes.com", description: "Para propuestas de marca", enabled: true } satisfies LinkItem,
  { type: "link", platform: "whatsapp", label: "WhatsApp Business", url: "https://wa.me/521234567890", enabled: true } satisfies LinkItem,

  { type: "section-header", label: "Equipo" } satisfies SectionHeader,

  {
    type: "rich-media",
    mediaType: "image-gallery",
    label: "Setup & Gear",
    images: [
      { src: "https://picsum.photos/seed/gear1/400/400", alt: "Setup principal" },
      { src: "https://picsum.photos/seed/gear2/400/400", alt: "Cámara" },
      { src: "https://picsum.photos/seed/gear3/400/400", alt: "Micrófono" },
      { src: "https://picsum.photos/seed/gear4/400/400", alt: "Iluminación" },
    ],
    description: "Links de afiliado en la descripción de cada video",
    enabled: true,
  } satisfies RichMediaItem,

  { type: "utility", utilityType: "clock", label: "Mi hora local", timezone: "America/Mexico_City", enabled: true } satisfies UtilityItem,
  { type: "utility", utilityType: "coupon", label: "10% off en Nord VPN", description: "Mi sponsor de confianza — código exclusivo", code: "MARCOREYES10", enabled: true } satisfies UtilityItem,
];
