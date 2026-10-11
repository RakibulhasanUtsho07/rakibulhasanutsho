import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Rakibul Hasan Utsho — Full-Stack Developer",
    template: "%s | Utsho.dev",
  },
  description:
    "Portfolio of Rakibul Hasan Utsho, a Bangladesh-based full-stack developer building thoughtful interfaces, reliable APIs, and polished digital products.",
  applicationName: "Utsho.dev",
  keywords: [
    "Rakibul Hasan Utsho",
    "Full-Stack Developer",
    "MERN Developer",
    "Next.js",
    "React",
    "TypeScript",
    "GSAP",
    "Three.js",
    "Framer Motion",
    "Digital Wallet",
    "SaaS",
  ],
  authors: [{ name: "Rakibul Hasan Utsho" }],
  creator: "Rakibul Hasan Utsho",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Utsho.dev",
    title: "Rakibul Hasan Utsho — Full-Stack Developer",
    description: "Full-stack engineering, interactive interfaces, and digital product experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakibul Hasan Utsho — Full-Stack Developer",
    description: "Full-stack engineering, interactive interfaces, and 3D web experiments.",
  },
};

export const viewport: Viewport = {
  themeColor: "#080c16",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={geistSans.variable + " " + geistMono.variable + " h-full antialiased"}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
