import Link from "next/link";

const HIGHLIGHTS = [
  {
    title: "Soluções",
    description: "Automação de fluxos e integração de sistemas sob medida.",
    href: "/solucoes",
  },
  {
    title: "Cases",
    description: "Resultados reais de operações que escalaram com nossa plataforma.",
    href: "/cases",
  },
  {
    title: "Tecnologia",
    description: "Como a nossa plataforma agêntica funciona, em linguagem acessível.",
    href: "/tecnologia",
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
    </>
  );
}
