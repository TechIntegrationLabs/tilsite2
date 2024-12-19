"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandableCardProps {
  children: React.ReactNode;
  title: string;
  description: string;
  expandedContent: React.ReactNode;
}

export function ExpandableCard({ children, title, description, expandedContent }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.div
        onClick={() => setIsExpanded(true)}
        className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
        whileHover={{ scale: 1.02 }}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setIsExpanded(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-2xl z-50 p-6 rounded-2xl bg-card/95 backdrop-blur-lg border border-white/20 shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <div className="prose prose-invert max-w-none">
                {expandedContent}
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}