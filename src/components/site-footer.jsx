import Link from "next/link";
import { NAV_LINKS } from "@/lib/nav-links";
import BrandLogo from "@/components/brand-logo";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <BrandLogo size="h-8" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Automatize fluxos, integre sistemas e escale sua operação com uma plataforma agêntica.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
            Atendimento
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/sac" className="transition-colors hover:text-white">
                Central de SAC
              </Link>
            </li>
            <li>dariondata.com.br</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
        © {year} Darion Data. Todos os direitos reservados.
      </div>
    </footer>
  );
}
