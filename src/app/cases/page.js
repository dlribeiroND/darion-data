import Link from "next/link";

export const metadata = {
  title: "Cases | Darion Data",
  description: "Cases de automação e integração de sistemas da Darion Data.",
};

const SEGMENTS = ["Serviços", "Varejo", "Indústria", "Financeiro"];

export default function CasesPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Cases</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
          Estamos construindo nossos primeiros cases públicos. Em breve, esta página vai reunir
          resultados reais de empresas que automatizaram fluxos e integraram sistemas com a
          Darion Data.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SEGMENTS.map((segment) => (
            <div
              key={segment}
              className="flex min-h-40 flex-col justify-between rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-400">
                {segment}
              </span>
              <span className="text-sm text-slate-500">Case em breve</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">
            Quer que a sua empresa seja o próximo case?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Entre em contato e vamos entender como a automação pode escalar a sua operação.
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
