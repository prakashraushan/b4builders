export const SITE_URL = "https://b4builders.in";
export const WHATSAPP_NUMBER = "919035817133";
export const PHONE_DISPLAY = "+91 90358 17133";
export const EMAIL = "b4builders1@gmail.com";
export const ADDRESS_LINE1 = "#2623, 27th Main, HSR Layout, Sector 1";
export const ADDRESS_LINE2 = "Bengaluru – 560102, Karnataka";

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi B4 Builders, I'd like to enquire about your services."
);

export const socials: { label: string; href: string }[] = [
  { label: "Instagram", href: "https://www.instagram.com/b4builders_" },
  { label: "YouTube", href: "https://www.youtube.com/@b4builders" },
];

export const packages: { name: string; tagline: string; rate: string; band: string; highlight: boolean }[] = [
  { name: "Basic", tagline: "Solid, honest build", rate: "₹2,100", band: "₹1,950–2,200", highlight: false },
  { name: "Standard", tagline: "Best value", rate: "₹2,500", band: "₹2,400–2,650", highlight: true },
  { name: "Premium", tagline: "Top-tier finishes", rate: "₹3,000", band: "₹2,850–3,300", highlight: false },
];
