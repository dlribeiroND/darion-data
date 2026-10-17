import Link from "next/link";

export const metadata = {
  title: "Governança de IA e Shadow AI",
  description:
    "Mapeamento e governança de Shadow AI: ferramentas em uso, proteção de dados, alternativas aprovadas e regras práticas para a equipe.",
  alternates: {
    canonical: "https://www.dariondata.com.br/shadow-ai",
  },
  openGraph: {
    title: "Governança de IA e Shadow AI | Darion Data",
    description:
      "Mapeamento e governança de Shadow AI: ferramentas em uso, proteção de dados, alternativas aprovadas e regras práticas para a equipe.",
    url: "https://www.dariondata.com.br/shadow-ai",
    siteName: "Darion Data",
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
    title: "Governança de IA e Shadow AI | Darion Data",
    description:
      "Mapeamento e governança de Shadow AI: ferramentas em uso, proteção de dados, alternativas aprovadas e regras práticas para a equipe.",
    images: ["/og-image.png"],
  },
};

const COMMON_CHANNELS = [
  "Assistentes acessados com conta pessoal.",
  "Extensões de navegador.",
  "Recursos novos de IA dentro de sistemas que a empresa já usa.",
  "Automações criadas pelas áreas de negócio.",
  "Documentos e planilhas enviados a ferramentas externas.",
];

const WHAT_IS_AT_STAKE = [
  "Informação de clientes e dados pessoais saindo da empresa.",
  "Segredos de negócio.",
  "Compromissos de confidencialidade.",
  "A LGPD.",
  "Decisões tomadas com respostas de IA que ninguém registra.",
];

const QUESTIONS_ANSWERED = [
  "Que ferramentas estão em uso?",
  "Que tipo de dado chega a elas?",
  "O que levou as pessoas a usá-las?",
  "Existe uma alternativa aprovada que resolva o mesmo problema?",
  "O que a política da empresa diz, e as pessoas conhecem?",
];

const DELIVERABLES = [
  {
    title: "Mapa das ferramentas e usos",
    description: "Inventário das soluções e das áreas onde elas apareceram.",
  },
  {
    title: "Risco por tipo de dado e por área",
    description: "Avaliação do nível de exposição de acordo com a sensibilidade das informações.",
  },
  {
    title: "Proposta de política de uso aceitável",
    description: "Regras claras e práticas que a equipe consiga seguir no dia a dia.",
  },
  {
    title: "Alternativas aprovadas e controles na rede",
    description: "Indicação de ferramentas homologadas e parametrização de controles técnicos.",
  },
  {
    title: "Plano de conversa com as equipes",
    description: "Diálogo transparente para orientar os colaboradores sem travar o trabalho.",
  },
  {
    title: "Revisão periódica",
    description: "Acompanhamento regular para atualizar regras conforme surgem novas ferramentas.",
  },
];

export default function ShadowAiPage() {
  return (
    <div className="space-y-24 pb-24">
      {/* Header */}
      <section className="mx-auto max-w-4xl px-4 pt-16 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium text-[#0071e3] shadow-xs">
          <span>Governança · Shadow AI</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-6xl">
          Sua equipe já usa IA.
          <br />
          <span className="bg-gradient-to-r from-[#0071e3] via-[#0077ed] to-[#2997ff] bg-clip-text text-transparent">
            Você sabe quais ferramentas, com quais dados?
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-[#6e6e73]">
          Ninguém decidiu usar IA escondido. Alguém teve prazo apertado, achou uma ferramenta que ajudava e seguiu em frente. Só que, somadas, essas decisões individuais mexem com dados da empresa, e a TI normalmente não fica sabendo.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/contato?assunto=shadow-ai"
            className="rounded-full bg-[#0071e3] px-8 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#0077ed]"
          >
            Conte o seu cenário
          </Link>
        </div>
      </section>

      {/* O que é & Onde aparece */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* O que é */}
          <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-[#1d1d1f]">
                O que é
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#6e6e73]">
                Uso de ferramentas, extensões e recursos de IA fora do conhecimento da TI e de quem cuida dos dados. Quase sempre nasce de boa intenção.
              </p>
            </div>
          </div>

          {/* Onde aparece */}
          <div className="rounded-3xl border border-black/[0.08] bg-[#fafafc] p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-[#1d1d1f]">
              Onde aparece
            </h2>
            <div className="mt-6 space-y-3">
              {COMMON_CHANNELS.map((channel, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-[#515154]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0071e3]/10 text-[10px] font-bold text-[#0071e3]">
                    •
                  </span>
                  <span className="leading-relaxed">{channel}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O que está em jogo */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              O que está em jogo
            </h2>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {WHAT_IS_AT_STAKE.map((item, idx) => (
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

      {/* Perguntas que ajudamos a responder */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-[#f5f5f7] p-8 sm:p-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              Perguntas que ajudamos a responder:
            </h2>
          </div>

          <div className="mt-8 space-y-3">
            {QUESTIONS_ANSWERED.map((question, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-2xl border border-black/[0.06] bg-white p-4 text-xs text-[#424245] shadow-2xs"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0071e3]/10 text-[10px] font-bold text-[#0071e3]">
                  ?
                </span>
                <span className="leading-relaxed font-medium">{question}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que você recebe */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f]">
            O que você recebe
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DELIVERABLES.map((deliv, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-black/[0.08] bg-white p-7 shadow-xs flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-semibold text-[#1d1d1f]">
                  {deliv.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#6e6e73]">
                  {deliv.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Como conduzimos & Reflexão */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-12 shadow-sm space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
            Como conduzimos
          </h2>
          <p className="text-sm leading-relaxed text-[#424245]">
            Começamos conversando com as áreas, não pelo bloqueio. Olhamos as ferramentas já adotadas e seus termos, e, quando o ambiente permite, a análise de tráfego e de aplicações a partir do controle de aplicações do firewall.
          </p>
          <div className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-6">
            <p className="text-xs sm:text-sm font-medium italic text-[#0071e3] leading-relaxed">
              Proibir sem entender costuma empurrar o uso para ainda mais longe da vista da TI. Por isso o ponto de partida é entender por que as pessoas recorreram à IA.
            </p>
          </div>
        </div>
      </section>

      {/* O que isso não é */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-[#f5f5f7] p-8 sm:p-12 space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1d1d1f]">
            O que isso não é
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-[#6e6e73]">
            Não é auditoria para apontar culpados. Não substitui o jurídico: recomendações legais e a análise de contratos ficam com o corpo jurídico ou o encarregado da sua empresa. E não promete enxergar tudo: entregamos um retrato honesto do que conseguimos ver.
          </p>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Quer um retrato honesto de como a IA está sendo usada aí?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#6e6e73]">
            Vamos conversar.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contato?assunto=shadow-ai"
              className="rounded-full bg-[#0071e3] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0077ed]"
            >
              Perguntar sobre IA na minha empresa
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
