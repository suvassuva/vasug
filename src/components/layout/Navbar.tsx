"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-5 bg-transparent pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Brand Logo (Floating Transparently) */}
        <a
          href="#hero-scroll-container"
          className="group flex items-center gap-2.5 py-1 transition-all duration-300"
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-white/20 shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:border-purple-400/60 transition-all">
            <Image
              src="/profile.png"
              alt="Vasu Profile"
              width={36}
              height={36}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
          <span className="font-mono text-sm sm:text-base font-black tracking-wider text-white uppercase group-hover:text-purple-200 transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            vasu
          </span>
        </a>

        {/* Direct Contact Icons (No Text) */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Phone / Call */}
          <a
            href="tel:95918135617"
            title="Call: 95918135617"
            aria-label="Call: 95918135617"
            className="p-2 sm:p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-emerald-400/50 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 backdrop-blur-sm transition-all duration-300 shadow-sm hover:scale-105 active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>

          {/* Email */}
          <a
            href="mailto:suvassuva8@gmail.com"
            title="Email: suvassuva8@gmail.com"
            aria-label="Email: suvassuva8@gmail.com"
            className="p-2 sm:p-2.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-purple-600 hover:from-amber-400 hover:to-purple-500 text-white transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:scale-105 active:scale-95"
          >
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        </div>

      </div>
    </header>
  );
}
