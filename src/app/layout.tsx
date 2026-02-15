import "./globals.css";
import type { Metadata } from "next";
import { site } from "@/lib/content";
import { TerminalBar } from "@/components/TerminalBar";
import { CyberTransition } from "@/components/CyberTransition";
import { BootOverlay } from "@/components/effects/BootOverlay";
import { EffectsLayer } from "@/components/effects/EffectsLayer";

export const metadata: Metadata = {
  metadataBase: new URL("https://vaibhavsaini-portfolio.vercel.app"),
  title: {
    default: `${site.name} — ${site.headline}`,
    template: `%s — ${site.name}`,
  },
  description: site.subheadline,
  keywords: site.keywords,
  applicationName: `${site.name} Portfolio`,

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    url: "/",
    title: `${site.name} — ${site.headline}`,
    description: site.subheadline,
    siteName: `${site.name}`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.headline}`,
    description: site.subheadline,
    images: ["/twitter-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-neutral-950 text-neutral-50">
        <BootOverlay />

        <EffectsLayer />

        <main className="relative z-10 mx-auto max-w-6xl px-6 py-10">
          <TerminalBar />
          <CyberTransition>{children}</CyberTransition>

          <footer className="mt-14 border-t border-neutral-800 pt-8 font-mono text-xs text-neutral-500">
            © {new Date().getFullYear()} {site.name} • Software & AI Dev
          </footer>
        </main>

        <div className="pointer-events-none fixed inset-0 z-[2] bg-gradient-to-b from-black/35 via-transparent to-black/60" />
      </body>
    </html>
  );
}