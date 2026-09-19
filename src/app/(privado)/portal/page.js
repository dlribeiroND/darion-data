// Placeholder estrutural: o conteúdo real desta área (recursos
// administrativos, ainda a definir) só entra junto com a autenticação.
// Em produção esta página nunca é servida — src/middleware.js bloqueia
// /portal inteiro antes de chegar aqui.
export const metadata = {
  title: "Área restrita | Darion Data",
  robots: { index: false, follow: false },
};

export default function PortalPage() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-bold text-white">Área restrita</h1>
      <p className="mt-4 text-slate-400">
        Este espaço será liberado quando a autenticação estiver disponível.
      </p>
    </section>
  );
}
