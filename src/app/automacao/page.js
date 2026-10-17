import Link from "next/link";

export const metadata = {
  title: "Automação & IA | Processos e Redes | Darion Data",
  description:
    "Automação de processos manuais, agentes de IA com supervisão humana e abordagens de redes inteligentes e autônomas com governança.",
};

const PROCESS_AREAS = [
  {
    title: "Tarefas manuais repetitivas",
    description:
      "Cópia manual de dados entre sistemas e planilhas, conferências cadastrais, lançamentos repetitivos e triagem inicial de solicitações que consomem o tempo das equipes.",
  },
  {
    title: "Processos existentes que podem melhorar",
    description:
      "Integrações frágeis, rotinas com atrasos constantes, falta de registro do que foi feito, retrabalho por falhas em etapas intermediárias e dependência excessiva de uma única pessoa.",
  },
  {
    title: "Rotinas de TI e operações",
    description:
      "Padronização de configurações, verificação automática de conformidade, triagem e envio proativo de alertas sobre eventos operacionais.",
  },
];

const NETWORK_APPROACHES = [
  {
    title: "Gerenciamento orientado por intenção (Intent-Based)",
    description:
      "Você descreve o resultado de negócio que a rede precisa entregar — como os serviços que uma nova filial deve acessar — e a configuração técnica é derivada, aplicada e verificada continuamente.",
    question: "E se você apenas definisse o objetivo e o sistema orquestrasse os parâmetros da rede?",
  },
  {
    title: "Gêmeo digital da rede (Digital Twin)",
    description:
      "Construção de um modelo virtual da topologia e das políticas de segurança, utilizado para simular alterações de firewall, falhas de equipamentos e expansões antes de tocar no ambiente em produção.",
    question: "E se você pudesse validar o impacto de uma alteração crítica de roteamento antes da janela de manutenção?",
  },
  {
    title: "Análise preditiva e manutenção preditiva",
    description:
      "Telemetria em tempo real somada ao histórico de tráfego para identificar degradação de links de operadoras, gargalos de banda e desvios de comportamento antes que resultem em indisponibilidade.",
    question: "E se a equipe recebesse aviso de degradação de performance antes dos usuários perceberem lentidão?",
  },
  {
    title: "Redes inteligentes e autônomas (Self-Healing e AIOps)",
    description:
      "Correlação dinâmica de eventos, diagnóstico assistido e execução de ações corretivas automatizadas para falhas conhecidas, com trava de aprovação humana para ações de maior impacto operacional.",
    question: "E se rotinas de contingência pudessem mitigar oscilações comuns sem exigir intervenção humana manual?",
  },
  {
    title: "Provisionamento sem toque (Zero-Touch) e orquestração",
    description:
      "Novas unidades ou equipamentos entram na infraestrutura com configurações padronizadas e validadas automaticamente a partir de modelos centrais, reduzindo erros de configuração local.",
    question: "E se a ativação de uma nova filial exigisse apenas plugar o equipamento à tomada e ao link?",
  },
  {
    title: "Rede como código e verificação de conformidade",
    description:
      "Políticas e parâmetros de rede mantidos em repositórios versionados e auditáveis. Qualquer desvio em relação à configuração homologada é detectado e sinalizado imediatamente.",
    question: "E se você soubesse exatamente quando e por quem uma política de segurança foi alterada?",
  },
  {
    title: "Telemetria e observabilidade",
    description:
      "Visibilidade contínua de desempenho, qualidade de experiência de acesso e eventos de segurança consolidados em painéis claros para acompanhamento operacional.",
    question: "E se toda a saúde da conectividade estivesse visível em tempo real sem silos de informação?",
  },
];

