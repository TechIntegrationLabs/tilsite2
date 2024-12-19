"use client";

import { useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useCallback, useState, useEffect } from "react";
import { HeroContent } from "./hero/hero-content";
import { InteractiveBackground } from "./hero/particle-system/interactive-background";

interface HeroSectionProps {
  onBuildIdea: () => void;
}

export function HeroSection({ onBuildIdea }: HeroSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  }, []);

  return (
    <section 
      ref={ref} 
      className="min-h-screen relative overflow-hidden bg-background"
      onMouseMove={handleMouseMove}
    >
      <InteractiveBackground mouseX={mousePosition.x} mouseY={mousePosition.y} />
      
      <div className="container mx-auto px-4 py-32 relative z-30">
        <HeroContent onBuildIdea={onBuildIdea} inView={inView} />
      </div>
    </section>
  );
}