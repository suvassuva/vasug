import type { Metadata, Viewport } from "next";
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
  title: "Vasu | Senior Full-Stack & 3D Creative Web Engineer",
  description:
    "Engineering spatial 3D & full-stack web experiences. Next.js 16 App Router, React Three Fiber, WebGL shaders, Tailwind CSS v4, and resilient cloud architectures.",
  keywords: [
    "Vasu",
    "Creative Technologist",
    "Full-Stack Web Developer",
    "Three.js Portfolio",
    "React Three Fiber",
    "WebGL",
    "Next.js 16",
    "GLSL Shaders",
    "Tailwind CSS",
    "TypeScript",
  ],
  authors: [{ name: "Vasu" }],
  creator: "Vasu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vasu.dev",
    title: "Vasu | Senior Full-Stack & 3D Creative Web Engineer",
    description:
      "Explore interactive 3D WebGL experiences, full-stack architectures, and high-performance digital products engineered by Vasu.",
    siteName: "Vasu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasu | Senior Full-Stack & 3D Creative Web Engineer",
    description:
      "Explore interactive 3D WebGL scenes, full-stack applications, and high-performance digital products.",
    creator: "@vasudev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#07070c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#07070c] text-white flex flex-col font-sans selection:bg-purple-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
