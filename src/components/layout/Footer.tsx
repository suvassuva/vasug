"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { GithubIcon, WhatsAppIcon } from "@/components/ui/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050508] border-t border-white/10 text-slate-400 py-6 sm:py-8 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2 mb-1">
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border border-purple-400/30 shadow-[0_0_12px_rgba(168,85,247,0.4)]">
                <Image
                  src="/profile.png"
                  alt="Vasu Profile"
                  width={28}
                  height={28}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="font-mono text-sm sm:text-base font-black tracking-wider text-white uppercase">
                vasu
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-400 max-w-xs sm:max-w-sm">
              Creative Full-Stack & 3D Web Engineer crafting spatial digital experiences.
            </p>
          </div>

          {/* Contact Icons Row & Back to Top */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {/* Phone Call */}
            <a
              href="tel:95918135617"
              className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/40 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 transition-all hover:scale-105 active:scale-95"
              aria-label="Call 95918135617"
              title="Call: 95918135617"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/95918135617"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/40 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 transition-all hover:scale-105 active:scale-95"
              aria-label="WhatsApp"
              title="WhatsApp: 95918135617"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* Email */}
            <a
              href="mailto:suvassuva8@gmail.com"
              className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/40 hover:bg-purple-500/10 text-slate-300 hover:text-purple-300 transition-all hover:scale-105 active:scale-95"
              aria-label="Email"
              title="Email: suvassuva8@gmail.com"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/40 hover:bg-purple-500/10 text-slate-300 hover:text-white transition-all hover:scale-105 active:scale-95"
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="p-2 sm:p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 hover:bg-purple-500/20 transition-all hover:-translate-y-0.5 ml-1 sm:ml-1.5 cursor-pointer"
              aria-label="Back to top"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
