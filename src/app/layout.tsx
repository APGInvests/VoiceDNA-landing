import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyVoiceDNA.ai | Your Voice. Quantified.",
  description: "Extract your unique voice DNA across every channel you use. Get AI prompts that actually sound like you. Not templates. Not guesswork. Your actual patterns, measured across 27 metrics.",
  keywords: ["voice DNA", "AI writing", "personal branding", "content creation", "AI prompts"],
  authors: [{ name: "APG Iterations" }],
  openGraph: {
    title: "MyVoiceDNA.ai | Your Voice. Quantified.",
    description: "Extract your unique voice DNA across every channel. Get AI prompts that sound like you.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyVoiceDNA.ai | Your Voice. Quantified.",
    description: "Extract your unique voice DNA across every channel. Get AI prompts that sound like you.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
