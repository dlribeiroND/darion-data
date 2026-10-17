import Link from "next/link";
import SacForm from "@/components/sac-form";
import WhatsAppButton from "@/components/whatsapp-button";
import { site } from "@/content/site.config";

export const metadata = {
  title: "SAC — Atendimento ao Público | Darion Data",
  description:
    "Canal aberto ao público da Darion Data para dúvidas, sugestões, elogios, reclamações e requerimentos de titulares de dados pessoais (LGPD).",
};

export default function SacPage() {
  return (
    <div className="pb-24">
      <section className="mx-auto max-w-3xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium text-[#0071e3] shadow-xs">
            Canal Aberto ao Público
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            SAC — atendimento ao público
          </h1>
          <p className="mt-3 text-base leading-relaxed text-[#6e6e73]">
            Este é o nosso canal aberto. Se você tem uma dúvida, quer sugerir algo, registrar uma reclamação, fazer um elogio ou exercer seus direitos sobre dados pessoais, use o formulário abaixo. Para conversar sobre um projeto, use o{" "}
            <Link href="/contato" className="text-[#0071e3] underline hover:text-[#0077ed]">
              Contato comercial
            </Link>.
          </p>
        </div>

        {/* Formulário do SAC */}
        <div className="mt-10 rounded-3xl border border-black/[0.06] bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:p-10">
          <SacForm />
        </div>

        {/* Como tratamos & Direitos do titular */}
        <div className="mt-10 space-y-6">
          <div className="rounded-2xl border border-black/[0.08] bg-[#fafafc] p-6 text-xs text-[#515154] space-y-2">
            <h2 className="text-sm font-semibold text-[#1d1d1f]">
              Como tratamos sua solicitação
            </h2>
            <p className="leading-relaxed">
              Registramos a solicitação com um número de protocolo gerado no envio, respondemos no prazo informado e, em caso de reclamações, retornamos formalmente com a conclusão do atendimento. {site.responseTimeSac}
            </p>
          </div>

          <div className="rounded-2xl border border-black/[0.08] bg-white p-6 text-xs text-[#515154] space-y-2">
            <h2 className="text-sm font-semibold text-[#1d1d1f]">
              Direitos dos titulares de dados pessoais (LGPD)
            </h2>
            <p className="leading-relaxed">
              Se você deseja solicitar confirmação de tratamento, acesso, correção, eliminação, portabilidade, oposição ou revogação de consentimento de dados pessoais tratados pela Darion Data, selecione o tipo <strong>&ldquo;Privacidade e dados pessoais (LGPD)&rdquo;</strong> no formulário acima. Suas requisições serão analisadas e respondidas pelo nosso encarregado de privacidade (DPO) dentro dos prazos legais. Saiba mais na nossa{" "}
              <Link href="/privacidade" className="text-[#0071e3] underline hover:text-[#0077ed]">
                Política de Privacidade
              </Link>.
            </p>
          </div>

          <div className="rounded-2xl border border-black/[0.08] bg-[#f5f5f7] p-6 text-xs text-[#515154] flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-semibold text-[#1d1d1f] block">Canais oficiais de suporte</span>
              <a href={`mailto:${site.emailSac}`} className="text-[#0071e3] hover:underline">
                {site.emailSac}
              </a>
            </div>

            <WhatsAppButton variant="inline" message="Olá! Vim pelo SAC da Darion Data e gostaria de falar sobre um atendimento." />
          </div>
        </div>
      </section>
    </div>
  );
}
