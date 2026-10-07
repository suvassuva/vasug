"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Cpu, Rocket, ShieldCheck, Zap, Award, Layers } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  const corePillars = [
    {
      icon: Cpu,
      title: "Full-Stack Precision",
      description: "From type-safe relational schemas to real-time client hydration, I build resilient systems designed for horizontal scale and zero downtime.",
      badge: "Core Architecture"
    },
    {
      icon: Rocket,
      title: "Interactive 3D & WebGL",
      description: "Specialized in GPU-accelerated graphics with Three.js and shaders that enchant users without tanking mobile battery or frame rates.",
      badge: "Creative Computing"
    },
    {
      icon: Zap,
      title: "Speed & Core Web Vitals",
      description: "Obsessed with 100/100 Lighthouse scores, edge rendering, sub-100ms API responses, and buttery 60 FPS transitions.",
      badge: "Performance First"
    },
    {
      icon: ShieldCheck,
      title: "Rapid Prototyping to Scale",
      description: "Fast iterations from concept to production-grade deployment with automated testing, CI/CD, and battle-tested code hygiene.",
      badge: "Delivery Speed"
    }
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0B0F19] overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-white/5 border border-white/10 text-amber-400 mb-3"
          >
            <User className="w-3.5 h-3.5 text-amber-400" />
            ENGINEER IDENTITY & PHILOSOPHY
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Engineering at the Nexus of <br />
            <span className="amber-gradient-text">Design & Computational Power</span>
          </motion.h2>
        </div>

        {/* Bio & Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-xl p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
            
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Hi, I&apos;m <span className="text-amber-400">Vasu</span> — crafting software that leaves an impression.
            </h3>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              {personal.bio}
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
              Whether building an interactive 3D configurator, scaling an enterprise Next.js App Router platform, or optimizing a high-throughput WebSocket data feed, I write maintainable, self-documenting code built to thrive in production.
            </p>

            {/* Quick Info Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 font-mono text-xs">
              <div className="flex flex-col">
                <span className="text-slate-500 uppercase">Location</span>
                <span className="text-white font-medium mt-1">{personal.location}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500 uppercase">Availability</span>
                <span className="text-emerald-400 font-medium mt-1">Open for Contracts</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500 uppercase">Specialty</span>
                <span className="text-amber-400 font-medium mt-1">Next.js & Three.js</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Code / Architecture Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-3xl bg-[#070b14] border border-white/10 p-6 font-mono text-xs shadow-2xl relative"
          >
            {/* Terminal bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] text-slate-500">engineer_manifesto.ts</span>
            </div>

            {/* Code Content */}
            <pre className="text-slate-300 leading-relaxed overflow-x-auto">
              <code>
                <span className="text-amber-400">const</span> engineer = &#123;{"\n"}
                {"  "}name: <span className="text-emerald-400">&quot;Vasu&quot;</span>,{"\n"}
                {"  "}coreFocus: <span className="text-emerald-400">&quot;Creative 3D & Full-Stack&quot;</span>,{"\n"}
                {"  "}primaryStack: [&#10;
                {"    "}<span className="text-amber-300">&quot;Next.js 16&quot;</span>,{"\n"}
                {"    "}<span className="text-amber-300">&quot;React Three Fiber&quot;</span>,{"\n"}
                {"    "}<span className="text-amber-300">&quot;TypeScript&quot;</span>,{"\n"}
                {"    "}<span className="text-amber-300">&quot;PostgreSQL&quot;</span>,{"\n"}
                {"  "}],{"\n"}
                {"  "}principles: [&#10;
                {"    "}<span className="text-cyan-400">&quot;Zero Hydration Errors&quot;</span>,{"\n"}
                {"    "}<span className="text-cyan-400">&quot;Hardware-Accelerated 60 FPS&quot;</span>,{"\n"}
                {"    "}<span className="text-cyan-400">&quot;Clean Architecture&quot;</span>,{"\n"}
                {"  "}],{"\n"}
                {"  "}execute: () =&gt; <span className="text-amber-400">new</span> Experience(),{"\n"}
                &#125;;
              </code>
            </pre>

            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1 text-emerald-400">
                <Award className="w-3.5 h-3.5" /> Ready for deployment
              </span>
              <span>UTF-8</span>
            </div>
          </motion.div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePillars.map((pillar, i) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl bg-slate-900/30 border border-white/10 hover:border-amber-400/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400/80 mb-2 block">
                  {pillar.badge}
                </span>
                <h4 className="text-lg font-bold text-white mb-2">{pillar.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
