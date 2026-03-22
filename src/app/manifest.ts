import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ArtX — 艺术院校选校指南",
    short_name: "ArtX",
    start_url: "/artx/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111111",
    icons: [
      {
        src: "/artx/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
