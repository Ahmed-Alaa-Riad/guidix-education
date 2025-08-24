import type { NextConfig } from "next";
// Import the entire config object, not just i18n
const { i18n } = require("./next-i18next.config");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n,
};

export default nextConfig;
