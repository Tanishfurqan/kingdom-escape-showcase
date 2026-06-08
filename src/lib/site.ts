export const SITE = {
  name: "Sugriva's Kingdom",
  tagline: "A Boutique Heritage Resort in Hampi",
  // TODO: replace with the real WhatsApp number (with country code, no '+' or spaces)
  whatsappNumber: "919876543210",
  whatsappDisplay: "+91 98765 43210",
  instagram: "https://www.instagram.com/sugrivaskingdom",
  instagramHandle: "@sugrivaskingdom",
  // Hampi / Anegundi area — adjust pin when exact location is shared
  address: "Near Hampi, Anegundi, Koppal District, Karnataka 583227, India",
  mapEmbed:
    "https://www.google.com/maps?q=Anegundi+Hampi+Karnataka&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Anegundi+Hampi+Karnataka",
  email: "stay@sugrivaskingdom.com",
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}