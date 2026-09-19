// Textura discreta atrás de todo o site: grid + halos + feixes de dados
// (leve nod ao "efeito matrix", sem exagerar). Puramente decorativo
// (aria-hidden) e parado quando o usuário pede menos movimento (motion-safe:).
const STREAMS = [
  { left: "6%", height: "8rem", duration: "6s", delay: "0s", tone: "via-cyan-400/70" },
  { left: "18%", height: "5rem", duration: "8s", delay: "2.5s", tone: "via-blue-300/60" },
  { left: "30%", height: "10rem", duration: "7s", delay: "1s", tone: "via-cyan-300/60" },
  { left: "44%", height: "6rem", duration: "9s", delay: "3.5s", tone: "via-blue-400/70" },
  { left: "58%", height: "9rem", duration: "6.5s", delay: "0.8s", tone: "via-cyan-400/60" },
  { left: "70%", height: "5rem", duration: "8.5s", delay: "4s", tone: "via-blue-300/70" },
  { left: "82%", height: "7rem", duration: "7.5s", delay: "1.8s", tone: "via-cyan-300/70" },
  { left: "93%", height: "6rem", duration: "9.5s", delay: "3s", tone: "via-blue-400/60" },
];

export default function TechBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.32] [mask-image:radial-gradient(ellipse_at_top,black_15%,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.15) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="motion-safe:animate-[drift-slow_18s_ease-in-out_infinite] absolute -top-32 -left-24 h-[32rem] w-[32rem] rounded-full bg-blue-600/10 blur-[110px]" />
      <div className="motion-safe:animate-[drift-slow_22s_ease-in-out_infinite_reverse] absolute -right-24 top-1/3 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[110px]" />
      <div className="motion-safe:animate-[drift-slow_20s_ease-in-out_infinite] absolute bottom-[-10rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-blue-500/10 blur-[110px]" />

      <div className="absolute inset-0 opacity-60">
        {STREAMS.map((stream, index) => (
          <span
            key={index}
            className={`decorative-motion absolute top-0 w-px bg-gradient-to-b from-transparent ${stream.tone} to-transparent`}
            style={{
              left: stream.left,
              height: stream.height,
              animation: `data-stream ${stream.duration} linear infinite`,
              animationDelay: stream.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
