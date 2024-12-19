"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroContentProps {
  onBuildIdea: () => void;
  inView: boolean;
}

export function HeroContent({ onBuildIdea, inView }: HeroContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto text-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
        Turning Your Ideas Into Solutions
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-12">
        We help people and businesses transform their ideas into reality using cutting-edge AI technology and rapid prototyping.
      </p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Button 
          size="lg" 
          className="cyber-button text-xl py-8 px-16 group"
          onClick={onBuildIdea}
        >
          <span className="flex items-center gap-2">
            Build My Idea
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              →
            </motion.span>
          </span>
        </Button>
      </motion.div>
    </motion.div>
  );
}