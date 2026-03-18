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
    "Model Context Protocol",
    "AI tools",
    "developer tools",
  ],
  openGraph: {
    title: "Memstalker — Your AI Never Forgets",
    description:
      "Persistent memory for AI agents. One brain, every model, zero copy-paste. 8ms retrieval, self-learning loops, open source.",
    url: "https://memstalker.com",
    siteName: "Memstalker",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memstalker — Your AI Never Forgets",
    description:
      "Persistent memory for AI agents. One brain, every model, zero copy-paste. 8ms retrieval, self-learning loops, open source.",
    creator: "@willynikes",
  },
  metadataBase: new URL("https://memstalker.com"),
  alternates: {
    canonical: "https://memstalker.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    "google-site-verification": "",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Memstalker",
              description:
                "Persistent memory for AI agents. One knowledge base every AI model can read from and write to.",
              url: "https://memstalker.com",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              offers: [
                {
                  "@type": "Offer",
                  name: "Self-Hosted",
                  price: "0",
                  priceCurrency: "USD",
                  description: "Free forever. Self-hosted open source.",
                },
                {
                  "@type": "Offer",
                  name: "Pro",
                  price: "12",
                  priceCurrency: "USD",
                  description:
                    "Early adopter price. Hosted with sync, backups, and multi-device.",
                },
              ],
              creator: {
                "@type": "Person",
                name: "Shawn Daniel",
                url: "https://github.com/willynikes2",
              },
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
