import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site.config";

export const metadata = {
  title: {
    absolute: "Sobre a Darion Data",
  },
  description:
    "Uma empresa nova, com experiência de campo. Conheça a Darion Data, nossa liderança técnica e a parceria Fortinet.",
  alternates: {
    canonical: "https://www.dariondata.com.br/sobre",
  },
  openGraph: {
    title: "Sobre a Darion Data",
    description:
      "Uma empresa nova, com experiência de campo. Conheça a Darion Data, nossa liderança técnica e a parceria Fortinet.",
    url: "https://www.dariondata.com.br/sobre",
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
    title: "Sobre a Darion Data",
    description:
      "Uma empresa nova, com experiência de campo. Conheça a Darion Data, nossa liderança técnica e a parceria Fortinet.",
    images: ["/og-image.png"],
  },
};

const CERTIFICATIONS = [
  "ITIL v4 Foundation",
  "COBIT 2019 Foundation",
  "AWS Certified Cloud Practitioner",
  "AWS Certified AI Practitioner",
];

export default function SobrePage() {
  return (
    <div className="space-y-24 pb-24">
      {/* Header */}
      <section className="mx-auto max-w-4xl px-4 pt-16 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium text-[#0071e3] shadow-xs">
          <span>Institucional · Belo Horizonte — MG</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-6xl">
          Uma empresa nova,
          <br />
          <span className="bg-gradient-to-r from-[#0071e3] to-[#2997ff] bg-clip-text text-transparent">
            com experiência de campo.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-[#6e6e73]">
          A Darion Data abriu em {site.foundedYear}, em {site.city} — {site.state}. Ainda não temos lista de clientes para mostrar, e preferimos dizer isso a inventar. O que podemos mostrar é quem faz o trabalho e como ele é feito.
        </p>

        <div className="mt-4 text-xs italic text-[#0071e3]">
          Confiança se constrói dizendo o que dá e o que não dá para fazer.
        </div>
      </section>

      {/* Quem lidera */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-12 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
                Liderança Técnica
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-[#1d1d1f]">
                Diego Ribeiro
              </h2>
              <p className="text-sm font-medium text-[#6e6e73] mt-1">
                Fundador e responsável técnico
              </p>
              <div className="mt-4">
                <a
                  href={site.linkedinFounder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/[0.1] bg-white px-4 py-2 text-xs font-medium text-[#1d1d1f] transition-colors hover:bg-black/[0.02]"
                >
                  <svg className="h-4 w-4 fill-[#0077b5]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.34a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                  </svg>
                  <span>Perfil no LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4 text-xs sm:text-sm leading-relaxed text-[#424245]">
              <p>
                São mais de 22 anos em infraestrutura de TI, gestão de serviços e nuvem, 12 anos e meio deles coordenando a infraestrutura de uma empresa de tecnologia, a Drive A Informática. Passou por redes híbridas, automação com scripts e infraestrutura como código, monitoramento e governança do uso de IA.
              </p>

              <div className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-5 space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
                  Por que isso importa para você
                </h3>
                <p className="text-xs text-[#515154] leading-relaxed">
                  Quem conversa sobre o projeto é quem vai desenhá-lo e acompanhá-lo. Em troca, somos uma estrutura enxuta, e vamos dizer com clareza o que cabe no nosso tamanho.
                </p>
              </div>

              <div className="pt-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f] mb-3">
                  Certificações confirmadas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-black/[0.08] bg-[#fafafc] px-3.5 py-1 text-xs font-medium text-[#1d1d1f]"
                    >
                      {cert}
                    </span>
                  ))}
                  {site.showNseProgress && (
                    <span className="rounded-full border border-[#0071e3]/30 bg-[#0071e3]/5 px-3.5 py-1 text-xs font-medium text-[#0071e3]">
                      Em processo de certificação Fortinet NSE
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parceria Fortinet */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-[#f5f5f7] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Parceria Fortinet
            </span>
            <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-[#1d1d1f]">
              Modelo Integrator
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
              A Darion Data foi aprovada no programa de parceiros da Fortinet, no modelo Integrator.
            </p>
          </div>
          {site.fortinet.badgePath ? (
            <div className="shrink-0">
              <Image
                src={site.fortinet.badgePath}
                alt="Fortinet Partner Badge"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          ) : null}
        </div>
      </section>

      {/* Como começamos */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              Como começamos
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-6 space-y-2">
              <span className="text-xl font-bold text-[#0071e3]">1</span>
              <h3 className="text-sm font-semibold text-[#1d1d1f]">Conversa</h3>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                Uma conversa para entender o cenário e o que está acontecendo na sua operação.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-6 space-y-2">
              <span className="text-xl font-bold text-[#0071e3]">2</span>
              <h3 className="text-sm font-semibold text-[#1d1d1f]">Levantamento</h3>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                Um levantamento do ambiente, dos links, das regras e dos pontos de atenção.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-6 space-y-2">
              <span className="text-xl font-bold text-[#0071e3]">3</span>
              <h3 className="text-sm font-semibold text-[#1d1d1f]">Proposta</h3>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                Uma proposta com escopo claro, em que o que está dentro e fora fica escrito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dados da empresa */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/[0.06] bg-[#f5f5f7] p-6 text-xs text-[#6e6e73] flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-semibold text-[#1d1d1f] block">{site.legalName}</span>
            <span>CNPJ: {site.cnpj} · {site.city} — {site.state}</span>
          </div>
          <div>
            <span className="text-[11px] text-[#86868b]">Aberta em 25/09/2026</span>
          </div>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Conte como está a sua rede hoje.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#6e6e73]">
            A gente responde com franqueza se, e como, pode ajudar.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contato"
              className="rounded-full bg-[#0071e3] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0077ed]"
            >
              Falar sobre o meu cenário
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
