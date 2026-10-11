import Link from "next/link";

export const metadata = {
  title: "Soluções | Darion Data",
  description:
    "Automação de processos manuais, agentes de IA para potencializar equipes, integração de sistemas, redes corporativas e cibersegurança.",
};

const SOLUTIONS = [
  {
    category: "Essência & Produtividade",
    title: "Automação de Processos Manuais",
    subtitle: "Otimize o tempo e elimine o retrabalho",
    description:
      "Mapeamos e automatizamos tarefas rotineiras, digitação repetitiva de dados, conciliações financeiras e cadastros manuais, liberando horas preciosas para a sua equipe produzir mais com muito menos desgaste.",
    badge: "Foco Principal",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    ),
  },
  {
    category: "Inteligência Operacional",
    title: "Agentes de IA para seu Time",
    subtitle: "Potencialize a capacidade de cada profissional",
    description:
      "Agentes de software autônomos que atuam como assistentes especializados da sua equipe: eles leem informações, aplicam regras de negócio, preparam análises e executam etapas de ponta a ponta, sempre com supervisão humana.",
    badge: "Potencialização",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    ),
  },
  {
    category: "Interoperabilidade",
    title: "Integração Contínua de Sistemas",
    subtitle: "Conectamos as ferramentas que sua empresa já usa",
    description:
      "Integramos ERPs (SAP, TOTVS, Sankhya), CRMs (Salesforce, HubSpot), planilhas, bancos de dados e APIs proprietárias. Os dados trafegam automaticamente entre as áreas sem necessidade de transferências manuais.",
    badge: "Sem Troca de Software",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v10.5a2.25 2.25 0 0 0 2.25 2.25Z" />
    ),
  },
  {
    category: "Governança & Controle",
    title: "Orquestração com Checagem Humana",
    subtitle: "Controle total sobre cada ação automatizada",
    description:
      "Visibilidade completa de cada passo executado. Pontos de aprovação humana podem ser inseridos antes de transações financeiras críticas ou ações sensíveis, garantindo que a liderança mantenha a governança da operação.",
    badge: "Controle & Transparência",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    ),
  },
  {
    category: "Conectividade de Redes",
    title: "Redes Corporativas & Secure SD-WAN",
    subtitle: "Infraestrutura estável para suas operações e filiais",
    description:
      "Garantimos que suas aplicações em nuvem, sistemas e filiais operem com alta velocidade e redundância contínua de links, eliminando quedas de conexão que paralisam a rotina de trabalho dos seus colaboradores.",
    badge: "Alta Disponibilidade",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.94 8.94 0 0 0 4-1M12 3a8.94 8.94 0 0 1 4 1M12 21a8.94 8.94 0 0 1-4-1M12 3a8.94 8.94 0 0 0-4 1M3.6 9h16.8M3.6 15h16.8" />
    ),
  },
  {
    category: "Cibersegurança de Perímetro",
    title: "Proteção Perimetral & Conformidade",
    subtitle: "Padrões corporativos inspirados no ecossistema Fortinet",
    description:
      "Proteção de dados e tráfego com Next-Generation Firewalls, inspeção profunda de pacotes, políticas Zero Trust e relatórios de conformidade para a LGPD, permitindo que a empresa cresça de forma blindada contra ameaças.",
    badge: "Blindagem de Dados",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    ),
  },
];

export default function SolucoesPage() {
  return (
    <div className="space-y-20 pb-24">
      {/* Header Estilo Apple */}
      <section className="mx-auto max-w-4xl px-4 pt-20 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium text-[#0071e3] shadow-xs">
          Soluções Corporativas Integradas
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">
          Automatize o que é repetitivo.
          <br />
          Potencialize o que é humano.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6e6e73]">
          Ajudamos sua empresa a eliminar gargalos manuais integrando sistemas e ativando agentes de inteligência artificial — apoiados por uma infraestrutura de redes e cibersegurança sólida para sua tranquilidade.
        </p>
      </section>

      {/* Grid de Soluções Estilo Apple */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-3xl border border-black/[0.06] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#0071e3]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                      {item.icon}
                    </svg>
                  </div>
                  <span className="rounded-full bg-[#f5f5f7] px-3 py-1 text-[10px] font-semibold text-[#6e6e73]">
                    {item.badge}
                  </span>
                </div>

                <span className="mt-6 block text-[11px] font-semibold uppercase tracking-wider text-[#0071e3]">
                  {item.category}
                </span>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#1d1d1f]">
                  {item.title}
                </h2>
                <p className="text-xs font-medium text-[#86868b]">{item.subtitle}</p>

                <p className="mt-4 text-xs leading-relaxed text-[#6e6e73]">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 border-t border-black/[0.06] pt-5">
                <Link
                  href="/sac"
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:underline"
                >
                  Consultar aplicação na sua empresa
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 transition-transform group-hover:translate-x-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 3l5 5-5 5" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner / CTA de Apoio */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f]">
            Não sabe quais processos manuais automatizar primeiro?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#6e6e73]">
            Nossos especialistas mapeiam a rotina da sua equipe e identificam onde a automação trará o maior retorno em tempo, qualidade e produtividade.
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
