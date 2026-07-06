import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  // Internal links throughout the site use trailing slashes (matching the
  // cloned site's URL scheme), so make that the canonical form to avoid a
  // redirect round-trip on every direct page load.
  trailingSlash: true,
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
