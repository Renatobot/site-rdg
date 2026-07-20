export const WHATSAPP_NUMBER = "5521920078469";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_URL = waLink(
  "Olá! Vim pelo site da RDG Digital e gostaria de conversar."
);

export const CONTACT_EMAIL = "contato@rdgdigital.com.br";
export const CONTACT_EMAIL_URL = `mailto:${CONTACT_EMAIL}`;

export const LOGO_URL = "/logo.png";
