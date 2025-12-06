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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1c1917",
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #292524 0%, #1c1917 70%)",
        }}
      >
        {/* DNA Helix visual representation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          {/* Simple DNA representation with circles */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 60 - i * 10,
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    backgroundColor: "#fb7185",
                    boxShadow: "0 0 20px #fb7185",
                  }}
                />
                <div
                  style={{
                    width: 80 + i * 8,
                    height: 3,
                    backgroundColor: "#44403c",
                  }}
                />
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    backgroundColor: "#fda4af",
                    boxShadow: "0 0 20px #fda4af",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            fontSize: 80,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "#fef3c7" }}>Voice</span>
          <span style={{ color: "#fb7185" }}>DNA</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 36,
            color: "#a8a29e",
            marginTop: 16,
          }}
        >
          Your Voice. Quantified.
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: 60,
            marginTop: 50,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "#fb7185", fontSize: 28, fontWeight: 700 }}>
              200+
            </span>
            <span style={{ color: "#a8a29e", fontSize: 20 }}>metrics</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "#fb7185", fontSize: 28, fontWeight: 700 }}>
              6
            </span>
            <span style={{ color: "#a8a29e", fontSize: 20 }}>channels</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "#fb7185", fontSize: 28, fontWeight: 700 }}>
              AI
            </span>
            <span style={{ color: "#a8a29e", fontSize: 20 }}>prompts</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
