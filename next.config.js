//const withTM = require('next-transpile-modules')(['three'])
//module.exports = withTM()
module.exports = {
  reactStrictMode: true, 
  output: 'standalone',
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: ['localhost','localhost:1337','https://admin.eduokit.xyz','res.cloudinary.com','source.unsplash.com','eduokit-admin.herokuapp.com'],
    formats: ['image/avif', 'image/webp'],
  },
  fallback: false,
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
