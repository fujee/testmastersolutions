import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "",
  assetPrefix: "",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Ignore the 'canvas' module during the build process
    config.externals = config.externals || {};
    config.externals.canvas = "commonjs canvas";
    return config;
  },
};

export default nextConfig;
