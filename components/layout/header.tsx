"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavItems } from "./header/nav-items";
import { MobileNav } from "./header/mobile-nav";
import { Lock } from "lucide-react";
import { RetroTerminal } from "@/components/ui/retro-terminal";

interface HeaderProps {
  onGetStarted: () => void;
}

export function Header({ onGetStarted }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsTerminalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-sm border-b"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold">
            Tech Integration Labs
          </a>

          <NavItems />

          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex" onClick={onGetStarted}>
              Get Started
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsTerminalOpen(true)}
              className="hover:bg-primary/10"
            >
              <Lock className="h-5 w-5" />
            </Button>
            <MobileNav onGetStarted={onGetStarted} />
          </div>
        </div>
      </header>

      <RetroTerminal 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
      />
    </>
  );
}