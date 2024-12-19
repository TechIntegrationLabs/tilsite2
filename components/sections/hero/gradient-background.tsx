"use client";

import { motion } from "framer-motion";

interface GradientBackgroundProps {
  x: number;
  y: number;
}

export function GradientBackground({ x, y }: GradientBackgroundProps) {
  return (
    <motion.div
      className="absolute inset-0"
      style={{
        background: "radial-gradient(circle at center, rgba(66,226,184,0.1) 0%, rgba(0,0,0,0) 70%)",
      }}
      animate={{ x, y }}
    />
  );
}