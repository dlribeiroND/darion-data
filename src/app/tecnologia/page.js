import Link from "next/link";

export const metadata = {
  title: "Tecnologia | Darion Data",
  description: "Como funciona a plataforma agêntica da Darion Data, explicada de forma acessível.",
};

const CONCEPTS = [
  {
    title: "O que é uma plataforma agêntica",
    description:
      "É um sistema formado por agentes de software capazes de executar tarefas completas — não apenas responder perguntas, mas de fato realizar ações nos sistemas da sua empresa, seguindo regras definidas por você.",
  },
  {
    title: "Como os agentes atuam",
    description:
      "Cada agente é configurado para um fluxo específico: ler informações, tomar decisões dentro de regras pré-definidas, executar ações nos sistemas integrados e registrar o que foi feito.",
  },
  {
    title: "Integrações",
    description:
      "Os agentes se conectam aos sistemas que sua empresa já usa — ERPs, CRMs, planilhas, APIs e outras ferramentas — sem exigir que você troque de plataforma.",
  },
  {
    title: "Segurança e governança",
    description:
      "Você define o que cada agente pode e não pode fazer. Pontos de checagem humana podem ser adicionados em qualquer etapa do fluxo antes de uma ação crítica ser executada.",
  },
];

const FAQ = [
  {
    question: "Preciso trocar meus sistemas atuais para automatizar?",
    answer:
      "Não. A plataforma se integra aos sistemas que sua empresa já utiliza, sem exigir substituição.",
  },
  {
    question: "É possível ter controle sobre o que a automação faz?",
    answer:
      "Sim. As regras de cada agente são definidas junto com sua equipe, e é possível incluir aprovações humanas em etapas críticas.",
  },
  {
    question: "A automação serve para qualquer tamanho de empresa?",
    answer:
      "A automação faz mais sentido quando há processos manuais repetitivos consumindo tempo da equipe — isso pode acontecer em empresas de portes variados. Fazemos um diagnóstico antes de recomendar qualquer solução.",
  },
];

export default function TecnologiaPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Tecnologia</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
          Explicamos, em linguagem acessível, como funciona a plataforma agêntica por trás das
          automações da Darion Data.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {CONCEPTS.map((item) => (
            <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Perguntas frequentes</h2>
          <div className="mt-8 space-y-6">
            {FAQ.map((item) => (
              <div key={item.question} className="border-b border-white/10 pb-6">
                <h3 className="text-base font-semibold text-white">{item.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white">Ainda com dúvidas sobre a tecnologia?</h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Fale com a nossa equipe e tire suas dúvidas antes de decidir automatizar.
        </p>
        <div className="mt-8">
          <Link
            href="/sac"
            className="rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-colors hover:bg-blue-500"
          >
            Fale conosco
          </Link>
        </div>
      </section>
    </>
  );
}
