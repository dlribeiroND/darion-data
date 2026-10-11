import Link from "next/link";

export const metadata = {
  title: "Redes & Cibersegurança | Darion Data",
  description:
    "Infraestrutura de redes e cibersegurança corporativa inspirada no ecossistema Fortinet (NGFW FortiGate, Secure SD-WAN e Zero Trust) para sustentar operações críticas.",
};

const FABRIC_PILLARS = [
  {
    tag: "Proteção de Borda & Núcleo",
    title: "Next-Generation Firewall (NGFW)",
    subtitle: "Padrão de referência do ecossistema FortiGate",
    description:
      "Inspeção profunda de pacotes (DPI) em tráfego criptografado SSL/TLS, sistema de prevenção de intrusão (IPS), filtragem web corporativa e proteção contra ransomware para manter seus dados e automações blindados.",
    highlights: [
      "Processamento veloz com baixa latência para não travar sistemas",
      "Inspeção SSL profunda sem comprometer a banda de internet",
      "Prevenção contra ransomware e vazamento de dados",
      "Controle granular de aplicações e acessos de usuários",
    ],
  },
  {
    tag: "Conectividade Distribuída",
    title: "Secure SD-WAN Corporativo",
    subtitle: "Redes WAN orientadas a estabilidade de sistemas",
    description:
      "Conectividade unificada entre matriz, filiais, centros de distribuição e nuvem. Roteamento inteligente que monitora a qualidade dos links de internet para manter sistemas de ERP, automações e VoIP operando sem oscilações.",
    highlights: [
      "Redução de custos substituindo links dedicados caros (MPLS)",
      "Failover automático de links sem interrupção de sessões",
      "Túneis IPsec de alta performance com criptografia AES-256",
      "Priorização dinâmica para tráfego em nuvem e aplicações vitais",
    ],
  },
  {
    tag: "Postura e Identidade",
    title: "Zero Trust Network Access (ZTNA)",
    subtitle: "Acesso por aplicação sem confiança implícita",
    description:
      "Evolução sobre VPNs tradicionais: o colaborador ou terceiro tem sua identidade e dispositivo verificados continuamente, obtendo acesso apenas à aplicação específica de que necessita, contendo qualquer risco lateral.",
    highlights: [
      "Acesso por contexto (dispositivo corporativo, integridade, antivírus)",
      "Microssegmentação da rede interna para conter ameaças",
      "Experiência de acesso idêntica no escritório ou em trabalho remoto",
      "Autenticação multifator (MFA) nativamente orquestrada",
    ],
  },
  {
    tag: "Visibilidade & Inteligência",
    title: "Telemetria & Gestão Centralizada",
    subtitle: "Malha integrada de monitoramento",
    description:
      "Visibilidade completa de toda a infraestrutura física e lógica (inspirada em consoles de gestão como FortiAnalyzer e FortiManager). Logs unificados para auditorias e conformidade com a LGPD em um único painel.",
    highlights: [
      "Visibilidade clara da topologia e tráfego da empresa",
      "Correlação unificada de eventos e alertas de rede",
      "Gerenciamento simplificado de políticas corporativas",
      "Conformidade transparente para normas e exigências da LGPD",
    ],
  },
];

const COMPARISON = [
  {
    feature: "Estabilidade de sistemas e filiais",
    legacy: "Oscilações de links paralisam caixas, faturamento e equipes",
    darion: "Secure SD-WAN com redundância inteligente de links que mantém tudo no ar",
  },
  {
    feature: "Inspeção de tráfego seguro",
    legacy: "Não inspeciona tráfego criptografado por perda de velocidade",
    darion: "Inspeção profunda de pacotes com alta taxa de processamento e zero lentidão",
  },
  {
    feature: "Modelo de acesso remoto",
    legacy: "VPN tradicional que abre toda a rede interna para o usuário",
    darion: "Zero Trust (ZTNA) com verificação contínua e acesso restrito a cada aplicação",
  },
  {
    feature: "Sustentação para automações",
    legacy: "Infraestrutura fragmentada gerando falhas em integrações",
    darion: "Base sólida e segura que permite que agentes e sistemas operem 24/7 sem atritos",
  },
];

