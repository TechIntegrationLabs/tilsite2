"use client";

import { motion } from "framer-motion";
import { Bot, Zap, Coins, Rocket } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { ExpandableCard } from "@/components/ui/expandable-card";
import { OmnisyncAd } from "./services/omnisync-ad";

const services = [
  {
    icon: Bot,
    title: "Custom AI-Powered Solutions",
    description: "Tailored AI solutions that adapt to your specific needs and industry requirements.",
    expandedContent: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">How We Can Help</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Custom AI model development and training</li>
          <li>Integration with existing systems</li>
          <li>Scalable architecture design</li>
          <li>Continuous improvement and optimization</li>
        </ul>
      </div>
    ),
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "Get a working prototype in just 24 hours to validate your ideas quickly.",
    expandedContent: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Our Process</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Initial consultation and requirements gathering</li>
          <li>Quick iteration cycles</li>
          <li>Functional prototype delivery</li>
          <li>Feedback integration and refinement</li>
        </ul>
      </div>
    ),
  },
  {
    icon: Coins,
    title: "Affordable Development",
    description: "High-quality solutions at a fraction of traditional development costs.",
    expandedContent: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Pricing Benefits</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Transparent pricing structure</li>
          <li>Flexible payment options</li>
          <li>No hidden costs</li>
          <li>Value-based pricing models</li>
        </ul>
      </div>
    ),
  },
  {
    icon: Rocket,
    title: "Shared Success Model",
    description: "We're invested in your success with flexible partnership options.",
    expandedContent: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Partnership Options</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Revenue sharing models</li>
          <li>Long-term support and maintenance</li>
          <li>Strategic consulting</li>
          <li>Growth partnership opportunities</li>
        </ul>
      </div>
    ),
  },
];

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 services-pattern parallax">
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What We Do</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We take your knowledge of the real world and transform it into AI-powered 
            solutions that automate, innovate, and create value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <ExpandableCard
                title={service.title}
                description={service.description}
                expandedContent={service.expandedContent}
              >
                <div className="bg-card p-6 rounded-lg h-full min-h-[320px] flex flex-col">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground flex-grow">{service.description}</p>
                </div>
              </ExpandableCard>
            </motion.div>
          ))}
        </div>

        <OmnisyncAd />
      </div>
    </section>
  );
}