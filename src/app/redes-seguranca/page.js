import Link from "next/link";
import { site } from "@/content/site.config";

export const metadata = {
  title: "Redes & Segurança Fortinet | Darion Data",
  description:
    "Projetamos, implantamos e gerenciamos redes corporativas multi-site, Secure SD-WAN, Firewalls de nova geração e Zero Trust com tecnologia Fortinet.",
};

const CAPABILITIES = [
  {
    title: "Firewall de Nova Geração (FortiGate)",
    subtitle: "Inspeção profunda e controle granular",
    description:
      "Políticas baseadas em aplicação, usuário e contexto, com inspeção de tráfego criptografado SSL/TLS, sistema de prevenção de intrusão (IPS), filtragem web corporativa e proteção contra malware. O dimensionamento técnico correto do hardware é fundamental para manter a inspeção ativa e a segurança operacional sem comprometer a taxa de transferência e a experiência do usuário.",
  },
  {
    title: "Secure SD-WAN",
    subtitle: "Conectividade resiliente entre sites e nuvem",
    description:
      "Interligação de matriz, filiais e ambientes em nuvem com monitoramento contínuo de métricas dos links (perda de pacotes, latência e jitter). O tráfego crítico é priorizado e, em caso de degradação, o failover automático redireciona a comunicação para o link íntegro sem derrubar sessões ativas.",
  },
  {
    title: "Zero Trust e Acesso Remoto (ZTNA)",
    subtitle: "Acesso restrito por aplicação",
    description:
      "Substituição de VPNs convencionais que concedem visibilidade ampla de toda a rede interna por controle de acesso estrito por aplicação. Acesso condicionado à verificação contínua da identidade do usuário, conformidade do dispositivo (postura de segurança) e autenticação multifator.",
  },
  {
    title: "Segmentação e Ambientes Críticos",
    subtitle: "Isolamento de tráfego leste-oeste",
    description:
      "Divisão da rede em zonas de segurança para conter movimentações laterais de possíveis ameaças. Isolamento de servidores de banco de dados, estações de trabalho de terceiros, redes de visitantes e dispositivos de automação ou IoT.",
  },
  {
    title: "Rede Local Segura (LAN / Wi-Fi)",
    subtitle: "Conectividade cabeada e sem fio integrada ao firewall",
    description:
      "Extensão das políticas de segurança diretamente aos switches e pontos de acesso (FortiSwitch e FortiAP), permitindo controle centralizado de portas, VLANs dinâmicas e isolamento de dispositivos desde a camada de acesso físico.",
  },
  {
    title: "Gestão Centralizada e Registros (FortiManager e FortiAnalyzer)",
    subtitle: "Padronização e trilhas de auditoria",
    description:
      "Administração centralizada de políticas para ambientes com múltiplos equipamentos, permitindo provisionamento padronizado, histórico documentado de alterações e retenção estruturada de logs para auditorias de segurança e conformidade com a LGPD.",
  },
];

const PROJECT_TYPES = [
  "Redes corporativas multi-filial com conectividade baseada em Secure SD-WAN.",
  "Substituição e migração técnica de firewalls legados para a plataforma FortiGate.",
  "Segmentação de redes internas e isolamento de ambientes e sistemas críticos.",
  "Conectividade híbrida segura entre datacenters locais e recursos em nuvem.",
  "Acesso remoto seguro estruturado para equipes internas e prestadores terceiros.",
  "Adequação de registros de conexão, retenção de logs e controles para auditoria e LGPD.",
];

const DIAGNOSTIC_CHECKLIST = [
  "Topologia de rede física e lógica, identificando pontos únicos de falha (SPOF).",
  "Redundância, latência e qualidade real de entrega dos links de internet e operadoras.",
  "Regras de firewall em produção: mapeamento de regras ativas, redundantes ou órfãs.",
  "Exposição de portas e serviços internos diretamente para a internet pública.",
  "Modelo de acesso remoto em uso e raio de alcance de acessos externos.",
  "Nível de segmentação entre áreas de negócio, servidores e dispositivos de rede.",
  "Capacidade e consumo de recursos do equipamento para inspeção profunda de tráfego.",
  "Políticas de geração, retenção e monitoramento de logs de tráfego e segurança.",
];

