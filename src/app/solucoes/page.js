import Link from "next/link";

export const metadata = {
  title: "Soluções | Darion Data",
  description:
    "Automação de fluxos, integração de sistemas e agentes inteligentes para escalar a operação da sua empresa.",
};

const SOLUTIONS = [
  {
    title: "Automação de processos",
    description:
      "Eliminamos tarefas manuais e repetitivas, liberando o seu time para atividades que exigem decisão humana.",
  },
  {
    title: "Integração de sistemas",
    description:
      "Conectamos as ferramentas que sua empresa já usa — ERPs, CRMs, planilhas, APIs — para que os dados fluam sem retrabalho.",
  },
  {
    title: "Agentes inteligentes",
    description:
      "Agentes que executam fluxos completos de ponta a ponta, com regras de negócio e pontos de checagem humana onde fizer sentido.",
  },
  {
    title: "Orquestração de fluxos",
    description:
      "Coordenamos múltiplos sistemas e etapas em um único fluxo automatizado, com visibilidade do que está acontecendo em cada passo.",
  },
  {
    title: "Monitoramento e governança",
    description:
      "Acompanhamento contínuo das automações em produção, com alertas e controle sobre o que cada agente pode executar.",
  },
  {
    title: "Consultoria de automação",
    description:
      "Ajudamos a mapear onde a automação traz mais retorno antes de qualquer implementação.",
  },
];

export default function SolucoesPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Soluções</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
          À medida que sua empresa evolui, processos manuais podem limitar a produtividade.
          Oferecemos um conjunto de soluções para automatizar fluxos e integrar sistemas com uma
          plataforma agêntica.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((item) => (
            <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">
            Não sabe por onde começar a automatizar?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Fale com a nossa equipe e vamos mapear juntos os processos com maior potencial de
            automação na sua operação.
          </p>
          <div className="mt-8">
            <Link
              href="/sac"
              className="rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-colors hover:bg-blue-500"
            >
              Fale conosco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
