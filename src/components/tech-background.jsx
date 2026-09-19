// Textura discreta atrás de todo o site: grid + halos + feixes de dados.
// Puramente decorativo (aria-hidden) e parado quando o usuário pede menos
// movimento (motion-safe:).
export default function TechBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.25] [mask-image:radial-gradient(ellipse_at_top,black_15%,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.15) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="motion-safe:animate-[drift-slow_18s_ease-in-out_infinite] absolute -top-32 -left-24 h-[32rem] w-[32rem] rounded-full bg-blue-600/10 blur-[110px]" />
      <div className="motion-safe:animate-[drift-slow_22s_ease-in-out_infinite_reverse] absolute -right-24 top-1/3 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[110px]" />
      <div className="motion-safe:animate-[drift-slow_20s_ease-in-out_infinite] absolute bottom-[-10rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-blue-500/10 blur-[110px]" />

      <div className="absolute inset-0 opacity-40">
        <span className="motion-safe:animate-[data-stream_7s_linear_infinite] absolute left-[12%] top-0 h-40 w-px bg-gradient-to-b from-transparent via-cyan-400/70 to-transparent" />
        <span className="motion-safe:animate-[data-stream_9s_linear_infinite_2s] absolute left-[38%] top-0 h-56 w-px bg-gradient-to-b from-transparent via-blue-400/70 to-transparent" />
        <span className="motion-safe:animate-[data-stream_6s_linear_infinite_1s] absolute left-[68%] top-0 h-32 w-px bg-gradient-to-b from-transparent via-cyan-300/70 to-transparent" />
        <span className="motion-safe:animate-[data-stream_8s_linear_infinite_3s] absolute left-[88%] top-0 h-24 w-px bg-gradient-to-b from-transparent via-blue-300/70 to-transparent" />
      </div>
    </div>
  );
}