export default function RedesSegurancaPage() {
  return (
    <div className="space-y-24 pb-24">
      {/* Header */}
      <section className="mx-auto max-w-4xl px-4 pt-16 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium text-[#0071e3] shadow-xs">
          <span>Parceira Fortinet · {site.fortinet.partnerModel}</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-6xl">
          Redes e segurança para ambientes
          <br />
          <span className="bg-gradient-to-r from-[#0071e3] to-[#2997ff] bg-clip-text text-transparent">
            que não toleram parada.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-[#6e6e73]">
          Trabalhamos com a plataforma Fortinet (Security Fabric) como parceira no modelo Integrator. Projetamos rede e segurança de forma integrada, em vez de tratar uma como remendo da outra.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/contato?assunto=redes"
            className="rounded-full bg-[#0071e3] px-8 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#0077ed]"
          >
            Agendar conversa técnica
          </Link>
        </div>
      </section>

      {/* Capacidades Fortinet */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
            Arquitetura Técnica
          </span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f]">
            Capacidades da plataforma
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-[#6e6e73]">
            Recursos projetados e operados conforme as necessidades e o porte de cada organização.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-black/[0.08] bg-white p-7 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0071e3]">
                  {item.subtitle}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-[#1d1d1f]">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#6e6e73]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teaser: Redes que antecipam e se ajustam */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-[#f5f5f7] p-8 sm:p-10">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Evolução e Inteligência
            </span>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#1d1d1f]">
              Redes que antecipam e se ajustam
            </h3>
            <p className="mt-3 text-sm text-[#6e6e73] leading-relaxed">
              A mesma infraestrutura de conectividade pode ser expandida com práticas de automação, telemetria preditiva e validação antes da janela de manutenção. Avaliamos a maturidade de cada rede para propor recursos inteligentes que realmente façam sentido.
            </p>
            <div className="mt-6">
              <Link
                href="/automacao#redes-inteligentes"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:underline"
              >
                Conhecer a abordagem de redes inteligentes
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de projeto que atendemos */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Escopo de Atuação
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              Tipos de projeto que atendemos
            </h2>
            <p className="mt-2 text-sm text-[#6e6e73]">
              Cenários comuns conduzidos pela Darion Data na área de infraestrutura de redes:
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {PROJECT_TYPES.map((type, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-2xl border border-black/[0.06] bg-[#fafafc] p-4 text-xs text-[#424245]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0071e3]/10 text-[10px] font-bold text-[#0071e3]">
                  ✓
                </span>
                <span className="leading-relaxed">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que avaliamos num diagnóstico */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Levantamento Técnico
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              O que avaliamos num diagnóstico
            </h2>
            <p className="mt-2 text-sm text-[#6e6e73]">
              Antes de sugerir alterações em qualquer topologia, analisamos parâmetros concretos do ambiente:
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {DIAGNOSTIC_CHECKLIST.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-2xl border border-black/[0.06] bg-[#fafafc] p-4 text-xs text-[#424245]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-[10px] font-medium text-slate-700">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fornecimento de equipamentos (condicional à configuração) */}
      {site.offersEquipmentSupply && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-black/[0.08] bg-white p-6 text-xs text-[#6e6e73]">
            <p>
              O foco da Darion Data é serviço. Quando o projeto exige equipamentos e licenças Fortinet, apoiamos a especificação e o fornecimento como parte do escopo.
            </p>
          </div>
        </section>
      )}

      {/* Chamada Final */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Precisa revisar a segurança e a conectividade da sua rede?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#6e6e73]">
            Agende uma conversa técnica para analisarmos o cenário da sua empresa.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contato?assunto=redes"
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
