module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
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
