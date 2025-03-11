/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {}, // `appDir` remove kar diya
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
    };
    return config;
  },
};

module.exports = nextConfig; // Export fix
