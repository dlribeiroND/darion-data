export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/portal", "/api/"],
      },
    ],
    sitemap: "https://dariondata.com.br/sitemap.xml",
  };
}
