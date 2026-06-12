import type { NextConfig } from "next";
import { BASE_PATH } from "./src/lib/base-path";

const nextConfig: NextConfig = {
  assetPrefix: BASE_PATH || undefined,
};

export default nextConfig;
