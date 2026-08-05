import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Buckeye Gym",
    short_name: "Buckeye Gym",
    description: "Family-owned, old-school strength gym in Tallmadge, Ohio.",
    start_url: "/",
    display: "standalone",
    background_color: "#11100e",
    theme_color: "#d6281e",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
