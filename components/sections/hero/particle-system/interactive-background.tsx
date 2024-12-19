"use client";

import { motion } from "framer-motion";
import { CanvasRenderer } from "./canvas-renderer";

interface InteractiveBackgroundProps {
  mouseX: number;
  mouseY: number;
}

export function InteractiveBackground({ mouseX, mouseY }: InteractiveBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Particle system */}
      <div className="absolute inset-0 z-0">
        <CanvasRenderer mouseX={mouseX} mouseY={mouseY} />
      </div>

      {/* Gradient overlay - Reduced opacity */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/40 pointer-events-none z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Animated gradient accent - Adjusted opacity and z-index */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(66,226,184,0.08) 0%, rgba(0,0,0,0) 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}