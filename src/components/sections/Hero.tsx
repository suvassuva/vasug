"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Code, Sparkles, Terminal, Download, ChevronDown, Layers } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

// Dynamically import 3D canvas components with ssr: false to prevent hydration errors
const CanvasContainer = dynamic(
  () => import("@/components/3d/CanvasContainer"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-[#0B0F19]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full border-2 border-amber-500/20 border-t-amber-400 animate-spin" />
          <span className="text-xs font-mono text-slate-500">Initializing 3D Matrix...</span>
        </div>
      </div>
    ),
  }
);

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
});

export default function Hero() {
  const { personal, techPills } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24"
    >
      {/* Background Ambience & Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-40 z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -right-48 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[70vh]">
          
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Status Beacon Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md w-fit mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono text-slate-300 tracking-wide uppercase">
                {personal.status}
              </span>
            </motion.div>

            {/* High Impact Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6"
            >
              Sculpting <br />
              <span className="amber-gradient-text">Interactive 3D</span> <br />
              Digital Worlds.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8"
            >
              {personal.subheadline}
            </motion.p>

            {/* Interactive Tech Badge Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2 mb-10"
            >
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mr-2 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                Stack:
              </span>
              {techPills.map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-[#111827]/80 text-slate-200 border border-white/10 hover:border-amber-400/40 hover:text-amber-300 transition-colors cursor-default"
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            {/* Direct CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold text-sm hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-[0_0_25px_-5px_rgba(245,158,11,0.5)] hover:shadow-[0_0_35px_0_rgba(245,158,11,0.7)] group"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-white font-medium text-sm backdrop-blur-md hover:bg-white/10 transition-all duration-300"
              >
                <span>Initiate Contact</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </a>

              <a
                href="#terminal"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/60 border border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/20 transition-all text-sm font-mono"
                title="Launch Cyber Terminal"
              >
                <Terminal className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">CLI Mode</span>
              </a>
            </motion.div>

            {/* Stats Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 mt-10 border-t border-white/10"
            >
              {personal.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: 3D Interactive Stage */}
          <div className="lg:col-span-5 h-[420px] sm:h-[500px] lg:h-[620px] relative w-full flex items-center justify-center">
            
            {/* Glassmorphic 3D Card Backdrop Stage */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 backdrop-blur-sm pointer-events-none" />

            {/* Glowing Focal Point */}
            <div className="absolute w-72 h-72 rounded-full bg-amber-500/15 blur-[90px] pointer-events-none" />

            {/* Interactive 3D Canvas Stage */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing">
              <CanvasContainer cameraPosition={[0, 0, 5.2]} fov={42}>
                <HeroScene />
              </CanvasContainer>

              {/* Interactive Micro Tooltip Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none px-3 py-2 rounded-lg bg-black/50 border border-white/10 backdrop-blur-md">
                <span className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  3D Holographic Display
                </span>
                <span className="text-[10px] font-mono text-amber-400/90">
                  Click to Play/Pause • Move to Tilt
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center mt-8">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-amber-400 transition-colors group"
            aria-label="Scroll down to About section"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-amber-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
