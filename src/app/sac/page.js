import Link from "next/link";
import SacForm from "@/components/sac-form";
import WhatsAppButton from "@/components/whatsapp-button";
import { site } from "@/content/site.config";

export const metadata = {
  title: "SAC",
  description:
    "Um canal aberto para qualquer pessoa: cliente, visitante, parceiro ou titular de dados. Cada mensagem recebe um número de protocolo e uma resposta.",
  alternates: {
    canonical: "https://www.dariondata.com.br/sac",
  },
  openGraph: {
    title: "SAC | Darion Data",
    description:
      "Um canal aberto para qualquer pessoa: cliente, visitante, parceiro ou titular de dados. Cada mensagem recebe um número de protocolo e uma resposta.",
    url: "https://www.dariondata.com.br/sac",
    siteName: site.brandName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Darion Data",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAC | Darion Data",
    description:
      "Um canal aberto para qualquer pessoa: cliente, visitante, parceiro ou titular de dados. Cada mensagem recebe um número de protocolo e uma resposta.",
    images: ["/og-image.png"],
  },
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
            SAC
          </h1>
          <p className="mt-3 text-base leading-relaxed text-[#6e6e73]">
            Um canal aberto para qualquer pessoa: cliente, visitante, parceiro ou titular de dados. Escreva do seu jeito. Cada mensagem recebe um número de protocolo e uma resposta.
          </p>
        </div>

        {/* Fallback sem JavaScript */}
        <noscript>
          <div className="mt-8 rounded-2xl border border-black/[0.08] bg-white p-6 text-center text-xs text-[#1d1d1f] space-y-2">
            <p className="font-semibold">Seu navegador está com JavaScript desativado.</p>
            <p className="text-[#6e6e73]">
              Para registrar seu atendimento diretamente, envie um e-mail para{" "}
              <a href={`mailto:${site.emailSac}`} className="font-medium text-[#0071e3] underline">
                {site.emailSac}
              </a>
              . Respondemos em até 3 dias úteis e geramos seu protocolo de atendimento.
            </p>
          </div>
        </noscript>

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
              Registramos com protocolo, respondemos no prazo informado e, nas reclamações, retornamos com a conclusão. Reclamações são lidas pelo responsável técnico da empresa.
            </p>
          </div>

          <div className="rounded-2xl border border-black/[0.08] bg-white p-6 text-xs text-[#515154] space-y-2">
            <h2 className="text-sm font-semibold text-[#1d1d1f]">
              Direitos do titular
            </h2>
            <p className="leading-relaxed">
              Pedidos sobre dados pessoais (acesso, correção, eliminação, portabilidade, oposição, revogação de consentimento) são feitos aqui, no tipo &ldquo;Privacidade e dados pessoais (LGPD)&rdquo;. Saiba mais na nossa{" "}
              <Link href="/privacidade" className="text-[#0071e3] underline hover:text-[#0077ed]">
                Política de Privacidade
              </Link>.
            </p>
          </div>

          <div className="rounded-2xl border border-black/[0.08] bg-[#f5f5f7] p-6 text-xs text-[#515154] flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-semibold text-[#1d1d1f] block">Canal oficial do SAC</span>
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
