"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

interface CanvasContainerProps {
  children: React.ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
  fov?: number;
}

function CanvasFallbackLoader() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0B0F19]/80 backdrop-blur-sm z-10">
      <div className="relative flex items-center justify-center">
        {/* Glowing orbit ring */}
        <div className="w-16 h-16 rounded-full border-2 border-amber-500/20 border-t-amber-400 animate-spin" />
        <div className="absolute w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/40 animate-pulse" />
      </div>
      <p className="mt-4 text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
        Compiling 3D Shader Stage...
      </p>
    </div>
  );
}

export default function CanvasContainer({
  children,
  className = "w-full h-full",
  cameraPosition = [0, 0, 5],
  fov = 45,
}: CanvasContainerProps) {
  const [mounted, setMounted] = useState(false);
  const [dpr, setDpr] = useState<[number, number]>([1, 1.5]);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      setDpr([1, pixelRatio]);
    }
  }, []);

  if (!mounted) {
    return (
      <div className={`relative ${className} flex items-center justify-center bg-[#0B0F19]`}>
        <CanvasFallbackLoader />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Suspense fallback={<CanvasFallbackLoader />}>
        <Canvas
          dpr={dpr}
          camera={{ position: cameraPosition, fov }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          className="pointer-events-auto"
        >
          {children}
        </Canvas>
      </Suspense>
    </div>
  );
}
