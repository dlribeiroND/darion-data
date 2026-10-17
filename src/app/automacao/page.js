import Link from "next/link";

export const metadata = {
  title: "Automação de processos e de redes",
  description:
    "Automação para rotinas de negócio e de redes, agentes de IA com supervisão humana e abordagens de redes inteligentes e autônomas com governança.",
  alternates: {
    canonical: "https://www.dariondata.com.br/automacao",
  },
  openGraph: {
    title: "Automação de processos e de redes | Darion Data",
    description:
      "Automação para rotinas de negócio e de redes, agentes de IA com supervisão humana e abordagens de redes inteligentes e autônomas com governança.",
    url: "https://www.dariondata.com.br/automacao",
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
    title: "Automação de processos e de redes | Darion Data",
    description:
      "Automação para rotinas de negócio e de redes, agentes de IA com supervisão humana e abordagens de redes inteligentes e autônomas com governança.",
    images: ["/og-image.png"],
  },
};

const NETWORK_APPROACHES = [
  {
    title: "Gerenciamento por intenção",
    description:
      "Você descreve o que a filial nova precisa acessar; a configuração é gerada e conferida continuamente, em vez de montada à mão, equipamento por equipamento.",
  },
  {
    title: "Gêmeo digital da rede",
    description:
      "Um modelo virtual da topologia e das políticas, para simular uma mudança de firewall ou a queda de um equipamento antes de mexer na rede de verdade.",
    reflection: "E se o teste pudesse acontecer na véspera, e não na janela da madrugada?",
  },
  {
    title: "Análise preditiva",
    description:
      "Telemetria e histórico ajudam a perceber um link piorando ou um padrão estranho de tráfego antes de virar chamado.",
    reflection: "E se a equipe fosse avisada antes do primeiro usuário reclamar?",
  },
  {
    title: "Rede que se ajusta",
    description:
      "Para falhas conhecidas, a rede aplica o ajuste sozinha, com aprovação humana quando o impacto é maior.",
    reflection: "E se aquele reinício das três da manhã não precisasse acordar ninguém?",
  },
  {
    title: "Instalação sem especialista no local",
    description:
      "A unidade nova chega com a configuração padrão já validada.",
  },
  {
    title: "Rede como código",
    description:
      "Configurações versionadas, com histórico de quem mudou o quê e alerta quando algo foge do combinado.",
  },
  {
    title: "Visão única",
    description:
      "Desempenho, experiência de acesso e eventos de segurança num só painel, para conversar sobre a rede com base no que está acontecendo.",
  },
];

const FAQS = [
  {
    q: "Preciso trocar meus sistemas?",
    a: "Em geral não; integramos o que funciona e dizemos com clareza quando algum sistema não permite.",
  },
  {
    q: "Serve se meu processo ou minha rede já são parcialmente automáticos?",
    a: "Sim; muita melhoria está em consertar os pontos frágeis.",
  },
  {
    q: "O que é um gêmeo digital de rede, e eu preciso de um?",
    a: "É uma cópia virtual para testar mudanças. Faz sentido onde uma mudança mal testada custa caro; em muitos ambientes, não.",
  },
  {
    q: "Posso aprovar antes das ações críticas?",
    a: "Sim; o nível de autonomia é definido junto com você.",
  },
  {
    q: "Por onde começar?",
    a: "Pela conversa: você conta o cenário e a gente diz o que vê.",
  },
];

