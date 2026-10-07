"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-amber-400 font-bold">
            Vasu Dev-Kernel v3.8.4 [Interactive CLI Mode]
          </p>
          <p className="text-slate-400">
            Type <span className="text-amber-300 font-semibold">help</span> to view available system commands.
          </p>
        </div>
      ),
    },
  ]);

  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-amber-400 font-semibold">Available Commands:</p>
            <p><span className="text-amber-300 font-mono w-24 inline-block">skills</span>: List primary technical proficiencies</p>
            <p><span className="text-amber-300 font-mono w-24 inline-block">projects</span>: Display highlighted production applications</p>
            <p><span className="text-amber-300 font-mono w-24 inline-block">contact</span>: Fetch developer direct email and handles</p>
            <p><span className="text-amber-300 font-mono w-24 inline-block">stats</span>: View engineering track record numbers</p>
            <p><span className="text-amber-300 font-mono w-24 inline-block">matrix</span>: Initiate cybernetic visual sequence</p>
            <p><span className="text-amber-300 font-mono w-24 inline-block">clear</span>: Clear terminal history</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-emerald-400 font-semibold">Core Stack Matrix:</p>
            <p>• 3D: Three.js, React Three Fiber, GLSL Shaders, Drei, Blender</p>
            <p>• Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion</p>
            <p>• Backend: Node.js, Express, PostgreSQL, Prisma, Redis, Docker</p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-slate-300">
            {PORTFOLIO_DATA.projects.map((p) => (
              <div key={p.id} className="border-l-2 border-amber-400/50 pl-2">
                <span className="text-white font-bold">{p.title}</span> —{" "}
                <span className="text-amber-300">{p.category}</span>
                <p className="text-xs text-slate-400">{p.tagline}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-slate-300">
            <p>Email: <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-amber-300 underline">{PORTFOLIO_DATA.personal.email}</a></p>
            <p>GitHub: <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PORTFOLIO_DATA.personal.github}</a></p>
            <p>Status: <span className="text-emerald-400 font-semibold">{PORTFOLIO_DATA.personal.status}</span></p>
          </div>
        );
        break;

      case "stats":
        output = (
          <div className="grid grid-cols-2 gap-2 text-slate-300">
            {PORTFOLIO_DATA.personal.stats.map((s, idx) => (
              <div key={idx}>
                <span className="text-amber-400 font-bold">{s.value}</span>: {s.label}
              </div>
            ))}
          </div>
        );
        break;

      case "matrix":
        output = (
          <p className="text-emerald-400 font-mono tracking-widest animate-pulse">
            01010110 01000001 01010011 01010101 :: ACCESS GRANTED :: 60_FPS_LOCKED
          </p>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = (
          <p className="text-rose-400">
            Command not recognized: &quot;{cmd}&quot;. Type <span className="text-amber-300 font-semibold">&apos;help&apos;</span> for documentation.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput("");
  };

  return (
    <section id="terminal" className="relative py-20 bg-[#080d17] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <TerminalIcon className="w-4 h-4 text-amber-400" />
            <span>Interactive CLI Sandbox</span>
          </div>
          <span className="text-[11px] font-mono text-slate-500">
            Try typing: &apos;skills&apos; or &apos;projects&apos;
          </span>
        </div>

        {/* Terminal Shell Window */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="rounded-2xl bg-[#060a12] border border-white/10 p-5 sm:p-6 font-mono text-xs shadow-2xl backdrop-blur-xl cursor-text min-h-[300px] flex flex-col justify-between"
        >
          {/* Top Bar Controls */}
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] text-slate-500">bash — vasu@workstation:~</span>
            </div>

            {/* Output History */}
            <div className="space-y-4 mb-4">
              {history.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-amber-400 font-bold">vasu@portfolio:~$</span>
                    <span className="text-white">{item.command}</span>
                  </div>
                  <div className="pl-4">{item.output}</div>
                </div>
              ))}
              <div ref={endRef} />
            </div>
          </div>

          {/* Input Line */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-3 border-t border-white/5">
            <span className="text-amber-400 font-bold shrink-0">vasu@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type 'help'..."
              className="w-full bg-transparent text-white focus:outline-none placeholder:text-slate-600 caret-amber-400 text-xs font-mono"
            />
            <button
              type="submit"
              className="p-1 rounded text-slate-500 hover:text-amber-400 transition-colors"
              aria-label="Submit command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
