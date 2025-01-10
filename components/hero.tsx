"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleKeyDown = (e: React.KeyboardEvent, href: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleNavClick(href);
    }
  };

  return (
    <section className="h-screen relative split-bg" aria-label="Hero section">
      {/* Logo */}
      <div className="absolute top-8 left-8">
        <div className="torn-paper select-none">
          <span className="text-xl font-bold" aria-label="Francis Bernard Logo">
            &lt;FB&gt;
          </span>
        </div>
      </div>

      {/* Menu Button - Only shows when menu is closed */}
      <button
        onClick={handleMenuToggle}
        className="absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg z-40"
        aria-expanded={isMenuOpen}
        aria-controls="navigation-menu"
        aria-label="Open menu"
      >
        <div className="torn-paper-menu p-2">
          <Menu size={28} />
        </div>
      </button>

      {/* Main Content */}
      <div
        className="h-full flex flex-col items-center justify-center"
        role="banner"
      >
        <h1 className="text-6xl ml-4 md:text-8xl font-bold terminal-text">
          <span className="text-[#1E1E1E]">Francis</span>
          <span className="text-[#D35F0C]"> Bernard</span>
        </h1>
        <h2 className="flex gap-20 mt-4 mr-6 text-2xl md:text-4xl terminal-text">
          <span className="text-[#1E1E1E]">Full-Stack</span>
          <span className="text-[#D35F0C]">Developer</span>
        </h2>
        <button
          className="mt-12 px-8 py-4 bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 transition-colors terminal-text text-[#1E1E1E] text-xl cursor focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-lg"
          onClick={() => handleNavClick("#projects")}
          aria-label="View projects"
        >
          Press Start
        </button>
      </div>

      {/* Navigation Menu */}
      <nav
        id="navigation-menu"
        className={cn(
          "fixed inset-0 bg-[#1E1E1E]/95 z-50 flex items-center justify-center transform transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!isMenuOpen}
      >
        {/* Close Button - Inside the nav menu */}
        <button
          onClick={handleMenuToggle}
          className="absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-[#D35F0C] rounded-lg"
          aria-label="Close menu"
        >
          <div className="torn-paper p-2">
            <X size={28} className="text-[#D35F0C]" />
          </div>
        </button>
        <ul className="space-y-8 text-center">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-3xl text-[#D35F0C] hover:text-white focus:text-white transition-colors inline-block focus:outline-none focus:ring-2 focus:ring-[#D35F0C] rounded-lg px-4 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(href);
                }}
                onKeyDown={(e) => handleKeyDown(e, href)}
                tabIndex={isMenuOpen ? 0 : -1}
                aria-label={`Navigate to ${label} section`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
