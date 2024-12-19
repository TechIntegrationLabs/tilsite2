"use client";

import { useEffect, useState } from "react";
import { SYSTEM } from "@/lib/constants/system";
import { URLS } from "@/lib/constants/urls";
import styles from "./styles.module.css";
import { cn } from "@/lib/utils";

interface RetroTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RetroTerminal({ isOpen, onClose }: RetroTerminalProps) {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState(SYSTEM.MESSAGES.PROMPT);
  const [animationState, setAnimationState] = useState<"" | "success" | "error">("");
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setInput("");
      setMessage(SYSTEM.MESSAGES.PROMPT);
      setAnimationState("");
      setIsExploding(false);
    }
  }, [isOpen]);

  const handleSubmit = async () => {
    if (input.toUpperCase() === SYSTEM.VALID_CODE) {
      setMessage(SYSTEM.MESSAGES.SUCCESS);
      setAnimationState("success");
      setTimeout(() => {
        window.open(URLS.CLIENT_PORTAL, "_blank", "noopener,noreferrer");
        onClose();
      }, 1500);
    } else {
      setMessage(SYSTEM.MESSAGES.UNKNOWN_CODE);
      setAnimationState("error");
      setIsExploding(true);
      setTimeout(() => {
        setMessage(SYSTEM.MESSAGES.EXITING);
        setTimeout(onClose, 1000);
      }, 1000);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={styles.container} 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terminal-title"
    >
      <div 
        className={cn(
          styles.terminal,
          animationState === "success" && styles.success,
          animationState === "error" && styles.error,
          isExploding && styles.explode
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <span id="terminal-title">SYSTEM v{SYSTEM.VERSION}</span>
          <button 
            onClick={onClose}
            aria-label="Close terminal"
            className="hover:text-[#00ff00]/70 transition-colors"
          >
            ×
          </button>
        </div>
        <div className={styles.content}>
          <div className={styles.message} role="status">{message}</div>
          {message === SYSTEM.MESSAGES.PROMPT && (
            <input
              type="text"
              className={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubmit();
                if (e.key === "Escape") onClose();
              }}
              aria-label="Client code input"
              autoFocus
            />
          )}
        </div>
        <div className={styles.helpText} aria-live="polite">{SYSTEM.HELP_TEXT}</div>
      </div>
    </div>
  );
}