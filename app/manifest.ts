import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bronco Drift",
    short_name: "Bronco Drift",
    description:
      "Independent web work — interfaces, systems, and the occasional side project.",
    start_url: "/",
    display: "minimal-ui",
    background_color: "#fbfbfa",
    theme_color: "#fbfbfa",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
