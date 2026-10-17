import { Suspense } from "react";
import Link from "next/link";
import ContatoForm from "@/components/contato-form";
import WhatsAppButton from "@/components/whatsapp-button";
import { site } from "@/content/site.config";

export const metadata = {
  title: "Contato Comercial & Projetos | Darion Data",
  description:
    "Agende uma conversa técnica com a equipe da Darion Data para projetos de redes Fortinet, SD-WAN, automação de processos ou governança de Shadow AI.",
};

export default function ContatoPage() {
  return (
    <div className="pb-24">
      <section className="mx-auto max-w-3xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium text-[#0071e3] shadow-xs">
            Canal Comercial & Projetos
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Agendar conversa técnica
          </h1>
          <p className="mt-3 text-base leading-relaxed text-[#6e6e73]">
            Conte sobre os desafios de conectividade, segurança, automação ou IA da sua organização. Responderemos com os próximos passos técnicos.
          </p>
        </div>

        {/* Formulário com Suspense */}
        <div className="mt-10 rounded-3xl border border-black/[0.06] bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:p-10">
          <Suspense fallback={<div className="py-12 text-center text-xs text-[#86868b]">Carregando formulário...</div>}>
            <ContatoForm />
          </Suspense>
        </div>

        {/* Informações de contato direto e SAC */}
        <div className="mt-10 rounded-2xl border border-black/[0.08] bg-[#f5f5f7] p-6 text-xs text-[#515154] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-semibold text-[#1d1d1f] block">Contato direto</span>
              <a
                href={`mailto:${site.emailCommercial}`}
                className="text-[#0071e3] hover:underline"
              >
                {site.emailCommercial}
              </a>
              {site.phoneDisplay && (
                <p className="text-[#6e6e73] mt-0.5">{site.phoneDisplay}</p>
              )}
            </div>

            <WhatsAppButton variant="inline" />
          </div>

          <div className="border-t border-black/[0.06] pt-3 text-[#6e6e73]">
            Dúvida, sugestão, reclamação ou pedido sobre seus dados pessoais? Use o{" "}
            <Link href="/sac" className="font-medium text-[#0071e3] underline hover:text-[#0077ed]">
              SAC (Canal de Atendimento ao Público)
            </Link>.
          </div>
        </div>
      </section>
    </div>
  );
}
