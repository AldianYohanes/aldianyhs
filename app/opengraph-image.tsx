import { ImageResponse } from "next/og";

export const alt = "Aldian Yohanes, full-stack developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 72,
          background:
            "radial-gradient(70% 90% at 90% 0%, rgba(95,208,188,0.35), rgba(10,19,21,0) 70%), #0a1315",
          color: "#e8f0ef",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 112, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>Aldian Yohanes</div>
        <div style={{ marginTop: 24, fontSize: 36, color: "#93a9a7" }}>
          Full-stack developer and student founder in Jakarta
        </div>
        <div style={{ marginTop: 40, width: 120, height: 6, background: "#5fd0bc", borderRadius: 3 }} />
      </div>
    ),
    size,
  );
}