export default function SegurancaPage() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Apple Style */}
      <section className="mx-auto max-w-4xl px-4 pt-20 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium text-[#0071e3] shadow-xs">
          <span>Infraestrutura de Sustentação • Redes & Segurança</span>
        </div>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-6xl">
          A base segura para
          <br />
          <span className="bg-gradient-to-r from-[#0071e3] to-[#43b5ff] bg-clip-text text-transparent">
            suas operações nunca pararem.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-normal leading-relaxed text-[#6e6e73]">
          Para que seus fluxos e automações de processos funcionem com máxima velocidade e sem interrupções, desenhamos e implementamos redes corporativas resilientes e proteção de perímetro — aplicando soluções e conceitos de referência como os do ecossistema <strong>Fortinet</strong> e <strong>Zero Trust</strong>.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/sac"
            className="rounded-full bg-[#0071e3] px-7 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#0077ed] active:scale-[0.98]"
          >
            Fale conosco
          </Link>
          <Link
            href="/solucoes"
            className="group flex items-center gap-1.5 px-6 py-3 text-sm font-medium text-[#0066cc] hover:underline"
          >
            Ver soluções de automação
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 transition-transform group-hover:translate-x-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 3l5 5-5 5" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Visão de Arquitetura Integrada */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.06] bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Infraestrutura Convergente
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              Conectividade e segurança que impulsionam a produtividade
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#6e6e73]">
              Em vez de ver a segurança como um entrave que atrasa os colaboradores, estruturamos uma rede onde os sistemas corporativos operam com baixa latência, alta estabilidade de links e proteção invisível no dia a dia.
            </p>
          </div>

          {/* Diagrama conceitual em estilo Apple Clean */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-black/[0.06] bg-[#fbfbfd] p-5 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[#0071e3]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.94 8.94 0 0 0 4-1M12 3a8.94 8.94 0 0 1 4 1M12 21a8.94 8.94 0 0 1-4-1M12 3a8.94 8.94 0 0 0-4 1M3.6 9h16.8M3.6 15h16.8" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-[#1d1d1f]">1. Enlaces & Internet</h3>
              <p className="mt-1.5 text-xs text-[#6e6e73]">Multi-WAN, redundância de links e estabilidade para não parar sua equipe.</p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-5 text-center shadow-xs">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0071e3] text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-[#1d1d1f]">2. Proteção NGFW</h3>
              <p className="mt-1.5 text-xs text-[#6e6e73]">Inspeção SSL profunda, IPS e antivírus de borda com tecnologia de referência.</p>
            </div>

            <div className="rounded-2xl border border-black/[0.06] bg-[#fbfbfd] p-5 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v10.5a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-[#1d1d1f]">3. Sistemas Integrados</h3>
              <p className="mt-1.5 text-xs text-[#6e6e73]">ERPs, CRMs e dados conversando entre filiais sem interrupções manuais.</p>
            </div>

            <div className="rounded-2xl border border-black/[0.06] bg-[#fbfbfd] p-5 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-[#1d1d1f]">4. Automação Contínua</h3>
              <p className="mt-1.5 text-xs text-[#6e6e73]">Agentes executando processos e apoiando o profissional em tempo integral.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares Detalhados */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
            Capacidades de Infraestrutura
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d1d1f]">
            Soluções para garantir alta disponibilidade e proteção
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {FABRIC_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col justify-between rounded-3xl border border-black/[0.06] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)]"
            >
              <div>
                <span className="text-xs font-semibold text-[#0071e3] uppercase tracking-wide">
                  {pillar.tag}
                </span>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#1d1d1f]">
                  {pillar.title}
                </h3>
                <p className="text-xs font-medium text-[#86868b]">{pillar.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#6e6e73]">
                  {pillar.description}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-black/[0.06] pt-6 text-xs text-[#1d1d1f]">
                  {pillar.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-[#0071e3]">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href="/sac"
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:underline"
                >
                  Consultar aplicação
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 transition-transform group-hover:translate-x-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 3l5 5-5 5" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tabela Comparativa Estilo Apple */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              Estrutura Convencional vs. Infraestrutura Darion Data
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-[#6e6e73]">
              Como uma base de redes e segurança bem projetada elimina interrupções de trabalho e dá segurança para sua equipe evoluir.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-sm">
            <div className="grid grid-cols-1 divide-y divide-black/[0.06] lg:grid-cols-3 lg:divide-y-0 lg:divide-x">
              <div className="hidden bg-[#fbfbfd] p-6 lg:block">
                <span className="text-xs font-bold uppercase tracking-wider text-[#86868b]">
                  Capacidade
                </span>
              </div>
              <div className="hidden bg-[#fbfbfd] p-6 lg:block">
                <span className="text-xs font-bold uppercase tracking-wider text-[#86868b]">
                  Ambiente Tradicional
                </span>
              </div>
              <div className="hidden bg-blue-50/40 p-6 lg:block">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0071e3]">
                  Infraestrutura Darion Data
                </span>
              </div>
            </div>

            <div className="divide-y divide-black/[0.06]">
              {COMPARISON.map((row) => (
                <div key={row.feature} className="grid grid-cols-1 p-6 lg:grid-cols-3 lg:gap-6">
                  <div className="font-semibold text-sm text-[#1d1d1f]">{row.feature}</div>
                  <div className="mt-2 text-xs text-[#86868b] lg:mt-0 leading-relaxed">{row.legacy}</div>
                  <div className="mt-2 text-xs font-medium text-[#1d1d1f] lg:mt-0 leading-relaxed bg-blue-50/50 p-2.5 rounded-xl lg:bg-transparent lg:p-0">
                    <span className="inline-block text-[#0071e3] font-bold mr-1.5">✓</span>
                    {row.darion}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
          Proteja e conecte a sua operação.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-[#6e6e73]">
          Converse com nossos especialistas para avaliar enlaces de rede, regras de firewall e arquitetura de segurança para seu ambiente.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/sac"
            className="rounded-full bg-[#0071e3] px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0077ed]"
          >
            Fale conosco
          </Link>
        </div>
      </section>
    </div>
  );
}
