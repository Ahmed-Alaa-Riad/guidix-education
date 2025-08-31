import type { NextConfig } from "next";
const { i18n } = require("./next-i18next.config");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n, // import from next-i18next.config
};

export default nextConfig;
