import { ImageResponse } from "next/og";

export const alt = "Bronco Drift — independent web work";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          <span>MMXXVI</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 110,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
              color: "#0a0a0a",
            }}
          >
            Independent web work.
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#525252",
              letterSpacing: "-0.01em",
              maxWidth: 880,
              lineHeight: 1.35,
            }}
          >
            Interfaces, systems, and the occasional side project.
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
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 9999,
              background: "#c84a1c",
              display: "flex",
            }}
          />
          <span>15 projects</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
