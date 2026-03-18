import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Memstalker — Persistent Memory for AI Agents",
  description:
    "Give Claude, ChatGPT, and Gemini real memory. One knowledge base every AI model can read from and write to. Open source core.",
  keywords: [
    "AI memory",
    "persistent memory",
    "Claude",
    "ChatGPT",
    "Gemini",
    "MCP",
    "knowledge base",
    "AI agents",
  ],
  openGraph: {
    title: "Memstalker — Your AI Never Forgets",
    description:
      "Persistent memory for AI agents. One brain, every model, zero copy-paste.",
    url: "https://memstalker.com",
    siteName: "Memstalker",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memstalker — Your AI Never Forgets",
    description:
      "Persistent memory for AI agents. One brain, every model, zero copy-paste.",
  },
  metadataBase: new URL("https://memstalker.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable}`}
    >
      <body className="font-body bg-bg text-text-primary antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
