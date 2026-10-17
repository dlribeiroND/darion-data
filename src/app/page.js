import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site.config";

export const metadata = {
  title: {
    absolute: "Redes corporativas, SD-WAN, segurança Fortinet e automação | Darion Data",
  },
  description:
    "A Darion Data projeta e implanta redes multi-site, SD-WAN e segurança de perímetro com tecnologia Fortinet. Também trabalha com automação de processos e de redes, e com a governança do uso de IA dentro das empresas.",
  alternates: {
    canonical: "https://www.dariondata.com.br",
  },
  openGraph: {
    title: "Redes corporativas, SD-WAN, segurança Fortinet e automação | Darion Data",
    description:
      "A Darion Data projeta e implanta redes multi-site, SD-WAN e segurança de perímetro com tecnologia Fortinet. Também trabalha com automação de processos e de redes, e com a governança do uso de IA dentro das empresas.",
    url: "https://www.dariondata.com.br",
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
    title: "Redes corporativas, SD-WAN, segurança Fortinet e automação | Darion Data",
    description:
      "A Darion Data projeta e implanta redes multi-site, SD-WAN e segurança de perímetro com tecnologia Fortinet. Também trabalha com automação de processos e de redes, e com a governança do uso de IA dentro das empresas.",
    images: ["/og-image.png"],
  },
};

const WHO_SEEKS_US = [
  "A rede cresceu por remendos e ninguém tem o desenho completo na cabeça.",
  "O firewall está no fim da vida e trocar dá medo de derrubar algo.",
  "O acesso remoto funciona, mas você não sabe ao certo até onde ele alcança.",
  "A auditoria está chegando e os registros estão espalhados.",
  "Tem rotina que só roda porque alguém confere a planilha toda sexta-feira.",
  "A equipe usa ferramentas de IA e ninguém sabe com que dados.",
];

const WORK_STEPS = [
  {
    step: "01",
    title: "Conversa e diagnóstico",
    description: "Entendemos o ambiente e o que está preocupando você.",
  },
  {
    step: "02",
    title: "Desenho",
    description: "Propomos a arquitetura e explicamos as escolhas, inclusive o que não vale a pena fazer.",
  },
  {
    step: "03",
    title: "Implantação",
    description: "Janelas combinadas, plano de volta atrás e validação com a sua equipe.",
  },
  {
    step: "04",
    title: "Acompanhamento",
    description: "Ajustes depois que a rede está rodando com gente de verdade usando.",
  },
];

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-4 pt-16 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium text-[#0071e3] shadow-xs">
          <span>Redes · Segurança · Automação</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-6xl">
          Redes corporativas desenhadas e dimensionadas
          <br />
          <span className="bg-gradient-to-r from-[#0071e3] via-[#0077ed] to-[#43b5ff] bg-clip-text text-transparent">
            para a realidade de cada cliente.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg font-normal leading-relaxed text-[#6e6e73]">
          A Darion Data projeta e implanta redes multi-site, SD-WAN e segurança de perímetro com tecnologia Fortinet. Também trabalha com automação, de processos e de redes, e com a governança do uso de IA dentro das empresas.
        </p>

        {/* Linha discreta de parceria Fortinet */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-[#f5f5f7] px-3.5 py-1 text-xs font-medium text-[#424245]">
          {site.fortinet.badgePath ? (
            <Image
              src={site.fortinet.badgePath}
              alt="Fortinet Partner"
              width={18}
              height={18}
              className="inline-block"
            />
          ) : null}
          <span>Parceira Fortinet · {site.fortinet.partnerModel}</span>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contato"
            className="rounded-full bg-[#0071e3] px-7 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#0077ed] active:scale-[0.98]"
          >
            Conte o seu cenário
          </Link>
          <Link
            href="/redes-seguranca"
            className="rounded-full border border-black/[0.1] bg-white px-7 py-3 text-sm font-medium text-[#1d1d1f] shadow-xs transition-all hover:bg-black/[0.02]"
          >
            Ver redes e segurança
          </Link>
        </div>
      </section>

      {/* O que fazemos: 3 frentes */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f]">
            O que fazemos
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Bloco 1: Redes e Segurança */}
          <div className="flex flex-col justify-between rounded-3xl border border-black/[0.08] bg-white p-8 shadow-xs">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
                Infraestrutura Fortinet
              </span>
              <h3 className="mt-2 text-xl font-semibold text-[#1d1d1f]">
                Redes e segurança
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#6e6e73]">
                Ligamos matriz, filiais, nuvem e data center, com links redundantes, firewall de nova geração, segmentação e acesso por aplicação. O desenho parte de como a sua operação funciona, não de um catálogo.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-black/[0.06]">
              <Link
                href="/redes-seguranca"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:underline"
              >
                Conhecer redes e segurança
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Bloco 2: Automação */}
          <div className="flex flex-col justify-between rounded-3xl border border-black/[0.08] bg-white p-8 shadow-xs">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
                Eficiência Operacional
              </span>
              <h3 className="mt-2 text-xl font-semibold text-[#1d1d1f]">
                Automação
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#6e6e73]">
                Rotinas de negócio e de rede que hoje dependem de planilha, de conferência manual ou de uma pessoa que &ldquo;sabe como faz&rdquo;. Automatizamos com supervisão humana onde importa.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-black/[0.06]">
              <Link
                href="/automacao"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:underline"
              >
                Conhecer automação
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Bloco 3: Governança de IA */}
          <div className="flex flex-col justify-between rounded-3xl border border-black/[0.08] bg-white p-8 shadow-xs">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
                Uso Responsável
              </span>
              <h3 className="mt-2 text-xl font-semibold text-[#1d1d1f]">
                Governança de IA
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#6e6e73]">
                A sua equipe provavelmente já usa IA. Ajudamos a enxergar onde e com quais dados, e a criar regras que as pessoas consigam seguir.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-black/[0.06]">
              <Link
                href="/shadow-ai"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:underline"
              >
                Conhecer governança de IA
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quem costuma nos procurar */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              Quem costuma nos procurar
            </h2>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {WHO_SEEKS_US.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-2xl border border-black/[0.06] bg-[#fafafc] p-4 text-xs text-[#424245]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0071e3]/10 text-[10px] font-bold text-[#0071e3]">
                  ✓
                </span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como trabalhamos */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f]">
            Como trabalhamos
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WORK_STEPS.map((step) => (
            <div
              key={step.step}
              className="rounded-3xl border border-black/[0.08] bg-white p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-bold text-[#0071e3]">
                  {step.step}
                </span>
                <h3 className="mt-3 text-base font-semibold text-[#1d1d1f]">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#6e6e73]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quem está à frente */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#1d1d1f]">
              Quem está à frente
            </h3>
            <p className="mt-2 text-sm text-[#6e6e73] leading-relaxed">
              A Darion Data é nova. Quem lidera é o Diego Ribeiro, com mais de 22 anos em infraestrutura, serviços e nuvem. Você conversa com quem vai desenhar e acompanhar o projeto.
            </p>
          </div>
          <Link
            href="/sobre"
            className="rounded-full border border-black/[0.1] bg-white px-6 py-2.5 text-xs font-medium text-[#1d1d1f] hover:bg-black/[0.02] whitespace-nowrap"
          >
            Conhecer o Diego
          </Link>
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
