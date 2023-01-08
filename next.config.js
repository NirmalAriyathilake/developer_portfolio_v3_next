/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    runtime: "experimental-edge",
  },
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "firebasestorage.googleapis.com",
      "nirmalcode-developer-portfolio-v3-next.pages.dev/",
    ],
  },
};
