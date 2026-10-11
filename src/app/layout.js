import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import TechBackground from "@/components/tech-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Darion Data | Automação de Processos, Redes & Cibersegurança",
  description:
    "Automatize processos manuais, integre sistemas e potencialize sua equipe com agentes inteligentes — sustentados por redes de alta disponibilidade e cibersegurança.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#fbfbfd] text-[#1d1d1f] selection:bg-[#0071e3]/20 selection:text-[#0071e3]">
        <TechBackground />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