const FAQS = [
  {
    q: "Preciso trocar meus sistemas atuais?",
    a: "Não. Nossas automações integram os sistemas que você já utiliza: sistemas de gestão internos, bancos de dados, APIs, planilhas e plataformas legadas. Caso um sistema apresente limitações técnicas para integração, informamos isso com clareza logo no diagnóstico inicial.",
  },
  {
    q: "A automação serve se meu processo ou minha rede já são parcialmente automatizados?",
    a: "Sim. Em muitos casos, o processo já possui algum nível de script ou exportação automática, mas ainda depende de uma pessoa para conferir planilhas, corrigir quebras de integração ou rodar rotinas manuais de suporte. Atuamos justamente na estabilização e no fechamento desses elos frágeis.",
  },
  {
    q: "O que é um gêmeo digital de rede, e minha empresa precisa de um?",
    a: "Um gêmeo digital é uma réplica virtual do comportamento e das regras da sua rede. Ele é recomendado para ambientes de alta complexidade com mudanças frequentes e tolerância zero a indisponibilidade. Nem todo ambiente precisa de um gêmeo digital, e avaliamos com honestidade se faz sentido para o seu caso.",
  },
  {
    q: "Posso manter aprovação humana antes de ações críticas?",
    a: "Sim. A automação e os agentes de IA são configurados com limites estritos de governança. Etapas críticas, como movimentações financeiras, confirmações de cadastros sensíveis ou alterações estruturais de rede, podem exigir validação e clique humano formal.",
  },
  {
    q: "Como vocês tratam dados pessoais?",
    a: "Definimos com cada cliente quais dados os processos acessam, onde são processados e quais ferramentas são utilizadas. Em projetos no ambiente do cliente, a Darion Data atua como operadora sob estrito cumprimento da LGPD e dos termos do contrato de prestação de serviços.",
  },
  {
    q: "Por onde começar?",
    a: "Começamos por uma conversa técnica inicial para compreender onde estão os gargalos do seu processo ou da sua conectividade. A partir daí, estruturamos uma proposta com escopo objetivo e etapas claras de execução.",
  },
];

