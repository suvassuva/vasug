"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle, Quote } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Experience() {
  const { experience, testimonials } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[#0B0F19] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-white/5 border border-white/10 text-amber-400 mb-3"
          >
            <Briefcase className="w-3.5 h-3.5 text-amber-400" />
            CAREER TRAJECTORY & IMPACT
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Milestones & <br />
            <span className="amber-gradient-text">Engineering Journey</span>
          </motion.h2>
        </div>

        {/* Timeline Items */}
        <div className="relative max-w-4xl mx-auto mb-24">
          {/* Vertical Timeline Rule */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-amber-500/50 via-white/10 to-transparent pointer-events-none" />

          <div className="space-y-12">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.period}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center Node Indicator */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0B0F19] border-2 border-amber-400 flex items-center justify-center z-10 shadow-[0_0_12px_rgba(245,158,11,0.6)]">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? "md:pl-10" : "md:pr-10"
                    }`}
                  >
                    <div className="rounded-2xl bg-slate-900/40 border border-white/10 hover:border-amber-400/30 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300">
                      
                      {/* Meta: Period & Location */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2 text-xs font-mono text-amber-400">
                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        <span className="text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mt-2">
                        {item.role}
                      </h3>
                      <p className="text-sm font-medium text-amber-300/90 mb-4">
                        {item.company}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2 mb-5">
                        {item.achievements.map((achieve, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-400">
                            <CheckCircle className="w-3.5 h-3.5 text-amber-400/80 shrink-0 mt-0.5" />
                            <span>{achieve}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Showcase */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono tracking-widest text-slate-500 uppercase">
              Client & Leadership Endorsements
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative rounded-2xl bg-slate-900/30 border border-white/10 p-7 sm:p-8 backdrop-blur-xl"
              >
                <Quote className="w-8 h-8 text-amber-400/30 mb-4" />
                <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center font-bold text-slate-950 text-xs">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.author}</h4>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
