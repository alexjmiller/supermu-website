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
  title: "supermu — a persistent workspace for AI coding agents and terminals",
  description:
    "supermu keeps your shells, coding agents, and long-running development sessions alive, organised, and ready to resume. Start work, detach, reconnect, and keep going.",
  openGraph: {
    title: "supermu",
    description:
      "A persistent development workspace for Claude Code, Codex, shells, and long-running sessions. Your AI coding sessions should outlive your terminal.",
    url: "https://supermu.app",
    siteName: "supermu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "supermu",
    description:
      "A persistent development workspace for AI coding agents and terminals.",
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
