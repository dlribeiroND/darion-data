"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/nav-links";
import BrandLogo from "@/components/brand-logo";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#fbfbfd]/80 backdrop-blur-xl transition-colors">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center transition-opacity hover:opacity-85" onClick={() => setMenuOpen(false)}>
          <BrandLogo size="h-7" />
        </Link>

        <nav className="hidden items-center gap-7 text-[13px] font-normal text-[#1d1d1f]/80 md:flex">
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

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/sac"
            className="inline-flex items-center justify-center rounded-full bg-[#0071e3] px-4 py-1.5 text-xs font-medium text-white shadow-sm transition-all hover:bg-[#0077ed] active:scale-[0.98]"
          >
            Fale conosco
          </Link>
        </div>

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
          <Link
            href="/sac"
            onClick={() => setMenuOpen(false)}
            className="mt-5 block w-full rounded-full bg-[#0071e3] px-4 py-2.5 text-center text-xs font-semibold text-white shadow-sm hover:bg-[#0077ed]"
          >
            Fale conosco
          </Link>
        </nav>
      )}
    </header>
  );
}
