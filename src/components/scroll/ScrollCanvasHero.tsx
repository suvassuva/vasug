"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import DreamHeroContent from "../sections/DreamHeroContent";

const TOTAL_FRAMES = 300;

function getFrameSrc(index: number): string {
  const padded = String(index).padStart(3, "0");
  return `/frames/frame-${padded}.jpg`;
}

export default function ScrollCanvasHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Cache all loaded images
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES + 1).fill(null));

  // Animation state values stored in refs for 60fps rAF loop without React re-renders
  const targetFrameRef = useRef<number>(1);
  const currentFrameRef = useRef<number>(1);
  const isLoadedRef = useRef<boolean>(false);

  // Story state for UI updates
  const [currentChapter, setCurrentChapter] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [currentFrameNum, setCurrentFrameNum] = useState<number>(1);
  const [loadProgress, setLoadProgress] = useState<number>(0);

  // Smooth scroll jump to specific story chapter
  const scrollToChapter = useCallback((chapterIndex: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const scrollableDistance = rect.height - window.innerHeight;
    if (scrollableDistance <= 0) return;

    // Anchor points for chapters 0, 1, 2, 3
    const chapterOffsets = [0.02, 0.32, 0.62, 0.92];
    const offset = chapterOffsets[Math.min(chapterIndex, chapterOffsets.length - 1)] ?? 0;
    const targetTop = window.scrollY + rect.top + offset * scrollableDistance;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let isDisposed = false;

    // Check reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Draw frame onto canvas with crisp DPR and object-fit: cover
    const renderFrame = (frameIndex: number) => {
      const img = imagesRef.current[frameIndex];
      if (!img || !img.complete || img.naturalWidth === 0) {
        // Fallback to nearest loaded frame (wide search up to 40 frames)
        for (let offset = 1; offset < 40; offset++) {
          const fallbackBelow = imagesRef.current[Math.max(1, frameIndex - offset)];
          if (fallbackBelow && fallbackBelow.complete) {
            drawCoverImage(ctx, canvas, fallbackBelow);
            return;
          }
          const fallbackAbove = imagesRef.current[Math.min(TOTAL_FRAMES, frameIndex + offset)];
          if (fallbackAbove && fallbackAbove.complete) {
            drawCoverImage(ctx, canvas, fallbackAbove);
            return;
          }
        }
        return;
      }
      drawCoverImage(ctx, canvas, img);
    };

    const drawCoverImage = (
      context: CanvasRenderingContext2D,
      cvs: HTMLCanvasElement,
      img: HTMLImageElement
    ) => {
      const cw = cvs.width;
      const ch = cvs.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      context.fillStyle = "#07070c";
      context.fillRect(0, 0, cw, ch);

      const isPortrait = cw < ch;

      if (isPortrait) {
        // Mobile portrait: Top ~50% (50vh) filled by the cinematic video stream
        const targetH = Math.round(ch * 0.50);
        const scale = Math.max(cw / iw, targetH / ih);
        const nw = iw * scale;
        const nh = ih * scale;
        const nx = (cw - nw) / 2;
        const ny = 0;

        context.drawImage(img, nx, ny, nw, nh);

        // Soft gradient blend on bottom edge into dark #07070c canvas
        const fadeHeight = Math.min(36 * (window.devicePixelRatio || 1), targetH * 0.16);
        const gradBottom = context.createLinearGradient(0, targetH - fadeHeight, 0, targetH);
        gradBottom.addColorStop(0, "rgba(7, 7, 12, 0)");
        gradBottom.addColorStop(1, "#07070c");
        context.fillStyle = gradBottom;
        context.fillRect(0, targetH - fadeHeight, cw, fadeHeight);
      } else {
        // Landscape desktop: Full-screen cinematic cover
        const scale = Math.max(cw / iw, ch / ih);
        const nw = iw * scale;
        const nh = ih * scale;
        const nx = (cw - nw) / 2;
        const ny = (ch - nh) / 2;

        context.drawImage(img, nx, ny, nw, nh);
      }
    };

    // 2. Resize Handler with Retina/DPR scaling
    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      renderFrame(Math.round(currentFrameRef.current));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // 3. Staged Preloading of 300 Frames
    // Immediately load Frame 1 so initial paint is instantaneous
    const firstImg = new Image();
    firstImg.src = getFrameSrc(1);
    firstImg.onload = () => {
      imagesRef.current[1] = firstImg;
      isLoadedRef.current = true;
      renderFrame(1);

      // Staged progressive loading in priority tiers
      let loadedCount = 1;

      const loadRange = (start: number, end: number, delayMs = 0) => {
        setTimeout(() => {
          if (isDisposed) return;
          for (let i = start; i <= end; i++) {
            const img = new Image();
            img.src = getFrameSrc(i);
            img.onload = () => {
              if (isDisposed) return;
              imagesRef.current[i] = img;
              loadedCount++;
              if (loadedCount % 20 === 0 || loadedCount === TOTAL_FRAMES) {
                setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
              }
            };
          }
        }, delayMs);
      };

      // Tier 1: Initial sequence (frames 2-75)
      loadRange(2, 75, 0);
      // Tier 2: Act 1 finale (frames 76-150)
      loadRange(76, 150, 150);
      // Tier 3: Act 2 synthesis & deployment (frames 151-300)
      loadRange(151, 300, 350);
    };

    // 4. Scroll Tracking Logic
    let lastChapter = 0;
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const scrollableDistance = rect.height - window.innerHeight;

      if (scrollableDistance <= 0) return;

      // Progress between 0 and 1
      const progress = Math.min(1, Math.max(0, -containerTop / scrollableDistance));

      // Map progress directly to frame index [1 -> 300]
      const target = 1 + progress * (TOTAL_FRAMES - 1);
      targetFrameRef.current = target;

      // Calculate chapter (0: 0-25%, 1: 25-50%, 2: 50-75%, 3: 75-100%)
      const chapter = Math.min(3, Math.floor(progress * 4));
      if (chapter !== lastChapter) {
        lastChapter = chapter;
        setCurrentChapter(chapter);
      }

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 5. Persistent Animation Loop with smooth lerp
    let lastDisplayedFrame = 1;
    const animationLoop = () => {
      if (isDisposed) return;

      const target = targetFrameRef.current;
      const current = currentFrameRef.current;

      if (prefersReducedMotion) {
        currentFrameRef.current = target;
      } else {
        // Smooth interpolation / easing
        const diff = target - current;
        if (Math.abs(diff) > 0.01) {
          currentFrameRef.current += diff * 0.12;
        } else {
          currentFrameRef.current = target;
        }
      }

      const frameToDraw = Math.min(
        TOTAL_FRAMES,
        Math.max(1, Math.round(currentFrameRef.current))
      );

      renderFrame(frameToDraw);

      if (frameToDraw !== lastDisplayedFrame) {
        lastDisplayedFrame = frameToDraw;
        setCurrentFrameNum(frameToDraw);
      }

      animationFrameId = requestAnimationFrame(animationLoop);
    };

    animationFrameId = requestAnimationFrame(animationLoop);

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[750vh] bg-[#07070c]"
      id="hero-scroll-container"
    >
      {/* Sticky Full-Screen Canvas Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#07070c] z-0">
        
        {/* The Scroll Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block object-cover pointer-events-none"
        />

        {/* Cinematic Atmospheric Shadow Overlay (Desktop only) */}
        <div className="hidden sm:block absolute inset-0 atmospheric-hero-shadow pointer-events-none z-10" />

        {/* Soft Radial Ambient Vignette on screen borders (Desktop only) */}
        <div
          className="hidden sm:block absolute inset-0 bg-radial-gradient pointer-events-none z-10 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(7,7,12,0.85) 100%)",
          }}
        />

        {/* Bottom Fade to blend seamlessly with the next sections */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-32 bg-gradient-to-t from-[#07070c] to-transparent pointer-events-none z-10" />

        {/* Dynamic Storytelling UI Overlay */}
        <div className="relative z-20 h-full w-full">
          <DreamHeroContent
            currentChapter={currentChapter}
            scrollProgress={scrollProgress}
            currentFrame={currentFrameNum}
            totalFrames={TOTAL_FRAMES}
            loadProgress={loadProgress}
            onSelectChapter={scrollToChapter}
          />
        </div>
      </div>
    </div>
  );
}
