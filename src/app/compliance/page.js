import Link from "next/link";
import ComplianceAccordions from "@/components/compliance-accordions";

export const metadata = {
  title: "Compliance & Políticas de Privacidade | Darion Data",
  description:
    "Políticas corporativas de privacidade, segurança da informação e ética da Darion Data. Transparência, governança e conformidade com a LGPD (Lei 13.709/2018).",
};

export default function CompliancePage() {
  return (
    <div className="bg-[#fbfbfd] text-[#1d1d1f]">
      {/* Hero Section estilo Apple */}
      <section className="relative overflow-hidden border-b border-black/[0.06] pt-14 pb-16 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium text-[#86868b] shadow-sm mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0071e3]"></span>
            POLÍTICAS E PRIVACIDADE CORPORATIVA
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#1d1d1f]">
            Políticas e{" "}
            <span className="bg-gradient-to-r from-[#0071e3] to-[#2997ff] bg-clip-text text-transparent">
              Privacidade
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-[#6e6e73] leading-relaxed">
            A Darion Data tem o objetivo de ser transparente perante seus clientes, parceiros e sociedade.
            Visando isso deixamos dispostas nossas políticas.
          </p>
        </div>
      </section>

      {/* Portais de Requisições de Titulares e Preferências */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1: DSR */}
          <div className="group flex flex-col justify-between rounded-2xl border border-black/[0.08] bg-white p-7 shadow-sm transition-all hover:border-[#0071e3]/40 hover:shadow-md">
            <div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0071e3]/10 text-[#0071e3] mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-[#1d1d1f]">
                Portal de Requisições dos Titulares de Dados
              </h2>
              <p className="mt-2 text-sm text-[#6e6e73] leading-relaxed">
                Para nos contatar com relação à privacidade e formalizar requisições relacionadas aos seus dados pessoais em conformidade com a LGPD (Lei nº 13.709/2018).
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/sac"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] transition-colors group-hover:text-[#0077ed]"
              >
                Abrir requisição via canal oficial
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Preferências */}
          <div className="group flex flex-col justify-between rounded-2xl border border-black/[0.08] bg-white p-7 shadow-sm transition-all hover:border-[#0071e3]/40 hover:shadow-md">
            <div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#34c759]/10 text-[#34c759] mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-[#1d1d1f]">
                Portal de Centro de Preferências
              </h2>
              <p className="mt-2 text-sm text-[#6e6e73] leading-relaxed">
                Para você consultar diretrizes de consentimento, cookies e gerenciar as preferências no tratamento corporativo de informações.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/sac"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#34c759] transition-colors group-hover:text-[#2da84a]"
              >
                Gerenciar preferências com a Darion Data
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Institucional de Transparência */}
      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-[#f5f5f7]/80 p-8 sm:p-12 backdrop-blur-sm">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Compromisso Corporativo
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              Transparência Darion Data: Nossas Políticas para Você
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#6e6e73] leading-relaxed">
              A <strong>Darion Data</strong> é comprometida com a transparência em suas operações e relacionamentos.
              Acreditamos que a confiança mútua é fundamental para o fortalecimento de laços com nossos clientes, parceiros e a sociedade.
              Por isso, desenvolvemos políticas claras e acessíveis, que refletem nosso compromisso com a ética e a responsabilidade.
            </p>
            <p className="mt-3 text-sm sm:text-base text-[#6e6e73] leading-relaxed">
              Convidamos todos a conhecerem nossas diretrizes, que garantem a proteção de dados e informações, assegurando que você esteja sempre bem informado sobre como operamos. Estamos aqui para construir um futuro mais seguro e transparente juntos.
            </p>
          </div>
        </div>
      </section>

      {/* Acordeões Detalhados das Três Políticas */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1d1d1f]">
            Diretrizes e Políticas Oficiais
          </h2>
          <p className="text-sm text-[#86868b] mt-1">
            Clique em cada política para expandir o conteúdo na íntegra.
          </p>
        </div>

        <ComplianceAccordions />
      </section>

      {/* CTA Final para SAC / Dúvidas */}
      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/[0.08] bg-white p-8 text-center shadow-sm">
          <h3 className="text-lg font-semibold text-[#1d1d1f]">
            Dúvidas sobre nossas políticas ou conformidade regulatória?
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
            Nossa equipe técnica e o encarregado de privacidade da Darion Data estão à disposição para responder dúvidas e fornecer esclarecimentos corporativos.
          </p>
          <div className="mt-5">
            <Link
              href="/sac"
              className="inline-flex items-center justify-center rounded-full bg-[#0071e3] px-5 py-2.5 text-xs font-medium text-white shadow-sm transition-all hover:bg-[#0077ed]"
            >
              Falar com o canal de atendimento
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
