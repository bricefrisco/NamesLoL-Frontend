module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ddragon.leagueoflegends.com",
        pathname: "/cdn/**/img/profileicon/**.png",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/summoners",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
