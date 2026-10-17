import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site.config";

export const metadata = {
  title: "Sobre a Darion Data | Liderança e Parceria Técnica",
  description:
    "Conheça a Darion Data, empresa de tecnologia sediada em Belo Horizonte com liderança técnica experiente em redes corporativas, Fortinet, automação e governança de IA.",
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
          A Darion Data foi aberta em {site.foundedYear} em {site.city} — {site.state}. Ainda não temos uma carteira de clientes para mostrar. O que mostramos é quem executa o trabalho, como ele é feito e o que sustenta a parceria técnica com o fabricante.
        </p>
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
                Responsável Técnico e Fundador
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
                Com mais de 22 anos de experiência em infraestrutura de tecnologia da informação, gestão de serviços, computação em nuvem e liderança técnica de equipes, Diego coordenou a infraestrutura de TI por 12 anos e meio na Drive A Informática antes de fundar a Darion Data.
              </p>
              <p>
                Sua atuação envolve vivência prática em redes corporativas híbridas, automação com scripts e infraestrutura como código, implementação de observabilidade e monitoramento contínuo, além de consultoria de governança contra o uso não autorizado de inteligência artificial (Shadow AI), mitigando riscos de vazamento de dados, exposição de propriedade intelectual e descumprimento da LGPD.
              </p>

              <div className="pt-4 border-t border-black/[0.06]">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f] mb-3">
                  Certificações Técnicas Confirmadas
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

      {/* Parceria Técnica */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-[#f5f5f7] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Homologação Oficial
            </span>
            <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-[#1d1d1f]">
              Parceria Fortinet · Modelo Integrator
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
              A Darion Data foi aprovada no Fortinet Partner Program no modelo Integrator. Atuamos no desenho, na implantação, na configuração técnica e na sustentação de arquiteturas baseadas no Fortinet Security Fabric.
            </p>
          </div>
          {site.fortinet.badgePath && (
            <div className="shrink-0">
              <Image
                src={site.fortinet.badgePath}
                alt="Fortinet Partner Badge"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          )}
        </div>
      </section>

      {/* Como começamos um projeto */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Relacionamento Comercial
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              Como começamos um projeto
            </h2>
            <p className="mt-2 text-sm text-[#6e6e73]">
              Previsibilidade e transparência técnica desde a primeira interação:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-5 text-xs text-[#515154]">
              <span className="text-sm font-semibold text-[#1d1d1f] block mb-2">
                1. Conversa técnica inicial
              </span>
              <p className="leading-relaxed">
                Entendimento dos desafios atuais de rede, conectividade, processos manuais ou governança de dados.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-5 text-xs text-[#515154]">
              <span className="text-sm font-semibold text-[#1d1d1f] block mb-2">
                2. Levantamento do cenário
              </span>
              <p className="leading-relaxed">
                Análise da topologia, regras de firewall, dependências de sistemas e nível de maturidade do ambiente.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-5 text-xs text-[#515154]">
              <span className="text-sm font-semibold text-[#1d1d1f] block mb-2">
                3. Proposta com escopo definido
              </span>
              <p className="leading-relaxed">
                Apresentação de escopo técnico objetivo, premissas de execução e critérios de entrega sem surpresas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dados da Empresa */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-6 text-xs text-[#6e6e73] space-y-1">
          <p className="font-semibold text-[#1d1d1f] text-sm mb-2">Dados cadastrais da empresa</p>
          <p>Razão Social: {site.legalName}</p>
          <p>Nome Fantasia: {site.brandName} Soluções em Tecnologia</p>
          <p>CNPJ: {site.cnpj}</p>
          <p>Sede: {site.city} — {site.state}</p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Vamos conversar sobre a infraestrutura da sua empresa?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#6e6e73]">
            Agende uma conversa técnica diretamente com quem executa o projeto.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contato"
              className="rounded-full bg-[#0071e3] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0077ed]"
            >
              Agendar conversa técnica
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
