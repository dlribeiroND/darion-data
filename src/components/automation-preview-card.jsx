// Painel ilustrativo no estilo Apple Widget (macOS / iOS)
// Demonstra o ganho de tempo, redução de esforço manual e telemetria de operação.
export default function AutomationPreviewCard() {
  return (
    <div className="rounded-3xl border border-black/[0.06] bg-white p-6 sm:p-8 shadow-[0_12px_36px_rgba(0,0,0,0.05)]">
      {/* Top Header Widget */}
      <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-[#0071e3]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
          </div>
          <div>
            <span className="block text-xs font-semibold text-[#1d1d1f]">
              Produtividade Agêntica & Operação
            </span>
            <span className="text-[10px] text-[#86868b]">Fluxos Manuais Automatizados</span>
          </div>
        </div>

        <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
          <span className="relative flex h-2 w-2">
            <span className="motion-safe:animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-75" />
            <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Operando em Tempo Real
        </span>
      </div>

      {/* Grid de Métricas de Produtividade */}
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div className="rounded-2xl bg-[#f5f5f7] p-3.5">
          <span className="text-[10px] font-medium text-[#86868b] uppercase tracking-wider block">
            Tempo Poupado
          </span>
          <span className="mt-1 text-xl font-bold tracking-tight text-[#1d1d1f]">+180h</span>
          <span className="text-[10px] text-emerald-600 block mt-0.5">Por mês na equipe</span>
        </div>

        <div className="rounded-2xl bg-[#f5f5f7] p-3.5">
          <span className="text-[10px] font-medium text-[#86868b] uppercase tracking-wider block">
            Tarefas Manuais
          </span>
          <span className="mt-1 text-xl font-bold tracking-tight text-[#1d1d1f]">-94%</span>
          <span className="text-[10px] text-[#0071e3] block mt-0.5">Erros de digitação</span>
        </div>

        <div className="col-span-2 sm:col-span-1 rounded-2xl bg-[#f5f5f7] p-3.5">
          <span className="text-[10px] font-medium text-[#86868b] uppercase tracking-wider block">
            Disponibilidade
          </span>
          <span className="mt-1 text-xl font-bold tracking-tight text-[#1d1d1f]">99.98%</span>
          <span className="text-[10px] text-indigo-600 block mt-0.5">Rede e dados blindados</span>
        </div>
      </div>

      {/* Gráfico Linear de Eficiência da Equipe */}
      <div className="mt-6">
        <div className="flex items-center justify-between text-xs text-[#6e6e73]">
          <span className="font-medium text-[#1d1d1f]">Volume de Processos Concluídos por Agentes</span>
          <span className="text-[11px] font-mono font-medium text-[#0071e3]">12.450 fluxos</span>
        </div>

        <svg viewBox="0 0 320 70" className="mt-3 h-16 w-full" fill="none">
          <defs>
            <linearGradient id="apple-graph-fill" x1="0" y1="0" x2="0" y2="70">
              <stop offset="0%" stopColor="#0071e3" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0071e3" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="apple-graph-stroke" x1="0" y1="0" x2="320" y2="0">
              <stop offset="0%" stopColor="#0071e3" />
              <stop offset="100%" stopColor="#43b5ff" />
            </linearGradient>
          </defs>
          <path
            d="M0,56 C40,50 80,45 120,32 C160,20 200,28 240,16 C270,8 295,12 320,6 L320,70 L0,70 Z"
            fill="url(#apple-graph-fill)"
          />
          <path
            d="M0,56 C40,50 80,45 120,32 C160,20 200,28 240,16 C270,8 295,12 320,6"
            stroke="url(#apple-graph-stroke)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="320" cy="6" r="3.5" className="fill-[#0071e3]" />
        </svg>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-[#86868b]">
        Visibilidade transparente sobre a operação: sua equipe acompanha o andamento em tempo real, valida exceções estratégicas e ganha horas diárias para se dedicar ao crescimento do negócio.
      </p>
    </div>
  );
}
