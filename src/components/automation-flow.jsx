import { Fragment } from "react";

const NODES = [
  {
    label: "Tarefas manuais",
    caption: "Processos repetitivos, hoje feitos à mão",
    tone: "muted",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 4.5h6a1 1 0 0 1 1 1V6h1.5A1.5 1.5 0 0 1 19 7.5v11A1.5 1.5 0 0 1 17.5 20h-11A1.5 1.5 0 0 1 5 18.5v-11A1.5 1.5 0 0 1 6.5 6H8v-.5a1 1 0 0 1 1-1Zm0 6h6m-6 3.5h6m-6 3.5h4"
      />
    ),
  },
  {
    label: "Agente de IA",
    caption: "Executa o fluxo e decide dentro das regras definidas",
    tone: "active",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Zm6.5 10 .8 2.2L21.5 16l-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z"
      />
    ),
  },
  {
    label: "Sistemas integrados",
    caption: "ERPs, CRMs, planilhas e APIs conectados",
    tone: "default",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 12a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm7 8.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm-6.2-2.8 5.4-9.4"
      />
    ),
  },
  {
    label: "Resultado",
    caption: "Operação rodando, visível e sob controle",
    tone: "result",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-4-9 2.7 2.7L16 9.5"
      />
    ),
  },
];

const TONE_STYLES = {
  muted: "border-white/10 bg-white/[0.03] text-slate-400",
  active: "border-blue-500/40 bg-blue-500/10 text-blue-300",
  default: "border-white/10 bg-white/[0.03] text-slate-300",
  result: "border-cyan-400/40 bg-cyan-400/10 text-cyan-300",
};

function FlowConnector() {
  return (
    <>
      <div className="relative hidden h-px w-full flex-1 self-center bg-white/10 md:mt-7 md:block">
        <span className="motion-safe:animate-[flow-dot_3.2s_linear_infinite] absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]" />
      </div>
      <div className="h-6 w-px self-center bg-gradient-to-b from-white/20 to-white/0 md:hidden" />
    </>
  );
}

export default function AutomationFlow() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-0">
      {NODES.map((node, index) => (
        <Fragment key={node.label}>
          <div className="flex flex-col items-center text-center md:w-40 md:shrink-0">
            <div
              className={`relative flex h-14 w-14 items-center justify-center rounded-full border ${TONE_STYLES[node.tone]}`}
            >
              {node.tone === "active" && (
                <span className="motion-safe:animate-[pulse-ring_2.4s_ease-out_infinite] absolute inset-0 rounded-full border border-blue-400/60" />
              )}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                {node.icon}
              </svg>
            </div>
            <h3 className="mt-3 text-sm font-semibold text-white">{node.label}</h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">{node.caption}</p>
          </div>

          {index < NODES.length - 1 && <FlowConnector />}
        </Fragment>
      ))}
    </div>
  );
}
