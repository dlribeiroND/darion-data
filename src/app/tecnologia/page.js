import Link from "next/link";

export const metadata = {
  title: "Tecnologia | Darion Data",
  description:
    "Como funciona a plataforma agêntica da Darion Data para automação de processos manuais, sustentada por redes resilientes e cibersegurança corporativa.",
};

const CONCEPTS = [
  {
    tag: "Plataforma Agêntica",
    title: "O que são Agentes de Software Inteligentes",
    description:
      "Diferente de chatbots comuns que apenas respondem texto, nossos agentes são configurados para realizar ações práticas nos sistemas da sua empresa — ler documentos, validar cadastros, preencher formulários e disparar fluxos seguindo exatamente as regras do seu negócio.",
  },
  {
    tag: "Foco no Profissional",
    title: "Supervisão Humana & Guardrails",
    description:
      "A automação não substitui a inteligência da sua equipe: ela potencializa o profissional. Você define o nível de autonomia de cada agente, com pontos de aprovação humana em etapas críticas e visibilidade total sobre o que foi executado.",
  },
  {
    tag: "Integrações Fluidas",
    title: "Conexão sem Substituição de Sistemas",
    description:
      "Os agentes operam conectando-se diretamente aos softwares que sua organização já utiliza — ERPs, CRMs, planilhas, bancos de dados e APIs. Sua empresa ganha agilidade imediata sem o custo ou a lentidão de migrações complexas.",
  },
  {
    tag: "Sustentação & Segurança",
    title: "Redes Resilientes & Proteção em Camadas",
    description:
      "Para que fluxos críticos rodem 24/7 sem interrupções, integramos a operação a redes corporativas de alta disponibilidade (Secure SD-WAN) e proteção de borda baseada em padrões do ecossistema Fortinet e Zero Trust, assegurando privacidade e conformidade com a LGPD.",
  },
];

const FAQ = [
  {
    question: "Como a automação ajuda os colaboradores no dia a dia?",
    answer:
      "A automação remove as tarefas manuais mais monótonas e demoradas (como copiar e colar dados entre planilhas e sistemas, conciliação de faturas, preenchimento repetitivo). Com isso, o profissional deixa de atuar no operacional mecânico e passa a atuar como gestor e analista, gerando mais valor e sofrendo menos desgaste.",
  },
  {
    question: "Preciso trocar meus sistemas atuais para implementar automações?",
    answer:
      "Não. A plataforma agêntica da Darion Data foi projetada para se acoplar aos sistemas que sua empresa já opera (como TOTVS, SAP, Salesforce, sistemas internos ou planilhas), eliminando o retrabalho manual sem exigir mudanças de infraestrutura.",
  },
  {
    question: "Qual o papel das soluções de rede e cibersegurança (Fortinet)?",
    answer:
      "Utilizamos referências e tecnologias consagradas do ecossistema Fortinet (como Next-Generation Firewalls e Secure SD-WAN) como infraestrutura de sustentação. Elas garantem que a comunicação entre filiais e sistemas em nuvem ocorra com links estáveis, latência mínima e proteção impenetrável contra ataques cibernéticos.",
  },
  {
    question: "É possível manter controle sobre o que os agentes executam?",
    answer:
      "Totalmente. As regras de cada agente são estabelecidas em conjunto com sua equipe técnica e gestores. É possível incluir travas de validação humana em qualquer passo antes de uma ação definitiva ser confirmada.",
  },
  {
    question: "A automação de processos é indicada para a minha empresa?",
    answer:
      "Se a sua equipe gasta tempo expressivo da semana executando tarefas repetitivas, transferindo dados manualmente entre plataformas ou conferindo informações padronizadas, a automação trará retorno rápido e perceptível em produtividade e qualidade.",
  },
];

export default function TecnologiaPage() {
  return (
    <div className="space-y-24 pb-24">
      {/* Header Estilo Apple */}
      <section className="mx-auto max-w-4xl px-4 pt-20 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium text-[#0071e3] shadow-xs">
          Engenharia & Funcionamento
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">
          Como nossa tecnologia transforma a rotina da sua equipe.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6e6e73]">
          Explicamos, de forma clara e transparente, como a plataforma agêntica da Darion Data elimina processos manuais e multiplica a produtividade humana com segurança.
        </p>
      </section>

      {/* Grid de Conceitos Estilo Apple */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {CONCEPTS.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-black/[0.06] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)]"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
                {item.tag}
              </span>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#1d1d1f]">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#6e6e73]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Estilo Apple */}
      <section className="bg-[#f5f5f7] py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Perguntas Frequentes
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              Tire suas dúvidas sobre automação e tecnologia
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {FAQ.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-xs"
              >
                <h3 className="text-base font-semibold text-[#1d1d1f]">{item.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f]">
          Quer entender como aplicar a automação ao seu fluxo atual?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-[#6e6e73]">
          Agende uma conversa com nossos consultores e veja como sua equipe pode produzir mais gastando menos tempo.
        </p>
        <div className="mt-8">
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
