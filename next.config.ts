import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  images: {
    qualities: [100, 75],
  },
  async headers() {
    return [
      {
        source: "/samscv0525.pdf",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      ...(isProd
        ? [
            {
              source: "/_next/static/(.*)",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=31536000, immutable",
                },
              ],
            },
            {
              source:
                "/(.*).(jpg|jpeg|png|webp|svg|gif|ico|woff|woff2|ttf|otf)",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=3600, must-revalidate",
                },
              ],
            },
          ]
        : []),
    ];
  },
};

export default nextConfig;
