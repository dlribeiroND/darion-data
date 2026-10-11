import Link from "next/link";

export const metadata = {
  title: "Cases & Cenários de Aplicação | Darion Data",
  description:
    "Veja como empresas transformam seus processos manuais, otimizam o tempo de suas equipes e operam com infraestrutura segura.",
};

const CASES = [
  {
    segment: "Operações & Backoffice",
    title: "Automação de Rotinas Manuais & Reconciliação",
    metric: "-85%",
    metricLabel: "De tempo gasto em tarefas repetitivas de digitação",
    description:
      "Desenvolvimento de agentes inteligentes integrados ao ERP e bancos de dados para conciliação automática de relatórios e faturamento. A equipe deixou o trabalho mecânico e assumiu um papel puramente analítico e estratégico.",
    tag: "Automação de Processos",
  },
  {
    segment: "Serviços & Atendimento",
    title: "Triagem Inteligente e Integração de Sistemas",
    metric: "4x",
    metricLabel: "Mais capacidade de atendimento com a mesma equipe",
    description:
      "Conexão do CRM ao sistema de chamados por meio de agentes autônomos. Solicitações manuais e cadastros que demoravam dias passaram a ser processados em minutos, potencializando a produtividade dos analistas.",
    tag: "Potencialização do Time",
  },
  {
    segment: "Varejo & Franquias Multilojas",
    title: "Conectividade de 45 Filiais com Alta Disponibilidade",
    metric: "99.99%",
    metricLabel: "Disponibilidade de rede contínua nas filiais",
    description:
      "Interligação segura de lojas via Secure SD-WAN com políticas do ecossistema Fortinet. Redundância de links de internet que garantiu que os caixas e automações de faturamento nunca ficassem fora do ar.",
    tag: "Redes & SD-WAN",
  },
  {
    segment: "Finanças & Dados Sensíveis",
    title: "Proteção de Perímetro e Governança LGPD",
    metric: "100%",
    metricLabel: "Tráfego corporativo blindado e auditado",
    description:
      "Implementação de Next-Gen Firewall com inspeção de pacotes e regras de Zero Trust. Acesso estrito por aplicação para parceiros e colaboradores remotos, garantindo conformidade rigorosa com normas de segurança.",
    tag: "Cibersegurança & ZTNA",
  },
];

export default function CasesPage() {
  return (
    <div className="space-y-24 pb-24">
      {/* Header Estilo Apple */}
      <section className="mx-auto max-w-4xl px-4 pt-20 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium text-[#0071e3] shadow-xs">
          Resultados & Impacto
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">
          Menos tempo em processos manuais.
          <br />
          Mais resultados para sua empresa.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6e6e73]">
          Conheça cenários práticos onde a automação de fluxos operacionais e a modernização da infraestrutura destravam o crescimento de negócios em diferentes setores.
        </p>
      </section>

      {/* Grid de Cases Estilo Apple */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {CASES.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-3xl border border-black/[0.06] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
                    {item.segment}
                  </span>
                  <span className="rounded-full bg-[#f5f5f7] px-3 py-1 text-[10px] font-semibold text-[#6e6e73]">
                    {item.tag}
                  </span>
                </div>

                <div className="mt-6 border-b border-black/[0.06] pb-6">
                  <span className="text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
                    {item.metric}
                  </span>
                  <span className="mt-1 block text-xs font-medium text-[#6e6e73]">
                    {item.metricLabel}
                  </span>
                </div>

                <h2 className="mt-6 text-xl font-semibold tracking-tight text-[#1d1d1f]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href="/sac"
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:underline"
                >
                  Avaliar cenário semelhante
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 transition-transform group-hover:translate-x-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 3l5 5-5 5" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chamada para Novo Case */}
      <section className="bg-[#f5f5f7] py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Sua operação pode ser a próxima história de sucesso.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#6e6e73]">
            Elimine as rotinas que travam seus profissionais e construa uma operação leve, ágil e protegida.
          </p>
          <div className="mt-8">
            <Link
              href="/sac"
              className="rounded-full bg-[#0071e3] px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0077ed]"
            >
              Fale conosco
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
