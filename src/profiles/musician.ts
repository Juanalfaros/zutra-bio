// Profile: Músico / Artista — Valeria Soto, cantautora indie
import type {
  PageItem, LinkItem, SectionHeader, Divider, TextBlock,
  RichMediaItem, SocialProofItem, UtilityItem, PriceItem,
} from "@/types/config";

export const pageItems: PageItem[] = [

  {
    type: "text-block",
    style: "announcement",
    label: "¡Nuevo EP disponible ya!",
    content: "\"Luz de Madrugada\" — 5 canciones, ahora en todas las plataformas.",
    enabled: true,
  } satisfies TextBlock,

  { type: "section-header", label: "Escúchame" } satisfies SectionHeader,

  {
    type: "rich-media",
    mediaType: "spotify-album",
    label: "Luz de Madrugada — EP",
    url: "https://open.spotify.com/album/4aawyAB9vmqN3uQ7FjRGTy",
    description: "Mi EP debut — 5 canciones escritas en la pandemia",
    enabled: true,
  } satisfies RichMediaItem,

  {
    type: "rich-media",
    mediaType: "soundcloud-track",
    label: "Demo en SoundCloud",
    url: "https://soundcloud.com/forss/flickermood",
    description: "Versión acústica de «Quedarse»",
    enabled: true,
  } satisfies RichMediaItem,

  { type: "section-header", label: "Último video" } satisfies SectionHeader,

  {
    type: "rich-media",
    mediaType: "youtube-video",
    label: "Quedarse — Video Oficial",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    enabled: true,
  } satisfies RichMediaItem,

  { type: "section-header", label: "Mis plataformas" } satisfies SectionHeader,

  { type: "link", platform: "spotify",        label: "Spotify",        url: "https://open.spotify.com/artist/valeriasoto", enabled: true } satisfies LinkItem,
  { type: "link", platform: "apple-music",      label: "Apple Music",    url: "https://music.apple.com/artist/valeriasoto", enabled: true } satisfies LinkItem,
  { type: "link", platform: "youtube",         label: "YouTube",        url: "https://youtube.com/@valeriasoto", description: "Videos, lives y detrás de cámara", enabled: true } satisfies LinkItem,
  { type: "link", platform: "instagram",       label: "Instagram",      url: "https://instagram.com/valeriasotomusic", enabled: true, width: "half" } satisfies LinkItem,
  { type: "link", platform: "tiktok",          label: "TikTok",         url: "https://tiktok.com/@valeriasotomusic", enabled: true, width: "half" } satisfies LinkItem,
  { type: "link", platform: "soundcloud",      label: "SoundCloud",     url: "https://soundcloud.com/valeriasoto", description: "Demos y sessions", enabled: true } satisfies LinkItem,

  { type: "divider", style: "line" } satisfies Divider,
  { type: "section-header", label: "Shows & Entradas" } satisfies SectionHeader,

  {
    type: "text-block",
    style: "card",
    label: "Fechas 2025",
    content: "<strong>14 Jun</strong> — Club Chocolate, Santiago<br><strong>28 Jun</strong> — Teatro Nescafé, Valparaíso<br><strong>5 Jul</strong> — Foro Indie, Buenos Aires",
    enabled: true,
  } satisfies TextBlock,

  { type: "link", platform: "ticketing", label: "Comprar entradas", url: "https://passline.com/valeriasoto", highlight: true, enabled: true } satisfies LinkItem,

  { type: "divider", style: "line" } satisfies Divider,
  { type: "section-header", label: "Apóyame" } satisfies SectionHeader,

  {
    type: "social-proof",
    proofType: "stats",
    stats: [
      { label: "Streams", value: "1.2M" },
      { label: "Seguidores", value: "42K" },
      { label: "Países", value: "28" },
      { label: "Shows 2024", value: "32" },
    ],
    enabled: true,
  } satisfies SocialProofItem,

  {
    type: "price", label: "Fan Supporter", price: "$5", period: "mes",
    description: "Acceso a demos exclusivas, behind the scenes y tu nombre en el próximo álbum.",
    features: ["Demos exclusivas", "Backstage digital", "Tu nombre en créditos"],
    buttonLabel: "Apoyarme", url: "https://patreon.com/valeriasoto",
    enabled: true, width: "half",
  } satisfies PriceItem,

  {
    type: "price", label: "Merch Bundle", price: "$45", period: "único",
    description: "Vinilo firmado + camiseta edición limitada + poster A3.",
    features: ["Vinilo firmado", "Camiseta L.E.", "Poster A3"],
    buttonLabel: "Comprar", url: "https://valeriasoto.shop",
    enabled: true, width: "half",
  } satisfies PriceItem,

  { type: "divider", style: "dots" } satisfies Divider,

  { type: "link", platform: "email", label: "Booking & Prensa", url: "mailto:booking@valeriasoto.com", description: "Shows, festivales y medios", enabled: true } satisfies LinkItem,
  { type: "link", platform: "whatsapp", label: "WhatsApp", url: "https://wa.me/56987654321", enabled: true } satisfies LinkItem,
  { type: "utility", utilityType: "qr-code", label: "Compartir mi música", description: "Escanea y comparte", qrData: "https://valeriasoto.com", enabled: true } satisfies UtilityItem,
];
