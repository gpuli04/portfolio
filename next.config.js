/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gpuli04.github.io",
      },
    ],
  }
};

module.exports = nextConfig;



