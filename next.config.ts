import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [100, 75],
  },
  async headers() {
    return [
      {
        source: "/samscv0525.pdf",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
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
      source: "/(.*).(jpg|jpeg|png|webp|svg|gif|ico|woff|woff2|ttf|otf)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=3600, must-revalidate",
        },
      ],
    },
    ];
  },
};

export default nextConfig;
