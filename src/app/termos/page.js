import Link from "next/link";
import { site } from "@/content/site.config";

export const metadata = {
  title: "Termos de Uso | Darion Data",
  description:
    "Termos e condições de uso do site institucional da Darion Data Soluções em Tecnologia LTDA.",
};

export default function TermosPage() {
  return (
    <div className="pb-24">
      <section className="mx-auto max-w-4xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium text-[#0071e3] shadow-xs">
            Diretrizes Institucionais
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Termos de Uso do Website
          </h1>
          <p className="mt-3 text-sm text-[#6e6e73]">
            {site.legalName} — Belo Horizonte — MG
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-black/[0.06] bg-white p-8 sm:p-12 text-xs sm:text-sm leading-relaxed text-[#424245] space-y-7">
          <section className="space-y-3">
            <h2 className="text-base font-semibold text-[#1d1d1f]">
              1. Objeto e Natureza Informativa
            </h2>
            <p>
              Este website tem finalidade estritamente institucional e informativa, apresentando as frentes de atuação técnica, conceitos arquiteturais e canais de contato da <strong>{site.legalName}</strong> (&ldquo;Darion Data&rdquo;).
            </p>
            <p>
              A navegação nestas páginas não estabelece contrato de prestação de serviços ou garantia implícita de escopo, preço ou prazo. Toda e qualquer contratação ocorre exclusivamente mediante proposta comercial formal e contrato específico de prestação de serviços firmado entre as partes.
            </p>
          </section>

          <section className="space-y-3 border-t border-black/[0.06] pt-6">
            <h2 className="text-base font-semibold text-[#1d1d1f]">
              2. Propriedade Intelectual
            </h2>
            <p>
              Os textos, logotipos institucionais, elementos visuais e códigos que estruturam este site são de titularidade da Darion Data ou utilizados mediante autorização legítima. É vedada a reprodução total ou parcial para finalidades comerciais sem consentimento prévio e expresso.
            </p>
          </section>

          <section className="space-y-3 border-t border-black/[0.06] pt-6">
            <h2 className="text-base font-semibold text-[#1d1d1f]">
              3. Marcas de Terceiros
            </h2>
            <p>
              Fortinet®, FortiGate®, FortiManager®, FortiAnalyzer®, FortiSwitch®, FortiAP® e Fortinet Security Fabric são marcas registradas ou marcas da Fortinet, Inc. e/ou de suas afiliadas. A menção a marcas de fabricantes tem propósito descritivo da parceria técnica e compatibilidade tecnológica no modelo Integrator.
            </p>
          </section>

          <section className="space-y-3 border-t border-black/[0.06] pt-6">
            <h2 className="text-base font-semibold text-[#1d1d1f]">
              4. Limitação de Responsabilidade
            </h2>
            <p>
              O conteúdo disponibilizado reflete práticas recomendadas de engenharia e abordagens técnicas de mercado no momento de sua publicação. A Darion Data não se responsabiliza por decisões tomadas por visitantes sem consulta técnica prévia e análise individualizada de seu ambiente computacional.
            </p>
          </section>

          <section className="space-y-3 border-t border-black/[0.06] pt-6">
            <h2 className="text-base font-semibold text-[#1d1d1f]">
              5. Canais de Contato e Dúvidas
            </h2>
            <p>
              Para esclarecer dúvidas sobre estes termos ou exercer seus direitos como titular de dados, utilize o canal de{" "}
              <Link href="/sac" className="text-[#0071e3] underline hover:text-[#0077ed]">
                SAC
              </Link>{" "}
              ou entre em contato pelo e-mail <code>{site.emailSac}</code>.
            </p>
          </section>

          <section className="space-y-3 border-t border-black/[0.06] pt-6">
            <h2 className="text-base font-semibold text-[#1d1d1f]">
              6. Legislação Aplicável e Foro
            </h2>
            <p>
              Estes termos são regidos pelas leis da República Federativa do Brasil. Para dirimir quaisquer questões relativas ao uso deste website, elege-se o Foro da Comarca de <strong>Belo Horizonte — MG</strong>.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
