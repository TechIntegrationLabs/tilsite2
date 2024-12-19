"use client";

interface NavItem {
  label: string;
  href: string;
  className?: string;
}

export const navItems: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
  { 
    label: "Omnisync", 
    href: "https://www.omnisyncsystems.com",
    className: "text-[#0099ff] font-semibold hover:text-[#0088ee] transition-colors" 
  },
];

export function NavItems() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={item.className || "text-sm font-medium hover:text-primary transition-colors"}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}