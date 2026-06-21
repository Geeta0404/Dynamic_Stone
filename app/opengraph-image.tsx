import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#211c17",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            border: "3px solid rgba(214,184,115,0.6)",
            backgroundColor: "#2e261c",
            marginBottom: "32px",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: "64px",
            fontWeight: 700,
            color: "#fdfcfa",
          }}
        >
          {siteConfig.shortName}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "18px",
            fontSize: "28px",
            color: "#d6b873",
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
