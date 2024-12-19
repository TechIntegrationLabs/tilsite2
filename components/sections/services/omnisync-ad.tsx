"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function OmnisyncAd() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mt-24 text-center"
    >
      <div className="py-16 px-8 relative overflow-hidden bg-black">
        {/* Animated background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0099ff]/10 via-[#0099ff]/5 to-[#0099ff]/10">
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,153,255,0.15)_0%,transparent_60%)]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>

        <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-4 text-[#0099ff]">
            Need a Website or AI Integration for Your Small Business?
          </h3>
          
          {/* Enhanced OMNISYNC title with glow effect */}
          <motion.div
            className="relative mb-8 py-4"
            animate={{
              filter: [
                "drop-shadow(0 0 25px rgba(0,153,255,0.3))",
                "drop-shadow(0 0 35px rgba(0,153,255,0.5))",
                "drop-shadow(0 0 25px rgba(0,153,255,0.3))",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.span
              className="text-5xl md:text-6xl font-black text-[#0099ff] inline-block"
              animate={{
                textShadow: [
                  "0 0 20px rgba(0,153,255,0.5)",
                  "0 0 35px rgba(0,153,255,0.8)",
                  "0 0 20px rgba(0,153,255,0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              OMNISYNC
            </motion.span>
          </motion.div>

          <p className="text-xl text-[#0099ff]/90 mb-8 max-w-2xl mx-auto">
            Empowering Small Businesses with Modern Solutions
          </p>

          <Button 
            size="lg"
            className="bg-[#0099ff] hover:bg-[#0088ee] text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            asChild
          >
            <a 
              href="https://www.omnisyncsystems.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg"
            >
              <span className="relative z-10">Meet Omnisync</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#0099ff]/0 via-[#0099ff]/30 to-[#0099ff]/0"
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}