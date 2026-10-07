"use client";

import React from "react";
import { motion } from "framer-motion";
import { Boxes, Code2, TrendingUp, Gauge, Check, ArrowRight, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA, Service } from "@/data/portfolioData";

export default function Services() {
  const { services } = PORTFOLIO_DATA;

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Boxes":
        return <Boxes className="w-6 h-6 text-amber-400" />;
      case "Code2":
        return <Code2 className="w-6 h-6 text-amber-400" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-amber-400" />;
      case "Gauge":
      default:
        return <Gauge className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#080d17] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-white/5 border border-white/10 text-amber-400 mb-3"
          >
            <Boxes className="w-3.5 h-3.5 text-amber-400" />
            ENGINEERING SERVICES & CAPABILITIES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Crafted for Impact. <br />
            <span className="amber-gradient-text">Engineered for Scale.</span>
          </motion.h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base">
            From creative direction and 3D shader stages to resilient full-stack platforms, here is how I help companies outpace their competition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 sm:p-9 border backdrop-blur-xl transition-all duration-300 group flex flex-col justify-between ${
                service.popular
                  ? "bg-slate-900/60 border-amber-500/40 shadow-xl shadow-amber-500/5"
                  : "bg-slate-900/30 border-white/10 hover:border-white/20"
              }`}
            >
              {service.popular && (
                <div className="absolute top-6 right-6 inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  <Sparkles className="w-3 h-3" />
                  Most Requested
                </div>
              )}

              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-3">
                    Deliverables Included:
                  </span>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors font-semibold group/link"
                >
                  <span>Request Scope & Estimate</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-link:translate-x-1" />
                </a>
                <span className="text-[11px] font-mono text-slate-500">Fixed or Retainer</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
