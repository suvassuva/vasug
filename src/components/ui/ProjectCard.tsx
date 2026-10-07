"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth 3D tilt
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), {
    stiffness: 280,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), {
    stiffness: 280,
    damping: 24,
  });

  const glareX = useTransform(x, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(y, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width;
    const relativeY = (e.clientY - rect.top) / rect.height;
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="perspective-1000 w-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative group rounded-2xl bg-[#0f172a]/70 border border-white/10 backdrop-blur-xl p-6 sm:p-7 overflow-hidden transition-shadow duration-500 hover:border-amber-400/40 hover:shadow-[0_15px_35px_-10px_rgba(245,158,11,0.2)]"
      >
        {/* Dynamic Specular Glare Overlay */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle 350px at ${glareX} ${glareY}, rgba(255,184,0,0.12), transparent 75%)`,
          }}
        />

        {/* Ambient Top Glow Border Accent */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
          }}
        />

        {/* Header: Category Badge & Links */}
        <div className="flex items-center justify-between mb-4 z-20 relative">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium font-mono tracking-wider bg-white/5 border border-white/10 text-amber-300">
            <Sparkles className="w-3 h-3 text-amber-400" />
            {project.category}
          </span>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all duration-200 hover:scale-105"
                aria-label={`View ${project.title} GitHub repository`}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 hover:border-amber-400 transition-all duration-200 text-xs font-medium group/btn"
                aria-label={`View ${project.title} live preview`}
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            )}
          </div>
        </div>

        {/* Visual Mockup Stage / Terminal Preview */}
        <div className="relative mb-5 rounded-xl overflow-hidden bg-[#070b14] border border-white/5 p-4 group-hover:border-white/15 transition-colors">
          {/* Mock Browser Header Dots */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <div className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {project.metrics}
            </div>
          </div>

          {/* Interactive Visual Graphic */}
          <div className="h-32 sm:h-36 rounded-lg relative overflow-hidden flex flex-col justify-end p-4 bg-gradient-to-br from-slate-900 via-[#0B0F19] to-slate-950">
            {/* Grid Pattern inside preview */}
            <div className="absolute inset-0 bg-cyber-grid opacity-30" />
            
            {/* Glowing Accent Ring */}
            <div
              className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
              style={{ backgroundColor: project.accentColor }}
            />

            <div className="relative z-10">
              <p className="text-xs font-mono uppercase tracking-widest text-amber-400/90 mb-1">
                {project.tagline}
              </p>
              <h4 className="text-lg font-bold text-white tracking-tight">
                {project.title}
              </h4>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Feature Highlights Bullet Points */}
        <div className="space-y-2 mb-5">
          {project.bulletPoints.map((bullet, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400/80 shrink-0 mt-0.5" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/5 hover:border-amber-400/30 hover:text-amber-200 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
