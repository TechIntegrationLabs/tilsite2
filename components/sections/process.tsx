"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Share your idea",
    description: "Tell us about your vision, process, or pain point—no tech knowledge needed.",
  },
  {
    icon: Code,
    title: "Get a prototype",
    description: "We'll build a working model in as little as 24 hours.",
  },
  {
    icon: Rocket,
    title: "Refine and launch",
    description: "Together, we'll perfect your solution and bring it to market.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Here's How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process takes you from idea to implementation quickly and efficiently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-[2px] bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}