import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "VoiceDNA - Your Voice. Quantified.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#1c1917",
          backgroundImage:
            "radial-gradient(circle at 80% 50%, rgba(251,113,133,0.15) 0%, transparent 50%)",
          padding: "60px 80px",
        }}
      >
        {/* Left side - Text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "600px",
          }}
        >
          {/* Brand */}
          <div
            style={{
              display: "flex",
              fontSize: 32,
              fontWeight: 700,
              marginBottom: 40,
            }}
          >
            <span style={{ color: "#fef3c7" }}>Voice</span>
            <span style={{ color: "#fb7185" }}>DNA</span>
          </div>

          {/* Headline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            <span
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: "#fef3c7",
                lineHeight: 1.1,
              }}
            >
              Your Voice.
            </span>
            <span
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: "#fb7185",
                lineHeight: 1.1,
              }}
            >
              Quantified.
            </span>
          </div>

          {/* Subtext */}
          <div
            style={{
              fontSize: 24,
              color: "#a8a29e",
              marginTop: 30,
              lineHeight: 1.5,
            }}
          >
            Extract your unique voice DNA across every channel.
            Get AI prompts that actually sound like you.
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: 40,
              marginTop: 40,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "#fb7185", fontSize: 24, fontWeight: 700 }}>
                200+
              </span>
              <span style={{ color: "#a8a29e", fontSize: 18 }}>metrics</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "#fb7185", fontSize: 24, fontWeight: 700 }}>
                AI
              </span>
              <span style={{ color: "#a8a29e", fontSize: 18 }}>prompts</span>
            </div>
          </div>

          {/* Channel logos row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 30,
            }}
          >
            <span style={{ color: "#a8a29e", fontSize: 16 }}>Works with:</span>
            {/* X/Twitter */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 8, backgroundColor: "#292524" }}>
              <span style={{ color: "#fef3c7", fontSize: 18, fontWeight: 700 }}>𝕏</span>
            </div>
            {/* Instagram */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 8, background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }}>
              <span style={{ color: "white", fontSize: 16, fontWeight: 700 }}>IG</span>
            </div>
            {/* LinkedIn */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 8, backgroundColor: "#0077b5" }}>
              <span style={{ color: "white", fontSize: 16, fontWeight: 700 }}>in</span>
            </div>
            {/* YouTube */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 8, backgroundColor: "#ff0000" }}>
              <span style={{ color: "white", fontSize: 18 }}>▶</span>
            </div>
            {/* Newsletter */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 8, backgroundColor: "#292524" }}>
              <span style={{ color: "#fef3c7", fontSize: 18 }}>✉</span>
            </div>
            {/* Blog */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 8, backgroundColor: "#292524" }}>
              <span style={{ color: "#fef3c7", fontSize: 18 }}>✍</span>
            </div>
          </div>
        </div>

        {/* Right side - VoiceDNA Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.myvoicedna.ai/logo.svg"
          alt="VoiceDNA Logo"
          width={350}
          height={350}
          style={{
            marginRight: 20,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
