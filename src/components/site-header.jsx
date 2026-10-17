"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, UTILITY_LINKS } from "@/lib/nav-links";
import BrandLogo from "@/components/brand-logo";
import WhatsAppButton from "@/components/whatsapp-button";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#fbfbfd]/80 backdrop-blur-xl transition-colors">
      {/* Barra de Utilidades no Topo (Desktop): SAC e Compliance */}
      <div className="hidden border-b border-black/[0.04] bg-[#f5f5f7]/60 md:block">
        <div className="mx-auto flex h-7 w-full max-w-6xl items-center justify-end gap-5 px-4 text-[11px] font-normal text-[#86868b] sm:px-6 lg:px-8">
          {UTILITY_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#0071e3]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-85"
          onClick={() => setMenuOpen(false)}
        >
          <BrandLogo size="h-7" />
        </Link>

        {/* Navegação Principal Desktop */}
        <nav className="hidden items-center gap-6 text-[13px] font-normal text-[#1d1d1f]/80 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#0071e3]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTAs Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <WhatsAppButton variant="header" />
          <Link
            href="/contato"
            className="inline-flex items-center justify-center rounded-full bg-[#0071e3] px-4 py-1.5 text-xs font-medium text-white shadow-sm transition-all hover:bg-[#0077ed] active:scale-[0.98]"
          >
            Agendar conversa técnica
          </Link>
        </div>

        {/* Botão Mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#1d1d1f] hover:bg-black/5 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <nav className="border-t border-black/[0.06] bg-white/95 px-5 pb-6 pt-4 backdrop-blur-2xl md:hidden animate-in fade-in duration-200">
          <ul className="flex flex-col gap-3.5 text-sm font-medium text-[#1d1d1f]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-1 transition-colors hover:text-[#0071e3]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Destaque para Canais Públicos e de Governança no Mobile */}
          <div className="mt-4 border-t border-black/[0.06] pt-3 flex items-center gap-4 text-xs font-medium text-[#6e6e73]">
            {UTILITY_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#0071e3]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <WhatsAppButton variant="header" className="justify-center py-2" />
            <Link
              href="/contato"
              onClick={() => setMenuOpen(false)}
              className="block w-full rounded-full bg-[#0071e3] px-4 py-2.5 text-center text-xs font-semibold text-white shadow-sm hover:bg-[#0077ed]"
            >
              Agendar conversa técnica
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
