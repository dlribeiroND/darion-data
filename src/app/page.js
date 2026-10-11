import Link from "next/link";
import AutomationFlow from "@/components/automation-flow";
import AutomationPreviewCard from "@/components/automation-preview-card";

const CAPABILITIES = [
  {
    category: "Foco Principal",
    title: "Automação de Processos Manuais",
    subtitle: "Agentes inteligentes que eliminam tarefas repetitivas",
    description:
      "Substituímos rotinas manuais, digitação de planilhas, conciliações e triagens operacionais por agentes de software que executam fluxos completos com máxima precisão.",
    href: "/solucoes",
  },
  {
    category: "Produtividade Humana",
    title: "Potencialização do Profissional",
    subtitle: "Menos esforço mecânico, mais inteligência estratégica",
    description:
      "Sua equipe deixa de perder horas em trabalhos burocráticos e ganha tempo para analisar dados, atender clientes e tomar decisões de alto impacto.",
    href: "/solucoes",
  },
  {
    category: "Interconexão",
    title: "Integração Contínua de Sistemas",
    subtitle: "ERPs, CRMs e ferramentas conversando em tempo real",
    description:
      "Conectamos os sistemas que você já utiliza (como TOTVS, SAP, Salesforce, APIs e bancos de dados) sem retrabalho manual e sem necessidade de troca de softwares.",
    href: "/solucoes",
  },
  {
    category: "Infraestrutura Segura",
    title: "Redes & Cibersegurança Corporativa",
    subtitle: "Conectividade resiliente e proteção perimetral",
    description:
      "Garantimos que suas automações e ferramentas rodem sobre redes de alta disponibilidade e proteção avançada de borda, adotando padrões do ecossistema Fortinet e Zero Trust.",
    href: "/seguranca",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Mapeamento dos Gargalos Manuais",
    description:
      "Identificamos onde sua equipe perde mais tempo em tarefas operacionais repetitivas e quais sistemas precisam ser interligados para otimizar o fluxo de trabalho.",
  },
  {
    number: "02",
    title: "Configuração de Agentes & Integrações",
    description:
      "Implementamos agentes autônomos adaptados às suas regras de negócio, integrando suas ferramentas atuais com pontos de validação humana onde for necessário.",
  },
  {
    number: "03",
    title: "Operação Ágil, Segura & Escalável",
    description:
      "Acompanhamos a operação em produção sobre uma infraestrutura protegida e estável, liberando seus profissionais para acelerar o crescimento da empresa.",
  },
];

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section Estilo Apple */}
      <section className="mx-auto max-w-4xl px-4 pt-20 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium text-[#0071e3] shadow-xs">
          <span>Automação Agêntica de Processos • Eficiência & Tempo Otimizado</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-6xl">
          Automatize processos.
          <br />
          <span className="bg-gradient-to-r from-[#0071e3] via-[#0077ed] to-[#43b5ff] bg-clip-text text-transparent">
            Potencialize seu time.
          </span>
          <br />
          Escale sua operação com segurança.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg font-normal leading-relaxed text-[#6e6e73]">
          À medida que sua empresa evolui, rotinas manuais e retrabalhos limitam a produtividade. A Darion Data desenvolve <strong>agentes inteligentes</strong> e <strong>integrações de sistemas</strong> para eliminar tarefas repetitivas, devolvendo tempo valioso para que seus profissionais foquem no que realmente gera valor — tudo sustentado por uma infraestrutura de redes e segurança resiliente.
        </p>

        <div className="mt-8 flex items-center justify-center">
          <Link
            href="/solucoes"
            className="rounded-full bg-[#0071e3] px-8 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#0077ed] active:scale-[0.98]"
          >
            Conhecer soluções de automação
          </Link>
        </div>
      </section>

      {/* Bento Grid Apple: Apresentação Equilibrada */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
            Nossas Frentes de Atuação
          </span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f]">
            Tecnologia que coloca o profissional no centro da inteligência
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col justify-between rounded-3xl border border-black/[0.06] bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)]"
            >
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0071e3]">
                  {item.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-[#86868b]">{item.subtitle}</p>
                <p className="mt-4 text-xs leading-relaxed text-[#6e6e73]">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-[#0071e3] group-hover:underline">
                <span>Ver detalhes</span>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 transition-transform group-hover:translate-x-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 3l5 5-5 5" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Seção Fluxo Unificado */}
      <section className="bg-[#f5f5f7] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Transformação Operacional
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              Do esforço manual repetitivo à alta performance do seu time
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#6e6e73]">
              Veja como a automação agêntica absorve a carga mecânica e capacita o profissional a produzir mais com menos atrito.
            </p>
          </div>

          <div className="mt-16">
            <AutomationFlow />
          </div>
        </div>
      </section>

      {/* Seção Produtividade / Widget Apple */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Otimização de Tempo Real
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
              Mais tempo para pensar, criar e evoluir seu negócio.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#6e6e73]">
              Quando processos manuais são confiados a agentes de software, sua empresa elimina erros humanos de digitação, reduz o tempo de resposta aos clientes e multiplica a capacidade operacional sem sobrecarregar colaboradores.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#6e6e73]">
              E para que essa operação rode com estabilidade ininterrupta, integramos seus sistemas a uma base segura de redes e conectividade — com proteção perimetral inspirada em tecnologias de ponta como as soluções Fortinet.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/solucoes"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#0071e3] hover:underline"
              >
                Conheça como automatizamos processos
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 transition-transform group-hover:translate-x-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 3l5 5-5 5" />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <AutomationPreviewCard />
          </div>
        </div>
      </section>

      {/* Metodologia de Implementação */}
      <section className="bg-white py-24 border-t border-black/[0.06]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Como Trabalhamos
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              Um método claro para destravar a produtividade da sua empresa
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#6e6e73]">
              Do diagnóstico à operação contínua, desenhamos a solução perfeita para a sua realidade.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.number} className="rounded-3xl border border-black/[0.06] bg-[#fbfbfd] p-8 shadow-xs">
                <span className="text-sm font-bold text-[#0071e3]">{step.number}</span>
                <h3 className="mt-3 text-lg font-semibold text-[#1d1d1f]">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Apple Style */}
      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
          Pronto para dar superpoderes à sua equipe?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-[#6e6e73]">
          Converse conosco e descubra quais processos podem ser automatizados para liberar o verdadeiro potencial da sua operação.
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
