"use client";

import { useEffect, useRef, useCallback } from "react";

interface RainDrop {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  width: number;
}

interface RainBackgroundProps {
  dropCount?: number;
  color?: string;
  intensity?: number;
}

const TIER_CONFIG = [
  { minSpeed: 2, maxSpeed: 3, minLen: 30, maxLen: 60, minOp: 0.08, maxOp: 0.15, width: 1 },
  { minSpeed: 3, maxSpeed: 5, minLen: 50, maxLen: 90, minOp: 0.15, maxOp: 0.28, width: 1 },
  { minSpeed: 5, maxSpeed: 7, minLen: 80, maxLen: 130, minOp: 0.28, maxOp: 0.45, width: 1.2 },
] as const;

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function createDrop(w: number, h: number, intensity: number, placeOnScreen = false): RainDrop {
  const r = Math.random();
  const tier = r < 0.4 ? 0 : r < 0.75 ? 1 : 2;
  const cfg = TIER_CONFIG[tier];

  return {
    x: Math.random() * w,
    y: placeOnScreen ? Math.random() * h : -(Math.random() * h),
    length: rand(cfg.minLen, cfg.maxLen),
    speed: rand(cfg.minSpeed, cfg.maxSpeed),
    opacity: rand(cfg.minOp, cfg.maxOp) * intensity,
    width: cfg.width,
  };
}

export function RainBackground({
  dropCount = 180,
  color = "0, 54, 49",
  intensity = 1,
}: RainBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<RainDrop[]>([]);
  const animationRef = useRef<number>(0);
  const intensityRef = useRef(intensity);
  intensityRef.current = intensity;

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width / (window.devicePixelRatio || 1);
    const h = canvas.height / (window.devicePixelRatio || 1);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const drop of dropsRef.current) {
      const gradient = ctx.createLinearGradient(drop.x, drop.y, drop.x, drop.y + drop.length);
      gradient.addColorStop(0, `rgba(${color}, ${drop.opacity})`);
      gradient.addColorStop(1, `rgba(${color}, 0)`);

      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = drop.width;
      ctx.lineCap = "round";
      ctx.moveTo(drop.x, drop.y);
      ctx.lineTo(drop.x, drop.y + drop.length);
      ctx.stroke();

      drop.y += drop.speed;

      if (drop.y > h + drop.length) {
        Object.assign(drop, createDrop(w, h, intensityRef.current, false));
        drop.y = -drop.length;
      }
    }

    animationRef.current = requestAnimationFrame(draw);
  }, [color]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respect reduced motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    // Resize handler with debounce
    let resizeTimer: ReturnType<typeof setTimeout>;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    };
    resize();
    window.addEventListener("resize", debouncedResize);

    // Reduce density on mobile
    const effectiveCount = window.innerWidth < 768 ? Math.floor(dropCount * 0.5) : dropCount;

    // Initialize drops spread across the screen
    dropsRef.current = Array.from({ length: effectiveCount }, () =>
      createDrop(window.innerWidth, window.innerHeight, intensity, true)
    );

    // Start animation
    animationRef.current = requestAnimationFrame(draw);

    // Pause when tab is hidden
    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationRef.current);
      } else {
        animationRef.current = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // Listen for reduced-motion changes
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        cancelAnimationFrame(animationRef.current);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } else {
        animationRef.current = requestAnimationFrame(draw);
      }
    };
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      cancelAnimationFrame(animationRef.current);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", debouncedResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, [dropCount, intensity, draw]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 2,
        mixBlendMode: "multiply",
      }}
    />
  );
}
