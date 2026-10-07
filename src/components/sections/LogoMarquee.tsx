"use client";

import React from "react";
import { Layers } from "lucide-react";

const ROW_ONE_STACK = [
  { name: "Next.js 16", role: "App Router & SSR" },
  { name: "React 19", role: "Concurrent Engine" },
  { name: "Three.js / R3F", role: "WebGL 3D Canvases" },
  { name: "TypeScript", role: "Strict Type Safety" },
  { name: "Tailwind CSS v4", role: "Design Token Architecture" },
  { name: "Framer Motion", role: "Spring Choreography" },
  { name: "WebGL / GLSL", role: "Custom Shader Passes" },
];

const ROW_TWO_STACK = [
  { name: "Node.js", role: "Runtime & Microservices" },
  { name: "PostgreSQL", role: "Relational Data Schemas" },
  { name: "Prisma ORM", role: "Type-Safe DB Client" },
  { name: "Redis", role: "In-Memory Caching & PubSub" },
  { name: "Docker", role: "Container Orchestration" },
  { name: "AWS / Edge", role: "Serverless Deployments" },
  { name: "Blender 3D", role: "Asset & Material Pipeline" },
  { name: "GraphQL & REST", role: "High-Throughput APIs" },
];

export default function LogoMarquee() {
  return (
    <section id="stack" className="relative py-10 sm:py-20 bg-[#07070c] overflow-hidden border-t border-b border-white/[0.06]">
      {/* Background Soft Purple/Pink Glow Accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/[0.06] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-pink-500/[0.04] blur-[140px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 text-center mb-6 sm:mb-8 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/[0.03] border border-white/10 text-[9px] sm:text-[11px] font-mono text-purple-300 shadow-sm max-w-[95vw]">
          <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400 shrink-0" />
          <span className="tracking-wide uppercase">VERIFIED PRODUCTION ARCHITECTURE & TECH STACK</span>
        </div>
      </div>

      {/* Marquee Container with Subtle Edge Masks */}
      <div className="relative w-full overflow-hidden mask-marquee-fade space-y-5">
        
        {/* Row 1: Right → Left */}
        <div className="animate-marquee-left flex gap-6">
          {[...ROW_ONE_STACK, ...ROW_ONE_STACK].map((item, idx) => (
            <div
              key={`row1-${idx}`}
              className="group flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl hover:border-purple-400/40 hover:bg-white/[0.05] transition-all cursor-default shrink-0 shadow-lg"
            >
              <div className="w-2 h-2 rounded-full bg-purple-400 group-hover:scale-125 transition-transform" />
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white tracking-wide group-hover:text-purple-200 transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Left → Right */}
        <div className="animate-marquee-right flex gap-6">
          {[...ROW_TWO_STACK, ...ROW_TWO_STACK].map((item, idx) => (
            <div
              key={`row2-${idx}`}
              className="group flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl hover:border-pink-400/40 hover:bg-white/[0.05] transition-all cursor-default shrink-0 shadow-lg"
            >
              <div className="w-2 h-2 rounded-full bg-pink-400 group-hover:scale-125 transition-transform" />
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white tracking-wide group-hover:text-pink-200 transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
