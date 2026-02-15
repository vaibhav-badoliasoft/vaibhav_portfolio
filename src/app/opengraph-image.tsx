import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #050607 0%, #070A0F 40%, #050607 100%)",
          color: "white",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
          position: "relative",
        }}
      >
        {/* subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.35,
          }}
        />
        {/* scanline */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 140,
            height: 10,
            width: "100%",
            background: "rgba(34,211,238,0.14)",
            filter: "blur(1px)",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 18, opacity: 0.7, letterSpacing: 1 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 56, fontWeight: 700, marginTop: 14, lineHeight: 1.05 }}>
            {site.headline}
          </div>
          <div style={{ fontSize: 24, opacity: 0.82, marginTop: 18, maxWidth: 980 }}>
            {site.subheadline}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 18,
            opacity: 0.8,
          }}
        >
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            {site.keywords.slice(0, 8).map((k) => (
              <div
                key={k}
                style={{
                  padding: "10px 14px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(0,0,0,0.35)",
                }}
              >
                {k}
              </div>
            ))}
          </div>

          <div style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" }}>
            vaibhav@portfolio:~
          </div>
        </div>
      </div>
    ),
    size
  );
}