"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cuboid, Layout, Server, Sparkles, Check, Flame } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Skills() {
  const { skillCategories } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Cuboid":
        return <Cuboid className="w-5 h-5 text-amber-400" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-amber-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-amber-400" />;
      case "Sparkles":
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#080d17] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-white/5 border border-white/10 text-amber-400 mb-3"
          >
            <Cuboid className="w-3.5 h-3.5 text-amber-400" />
            TECHNICAL PROFICIENCY & TOOLKIT
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Floating Tech Stack & <br />
            <span className="amber-gradient-text">Core Capabilities</span>
          </motion.h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base">
            Meticulously vetted technologies utilized to build real-world, high-traffic production software.
          </p>
        </div>

        {/* Category Tabs for Mobile / Quick Select */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                activeCategory === idx
                  ? "bg-amber-500/20 border-amber-400/50 text-amber-300 shadow-[0_0_15px_-3px_rgba(245,158,11,0.3)]"
                  : "bg-slate-900/40 border-white/5 text-slate-400 hover:text-white hover:border-white/15"
              }`}
            >
              {getCategoryIcon(cat.iconName)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* 4 Category Grid Cards with 3D Tilt Stance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => {
            const isHighlighted = activeCategory === catIdx;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className={`relative rounded-3xl p-7 sm:p-8 border transition-all duration-300 backdrop-blur-xl ${
                  isHighlighted
                    ? "bg-slate-900/60 border-amber-500/40 shadow-2xl shadow-amber-500/10 ring-1 ring-amber-500/20"
                    : "bg-slate-900/30 border-white/10 hover:border-white/20"
                }`}
              >
                {/* Header of Card */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills Progress List */}
                <div className="space-y-4 mt-6">
                  {category.skills.map((skill, sIdx) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-200 flex items-center gap-1.5">
                          {skill.highlight && (
                            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          )}
                          {skill.name}
                        </span>
                        <span className="font-mono text-slate-400">{skill.level}%</span>
                      </div>

                      {/* Animated Progress Meter */}
                      <div className="h-2 w-full rounded-full bg-slate-800/80 overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: 0.15 + sIdx * 0.08, ease: "easeOut" }}
                          className={`h-full rounded-full ${
                            skill.highlight
                              ? "bg-gradient-to-r from-amber-500 via-amber-400 to-amber-200 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                              : "bg-gradient-to-r from-slate-600 to-slate-400"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer badge */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Stack verified in production</span>
                  <span className="text-amber-400/80 flex items-center gap-1">
                    <Check className="w-3 h-3 text-amber-400" /> High Proficiency
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
