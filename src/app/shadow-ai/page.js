import Link from "next/link";

export const metadata = {
  title: "Governança de IA & Shadow AI | Darion Data",
  description:
    "Consultoria especializada para mapear e orientar o uso de ferramentas de IA nas organizações, com foco em segurança de dados, propriedade intelectual e LGPD.",
};

const COMMON_CHANNELS = [
  "Assistentes e geradores de texto ou código acessados com contas pessoais.",
  "Extensões, complementos e barras laterais instaladas no navegador.",
  "Recursos de IA recentemente incorporados a sistemas e plataformas já contratados.",
  "Automações, scripts e agentes criados de forma descentralizada pelas áreas de negócio.",
  "Upload de documentos internos, planilhas financeiras e contratos em ferramentas externas.",
];

const WHY_IT_MATTERS = [
  "Informações confidenciais ou dados pessoais de clientes e colaboradores saindo do perímetro corporativo.",
  "Exposição involuntária de segredos de negócio, estratégias comerciais e propriedade intelectual.",
  "Violação de cláusulas de acordos de confidencialidade (NDA) firmados com clientes e parceiros.",
  "Descumprimento de obrigações da Lei Geral de Proteção de Dados (LGPD).",
  "Decisões críticas de negócio tomadas com base em saídas geradas por IA sem registro, revisão ou rastreabilidade.",
];

const QUESTIONS_ANSWERED = [
  "Quais ferramentas e serviços de IA estão em uso efetivo na empresa hoje?",
  "Que categoria de dados e informações corporativas chega até essas ferramentas?",
  "Quem tomou a iniciativa de adoção e qual dor operacional estava tentando solucionar?",
  "Existe uma alternativa homologada, segura e eficiente que atenda a essa necessidade?",
  "O que a política interna da organização estabelece a respeito, e os colaboradores a conhecem?",
];

const DELIVERABLES = [
  {
    title: "Mapeamento das ferramentas e usos",
    description: "Inventário claro das soluções em uso, indicando áreas demandantes e casos práticos de aplicação.",
  },
  {
    title: "Classificação de riscos",
    description: "Avaliação do nível de exposição de acordo com a sensibilidade dos dados manipulados e a finalidade.",
  },
  {
    title: "Política de uso aceitável",
    description: "Diretrizes práticas, transparentes e realistas sobre o que é permitido, condicionado ou vedado.",
  },
  {
    title: "Alternativas homologadas e controles técnicos",
    description: "Indicação de plataformas autorizadas e parametrização de controles no firewall e na rede.",
  },
  {
    title: "Plano de comunicação e conscientização",
    description: "Orientações para que as equipes compreendam os riscos sem travar a produtividade cotidiana.",
  },
  {
    title: "Acompanhamento e evolução",
    description: "Recomendações periódicas para revisão dos controles à medida que novas ferramentas surgem no mercado.",
  },
];

