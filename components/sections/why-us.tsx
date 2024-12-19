"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Fast",
    description: "A working prototype in as little as 24 hours.",
  },
  {
    title: "Affordable",
    description: "No six-figure budgets required.",
  },
  {
    title: "Collaborative",
    description: "Shared success means we're just as invested as you are.",
  },
  {
    title: "Innovative",
    description: "Powered by OpenAI, we use the most advanced tools to build what you envision.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Tech Integration Labs?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We make building AI-powered solutions accessible and exciting
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}