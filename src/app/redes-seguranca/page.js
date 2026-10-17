import Link from "next/link";
import { site } from "@/content/site.config";

export const metadata = {
  title: "Redes e Segurança Fortinet",
  description:
    "Projetamos a rede e a proteção como uma coisa só com tecnologia Fortinet. Firewalls de nova geração, SD-WAN, Zero Trust e segmentação.",
  alternates: {
    canonical: "https://www.dariondata.com.br/redes-seguranca",
  },
  openGraph: {
    title: "Redes e Segurança Fortinet | Darion Data",
    description:
      "Projetamos a rede e a proteção como uma coisa só com tecnologia Fortinet. Firewalls de nova geração, SD-WAN, Zero Trust e segmentação.",
    url: "https://www.dariondata.com.br/redes-seguranca",
    siteName: site.brandName,
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
    title: "Redes e Segurança Fortinet | Darion Data",
    description:
      "Projetamos a rede e a proteção como uma coisa só com tecnologia Fortinet. Firewalls de nova geração, SD-WAN, Zero Trust e segmentação.",
    images: ["/og-image.png"],
  },
};

const CAPABILITIES = [
  {
    title: "Firewall de nova geração (FortiGate)",
    description:
      "Política por aplicação e usuário, inspeção de tráfego criptografado, IPS e filtragem web. O que mais se subestima é o tamanho do equipamento: dimensionado curto, a inspeção é desligada \"só por enquanto\" e nunca mais volta. Por isso dimensionamos já pensando na inspeção ligada.",
  },
  {
    title: "Secure SD-WAN",
    description:
      "Matriz, filiais e nuvem ligadas escolhendo o melhor caminho conforme a qualidade do link naquele momento (perda, latência, oscilação). Quando um link piora, o tráfego importante muda de caminho, reduzindo o impacto sobre quem está trabalhando.",
  },
  {
    title: "Zero Trust e acesso remoto (ZTNA)",
    description:
      "Em vez de abrir a rede inteira para quem se conecta de fora, cada pessoa chega só às aplicações de que precisa, com identidade e dispositivo verificados e autenticação multifator.",
  },
  {
    title: "Segmentação",
    description:
      "Separar a rede em zonas limita o estrago se algo der errado: servidores, terceiros, visitantes e dispositivos IoT ficam cada um no seu lugar.",
  },
  {
    title: "Rede local segura (LAN e Wi-Fi)",
    description:
      "Quando faz sentido, estendemos as mesmas políticas aos switches e pontos de acesso (FortiSwitch e FortiAP).",
  },
  {
    title: "Gestão e registros (FortiManager e FortiAnalyzer)",
    description:
      "Políticas e histórico de mudanças num só lugar. Na hora da auditoria, ou de descobrir \"quem mudou isso\", a resposta existe.",
  },
];

const HELP_SCENARIOS = [
  "Rede com várias filiais.",
  "Troca de firewall antigo.",
  "Separação de ambientes internos.",
  "Ligação segura entre data center e nuvem.",
  "Acesso remoto para equipe e terceiros.",
  "Registros e controles para auditoria e LGPD.",
];

const DIAGNOSTIC_POINTS = [
  "O desenho atual e os pontos únicos de falha.",
  "A qualidade e a redundância dos links.",
  "As regras de firewall em uso e as esquecidas.",
  "O que está exposto na internet.",
  "Como o acesso remoto funciona hoje.",
  "A capacidade do equipamento.",
  "Como os registros são guardados e usados.",
];

export default function RedesSegurancaPage() {
  return (
    <div className="space-y-24 pb-24">
      {/* Header */}
      <section className="mx-auto max-w-4xl px-4 pt-16 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium text-[#0071e3] shadow-xs">
          <span>Parceira Fortinet · {site.fortinet.partnerModel}</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-6xl">
          Redes e segurança
          <br />
          <span className="bg-gradient-to-r from-[#0071e3] to-[#2997ff] bg-clip-text text-transparent">
            desenhadas juntas.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-[#6e6e73]">
          Parceira Fortinet, modelo Integrator. Projetamos a rede e a proteção como uma coisa só. Segurança que atrapalha o trabalho acaba contornada, e rede que ninguém entende acaba virando risco.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/contato?assunto=redes"
            className="rounded-full bg-[#0071e3] px-8 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#0077ed]"
          >
            Conte o seu cenário
          </Link>
        </div>
      </section>

      {/* Capacidades Fortinet */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f]">
            Capacidades da plataforma
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-black/[0.08] bg-white p-7 shadow-xs flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-[#1d1d1f]">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#6e6e73]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teaser: Redes que antecipam e se ajustam */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-[#f5f5f7] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#1d1d1f]">
              Depois que a base está firme
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
              Dá para simular mudanças antes de aplicar, antecipar falha de link e automatizar rotinas. Está na página de automação.
            </p>
          </div>
          <Link
            href="/automacao#redes-inteligentes"
            className="rounded-full bg-[#1d1d1f] px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-black whitespace-nowrap"
          >
            Ver automação de redes
          </Link>
        </div>
      </section>

      {/* Situações em que podemos ajudar */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              Situações em que podemos ajudar:
            </h2>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {HELP_SCENARIOS.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-2xl border border-black/[0.06] bg-[#fafafc] p-4 text-xs text-[#424245]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0071e3]/10 text-[10px] font-bold text-[#0071e3]">
                  ✓
                </span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que olhamos antes de propor qualquer coisa */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] bg-[#f5f5f7] p-8 sm:p-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
              O que olhamos antes de propor qualquer coisa:
            </h2>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {DIAGNOSTIC_POINTS.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-2xl border border-black/[0.06] bg-white p-4 text-xs text-[#424245] shadow-2xs"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0071e3]/10 text-[10px] font-bold text-[#0071e3]">
                  •
                </span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Quer uma segunda opinião sobre a sua rede?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#6e6e73]">
            Conte o cenário.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contato?assunto=redes"
              className="rounded-full bg-[#0071e3] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0077ed]"
            >
              Falar sobre a minha rede
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
