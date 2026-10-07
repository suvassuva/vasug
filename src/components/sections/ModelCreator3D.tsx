"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Sparkles, Box, Download, Code2, Eye, Layers, Settings2, Sliders, Check, FileText, ArrowUpRight } from "lucide-react";

// Safe dynamic import for the 3D Canvas viewer
const ModelViewerCanvas = dynamic(
  () => import("@/components/3d/InteractiveMeshViewer"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex flex-col items-center justify-center bg-white/60">
        <div className="w-10 h-10 rounded-full border-2 border-slate-300 border-t-purple-600 animate-spin mb-3" />
        <span className="text-xs font-mono text-slate-500">Compiling 3D Workstation Mesh...</span>
      </div>
    ),
  }
);

const PROJECTS_DATA = [
  {
    id: "hyperion",
    title: "Hyperion WebGL Engine",
    role: "Lead 3D Architect",
    stack: "Three.js • R3F • GLSL • Next.js",
    poly: "52,890 triangles",
    summary: "Hardware-accelerated browser 3D engine with dynamic bloom shaders and real-time HDR reflections.",
  },
  {
    id: "nexus",
    title: "Nexus Enterprise AI Console",
    role: "Full-Stack Engineer",
    stack: "React 19 • Tailwind • Node.js • SSE",
    poly: "38,400 triangles",
    summary: "Real-time streaming agent workflow console handling 450k+ daily telemetry events.",
  },
  {
    id: "aurora",
    title: "Aurora Crypto Terminal",
    role: "Systems Architect",
    stack: "WebSockets • Canvas API • Redis",
    poly: "64,200 triangles",
    summary: "Zero-latency high-frequency algorithmic trade visualizer with 99.99% uptime.",
  },
];

export default function ModelCreator3D() {
  const [selectedProject, setSelectedProject] = useState(PROJECTS_DATA[0]);
  const [shadingMode, setShadingMode] = useState<"textured" | "wireframe" | "clay">("textured");
  const [polyLevel, setPolyLevel] = useState<"low" | "mid" | "high">("mid");

  return (
    <section id="studio-3d" className="relative py-28 sm:py-36 bg-[#F3F4F6] text-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-xs font-mono font-semibold text-purple-700 mb-4 shadow-sm">
            <Box className="w-3.5 h-3.5 text-purple-600" />
            <span>INTERACTIVE 3D WORKSTATION & ASSET INSPECTOR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-5">
            Spatial 3D Studio & Mesh Inspector
          </h2>
          <p className="text-slate-600 max-w-2xl text-sm sm:text-base leading-relaxed">
            Rotate, inspect topology, and test shader materials on production 3D assets crafted for browser-based WebGL environments.
          </p>
        </div>

        {/* Studio Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Project Selector & Architecture Deck */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Project Selector Deck */}
            <div className="rounded-3xl bg-white border border-slate-200/80 p-7 sm:p-8 shadow-xl shadow-slate-200/50">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-purple-600" />
                  Select Project Asset
                </span>
                <span className="text-[11px] font-mono text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full font-semibold">
                  Live 3D Spec
                </span>
              </div>

              <div className="space-y-3">
                {PROJECTS_DATA.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => setSelectedProject(proj)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all ${
                      selectedProject.id === proj.id
                        ? "bg-purple-50/70 border-purple-400/80 shadow-sm ring-1 ring-purple-400/30"
                        : "bg-slate-50/70 border-slate-200 hover:bg-slate-100/70"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-slate-900">{proj.title}</span>
                      <span className="text-[10px] font-mono text-purple-600 font-semibold">{proj.role}</span>
                    </div>
                    <p className="text-xs text-slate-500 mb-2">{proj.summary}</p>
                    <span className="text-[11px] font-mono text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200 inline-block">
                      {proj.stack}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Architecture Specifications */}
            <div className="rounded-3xl bg-white border border-slate-200/80 p-7 sm:p-8 shadow-xl shadow-slate-200/50 space-y-5">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <Sliders className="w-4 h-4 text-purple-600" />
                <h4 className="text-sm font-bold text-slate-800">Asset Specifications & Shaders</h4>
              </div>

              {/* Topology Specs */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-500 mb-2 font-medium">
                  Active Asset Polycount
                </label>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-600">Mesh Triangles:</span>
                  <span className="font-bold text-purple-700">{selectedProject.poly}</span>
                </div>
              </div>

              {/* Texture Bake Channels */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-500 mb-2 font-medium">
                  Shader & Material Passes
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  {["PBR Albedo Map", "Normal DirectX/GL", "Roughness Channel", "Emissive Core Pass"].map((map) => (
                    <div key={map} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-[11px] truncate">{map}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resume / Case Study Button */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-slate-900/10 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-amber-300" />
                  <span>Request Full Case Study & Resume</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: 3D Interactive Viewport & Controls */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 3D Model Stage Canvas */}
            <div className="rounded-3xl bg-white border border-slate-200/80 shadow-2xl shadow-slate-200/60 overflow-hidden relative">
              
              {/* Viewport Top Status Toolbar */}
              <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50/80 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono font-bold text-slate-700">
                    Live 3D Asset Viewport
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    • Drag to rotate 360° • Scroll to zoom
                  </span>
                </div>

                {/* Shading Mode Toggles */}
                <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
                  {[
                    { id: "textured", label: "Textured" },
                    { id: "wireframe", label: "Wireframe" },
                    { id: "clay", label: "Clay Matcap" },
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => setShadingMode(mode.id as any)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                        shadingMode === mode.id
                          ? "bg-purple-600 text-white font-bold"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3D Model Canvas Height Container */}
              <div className="h-[420px] sm:h-[480px] w-full relative bg-gradient-to-b from-slate-100/50 to-slate-200/40">
                <ModelViewerCanvas
                  shadingMode={shadingMode}
                  polyLevel={polyLevel}
                />
              </div>

              {/* Bottom Model Inspector Bar */}
              <div className="flex flex-wrap items-center justify-between p-4 border-t border-slate-100 bg-white text-xs font-mono text-slate-500">
                <div className="flex items-center gap-4">
                  <span>Current Asset: <strong className="text-slate-800">{selectedProject.title}</strong></span>
                  <span>Rendering: <strong className="text-emerald-600">WebGL 2.0 (60 FPS)</strong></span>
                </div>
                <div className="text-[11px] text-purple-600 font-semibold">
                  Zero Hydration Lag
                </div>
              </div>
            </div>

            {/* Quick Action Bar */}
            <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-xl shadow-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs font-mono">
                  GL
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900">WebGL Production Assets</h5>
                  <p className="text-xs text-slate-500">Engineered for Three.js, React Three Fiber, and PlayCanvas</p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-purple-500/20"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