export default function ShadowAiPage() {
  return (
    <div className="space-y-24 pb-24">
      {/* Header */}
      <section className="mx-auto max-w-4xl px-4 pt-16 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium text-[#0071e3] shadow-xs">
          <span>Consultoria de Governança · Shadow AI</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-6xl">
          Sua equipe já usa IA.
          <br />
          <span className="bg-gradient-to-r from-[#0071e3] via-[#0077ed] to-[#2997ff] bg-clip-text text-transparent">
            Você sabe quais ferramentas, com quais dados?
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-[#6e6e73]">
          Hoje a inteligência artificial entra na empresa por muitas portas: a ferramenta que alguém testou com a conta pessoal, a extensão de navegador, o recurso novo que apareceu num sistema que a empresa já usa. Quase sempre com boa intenção. O que costuma faltar é saber <strong>o que está sendo usado, com que dados, e sob quais regras</strong>. Esse é o ponto que a consultoria da Darion Data aborda.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/contato?assunto=shadow-ai"
            className="rounded-full bg-[#0071e3] px-8 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#0077ed]"
          >
            Conversar sobre Shadow AI
          </Link>
        </div>
      </section>

      {/* O que é Shadow AI & Onde aparece */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* O que é */}
          <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
                Definição
              </span>
              <h2 className="mt-2 text-2xl font-semibold text-[#1d1d1f]">
                O que é Shadow AI?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#6e6e73]">
                É o uso de ferramentas, modelos, recursos e extensões de inteligência artificial sem o conhecimento, homologação técnica ou gestão formal da equipe de TI e dos responsáveis pela proteção de dados corporativos.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">
                Não se trata de má-fé dos colaboradores, mas de profissionais buscando agilidade para cumprir suas metas cotidianas sem contar com canais oficiais definidos.
              </p>
            </div>
          </div>

          {/* Onde costuma aparecer */}
          <div className="rounded-3xl border border-black/[0.08] bg-[#fafafc] p-8 sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Vetores Comuns
            </span>
            <h2 className="mt-2 text-2xl font-semibold text-[#1d1d1f]">
              Onde costuma aparecer
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

      {/* Por que merece atenção */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Gestão de Riscos
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              Por que merece atenção da diretoria e da TI
            </h2>
            <p className="mt-2 text-sm text-[#6e6e73]">
              Riscos reais e qualitativos gerados pelo uso desordenado de ferramentas externas:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_IT_MATTERS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-5 text-xs text-[#515154]"
              >
                <span className="text-sm font-semibold text-[#1d1d1f] block mb-2">
                  Ponto de atenção {idx + 1}
                </span>
                <p className="leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perguntas que ajudamos a responder */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-[#f5f5f7] p-8 sm:p-12">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Diagnóstico Corporativo
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              Perguntas que ajudamos sua empresa a responder
            </h2>
            <p className="mt-2 text-sm text-[#6e6e73]">
              Buscamos clareza operacional para que a organização tenha controle sem travar a inovação:
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {QUESTIONS_ANSWERED.map((q, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-black/[0.06] bg-white p-4 text-xs font-medium text-[#1d1d1f]"
              >
                <span className="text-[#0071e3] mr-2">Q{idx + 1}.</span>
                {q}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que a consultoria entrega */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
            Escopo Prático
          </span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f]">
            O que a consultoria entrega
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-[#6e6e73]">
            Entregáveis tangíveis para estruturar a governança de IA com sustentação técnica.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DELIVERABLES.map((deliv, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-black/[0.08] bg-white p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-[#0071e3]">
                  0{idx + 1}
                </span>
                <h3 className="mt-2 text-base font-semibold text-[#1d1d1f]">
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

      {/* Como fazemos & O que isso não é */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Como fazemos */}
          <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-10 shadow-sm space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Metodologia
            </span>
            <h3 className="text-xl font-semibold text-[#1d1d1f]">
              Como conduzimos o trabalho
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-[#6e6e73]">
              Entendemos o uso real em vez de partir da proibição pura e simples. Combinamos conversas estruturadas com as áreas de negócio, revisão dos contratos e ferramentas já adotadas e, quando a infraestrutura da empresa permite, análise técnica de tráfego e aplicações a partir do controle de aplicações do firewall de borda.
            </p>
            <ul className="space-y-2 text-xs text-[#515154] pt-2">
              <li className="flex items-start gap-2">
                <span className="text-[#0071e3]">✓</span>
                <span>Diálogo colaborativo com os líderes de equipe e usuários</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0071e3]">✓</span>
                <span>Análise de termos de privacidade das ferramentas em uso</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0071e3]">✓</span>
                <span>Visibilidade técnica via controle de aplicação de rede</span>
              </li>
            </ul>
          </div>

          {/* O que isso não é */}
          <div className="rounded-3xl border border-black/[0.08] bg-[#fafafc] p-8 sm:p-10 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
              Limites e Clareza
            </span>
            <h3 className="text-xl font-semibold text-[#1d1d1f]">
              O que este trabalho não é
            </h3>
            <div className="space-y-3 text-xs leading-relaxed text-[#6e6e73]">
              <p>
                <strong>Não é perseguição interna:</strong> o objetivo nunca é punir colaboradores que buscaram soluções para trabalhar melhor, mas fornecer diretrizes seguras para a empresa.
              </p>
              <p>
                <strong>Não substitui assessoria jurídica:</strong> oferecemos consultoria técnica e de governança operacional. Recomendações jurídicas e validação de contratos devem ser conduzidas pelo corpo legal ou DPO da sua organização.
              </p>
              <p>
                <strong>Não promete visibilidade total:</strong> nenhum método garante enxergar 100% de todo dispositivo e conexão pessoal. Entregamos um retrato fiel, transparente e fundamentado do ambiente, com orientações de mitigação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Quer entender como a IA está sendo usada na sua empresa?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#6e6e73]">
            Converse com a nossa equipe para desenhar um diagnóstico adequado ao seu cenário.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contato?assunto=shadow-ai"
              className="rounded-full bg-[#0071e3] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0077ed]"
            >
              Conversar sobre Shadow AI
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
