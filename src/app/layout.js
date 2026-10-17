import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import TechBackground from "@/components/tech-background";
import CookieBanner from "@/components/cookie-banner";
import WhatsAppButton from "@/components/whatsapp-button";
import { site } from "@/content/site.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.dariondata.com.br"),
  title: {
    default: "Redes corporativas, SD-WAN, segurança Fortinet e automação | Darion Data",
    template: "%s | Darion Data",
  },
  description:
    "A Darion Data projeta e implanta redes multi-site, SD-WAN e segurança de perímetro com tecnologia Fortinet. Também trabalha com automação de processos e de redes, e com a governança do uso de IA dentro das empresas.",
  alternates: {
    canonical: "https://www.dariondata.com.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.dariondata.com.br",
    siteName: site.brandName,
    title: "Redes corporativas, SD-WAN, segurança Fortinet e automação | Darion Data",
    description:
      "A Darion Data projeta e implanta redes multi-site, SD-WAN e segurança de perímetro com tecnologia Fortinet. Também trabalha com automação de processos e de redes, e com a governança do uso de IA dentro das empresas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Darion Data",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Redes corporativas, SD-WAN, segurança Fortinet e automação | Darion Data",
    description:
      "A Darion Data projeta e implanta redes multi-site, SD-WAN e segurança de perímetro com tecnologia Fortinet. Também trabalha com automação de processos e de redes, e com a governança do uso de IA dentro das empresas.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.brandName,
  legalName: site.legalName,
  url: "https://www.dariondata.com.br",
  taxID: site.cnpj,
  email: site.emailCommercial,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.state,
    addressCountry: "BR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-[#fbfbfd] text-[#1d1d1f] selection:bg-[#0071e3]/20 selection:text-[#0071e3]">
        <TechBackground />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <CookieBanner />
        <WhatsAppButton variant="floating" />
      </body>
    </html>
  );
}
