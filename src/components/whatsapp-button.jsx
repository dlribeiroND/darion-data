"use client";

import { site } from "@/content/site.config";

export function getWhatsAppUrl(customMessage) {
  const number = (site.whatsappNumber || "").replace(/\D/g, "");
  if (!number) return null;

  if (process.env.NODE_ENV === "development" && (!/^\d{10,15}$/.test(number))) {
    console.warn(`[whatsapp] Número configurado "${site.whatsappNumber}" parece inválido. Use formato com DDI (ex.: 5531999999999).`);
  }

  const message = customMessage || site.whatsappDefaultMessage || "";
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}${encoded ? `?text=${encoded}` : ""}`;
}

export default function WhatsAppButton({ variant = "floating", message, className = "" }) {
  const url = getWhatsAppUrl(message);
  if (!url) return null;

  if (variant === "header") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className={`inline-flex items-center gap-1.5 rounded-full border border-emerald-600/30 bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-800 transition-colors hover:bg-emerald-100 ${className}`}
      >
        <WhatsAppIcon className="h-3.5 w-3.5 fill-emerald-600" />
        <span>WhatsApp</span>
      </a>
    );
  }

  if (variant === "inline") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className={`inline-flex items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50 px-5 py-2.5 text-xs font-semibold text-emerald-800 transition-all hover:bg-emerald-100 ${className}`}
      >
        <WhatsAppIcon className="h-4 w-4 fill-emerald-600" />
        <span>Conversar no WhatsApp</span>
      </a>
    );
  }

  // Floating variant
  return (
    <aside
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp com a Darion Data"
        className={`flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform hover:scale-105 active:scale-95 ${className}`}
      >
        <WhatsAppIcon className="h-6 w-6 fill-white" />
      </a>
    </aside>
  );
}

function WhatsAppIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M17.507 14.307l-.009.075c-.261 1.096-1.503 1.83-2.54 1.83-.808 0-1.895-.45-3.593-1.637-2.078-1.455-3.414-3.477-3.714-3.992-.3-.514-.032-.792.228-1.05.233-.232.518-.598.777-.898.258-.3.344-.514.516-.856.172-.343.086-.643-.043-.9-.129-.257-1.162-2.798-1.591-3.827-.419-1.003-.846-.867-1.162-.883-.3-.015-.643-.018-.987-.018-.343 0-.901.129-1.373.643-.472.514-1.802 1.758-1.802 4.286 0 2.529 1.845 4.972 2.102 5.315.258.343 3.633 5.548 8.802 7.781 1.23.531 2.19.848 2.939 1.085 1.235.392 2.36.337 3.249.204.992-.149 3.044-1.244 3.473-2.444.429-1.2.429-2.229.3-2.443-.129-.214-.472-.343-.986-.6zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.436 5.178L2 22l4.981-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  );
}
