import SacForm from "@/components/sac-form";

export const metadata = {
  title: "Contato & SAC | Darion Data",
  description: "Fale com os especialistas da Darion Data: projetos de redes, cibersegurança Fortinet, automação e SAC.",
};

export default function SacPage() {
  return (
    <div className="pb-24">
      <section className="mx-auto max-w-2xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium text-[#0071e3] shadow-xs">
            Atendimento & Soluções
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Fale conosco
          </h1>
          <p className="mt-3 text-base leading-relaxed text-[#6e6e73]">
            Tire dúvidas sobre automação de processos, solicite uma consultoria, diagnóstico da sua rede e cibersegurança ou envie uma mensagem ao nosso canal de SAC.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-black/[0.06] bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:p-10">
          <SacForm />
        </div>
      </section>
    </div>
  );
}
