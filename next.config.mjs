/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  async redirects() {
    return [
      {
        source: "/seguranca",
        destination: "/redes-seguranca",
        permanent: true,
      },
      {
        source: "/solucoes",
        destination: "/automacao",
        permanent: true,
      },
      {
        source: "/tecnologia",
        destination: "/automacao",
        permanent: true,
      },
      {
        source: "/cases",
        destination: "/sobre",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
