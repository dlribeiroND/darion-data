import Link from "next/link";
import { site } from "@/content/site.config";

export const metadata = {
  title: "Compliance & Governança | Darion Data",
  description:
    "Diretrizes de transparência, privacidade, termos de uso e práticas de segurança da informação da Darion Data Soluções em Tecnologia LTDA.",
};

export default function CompliancePage() {
  return (
    <div className="bg-[#fbfbfd] text-[#1d1d1f] pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/[0.06] pt-16 pb-16 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium text-[#0071e3] shadow-xs mb-4">
            <span>Governança & Transparência Corporativa</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f]">
            Compliance e Políticas
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#6e6e73] leading-relaxed">
            Reunimos aqui as diretrizes institucionais, políticas de privacidade e termos de uso que norteiam as atividades da Darion Data.
          </p>
        </div>
      </section>

      {/* Cartões-Índice das Políticas Oficiais */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1: Privacidade */}
          <div className="flex flex-col justify-between rounded-3xl border border-black/[0.08] bg-white p-7 shadow-xs transition-all hover:border-[#0071e3]/40 hover:shadow-md">
            <div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0071e3]/10 text-[#0071e3] mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-base font-semibold text-[#1d1d1f]">
                Política de Privacidade
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-[#6e6e73]">
                Informações claras sobre o tratamento de dados pessoais, bases legais, direitos dos titulares conforme a LGPD e o papel da Darion Data como operadora em projetos corporativos.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/[0.06]">
              <Link
                href="/privacidade"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:underline"
              >
                Ler Política de Privacidade
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Termos de Uso */}
          <div className="flex flex-col justify-between rounded-3xl border border-black/[0.08] bg-white p-7 shadow-xs transition-all hover:border-[#0071e3]/40 hover:shadow-md">
            <div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#34c759]/10 text-[#34c759] mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h2 className="text-base font-semibold text-[#1d1d1f]">
                Termos de Uso
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-[#6e6e73]">
                Condições de uso do website institucional, propriedade intelectual, limitação de responsabilidade e informações de marcas registradas.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/[0.06]">
              <Link
                href="/termos"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#34c759] hover:underline"
              >
                Ler Termos de Uso
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Card 3: SAC / Direitos dos Titulares */}
          <div className="flex flex-col justify-between rounded-3xl border border-black/[0.08] bg-white p-7 shadow-xs transition-all hover:border-[#0071e3]/40 hover:shadow-md">
            <div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#af52de]/10 text-[#af52de] mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <h2 className="text-base font-semibold text-[#1d1d1f]">
                Canal de SAC e Titulares LGPD
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-[#6e6e73]">
                Canal aberto oficial para formalizar dúvidas, sugestões, reclamações e requerimentos de titulares sobre seus dados pessoais, com geração de protocolo.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/[0.06]">
              <Link
                href="/sac"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#af52de] hover:underline"
              >
                Acessar canal oficial do SAC
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Diretrizes Factualmente Praticadas */}
      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-10 space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Práticas Internas
            </span>
            <h2 className="mt-2 text-xl font-semibold text-[#1d1d1f]">
              Diretrizes de Segurança da Informação e Ética Profissional
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
              Estamos estruturando nossos controles com base nas boas práticas da ISO/IEC 27001. A Darion Data não possui certificação ISO 27001. No cotidiano operacional, aplicamos medidas concretas e verificáveis:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 text-xs text-[#515154]">
            <div className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-4">
              <h3 className="font-semibold text-[#1d1d1f] mb-1">Princípio do Menor Privilégio (PoLP)</h3>
              <p className="leading-relaxed">
                Colaboradores e prestadores acessam estritamente os sistemas e dados necessários para a execução de suas atividades técnicas homologadas.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-4">
              <h3 className="font-semibold text-[#1d1d1f] mb-1">Autenticação Multifator (MFA)</h3>
              <p className="leading-relaxed">
                Uso mandatório de autenticação de dois fatores e senhas fortes em todos os acessos administrativos a servidores, nuvens e serviços internos.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-4">
              <h3 className="font-semibold text-[#1d1d1f] mb-1">Rotinas de Cópias de Segurança (Backups)</h3>
              <p className="leading-relaxed">
                Backups periódicos e testes de restauração de configurações e repositórios para garantir a recuperação de dados operacionais essenciais.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-4">
              <h3 className="font-semibold text-[#1d1d1f] mb-1">Conduta e Confidencialidade</h3>
              <p className="leading-relaxed">
                Compromisso formal por escrito com sigilo profissional (NDA), transparência nas relações comerciais e repúdio a qualquer prática fraudulenta ou antiética.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato DPO */}
      <section className="mx-auto max-w-5xl px-4 pt-6 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/[0.08] bg-[#f5f5f7] p-6 text-center text-xs text-[#6e6e73]">
          <p>
            Dúvidas sobre compliance e governança corporativa podem ser encaminhadas ao SAC ou ao e-mail institucional:{" "}
            <a href={`mailto:${site.emailPrivacy}`} className="text-[#0071e3] underline hover:text-[#0077ed]">
              {site.emailPrivacy}
            </a>.
          </p>
        </div>
      </section>
    </div>
  );
}
