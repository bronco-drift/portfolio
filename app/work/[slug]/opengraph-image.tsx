import { ImageResponse } from "next/og";
import { getProject, projects } from "@/lib/projects";
import { t } from "@/lib/i18n";

export const alt = "Bronco Drift project";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return new ImageResponse(<div>Not found</div>, { ...size });
  }

  const tagline = t(project.tagline, "en");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#fbfbfa",
          color: "#0a0a0a",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#737373",
            letterSpacing: "-0.01em",
          }}
        >
          <span>Bronco Drift</span>
          <span>
            {project.number} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 100,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
              color: "#0a0a0a",
            }}
          >
            {project.name}
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#525252",
              letterSpacing: "-0.01em",
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            {tagline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            color: "#737373",
          }}
        >
          {project.status === "live" && (
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 9999,
                background: "#c84a1c",
                display: "flex",
              }}
            />
          )}
          <span>{project.year}</span>
          <span>·</span>
          <span>{project.stack.slice(0, 3).join(" · ")}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
