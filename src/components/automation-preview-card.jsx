// Painel ilustrativo — não representa dados reais de nenhum cliente.
// Mostra o tipo de visibilidade que a automação com agentes de IA
// costuma trazer depois de implantada.
export default function AutomationPreviewCard() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Execuções acompanhadas pelos agentes
        </span>
        <span className="flex items-center gap-1.5 text-[10px] font-medium text-cyan-300">
          <span className="relative flex h-2 w-2">
            <span className="motion-safe:animate-[pulse-ring_1.8s_ease-out_infinite] absolute inset-0 rounded-full bg-cyan-400" />
            <span className="relative h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          Em execução
        </span>
      </div>

      <svg viewBox="0 0 280 80" className="mt-6 h-20 w-full" fill="none">
        <polyline
          points="0,64 40,58 80,60 120,40 160,44 200,20 240,26 280,10"
          stroke="url(#automation-preview-gradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="280" cy="10" r="4" className="fill-cyan-300" />
        <defs>
          <linearGradient id="automation-preview-gradient" x1="0" y1="0" x2="280" y2="0">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>

      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Ilustração de como fica o acompanhamento de uma operação depois que a
        automação entra em produção — os números variam conforme cada empresa.
      </p>
    </div>
  );
}
