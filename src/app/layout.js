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
  metadataBase: new URL("https://dariondata.com.br"),
  title: {
    default: "Darion Data | Redes corporativas, SD-WAN, segurança Fortinet e automação",
    template: "%s | Darion Data",
  },
  description:
    "A Darion Data projeta, implanta e evolui redes multi-site, SD-WAN e segurança de perímetro com tecnologia Fortinet, automação de processos e governança de Shadow AI.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://dariondata.com.br",
    siteName: site.brandName,
    title: "Darion Data | Redes corporativas, SD-WAN, segurança Fortinet e automação",
    description:
      "Redes multi-site, SD-WAN e segurança perimetral Fortinet, automação e inteligência de processos e governança de IA corporativa.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.brandName,
  legalName: site.legalName,
  url: "https://dariondata.com.br",
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
