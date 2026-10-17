export default function sitemap() {
  const baseUrl = "https://dariondata.com.br";
  const now = new Date();

  const routes = [
    "",
    "/redes-seguranca",
    "/automacao",
    "/shadow-ai",
    "/sobre",
    "/contato",
    "/sac",
    "/compliance",
    "/privacidade",
    "/termos",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/redes-seguranca" ? 0.9 : 0.8,
  }));
}
