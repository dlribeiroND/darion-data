"use client";

import Link from "next/link";
import { site } from "@/content/site.config";
import BrandLogo from "@/components/brand-logo";
import { getWhatsAppUrl } from "@/components/whatsapp-button";

export default function SiteFooter() {
  const whatsappUrl = getWhatsAppUrl();

  const handleOpenCookies = (e) => {
    e.preventDefault();
    window.dispatchEvent(new Event("open-cookie-banner"));
  };

  return (
    <footer className="border-t border-black/[0.06] bg-[#f5f5f7] text-[#86868b]">
      {/* Nota Única de Marcas Registradas */}
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-6 text-[11px] leading-relaxed text-[#86868b] sm:px-6 lg:px-8 border-b border-black/[0.06]">
        <p>
          Fortinet®, FortiGate®, FortiManager®, FortiAnalyzer®, FortiSwitch®, FortiAP® e Fortinet Security Fabric são marcas registradas ou marcas da Fortinet, Inc. e/ou de suas afiliadas. A Darion Data é parceira Fortinet no modelo Integrator.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* Identificação da Empresa */}
        <div className="lg:col-span-1">
          <BrandLogo size="h-10" />
          <p className="mt-4 text-xs leading-relaxed text-[#6e6e73]">
            {site.legalName}
          </p>
          <p className="mt-1 text-xs text-[#6e6e73]">
            CNPJ: {site.cnpj}
          </p>
          <p className="text-xs text-[#6e6e73]">
            {site.city} — {site.state}
          </p>
        </div>

        {/* Serviços e Especialidades */}
        <div>
          <h3 className="text-xs font-semibold text-[#1d1d1f]">
            Frentes de Atuação
          </h3>
          <ul className="mt-3.5 space-y-2.5 text-xs text-[#6e6e73]">
            <li>
              <Link href="/redes-seguranca" className="transition-colors hover:text-[#0071e3]">
                Redes & Segurança
              </Link>
            </li>
            <li>
              <Link href="/automacao" className="transition-colors hover:text-[#0071e3]">
                Automação & IA
              </Link>
            </li>
            <li>
              <Link href="/shadow-ai" className="transition-colors hover:text-[#0071e3]">
                Governança de IA (Shadow AI)
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="transition-colors hover:text-[#0071e3]">
                Sobre a Empresa
              </Link>
            </li>
          </ul>
        </div>

        {/* Institucional & Contato Comercial */}
        <div>
          <h3 className="text-xs font-semibold text-[#1d1d1f]">
            Comercial & Projetos
          </h3>
          <ul className="mt-3.5 space-y-2.5 text-xs text-[#6e6e73]">
            <li>
              <Link href="/contato" className="transition-colors hover:text-[#0071e3]">
                Conte o seu cenário
              </Link>
            </li>
            <li className="text-[#6e6e73]">
              <a href={`mailto:${site.emailCommercial}`} className="hover:text-[#0071e3]">
                {site.emailCommercial}
              </a>
            </li>
            {site.phoneDisplay && (
              <li className="text-[#6e6e73]">{site.phoneDisplay}</li>
            )}
            {whatsappUrl && (
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:underline"
                >
                  WhatsApp Comercial
                </a>
              </li>
            )}
          </ul>
        </div>

        {/* SAC e Atendimento ao Público */}
        <div>
          <h3 className="text-xs font-semibold text-[#1d1d1f]">
            SAC & Canal Aberto
          </h3>
          <ul className="mt-3.5 space-y-2.5 text-xs text-[#6e6e73]">
            <li>
              <Link href="/sac" className="transition-colors hover:text-[#0071e3]">
                SAC (Atendimento ao Público)
              </Link>
            </li>
            <li className="text-[#6e6e73]">
              <a href={`mailto:${site.emailSac}`} className="hover:text-[#0071e3]">
                {site.emailSac}
              </a>
            </li>
            <li>
              <Link href="/compliance" className="transition-colors hover:text-[#0071e3]">
                Compliance & Governança
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Linha Inferior com Políticas e Direitos */}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-black/[0.06] px-4 py-6 text-xs text-[#86868b] sm:flex-row sm:px-6 lg:px-8">
        <div>
          © {site.foundedYear} {site.legalName}
        </div>
        <div className="flex flex-wrap items-center gap-5 text-[11px]">
          <Link href="/privacidade" className="hover:text-[#1d1d1f] transition-colors">
            Privacidade
          </Link>
          <Link href="/termos" className="hover:text-[#1d1d1f] transition-colors">
            Termos de Uso
          </Link>
          <Link href="/compliance" className="hover:text-[#1d1d1f] transition-colors">
            Compliance
          </Link>
          <Link href="/sac" className="hover:text-[#1d1d1f] transition-colors">
            SAC
          </Link>
          <button
            type="button"
            onClick={handleOpenCookies}
            className="text-[#86868b] hover:text-[#1d1d1f] transition-colors underline"
          >
            Gerenciar cookies
          </button>
        </div>
      </div>
    </footer>
  );
}
