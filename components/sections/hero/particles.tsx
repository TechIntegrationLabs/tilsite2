"use client";

import { motion, useSpring } from "framer-motion";
import { useCallback } from "react";

interface ParticlesProps {
  mouseX: number;
  mouseY: number;
}

export function Particles({ mouseX, mouseY }: ParticlesProps) {
  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const getParticleStyle = useCallback((index: number) => {
    const left = `${Math.floor(Math.random() * 100)}%`;
    const top = `${Math.floor(Math.random() * 100)}%`;
    return { left, top };
  }, []);

  return (
    <>
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={getParticleStyle(i)}
          animate={{
            x: mouseX * (Math.random() + 0.5),
            y: mouseY * (Math.random() + 0.5),
          }}
          transition={springConfig}
        />
      ))}
    </>
  );
}