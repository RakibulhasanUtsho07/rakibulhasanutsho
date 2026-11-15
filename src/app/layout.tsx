import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./redesign.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rakibul Hasan Utsho — Backend Developer",
    template: "%s | Utsho.dev",
  },
  description:
    "Portfolio of Rakibul Hasan Utsho, a Bangladesh-based backend developer building REST APIs, backend services, and thoughtful full-stack products.",
  applicationName: "Utsho.dev",
  keywords: [
    "Rakibul Hasan Utsho",
    "Backend Developer",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "TypeScript",
    "REST APIs",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Rakibul Hasan Utsho" }],
  creator: "Rakibul Hasan Utsho",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Utsho.dev",
    title: "Rakibul Hasan Utsho — Backend Developer",
    description: "Backend services, REST APIs, data systems, and useful digital products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakibul Hasan Utsho — Backend Developer",
    description: "Backend engineering, REST APIs, and full-stack product work.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0d0f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={geistSans.variable + " " + geistMono.variable + " h-full antialiased"}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
