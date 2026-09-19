import SacForm from "@/components/sac-form";

export const metadata = {
  title: "SAC | Darion Data",
  description: "Fale com a Darion Data: reclamações, sugestões e contato geral.",
};

export default function SacPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">
        Serviço de Atendimento ao Cliente
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-400">
        Envie uma reclamação, sugestão ou entre em contato conosco. Respondemos pelo e-mail
        informado no formulário.
      </p>

      <div className="mt-10">
        <SacForm />
      </div>
    </section>
  );
}
