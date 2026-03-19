import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Persistent memory for AI agents | Memstalker",
  description:
    "Memstalker gives Claude, Codex, and Gemini a shared knowledge base so they remember your codebase, fixes, and decisions across sessions.",
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
    title: "Persistent memory for AI agents | Memstalker",
    description:
      "Memstalker gives Claude, Codex, and Gemini a shared knowledge base so they remember your codebase, fixes, and decisions across sessions.",
    url: "https://memstalker.com",
    siteName: "Memstalker",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Memstalker social preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Persistent memory for AI agents | Memstalker",
    description:
      "Memstalker gives Claude, Codex, and Gemini a shared knowledge base so they remember your codebase, fixes, and decisions across sessions.",
    creator: "@ShawnDanCap",
    images: ["/twitter-image"],
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
    <html lang="en">
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
