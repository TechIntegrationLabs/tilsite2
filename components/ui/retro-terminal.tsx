"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock } from "lucide-react";

interface RetroTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RetroTerminal({ isOpen, onClose }: RetroTerminalProps) {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        onClose();
        setIsExiting(false);
        setMessage("");
        setCode("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isExiting, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (code.toUpperCase() === "INITIAL") {
      window.location.href = "https://l2ssuwhbw1jye8vk.vercel.app";
      return;
    }

    setMessage("UNKNOWN CODE");
    setTimeout(() => {
      setMessage("EXITING");
      setIsExiting(true);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsExiting(true);
            }
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-[400px] h-[300px] bg-black border-2 border-[#00ff00] p-6 font-mono text-[#00ff00] shadow-[0_0_20px_rgba(0,255,0,0.3)]"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="text-xs">SYSTEM v1.0</div>
                <div className="text-xs">{new Date().toLocaleTimeString()}</div>
              </div>

              <div className="flex-grow flex flex-col items-center justify-center space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center text-lg font-bold tracking-wide"
                >
                  ENTER CLIENT CODE
                </motion.div>

                {message ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-xl"
                  >
                    {message}
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="w-full max-w-xs">
                    <input
                      type="text"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="w-full bg-black border-2 border-[#00ff00] px-4 py-2 text-center text-lg 
                               focus:outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00]
                               placeholder-[#00ff00]/50"
                      autoFocus
                      spellCheck="false"
                      autoComplete="off"
                    />
                  </form>
                )}
              </div>

              <div className="text-xs text-center opacity-50">
                PRESS ENTER TO SUBMIT • ESC TO EXIT
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}