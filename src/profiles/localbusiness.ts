// Profile: Negocio Local — Cafetería "La Corriente", Medellín
import type {
  PageItem, LinkItem, SectionHeader, Divider, TextBlock,
  SocialProofItem, UtilityItem, NewsletterInlineItem, PriceItem,
} from "@/types/config";

export const pageItems: PageItem[] = [

  {
    type: "text-block",
    style: "announcement",
    label: "☕ Happy Hour: lun–vie 3–5pm",
    content: "Todos los espressos a mitad de precio. Solo en el local — presenta este link.",
    enabled: true,
  } satisfies TextBlock,

  { type: "section-header", label: "Pide ya" } satisfies SectionHeader,

  { type: "link", platform: "order-whatsapp", label: "Pedir por WhatsApp",  url: "https://wa.me/573001234567",        highlight: true, description: "Pedidos y domicilios",        enabled: true } satisfies LinkItem,
  { type: "link", platform: "reservation",    label: "Reservar mesa",       url: "https://reservas.lacorriente.co",   highlight: true, description: "Hasta 10 personas",          enabled: true } satisfies LinkItem,
  { type: "link", platform: "menu-link",      label: "Ver menú completo",   url: "https://lacorriente.co/menu",       description: "Desayunos, almuerzos y cafetería", enabled: true } satisfies LinkItem,
  { type: "link", platform: "delivery-rappi", label: "Delivery — Rappi",    url: "https://rappi.com/lacorriente",     description: "Entrega en 30 min",          enabled: true, width: "half" } satisfies LinkItem,
  { type: "link", platform: "delivery-ifood", label: "Delivery — iFood",    url: "https://ifood.com.co/lacorriente",  description: "Entrega en 30 min",          enabled: true, width: "half" } satisfies LinkItem,

  { type: "divider", style: "line" } satisfies Divider,
  { type: "section-header", label: "Nuestra historia" } satisfies SectionHeader,

  {
    type: "text-block",
    style: "card",
    label: "Café de origen colombiano desde 2018",
    content: "La Corriente nació en El Poblado con una obsesión: servir el mejor café de especialidad de Medellín. Trabajamos directamente con 4 fincas de Huila y Nariño.",
    enabled: true,
  } satisfies TextBlock,

  {
    type: "social-proof",
    proofType: "stats",
    stats: [
      { label: "Años abiertos", value: "6" },
      { label: "Reseñas ⭐", value: "4.9" },
      { label: "Variedades café", value: "12" },
      { label: "Clientes/día", value: "280+" },
    ],
    enabled: true,
  } satisfies SocialProofItem,

  {
    type: "social-proof",
    proofType: "testimonial",
    quote: "El mejor flat white de Medellín, sin discusión. El espacio es hermoso y el equipo siempre está dispuesto a explicar el origen del café.",
    author: "Mariana López",
    authorTitle: "Reseña de Google Maps ⭐⭐⭐⭐⭐",
    authorAvatar: "https://i.pravatar.cc/64?img=9",
    enabled: true,
  } satisfies SocialProofItem,

  { type: "section-header", label: "Planes & Suscripciones" } satisfies SectionHeader,

  {
    type: "price", label: "Pase Mensual", price: "$89K", period: "mes",
    description: "Un café al día, todos los días del mes. El plan de los regulares.",
    features: ["1 café diario (cualquier tipo)", "Prioridad en mesa", "10% off en comida"],
    buttonLabel: "Suscribirme", url: "https://wa.me/573001234567?text=Quiero+el+pase+mensual",
    enabled: true, width: "half",
  } satisfies PriceItem,

  {
    type: "price", label: "Kit Barista en Casa", price: "$185K", period: "único",
    description: "250g de nuestro blend estrella + guía de preparación + filtros V60.",
    features: ["250g blend estrella", "Guía de preparación", "Filtros V60 x25"],
    buttonLabel: "Comprar kit", url: "https://lacorriente.co/tienda",
    enabled: true, width: "half",
  } satisfies PriceItem,

  { type: "divider", style: "line" } satisfies Divider,
  { type: "section-header", label: "Síguenos" } satisfies SectionHeader,

  { type: "link", platform: "instagram", label: "Instagram",  url: "https://instagram.com/lacorrientecafe", description: "Fotos diarias y stories del día", enabled: true } satisfies LinkItem,
  { type: "link", platform: "tiktok",    label: "TikTok",     url: "https://tiktok.com/@lacorrientecafe",  description: "Proceso, recetas y momentos",  enabled: true } satisfies LinkItem,

  {
    type: "newsletter-inline",
    label: "Club La Corriente",
    description: "Lanzamientos de nuevos orígenes, eventos de cata y descuentos solo para suscriptores.",
    placeholder: "tu@email.com",
    buttonLabel: "Unirme al club",
    actionUrl: "https://lacorriente.beehiiv.com/subscribe",
    enabled: true,
  } satisfies NewsletterInlineItem,

  { type: "divider", style: "line" } satisfies Divider,
  { type: "section-header", label: "Encuéntranos" } satisfies SectionHeader,

  { type: "utility", utilityType: "map", label: "Cra. 37 #8A-31, El Poblado", address: "El Poblado, Medellín, Colombia", mapUrl: "https://maps.google.com/?q=El+Poblado,+Medellin", enabled: true } satisfies UtilityItem,

  {
    type: "text-block",
    style: "card",
    label: "Horarios",
    content: "<strong>Lunes a viernes</strong> — 7:00 am a 8:00 pm<br><strong>Sábados</strong> — 8:00 am a 9:00 pm<br><strong>Domingos</strong> — 9:00 am a 6:00 pm",
    enabled: true,
  } satisfies TextBlock,

  { type: "utility", utilityType: "coupon", label: "Primera visita", description: "Muestra este código y tu primer café va por nuestra cuenta", code: "BIENVENIDO", enabled: true } satisfies UtilityItem,
  { type: "utility", utilityType: "vcard",  label: "Guarda nuestro contacto", description: "Para pedidos y reservas rápidas", enabled: true } satisfies UtilityItem,
];
