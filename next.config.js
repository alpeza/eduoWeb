//const withTM = require('next-transpile-modules')(['three'])
//module.exports = withTM()
module.exports = {
  reactStrictMode: true, 
  images: {
    domains: ['localhost','localhost:1337','res.cloudinary.com','source.unsplash.com','eduokit-admin.herokuapp.com'],
    formats: ['image/avif', 'image/webp'],
  },
  fallback: false,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  target: "serverless",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
