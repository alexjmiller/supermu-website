import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://supermu.app"),
  title: "supermu — a persistent workspace for humans and AI coding agents",
  description:
    "Run Claude Code, Codex, shells, and development processes as durable sessions. Close your terminal, reconnect later, and everything is still there — and supermu tells you when an agent actually needs you.",
  openGraph: {
    title: "supermu",
    description:
      "A persistent workspace for humans and AI coding agents. Your AI coding sessions should outlive your terminal.",
    url: "https://supermu.app",
    siteName: "supermu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "supermu",
    description:
      "A persistent workspace for humans and AI coding agents.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
