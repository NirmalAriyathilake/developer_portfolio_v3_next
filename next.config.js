/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "firebasestorage.googleapis.com"],
  },
  experimental: {
    appDir: true,
  },
};
