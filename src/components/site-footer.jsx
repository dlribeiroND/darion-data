import Link from "next/link";
import { NAV_LINKS } from "@/lib/nav-links";
import BrandLogo from "@/components/brand-logo";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.06] bg-[#f5f5f7] text-[#86868b]">
      {/* Disclaimer / Rodapé institucional estilo Apple */}
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-6 text-[11px] leading-relaxed text-[#86868b] sm:px-6 lg:px-8 border-b border-black/[0.06]">
        <p>
          1. Fortinet, FortiGate, FortiAnalyzer, FortiManager e Fortinet Security Fabric são marcas registradas de Fortinet, Inc. A Darion Data projeta, integra e orquestra soluções de infraestrutura e cibersegurança alinhadas às melhores práticas e arquiteturas de mercado.
        </p>
        <p className="mt-2">
          2. A automação agêntica e as políticas de segurança são customizadas de acordo com as necessidades e conformidades regulatórias (como LGPD e ISO 27001) de cada organização.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <BrandLogo size="h-7" />
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-[#6e6e73]">
            Automação de processos, integração de sistemas e redes corporativas com alta escalabilidade potencializando equipes e o seu negócio, sustentado por conceitos de cibersegurança fortinet.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-[#1d1d1f]">
            Soluções & Tecnologia
          </h3>
          <ul className="mt-3.5 space-y-2.5 text-xs text-[#6e6e73]">
            <li>
              <Link href="/solucoes" className="transition-colors hover:text-[#0071e3]">
                Automação de Processos
              </Link>
            </li>
            <li>
              <Link href="/solucoes" className="transition-colors hover:text-[#0071e3]">
                Agentes de IA & Produtividade
              </Link>
            </li>
            <li>
              <Link href="/solucoes" className="transition-colors hover:text-[#0071e3]">
                Integração de Sistemas
              </Link>
            </li>
            <li>
              <Link href="/seguranca" className="transition-colors hover:text-[#0071e3]">
                Redes & Cibersegurança
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-[#1d1d1f]">
            Navegação
          </h3>
          <ul className="mt-3.5 space-y-2.5 text-xs text-[#6e6e73]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-[#0071e3]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-[#1d1d1f]">
            Atendimento
          </h3>
          <ul className="mt-3.5 space-y-2.5 text-xs text-[#6e6e73]">
            <li>
              <Link href="/sac" className="transition-colors hover:text-[#0071e3]">
                Canal de SAC & Contato
              </Link>
            </li>
            <li className="text-[#86868b]">suporte@dariondata.com.br</li>
            <li className="text-[#86868b]">dariondata.com.br</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-black/[0.06] px-4 py-6 text-xs text-[#86868b] sm:flex-row sm:px-6 lg:px-8">
        <div>
          Copyright © {year} Darion Data. Todos os direitos reservados.
        </div>
        <div className="flex gap-6 text-[11px]">
          <Link href="/compliance" className="hover:text-[#1d1d1f] transition-colors">
            Privacidade
          </Link>
          <span className="hover:text-[#1d1d1f] cursor-pointer">Termos de Uso</span>
          <Link href="/compliance" className="hover:text-[#1d1d1f] transition-colors">
            Segurança & Conformidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
