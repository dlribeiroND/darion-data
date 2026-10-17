import { Suspense } from "react";
import Link from "next/link";
import ContatoForm from "@/components/contato-form";
import WhatsAppButton from "@/components/whatsapp-button";
import { site } from "@/content/site.config";

export const metadata = {
  title: "Contato",
  description:
    "Conte o seu cenário de redes, segurança Fortinet, automação ou governança de IA. Respondemos em até 1 dia útil.",
  alternates: {
    canonical: "https://www.dariondata.com.br/contato",
  },
  openGraph: {
    title: "Contato | Darion Data",
    description:
      "Conte o seu cenário de redes, segurança Fortinet, automação ou governança de IA. Respondemos em até 1 dia útil.",
    url: "https://www.dariondata.com.br/contato",
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
    title: "Contato | Darion Data",
    description:
      "Conte o seu cenário de redes, segurança Fortinet, automação ou governança de IA. Respondemos em até 1 dia útil.",
    images: ["/og-image.png"],
  },
};

export default function ContatoPage() {
  return (
    <div className="pb-24">
      <section className="mx-auto max-w-3xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium text-[#0071e3] shadow-xs">
            Canal Comercial
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Conte o seu cenário.
          </h1>
          <p className="mt-3 text-base leading-relaxed text-[#6e6e73]">
            Pode ser vago: &ldquo;a rede está lenta&rdquo;, &ldquo;vamos trocar o firewall&rdquo;, &ldquo;quero saber o que a equipe usa de IA&rdquo;. A gente começa daí. Respondemos em até 1 dia útil e a primeira conversa serve para entender se faz sentido seguir.
          </p>
        </div>

        {/* Fallback sem JavaScript */}
        <noscript>
          <div className="mt-8 rounded-2xl border border-black/[0.08] bg-white p-6 text-center text-xs text-[#1d1d1f] space-y-2">
            <p className="font-semibold">Seu navegador está com JavaScript desativado.</p>
            <p className="text-[#6e6e73]">
              Para enviar sua mensagem diretamente, escreva para{" "}
              <a href={`mailto:${site.emailCommercial}`} className="font-medium text-[#0071e3] underline">
                {site.emailCommercial}
              </a>
              . Respondemos em até 1 dia útil.
            </p>
          </div>
        </noscript>

        {/* Formulário com Suspense */}
        <div className="mt-10 rounded-3xl border border-black/[0.06] bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:p-10">
          <Suspense
            fallback={
              <div className="py-12 text-center text-xs text-[#86868b] space-y-2">
                <p>Carregando formulário de contato...</p>
                <p className="text-[11px]">
                  Se preferir, escreva direto para{" "}
                  <a href={`mailto:${site.emailCommercial}`} className="text-[#0071e3] underline">
                    {site.emailCommercial}
                  </a>
                </p>
              </div>
            }
          >
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
            Dúvida geral, sugestão, reclamação ou pedido sobre dados pessoais? Use o{" "}
            <Link href="/sac" className="font-medium text-[#0071e3] underline hover:text-[#0077ed]">
              SAC
            </Link>.
          </div>
        </div>
      </section>
    </div>
  );
}
