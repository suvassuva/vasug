import React from "react";
import Navbar from "@/components/layout/Navbar";
import ScrollCanvasHero from "@/components/scroll/ScrollCanvasHero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#07070c] text-white selection:bg-purple-500/30 selection:text-white">
      {/* Floating Global Navbar */}
      <Navbar />

      {/* Main Experience Flow */}
      <main className="flex flex-col w-full">
        {/* 1. Cinematic Scroll-Linked 150-Frame Canvas Hero */}
        <ScrollCanvasHero />

        {/* 2. Dual-Direction Production Tech Stack Marquee */}
        <LogoMarquee />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
