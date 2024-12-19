"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navItems } from "./nav-items";

interface MobileNavProps {
  onGetStarted: () => void;
}

export function MobileNav({ onGetStarted }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <nav className="flex flex-col gap-4 mt-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button className="mt-4" onClick={onGetStarted}>
            Get Started
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}