/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "firebasestorage.googleapis.com"],
  },
  swcMinify: true,
  experimental: {
    runtime: "edge",
  },
};
