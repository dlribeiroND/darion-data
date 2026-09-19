import Link from "next/link";
import AutomationFlow from "@/components/automation-flow";
import AutomationPreviewCard from "@/components/automation-preview-card";

const HIGHLIGHTS = [
  {
    title: "Soluções",
    description: "Automação de fluxos e integração de sistemas sob medida.",
    href: "/solucoes",
  },
  {
    title: "Cases",
    description: "O tipo de resultado que buscamos entregar para operações como a sua.",
    href: "/cases",
  },
  {
    title: "Tecnologia",
    description: "Como a nossa plataforma agêntica funciona, em linguagem acessível.",
    href: "/tecnologia",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Mapeamos os processos manuais e os sistemas envolvidos na sua operação para identificar onde a automação gera mais impacto.",
  },
  {
    number: "02",
    title: "Automação",
    description:
      "Configuramos agentes e integrações que executam os fluxos identificados, conectando os sistemas que sua empresa já usa.",
  },
  {
    number: "03",
    title: "Escala e acompanhamento",
    description:
      "Acompanhamos a operação em produção, com espaço para ajustar e ampliar a automação conforme sua empresa cresce.",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Automatize fluxos, integre sistemas e{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            escale sua operação
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          À medida que sua empresa evolui, processos manuais podem limitar a produtividade.
          Temos expertise para automatizar fluxos e integrar sistemas com uma plataforma agêntica.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/sac"
            className="rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-colors hover:bg-blue-500"
          >
            Fale conosco
          </Link>
          <Link
            href="/solucoes"
            className="rounded-full border border-white/15 px-8 py-3 text-base font-semibold text-slate-200 transition-colors hover:border-white/30 hover:bg-white/5"
          >
            Conhecer soluções
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-blue-500/40 hover:bg-white/[0.06]"
            >
              <h2 className="text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white">Como funciona</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Do diagnóstico à operação em escala, um processo estruturado para automatizar sua
              operação com segurança.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.number}>
                <span className="text-sm font-semibold text-blue-400">{step.number}</span>
                <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white">Da tarefa manual ao resultado</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            Assim caminha um fluxo depois de automatizado com agentes de IA — do trabalho manual
            até a operação rodando sozinha, com os sistemas conectados.
          </p>
        </div>

        <div className="mt-16">
          <AutomationFlow />
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-white">Cada vez mais apoiado por IA</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Os agentes não só executam tarefas: eles acompanham a própria execução, sinalizam
              exceções e dão visibilidade sobre o que está acontecendo em cada etapa do fluxo —
              em vez de uma automação &ldquo;caixa-preta&rdquo;.
            </p>
          </div>
          <AutomationPreviewCard />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Pronto para escalar sua operação?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-400">
          Fale com a nossa equipe e entenda como a automação de fluxos pode se encaixar na sua
          empresa.
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
