"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, Layers, Lock, Cpu, Eye, ArrowUpRight, CheckCircle2, Sliders, Code2, Gauge } from "lucide-react";

export default function BentoGrid() {
  const [selectedDomain, setSelectedDomain] = useState("3D / WebGL");

  return (
    <section id="bento-features" className="relative py-28 sm:py-36 bg-[#07070c] overflow-hidden">
      {/* Background Soft Purple / Pink Cosmic Glow Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/[0.04] blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-pink-500/[0.03] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-indigo-500/[0.03] blur-[150px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-purple-300 mb-4 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>FULL-STACK & 3D CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Architected for Velocity. <br />
            <span className="bg-gradient-to-r from-purple-200 via-pink-200 to-amber-200 bg-clip-text text-transparent">
              Sculpted for Human Impact.
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Bridging the gap between robust backend systems and fluid, GPU-accelerated 3D graphics that elevate brands above the noise.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1 (Span 8): Production Full-Stack & 3D WebGL Systems */}
          <div className="lg:col-span-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl p-7 sm:p-9 relative overflow-hidden group hover:border-purple-400/40 transition-all duration-500 shadow-2xl flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  CORE SPECIALIZATION
                </span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  60 FPS Hardware-Accelerated
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                Production Full-Stack & 3D WebGL Architectures
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-2xl mb-6">
                I build immersive spatial websites and high-load web applications with zero hydration errors, hardware-accelerated shaders, and strict TypeScript types.
              </p>

              {/* Interactive Architecture Filter */}
              <div className="rounded-2xl bg-[#090b14] border border-white/10 p-4 mb-6 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-white/5">
                  <span className="flex items-center gap-1.5 text-purple-300">
                    <Code2 className="w-3.5 h-3.5" /> Engineering Domain Focus
                  </span>
                  <div className="flex items-center gap-1.5">
                    {["3D / WebGL", "Next.js SSR", "Cloud DBs", "Performance"].map((dom) => (
                      <button
                        key={dom}
                        onClick={() => setSelectedDomain(dom)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-mono transition-colors ${
                          selectedDomain === dom
                            ? "bg-purple-500 text-white font-bold"
                            : "bg-white/5 text-slate-400 hover:text-white"
                        }`}
                      >
                        {dom}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-white font-mono bg-black/40 px-3 py-2.5 rounded-xl border border-white/5">
                  <span className="text-purple-400">&gt;</span>
                  <span className="truncate">
                    R3F SceneGraph • Orbit Controls • Custom GLSL Vertex/Fragment Shader Passes • PBR Lighting
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Code Preview Box */}
            <div className="h-44 sm:h-52 rounded-2xl relative overflow-hidden bg-gradient-to-br from-purple-950/40 via-[#0a0a14] to-slate-950 border border-white/10 flex items-end p-5">
              <div className="absolute inset-0 bg-cosmic-grid opacity-30" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between w-full font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs text-white font-bold">Domain: {selectedDomain}</span>
                </div>
                <span className="text-[11px] text-purple-300 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md">
                  Vercel Edge & Cloudflare Ready
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 (Span 4): Core Web Vitals & Latency Mastery */}
          <div className="lg:col-span-4 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl p-7 sm:p-9 relative overflow-hidden group hover:border-pink-400/40 transition-all duration-500 shadow-2xl flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60" />

            <div>
              <div className="w-10 h-10 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-6">
                <Gauge className="w-5 h-5" />
              </div>

              <span className="text-xs font-mono text-pink-400 uppercase tracking-widest block mb-2">
                Speed & Edge Optimization
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                100/100 Lighthouse
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Ultra-fast load times with dynamic code splitting, responsive WebP asset pipelines, and zero Cumulative Layout Shift.
              </p>
            </div>

            {/* Telemetry Visual Box */}
            <div className="rounded-2xl bg-[#090b14] border border-white/10 p-5 space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center text-slate-400 text-[11px]">
                <span>Time to First Byte (TTFB)</span>
                <span className="text-emerald-400 font-bold">&lt; 82 ms</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full w-[96%] bg-gradient-to-r from-pink-500 to-purple-400 rounded-full" />
              </div>
              <div className="pt-2 border-t border-white/5 flex justify-between items-center text-[10px] text-slate-500">
                <span>Core Web Vitals: Grade A</span>
                <span className="text-pink-300">CLS: 0.00</span>
              </div>
            </div>
          </div>

          {/* Card 3 (Span 4): Type-Safe Backend & Relational Schemas */}
          <div className="lg:col-span-4 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl p-7 sm:p-8 relative overflow-hidden group hover:border-purple-400/40 transition-all duration-500 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                <Lock className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Type-Safe Schemas
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                Relational PostgreSQL schemas engineered with Prisma / Drizzle ORM and Zod runtime validation.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#090b14] border border-white/10 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-200">Strict TypeScript</span>
              </div>
              <span className="text-purple-300 font-bold">Zero Runtime Errors</span>
            </div>
          </div>

          {/* Card 4 (Span 4): Custom Shaders & 3D Passes */}
          <div className="lg:col-span-4 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl p-7 sm:p-8 relative overflow-hidden group hover:border-amber-400/40 transition-all duration-500 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                <Layers className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Custom GLSL Shaders
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                Bespoke shader passes for dynamic bloom, holographic distortions, particle sims, and refractive PBR glass.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#090b14] border border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Render Pipeline</span>
              <span className="text-amber-300 font-bold">GPU Accelerated</span>
            </div>
          </div>

          {/* Card 5 (Span 4): Motion Choreography & UX Delights */}
          <div className="lg:col-span-4 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl p-7 sm:p-8 relative overflow-hidden group hover:border-indigo-400/40 transition-all duration-500 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                <Zap className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Fluid Motion Systems
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                Accessible spring physics choreography with Framer Motion and tokenized glassmorphic dark design systems.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#090b14] border border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Interaction Feel</span>
              <span className="text-indigo-300 font-bold">Natural Spring Easing</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
