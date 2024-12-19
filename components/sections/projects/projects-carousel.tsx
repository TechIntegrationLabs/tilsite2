"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { Project } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";

interface ProjectsCarouselProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

export function ProjectsCarousel({ projects, onProjectSelect }: ProjectsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);

  const slideWidth = 400; // Width of each slide including gap
  const totalWidth = projects.length * slideWidth;

  useEffect(() => {
    if (!isPaused) {
      const animate = async () => {
        await controls.start({
          x: -totalWidth,
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          },
        });
      };
      animate();
    } else {
      controls.stop();
    }
  }, [isPaused, controls, totalWidth]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    const newX = -(index * slideWidth);
    controls.start({ x: newX, transition: { duration: 0.5 } });
  };

  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        ref={containerRef}
        className="flex gap-6"
        animate={controls}
        style={{ x }}
        onHoverStart={() => setIsPaused(true)}
        onHoverEnd={() => setIsPaused(false)}
      >
        {[...projects, ...projects].map((project, index) => (
          <motion.div
            key={`${project.id}-${index}`}
            className={cn(
              "flex-shrink-0 w-[350px]",
              activeIndex === index % projects.length && "scale-105"
            )}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard
              project={project}
              onClick={() => onProjectSelect(project)}
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              activeIndex === index
                ? "bg-primary scale-125"
                : "bg-primary/30 hover:bg-primary/50"
            )}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}