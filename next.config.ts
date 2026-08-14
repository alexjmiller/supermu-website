import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for the *.dev.lan nginx proxy — without this, Next 16 silently
  // blocks HMR + client hydration for non-localhost hosts.
  allowedDevOrigins: ["supermu.dev.lan", "127.0.0.1", "172.16.1.114"],
};

export default nextConfig;
