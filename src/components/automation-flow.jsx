import { Fragment } from "react";

const NODES = [
  {
    step: "01",
    label: "Processos Manuais",
    caption: "Tarefas repetitivas, digitação e conciliações que drenam o tempo",
    category: "Gargalo Atual",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"
      />
    ),
  },
  {
    step: "02",
    label: "Agentes de IA & Automação",
    caption: "Agentes inteligentes que executam os fluxos e respeitam regras de negócio",
    category: "Plataforma Darion",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    ),
  },
  {
    step: "03",
    label: "Sistemas & Rede Segura",
    caption: "ERPs, CRMs e dados integrados com conectividade e proteção de borda",
    category: "Infraestrutura",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v10.5a2.25 2.25 0 0 0 2.25 2.25Z"
      />
    ),
  },
  {
    step: "04",
    label: "Profissional Potencializado",
    caption: "Mais tempo para estratégia, menos esforço operacional e entrega escalável",
    category: "Resultado",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    ),
  },
];

function FlowConnector() {
  return (
    <>
      <div className="relative hidden h-px w-full flex-1 self-center bg-black/[0.08] md:mt-6 md:block">
        <span className="motion-safe:animate-[flow-dot_3.5s_linear_infinite] absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#0071e3] shadow-[0_0_8px_1px_rgba(0,113,227,0.5)]" />
      </div>
      <div className="h-6 w-px self-center bg-gradient-to-b from-black/20 to-transparent md:hidden" />
    </>
  );
}

export default function AutomationFlow() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-2">
      {NODES.map((node, index) => (
        <Fragment key={node.label}>
          <div className="flex flex-col items-center text-center md:w-56 md:shrink-0">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-black/[0.06] bg-white text-[#0071e3] shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all hover:scale-105 hover:shadow-[0_8px_24px_rgba(0,113,227,0.12)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                {node.icon}
              </svg>
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#f5f5f7] border border-black/[0.08] text-[10px] font-bold text-[#1d1d1f]">
                {node.step}
              </span>
            </div>
            <span className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-[#0071e3]">
              {node.category}
            </span>
            <h3 className="mt-1 text-sm font-semibold text-[#1d1d1f]">{node.label}</h3>
            <p className="mt-1 text-xs leading-relaxed text-[#6e6e73]">{node.caption}</p>
          </div>

          {index < NODES.length - 1 && <FlowConnector />}
        </Fragment>
      ))}
    </div>
  );
}