export default function AutomacaoPage() {
  return (
    <div className="space-y-24 pb-24">
      {/* Header */}
      <section className="mx-auto max-w-4xl px-4 pt-16 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium text-[#0071e3] shadow-xs">
          <span>Automação · Processos e Redes</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-6xl">
          Automação para rotinas de negócio
          <br />
          <span className="bg-gradient-to-r from-[#0071e3] via-[#0077ed] to-[#2997ff] bg-clip-text text-transparent">
            e para redes.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-[#6e6e73]">
          Nem toda automação começa com alguém digitando planilha. Às vezes o processo já roda sozinho, mas quebra sem avisar ou só uma pessoa sabe consertar. Rede também: tem script, mas toda mudança continua lenta e arriscada.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#processos-ia"
            className="rounded-full bg-[#1d1d1f] px-6 py-2.5 text-xs font-medium text-white hover:bg-black transition-colors"
          >
            Processos e agentes de IA
          </a>
          <a
            href="#redes-inteligentes"
            className="rounded-full border border-black/[0.1] bg-white px-6 py-2.5 text-xs font-medium text-[#1d1d1f] hover:bg-black/[0.02] transition-colors"
          >
            Redes que antecipam e se ajustam
          </a>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SEÇÃO 1: Processos e Agentes de IA                        */}
      {/* ========================================================= */}
      <section id="processos-ia" className="scroll-mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-12 shadow-sm space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              Processos e agentes de IA
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-[#424245]">
            <p>
              <strong>O que cansa e se repete.</strong> Cópia de dados entre sistemas e planilhas, conferências, cadastros, triagem de pedidos.
            </p>
            <p>
              <strong>O que já é automático, mas é frágil.</strong> Integrações que quebram sem aviso, rotinas lentas, falta de registro do que foi feito, dependência de uma pessoa.
            </p>
            <p>
              <strong>Rotinas de TI.</strong> Padronização de configurações, verificação automática, alertas que chegam a quem pode agir.
            </p>
            <div className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-6 space-y-3">
              <h3 className="text-base font-semibold text-[#1d1d1f]">
                Agentes de IA, com limite
              </h3>
              <p>
                Leem documentos, fazem triagem, preparam informações, seguindo regras que definimos com você, registrando o que fazem e pedindo aprovação humana nas etapas críticas. A ideia nunca é substituir quem conhece o processo. É tirar da frente o que cansa e deixar a decisão com quem entende.
              </p>
            </div>
            <p>
              <strong>Dados e privacidade.</strong> Combinamos com cada cliente quais dados o processo acessa, onde é processado e quais ferramentas entram. Dados pessoais seguem a LGPD e o contrato.
            </p>
          </div>

          {/* Ponte para Shadow AI */}
          <div className="rounded-2xl border border-black/[0.06] bg-[#f5f5f7] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-[#515154] leading-relaxed">
              Antes de colocar IA no processo, vale saber como ela já está sendo usada na empresa.
            </p>
            <Link
              href="/shadow-ai"
              className="rounded-full bg-[#1d1d1f] px-5 py-2 text-xs font-semibold text-white hover:bg-black transition-colors whitespace-nowrap"
            >
              Ver governança de IA
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SEÇÃO 2: Redes que antecipam e se ajustam                 */}
      {/* ========================================================= */}
      <section id="redes-inteligentes" className="scroll-mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-12 shadow-sm space-y-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              Redes que antecipam e se ajustam
            </h2>
            <p className="mt-3 text-sm text-[#6e6e73] leading-relaxed">
              Algumas abordagens mudam bastante o jeito de cuidar de uma rede grande. Cada uma resolve um incômodo diferente. Avaliamos com você quais fazem sentido e em que ordem.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {NETWORK_APPROACHES.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-semibold text-[#1d1d1f]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#6e6e73]">
                    {item.description}
                  </p>
                </div>
                {item.reflection && (
                  <p className="mt-4 pt-3 border-t border-black/[0.06] text-xs font-medium italic text-[#0071e3]">
                    {item.reflection}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-black/[0.08] bg-[#f5f5f7] p-6 text-xs text-[#515154] leading-relaxed space-y-2">
            <p>
              A plataforma Fortinet já traz boa parte desse caminho de automação e orquestração. O primeiro passo costuma ser descobrir o que você já tem e não usa.
            </p>
            <p className="font-medium text-[#1d1d1f]">
              Nem todo ambiente precisa de tudo isso, e dizer o que não vale a pena também faz parte do nosso trabalho.
            </p>
          </div>

          <div className="flex justify-center pt-2">
            <Link
              href="/contato?assunto=automacao"
              className="rounded-full bg-[#0071e3] px-8 py-3 text-xs font-semibold text-white shadow-sm hover:bg-[#0077ed] transition-colors"
            >
              Perguntar sobre automação
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SEÇÃO 3: Perguntas frequentes                             */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mt-8 space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-2xs"
            >
              <h3 className="text-sm font-semibold text-[#1d1d1f]">
                {faq.q}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#6e6e73]">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
