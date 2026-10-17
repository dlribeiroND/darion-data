import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site.config";

export const metadata = {
  title: "Darion Data | Redes corporativas, SD-WAN, segurança Fortinet e automação",
  description:
    "A Darion Data projeta, implanta e evolui redes corporativas multi-site, SD-WAN e segurança perimetral com tecnologia Fortinet, automação de processos e governança de Shadow AI.",
};

const WHEN_TO_TALK = [
  "Operação com várias filiais ou unidades conectadas à matriz e à nuvem.",
  "Links de internet instáveis, oscilando ou sem failover automático.",
  "Firewall legado sem capacidade de inspecionar tráfego criptografado sem degradação.",
  "Acesso remoto por VPN tradicional que expõe a rede inteira em vez de aplicações específicas.",
  "Exigência de auditoria, conformidade ou LGPD sobre tráfego, registros e permissões.",
  "Rotinas e integrações operacionais que ainda dependem de planilhas e conferência manual.",
  "Uso crescente de ferramentas de IA pela equipe sem visibilidade ou política definida.",
];

const WORK_STEPS = [
  {
    step: "01",
    title: "Diagnóstico técnico",
    description:
      "Mapeamos a topologia atual, pontos de falha, regras de firewall, redundância de links e rotinas de operação para identificar gargalos reais.",
  },
  {
    step: "02",
    title: "Arquitetura e desenho",
    description:
      "Definimos o projeto com tecnologia Fortinet para redes ou o fluxo de automação, priorizando estabilidade, segurança e capacidade de expansão.",
  },
  {
    step: "03",
    title: "Implantação e validação",
    description:
      "Configuração padronizada, testes de failover e homologação em janelas planejadas para evitar indisponibilidade aos usuários.",
  },
  {
    step: "04",
    title: "Operação e evolução",
    description:
      "Acompanhamento técnico contínuo, análise de registros, ajustes de regras e melhorias graduais conforme a maturidade do ambiente avança.",
  },
];

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-4 pt-16 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium text-[#0071e3] shadow-xs">
          <span>Redes corporativas · Segurança · Automação e IA</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-6xl">
          Redes de alta complexidade,
          <br />
          <span className="bg-gradient-to-r from-[#0071e3] via-[#0077ed] to-[#43b5ff] bg-clip-text text-transparent">
            projetadas para não parar.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg font-normal leading-relaxed text-[#6e6e73]">
          A Darion Data projeta, implanta e evolui redes multi-site, SD-WAN e segurança de perímetro com tecnologia Fortinet. Também aplicamos automação e inteligência a redes e processos, e ajudamos empresas a entender como a IA já está sendo usada dentro delas.
        </p>

        {/* Linha discreta de parceria Fortinet */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-[#f5f5f7] px-3.5 py-1 text-xs font-medium text-[#424245]">
          {site.fortinet.badgePath ? (
            <Image
              src={site.fortinet.badgePath}
              alt="Fortinet Partner"
              width={18}
              height={18}
              className="inline-block"
            />
          ) : null}
          <span>Parceira Fortinet · {site.fortinet.partnerModel}</span>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contato"
            className="rounded-full bg-[#0071e3] px-7 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#0077ed] active:scale-[0.98]"
          >
            Agendar conversa técnica
          </Link>
          <Link
            href="/redes-seguranca"
            className="rounded-full border border-black/[0.1] bg-white px-7 py-3 text-sm font-medium text-[#1d1d1f] shadow-xs transition-all hover:bg-black/[0.02]"
          >
            Ver redes e segurança
          </Link>
        </div>
      </section>

      {/* O que fazemos: 3 frentes */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
            Frentes de Atuação
          </span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f]">
            O que fazemos
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#6e6e73]">
            Projetos técnicos estruturados para ambientes que exigem alta disponibilidade e governança operacional.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Frente 1 - Principal: Redes e Segurança */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#0071e3]/30 bg-white p-8 shadow-[0_4px_24px_rgba(0,113,227,0.06)] md:col-span-3 lg:col-span-1 lg:row-span-1">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#0071e3]/10 px-3 py-1 text-[11px] font-semibold text-[#0071e3]">
                  Frente Principal
                </span>
                <span className="text-xs text-[#86868b]">Fortinet</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#1d1d1f]">
                Redes e Segurança
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">
                Conectividade entre matriz, filiais, nuvem e data center, com redundância de links, firewalls de nova geração, segmentação e acesso por aplicação.
              </p>
              <ul className="mt-5 space-y-2 text-xs text-[#515154]">
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">•</span>
                  <span>Next-Generation Firewalls (FortiGate) e inspeção segura</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">•</span>
                  <span>Secure SD-WAN com monitoramento contínuo de qualidade</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">•</span>
                  <span>Zero Trust Network Access (ZTNA) por aplicação</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">•</span>
                  <span>Gestão centralizada com FortiManager e FortiAnalyzer</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-black/[0.06]">
              <Link
                href="/redes-seguranca"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:underline"
              >
                Conhecer projetos de redes e segurança
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Frente 2: Automação e Inteligência */}
          <div className="flex flex-col justify-between rounded-3xl border border-black/[0.08] bg-white p-8 shadow-xs">
            <div>
              <span className="rounded-full bg-[#f5f5f7] px-3 py-1 text-[11px] font-semibold text-[#6e6e73]">
                Processos & Redes
              </span>
              <h3 className="mt-5 text-xl font-semibold text-[#1d1d1f]">
                Automação e Inteligência
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">
                De rotinas de negócio a rotinas de rede: automação, agentes de IA com supervisão humana e redes que podem antecipar problemas.
              </p>
              <ul className="mt-5 space-y-2 text-xs text-[#515154]">
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">•</span>
                  <span>Automação de tarefas repetitivas e conferências manuais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">•</span>
                  <span>Integrações robustas entre sistemas internos e bancos de dados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">•</span>
                  <span>Agentes com aprovação humana em etapas críticas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">•</span>
                  <span>Automação e telemetria de redes e infraestrutura</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-black/[0.06]">
              <Link
                href="/automacao"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:underline"
              >
                Ver automação e inteligência
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Frente 3: Governança de IA */}
          <div className="flex flex-col justify-between rounded-3xl border border-black/[0.08] bg-white p-8 shadow-xs">
            <div>
              <span className="rounded-full bg-[#f5f5f7] px-3 py-1 text-[11px] font-semibold text-[#6e6e73]">
                Consultoria & Risco
              </span>
              <h3 className="mt-5 text-xl font-semibold text-[#1d1d1f]">
                Governança de IA
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">
                Consultoria especializada para mapear o uso de IA que a TI ainda não enxerga (Shadow AI), protegendo dados confidenciais e propriedade intelectual.
              </p>
              <ul className="mt-5 space-y-2 text-xs text-[#515154]">
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">•</span>
                  <span>Mapeamento de ferramentas acessadas pelas equipes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">•</span>
                  <span>Análise de riscos de exposição de dados e LGPD</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">•</span>
                  <span>Definição de políticas de uso aceitável e controles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">•</span>
                  <span>Alternativas homologadas para as áreas de negócio</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-black/[0.06]">
              <Link
                href="/shadow-ai"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:underline"
              >
                Entender governança de Shadow AI
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Curiosidade: Rede Inteligente */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Abordagens Avançadas
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              E se a sua rede pudesse antecipar, simular e se ajustar?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#6e6e73] leading-relaxed">
              Existem abordagens que mudam a forma como ambientes corporativos são administrados, reduzindo configurações manuais e prevenindo incidentes antes que afetem a operação:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-5">
              <p className="text-sm font-semibold text-[#1d1d1f]">
                Simulação antes da mudança
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#6e6e73]">
                E se você pudesse testar uma mudança de firewall numa cópia virtual da sua rede antes da janela de manutenção?
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-5">
              <p className="text-sm font-semibold text-[#1d1d1f]">
                Detecção antecipada
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#6e6e73]">
                E se a rede apontasse a degradação de um link de comunicação antes de ele efetivamente cair?
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-5">
              <p className="text-sm font-semibold text-[#1d1d1f]">
                Configuração por intenção
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#6e6e73]">
                E se você descrevesse o que a nova filial precisa acessar e a rede montasse e validasse a configuração?
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-black/[0.06] pt-6 text-xs text-[#6e6e73]">
            <p className="max-w-xl">
              Nem todo ambiente precisa de tudo isso. Descobrir o que faz sentido para o seu é parte da conversa.
            </p>
            <Link
              href="/automacao#redes-inteligentes"
              className="inline-flex items-center gap-1.5 font-semibold text-[#0071e3] hover:underline"
            >
              Explorar abordagens de redes inteligentes
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Curiosidade: Shadow AI */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-[#f5f5f7] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Governança Corporativa
            </span>
            <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-[#1d1d1f]">
              Sua equipe já usa IA. Você sabe quais ferramentas, com quais dados?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
              Extensões de navegador, contas pessoais e serviços externos processando informações confidenciais da empresa sem conhecimento da TI. Mapeamos esse cenário com foco em dados, segredo de negócio e LGPD.
            </p>
          </div>
          <Link
            href="/shadow-ai"
            className="rounded-full bg-[#1d1d1f] px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-black whitespace-nowrap"
          >
            Conhecer análise de Shadow AI
          </Link>
        </div>
      </section>

      {/* Quando faz sentido falar com a gente */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Cenários Práticos
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              Quando faz sentido falar com a gente
            </h2>
            <p className="mt-2 text-sm text-[#6e6e73]">
              Projetos e demandas técnicas típicas em que a Darion Data atua com profundidade:
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {WHEN_TO_TALK.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-2xl border border-black/[0.06] bg-[#fafafc] p-4 text-xs text-[#424245]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0071e3]/10 text-[10px] font-bold text-[#0071e3]">
                  ✓
                </span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como trabalhamos */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
            Método de Atuação
          </span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f]">
            Como trabalhamos
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-[#6e6e73]">
            Etapas estruturadas para garantir entregas com escopo claro e execução previsível.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WORK_STEPS.map((step) => (
            <div
              key={step.step}
              className="rounded-3xl border border-black/[0.08] bg-white p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-bold text-[#0071e3]">
                  {step.step}
                </span>
                <h3 className="mt-3 text-base font-semibold text-[#1d1d1f]">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#6e6e73]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quem está à frente */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Liderança Técnica
            </span>
            <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-[#1d1d1f]">
              Quem está à frente
            </h3>
            <p className="mt-2 text-sm text-[#6e6e73] leading-relaxed">
              A Darion Data é uma empresa nova, liderada por um profissional com mais de 22 anos em infraestrutura de TI, serviços e nuvem. A experiência prática orienta cada decisão de arquitetura e projeto.
            </p>
          </div>
          <Link
            href="/sobre"
            className="rounded-full border border-black/[0.1] bg-white px-6 py-2.5 text-xs font-medium text-[#1d1d1f] hover:bg-black/[0.02] whitespace-nowrap"
          >
            Conhecer a liderança técnica
          </Link>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Tem um projeto de rede, segurança, automação ou governança de IA?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#6e6e73]">
            Conte o cenário da sua empresa e nós responderemos com os próximos passos técnicos.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contato"
              className="rounded-full bg-[#0071e3] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0077ed]"
            >
              Agendar conversa técnica
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
