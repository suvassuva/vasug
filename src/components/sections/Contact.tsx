"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, MessageSquare, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Contact() {
  const { personal } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "3D Web Application",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status.type) setStatus({ type: null, message: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || formData.name.length < 2) {
      setStatus({
        type: "error",
        message: "Please enter your full name (minimum 2 characters).",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please provide a valid email address.",
      });
      return;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      setStatus({
        type: "error",
        message: "Please enter a message of at least 10 characters.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ type: "success", message: data.message });
        setFormData({ name: "", email: "", subject: "3D Web Application", message: "" });
        
        // Trigger celebratory confetti burst
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.7 },
            colors: ["#FFB800", "#F59E0B", "#38BDF8", "#ffffff"],
          });
        } catch (e) {
          // ignore if canvas not supported
        }
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to transmit message. Please try again or email directly.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Network transmission error. Please email directly at " + personal.email,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0B0F19] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-cyan-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-white/5 border border-white/10 text-amber-400 mb-3"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            COMMUNICATION PORTAL
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Let&apos;s Build Something <br />
            <span className="amber-gradient-text">Exceptional Together</span>
          </motion.h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base">
            Have a project in mind, an architectural challenge, or want to discuss full-stack & 3D development? Send a message directly.
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Connect & Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact Card */}
            <div className="rounded-3xl bg-slate-900/40 border border-white/10 p-8 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact</h3>
              <p className="text-sm text-slate-400 mb-6">
                Prefer email or direct communication? Feel free to write anytime.
              </p>

              <a
                href={`mailto:${personal.email}`}
                className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.08] transition-all duration-300 mb-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">Direct Inbox</span>
                    <span className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                      {personal.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Response Time Guarantee */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-xs text-emerald-300 font-medium">
                  Guaranteed response within 24 hours for all inquiries.
                </span>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="rounded-3xl bg-slate-900/40 border border-white/10 p-8 backdrop-blur-xl">
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4">
                Social Networks & Code
              </h4>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all group"
                >
                  <GithubIcon className="w-5 h-5 mb-2 group-hover:scale-110 transition-transform text-amber-400" />
                  <span className="text-xs font-mono">GitHub</span>
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all group"
                >
                  <LinkedinIcon className="w-5 h-5 mb-2 group-hover:scale-110 transition-transform text-amber-400" />
                  <span className="text-xs font-mono">LinkedIn</span>
                </a>
                <a
                  href={personal.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all group"
                >
                  <TwitterXIcon className="w-5 h-5 mb-2 group-hover:scale-110 transition-transform text-amber-400" />
                  <span className="text-xs font-mono">Twitter/X</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Controlled Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-slate-900/50 border border-white/10 p-8 sm:p-10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

              <h3 className="text-2xl font-bold text-white mb-2">Send Transmission</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-8">
                Fill in the details below. All submissions are processed securely.
              </p>

              {/* Feedback Alert Toast Banner */}
              {status.type && (
                <div
                  className={`p-4 rounded-2xl mb-6 flex items-start gap-3 text-sm ${
                    status.type === "success"
                      ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-300"
                      : "bg-rose-500/15 border border-rose-500/30 text-rose-300"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-amber-400 focus:bg-white/[0.07] text-white text-sm outline-none transition-all placeholder:text-slate-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-amber-400 focus:bg-white/[0.07] text-white text-sm outline-none transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>

                {/* Subject / Scope Selector */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300"
                  >
                    Engagement Type / Project Scope
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#0d1424] border border-white/10 focus:border-amber-400 text-white text-sm outline-none transition-all"
                  >
                    <option value="3D Web Application">Interactive 3D Web Experience / Canvas</option>
                    <option value="Full-Stack Engineering">Full-Stack Application Development (Next.js)</option>
                    <option value="High-Conversion Landing Page">High-Conversion Landing Page</option>
                    <option value="Performance & Architecture Audit">Performance & Architecture Audit</option>
                    <option value="Contract / Full-Time Role">Contract or Advisory Opportunity</option>
                  </select>
                </div>

                {/* Message Body */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300"
                  >
                    Project Details & Goals *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your timeline, vision, budget range, and any technical requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-amber-400 focus:bg-white/[0.07] text-white text-sm outline-none transition-all placeholder:text-slate-600 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_25px_-5px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Transmitting Payload...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
