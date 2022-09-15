/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-US", "fr-FR"],
    defaultLocale: "en-US",
  },
  basePath: "/some-path",
  async rewrites() {
    return [
      {
        source: "/fr-FR/ville/:city",
        destination: "/fr-FR/city/:city",
        locale: false,
      },
      {
        source: "/ville",
        destination: "/city",
      },
    ];
  },
};

module.exports = nextConfig;
