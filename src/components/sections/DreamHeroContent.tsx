"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2 } from "lucide-react";

export interface Chapter {
  id: string;
  actNumber: string;
  actTitle: string;
  badge: string;
  badgeColor: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix?: string;
  description: string;
  telemetry: { label: string; value: string; isGood?: boolean }[];
  tag: string;
}

export const STORY_CHAPTERS: Chapter[] = [
  {
    id: "chapter-01",
    actNumber: "01",
    actTitle: "Threshold",
    badge: "ACT 01 // INITIALIZATION",
    badgeColor: "border-amber-500/30 text-amber-300 bg-amber-500/10 shadow-[0_0_15px_rgba(245,158,11,0.12)]",
    titlePrefix: "Stepping Beyond",
    titleHighlight: "The Threshold.",
    titleSuffix: "",
    description:
      "Crossing from standard flat web layouts into spatial depth, procedural GLSL shaders, and interactive digital worlds where imagination turns into code.",
    telemetry: [
      { label: "PORTAL GATE", value: "OPEN", isGood: true },
      { label: "AXIS VECTOR", value: "0x01_ENTER" },
    ],
    tag: "PORTAL ENTRY",
  },
  {
    id: "chapter-02",
    actNumber: "02",
    actTitle: "Core Stack",
    badge: "ACT 02 // CREATIVE FOUNDATION",
    badgeColor: "border-cyan-500/30 text-cyan-300 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.12)]",
    titlePrefix: "Architecting Modern",
    titleHighlight: "Full-Stack Universes.",
    titleSuffix: "",
    description:
      "Mastering Next.js 16 architectures, React Three Fiber canvases, TypeScript precision, and high-performance components optimized for 60 FPS fluidity.",
    telemetry: [
      { label: "PIPELINE", value: "WEBGL 2.0" },
      { label: "FOUNDATION", value: "REACT + NEXT", isGood: true },
    ],
    tag: "TECH MATRIX",
  },
  {
    id: "chapter-03",
    actNumber: "03",
    actTitle: "Code Synthesis",
    badge: "ACT 03 // LIVE CODE SYNTHESIS",
    badgeColor: "border-orange-500/30 text-orange-300 bg-orange-500/10 shadow-[0_0_15px_rgba(249,115,22,0.12)]",
    titlePrefix: "Forging Cybernetic Code",
    titleHighlight: "At The Speed Of Thought.",
    titleSuffix: "",
    description:
      "Synthesizing complex logic, low-latency API streams, and reactive interfaces with pixel-perfect precision and immersive micro-interactions.",
    telemetry: [
      { label: "CORE CYCLE", value: "60 FPS LERP", isGood: true },
      { label: "NEURAL SYNC", value: "ONLINE" },
    ],
    tag: "SYNTHESIS",
  },
  {
    id: "chapter-04",
    actNumber: "04",
    actTitle: "Live Scale",
    badge: "ACT 04 // LIVE DEPLOYMENT & IMPACT",
    badgeColor: "border-emerald-500/30 text-emerald-300 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.15)]",
    titlePrefix: "Servers Online.",
    titleHighlight: "SEO 100% • Live at Scale.",
    titleSuffix: "",
    description:
      "Holographic telemetry active, instant zero-downtime deployment, peak SEO performance, and resilient cloud systems ready to scale global brands.",
    telemetry: [
      { label: "SERVER UPTIME", value: "99.99%", isGood: true },
      { label: "SEO SCORE", value: "100/100", isGood: true },
      { label: "DEPLOYMENT", value: "100% LIVE", isGood: true },
    ],
    tag: "LIVE PRODUCTION",
  },
];

interface DreamHeroContentProps {
  currentChapter?: number;
  scrollProgress?: number;
  currentFrame?: number;
  totalFrames?: number;
  loadProgress?: number;
  onSelectChapter?: (index: number) => void;
}

export default function DreamHeroContent({
  currentChapter = 0,
  scrollProgress = 0,
  currentFrame = 1,
  totalFrames = 300,
  loadProgress = 100,
  onSelectChapter,
}: DreamHeroContentProps) {
  const chapter = STORY_CHAPTERS[Math.min(currentChapter, STORY_CHAPTERS.length - 1)] || STORY_CHAPTERS[0];
  const progressPercent = Math.round(scrollProgress * 100);

  return (
    <div className="relative h-full w-full flex flex-col justify-end sm:justify-center pt-0 sm:pt-24 pb-4 sm:pb-4 px-4 sm:px-6 md:px-8 lg:px-12 max-w-[100vw] pointer-events-none select-none">
      {/* Main Dynamic Narrative Block (Centered in lower 50vh on mobile, centered vertically on desktop) */}
      <div className="flex flex-col justify-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl text-left pointer-events-auto z-20 h-[50vh] sm:h-auto sm:flex-1 sm:my-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={chapter.id}
            initial={{ opacity: 0, y: 10, filter: "blur(3px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(3px)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col"
          >
            {/* Dynamic Headline - Scaled Down & Responsive */}
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.12] mb-1.5 sm:mb-3 drop-shadow-[0_8px_24px_rgba(0,0,0,0.9)]">
              <span className="bg-gradient-to-r from-white via-slate-100 to-purple-200 bg-clip-text text-transparent">
                {chapter.titlePrefix}
              </span>{" "}
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-purple-300 bg-clip-text text-transparent">
                {chapter.titleHighlight}
              </span>
            </h1>

            {/* Dynamic Story Description - Compact & Clean */}
            <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed max-w-sm sm:max-w-md md:max-w-lg mb-2 sm:mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              {chapter.description}
            </p>

            {/* Chapter Telemetry Badges - Compact */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2.5 sm:mb-4">
              {chapter.telemetry.map((t, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-md bg-black/50 border border-white/10 backdrop-blur-md text-[10px] sm:text-[11px] font-mono"
                >
                  <span className="text-slate-400">{t.label}:</span>
                  <span
                    className={`font-semibold ${
                      t.isGood ? "text-emerald-400" : "text-amber-300"
                    }`}
                  >
                    {t.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap items-center gap-2.5 sm:gap-3"
        >
          <a
            href="https://github.com/suvassuva"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/[0.05] border border-white/10 hover:border-purple-400/40 text-slate-200 hover:text-white font-medium text-xs backdrop-blur-md transition-all hover:bg-white/[0.08]"
          >
            <span>GitHub Repositories</span>
            <Code2 className="w-3.5 h-3.5 text-purple-400" />
          </a>
        </motion.div>
      </div>


    </div>
  );
}
