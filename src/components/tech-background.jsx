// Textura geométrica suave para o plano de fundo.
// Elementos decorativos (aria-hidden).

export default function TechBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#fbfbfd]">
      {/* Top ambient illumination glow */}
      <div className="absolute inset-x-0 -top-40 h-[36rem] bg-gradient-to-b from-blue-100/40 via-sky-50/20 to-transparent blur-3xl" />

      {/* Subtle technical micro-grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_80%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,113,227,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,227,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Soft Apple sapphire diffuse orbs */}
      <div className="motion-safe:animate-[drift-slow_24s_ease-in-out_infinite] absolute -top-24 -left-20 h-[36rem] w-[36rem] rounded-full bg-blue-400/[0.08] blur-[120px]" />
      <div className="motion-safe:animate-[drift-slow_28s_ease-in-out_infinite_reverse] absolute -right-24 top-1/4 h-[32rem] w-[32rem] rounded-full bg-cyan-400/[0.06] blur-[120px]" />
      <div className="motion-safe:animate-[drift-slow_26s_ease-in-out_infinite] absolute bottom-10 left-1/3 h-[30rem] w-[30rem] rounded-full bg-indigo-300/[0.05] blur-[120px]" />
    </div>
  );
}
