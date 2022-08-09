module.exports = {
  images: {
    domains: ['localhost','localhost:1337','https://eduokit-admin.herokuapp.com','eduokit-admin.herokuapp.com'],
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
  target: "serverless",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