export default function AutomacaoPage() {
  return (
    <div className="space-y-24 pb-24">
      {/* Header */}
      <section className="mx-auto max-w-4xl px-4 pt-16 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium text-[#0071e3] shadow-xs">
          <span>Automação de Processos · Inteligência de Redes</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-6xl">
          Automação e inteligência
          <br />
          <span className="bg-gradient-to-r from-[#0071e3] via-[#0077ed] to-[#2997ff] bg-clip-text text-transparent">
            para processos e para redes.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-[#6e6e73]">
          Automatizar não é só tirar digitação de gente. Muitas vezes o processo já é automatizado, mas depende de planilhas que alguém confere, de integrações que quebram sem aviso ou de rotinas que ninguém consegue auditar. O mesmo vale para redes: elas já têm automação, e ainda assim a mudança é lenta, o diagnóstico é manual e o risco aparece depois.
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
            Automação e inteligência de redes
          </a>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SEÇÃO 1: Processos e Agentes de IA                        */}
      {/* ========================================================= */}
      <section id="processos-ia" className="scroll-mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-12 shadow-sm space-y-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Frente 01
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              Processos e agentes de IA
            </h2>
            <p className="mt-2 text-sm text-[#6e6e73]">
              Soluções aplicadas a rotinas operacionais e administrativas com supervisão humana e controle.
            </p>
          </div>

          {/* Onde atuamos */}
          <div>
            <h3 className="text-base font-semibold text-[#1d1d1f]">Onde atuamos</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {PROCESS_AREAS.map((area, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-5 text-xs text-[#515154]"
                >
                  <h4 className="font-semibold text-[#1d1d1f] text-sm mb-2">{area.title}</h4>
                  <p className="leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Integração e Agentes */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-6 text-xs text-[#515154] space-y-3">
              <h4 className="text-sm font-semibold text-[#1d1d1f]">
                Integração com o que você já tem
              </h4>
              <p className="leading-relaxed">
                Conectamos sistemas de gestão internos, bases de dados relacionais, APIs, planilhas e ferramentas internas. Em geral não é necessário trocar o que já funciona. Quando identificamos limitações técnicas estruturais em algum sistema, apontamos isso de forma transparente no diagnóstico.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-6 text-xs text-[#515154] space-y-3">
              <h4 className="text-sm font-semibold text-[#1d1d1f]">
                Agentes de IA, com limites definidos
              </h4>
              <p className="leading-relaxed">
                Agentes para leitura de documentos estruturados, triagem e preparação de dados, operando sob regras explícitas, registro auditável de cada ação e pontos de aprovação humana nas etapas críticas. O nível de autonomia é determinado conjuntamente com o cliente.
              </p>
            </div>
          </div>

          {/* Dados e privacidade */}
          <div className="rounded-2xl border border-black/[0.06] bg-[#f5f5f7] p-6 text-xs text-[#515154] space-y-2">
            <h4 className="text-sm font-semibold text-[#1d1d1f]">
              Dados e privacidade
            </h4>
            <p className="leading-relaxed">
              Definimos com cada cliente quais dados o processo acessa, onde ocorre o processamento e quais ferramentas são utilizadas. Dados pessoais são tratados em estrita observância à LGPD e às cláusulas contratuais de confidencialidade e segurança da informação.
            </p>
          </div>

          {/* Link para Shadow AI */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-black/[0.06] pt-6">
            <p className="text-xs text-[#6e6e73]">
              Antes de colocar IA no processo, vale saber como ela já está sendo usada na empresa.
            </p>
            <Link
              href="/shadow-ai"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:underline whitespace-nowrap"
            >
              Conhecer a consultoria de Shadow AI
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SEÇÃO 2: Automação e Inteligência de Redes                */}
      {/* ========================================================= */}
      <section id="redes-inteligentes" className="scroll-mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-12 shadow-sm space-y-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
              Frente 02
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              Redes que antecipam, testam e se ajustam
            </h2>
            <p className="mt-3 text-sm text-[#6e6e73] leading-relaxed max-w-3xl">
              Existe um conjunto de abordagens que muda a forma de operar uma rede grande: menos configuração manual equipamento por equipamento, mais simulação antes da mudança, mais antecipação de falhas. Avaliamos e propomos essas abordagens conforme o ambiente e o nível de maturidade de cada cliente. <strong>Nem toda rede precisa de tudo isso.</strong>
            </p>
          </div>

          {/* Grid de Abordagens */}
          <div className="grid gap-6 md:grid-cols-2">
            {NETWORK_APPROACHES.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-black/[0.06] bg-[#fafafc] p-6 text-xs text-[#515154] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-semibold text-[#1d1d1f]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-[#515154]">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/[0.04]">
                  <p className="text-[11px] font-medium text-[#0071e3] italic">
                    {item.question}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Fechamento Fortinet */}
          <div className="rounded-2xl border border-black/[0.06] bg-[#f5f5f7] p-6 text-xs text-[#6e6e73]">
            <p className="leading-relaxed">
              A plataforma Fortinet já traz recursos de automação e orquestração (Security Fabric, gestão centralizada). O primeiro passo costuma ser entender o que dá para aproveitar do que você já tem antes de propor algo a mais.
            </p>
          </div>

          {/* Chamada para conversa */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-black/[0.06] pt-6">
            <p className="text-xs text-[#6e6e73]">
              Quer saber qual dessas abordagens faz sentido para a sua rede? Conte o cenário.
            </p>
            <Link
              href="/contato?assunto=automacao"
              className="rounded-full bg-[#0071e3] px-6 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[#0077ed] whitespace-nowrap"
            >
              Conversar sobre automação
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Reescrita */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3]">
            Perguntas Frequentes
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
            Dúvidas comuns sobre automação e inteligência
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {FAQS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-xs"
            >
              <h3 className="text-sm font-semibold text-[#1d1d1f]">
                {item.q}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#6e6e73]">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Pronto para mapear oportunidades na sua operação?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#6e6e73]">
            Agende uma conversa técnica para alinharmos os pontos de maior retorno em processos e infraestrutura.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contato?assunto=automacao"
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
