"use client";

import { useEffect, useRef } from "react";
import { Particle, Point } from "./types";
import { DEFAULT_CONFIG } from "./config";
import { createParticle, initializeParticleConnections } from "./utils/particle-factory";
import { updateParticlePosition } from "./utils/particle-physics";
import { setupCanvas, clearCanvas } from "./renderer/canvas-context";
import { renderParticles, renderConnections } from "./renderer/particle-renderer";

interface CanvasRendererProps {
  mouseX: number;
  mouseY: number;
}

export function CanvasRenderer({ mouseX, mouseY }: CanvasRendererProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const initParticles = () => {
      const rect = canvas.getBoundingClientRect();
      const particleCount = Math.floor((rect.width * rect.height) / 8000);
      
      const particles = Array.from({ length: particleCount }).map((_, i) => 
        createParticle(i, rect, DEFAULT_CONFIG)
      );

      particlesRef.current = initializeParticleConnections(particles, DEFAULT_CONFIG);
    };

    const render = () => {
      if (!ctx || !canvas) return;

      const rect = canvas.getBoundingClientRect();
      const mousePos: Point = { x: mouseX, y: mouseY };

      clearCanvas(ctx, rect.width, rect.height);

      // Update particles
      particlesRef.current = particlesRef.current.map(particle => 
        updateParticlePosition(particle, rect)
      );

      // Render
      renderConnections(ctx, particlesRef.current, mousePos, DEFAULT_CONFIG);
      renderParticles(ctx, particlesRef.current, mousePos, DEFAULT_CONFIG);

      frameRef.current = requestAnimationFrame(render);
    };

    const handleResize = () => {
      setupCanvas(canvas, ctx);
      initParticles();
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [mouseX, mouseY]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 1 }}
    />
  );
}