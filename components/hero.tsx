"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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

  // Animation variants for the text
  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      filter: "blur(10px)"
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  // Animation variants for the torn paper background
  const paperVariants = {
    hidden: { 
      opacity: 0,
      scale: 1.5,
      z: -100,
      rotateX: 45,
    },
    visible: {
      opacity: 1,
      scale: 1,
      z: 0,
      rotateX: 0,
      transition: {
        duration: 0.4,
        delay: 1.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  // Animation variants for the subtitle
  const subtitleVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 2, // Start after the name animation
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  // Animation variants for the button
  const buttonVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 2.3, // Start after subtitle animation
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  // Split text into characters for animation
  const createTextSpans = (text: string, startIndex: number) => {
    return text.split('').map((char, index) => (
      <motion.span
        key={index}
        custom={startIndex + index}
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="inline-block"
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <section className="h-screen relative split-bg perspective-1000 overflow-hidden" aria-label="Hero section">
      {/* Logo */}
      <div className="absolute top-8 left-8">
        <div className="torn-paper select-none">
          <span className="text-xl font-bold bright-glow" aria-label="Francis Bernard Logo">
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
        className="h-full flex flex-col items-center justify-center relative"
        role="banner"
      >
        <div className="relative preserve-3d w-full max-w-[65rem] mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={paperVariants}
            className="absolute inset-0 bg-white/90 transform-gpu rounded-lg shadow-lg mx-4"
            style={{ 
              padding: '1rem 2rem',
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
            }}
          />
          <div className="grid grid-cols-2 gap-2">
            <div className="flex justify-end pr-2">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold terminal-text">
                <span className="text-[#1E1E1E] inline-flex">
                  {createTextSpans("Francis", 0)}
                </span>
              </h1>
            </div>
            <div className="flex justify-start pl-2 translate-x-[2%]">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold terminal-text">
                <span className="text-light_orange inline-flex">
                  {createTextSpans("Bernard", 7)}
                </span>
              </h1>
            </div>
          </div>
        </div>
        <motion.div 
          className="grid grid-cols-2 gap-0 w-full max-w-5xl mt-8"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex justify-end pr-8">
            <h2 className="text-2xl md:text-4xl terminal-text">
              <span className="text-[#1E1E1E]">Full-Stack</span>
            </h2>
          </div>
          <div className="flex justify-start pl-8">
            <h2 className="text-2xl md:text-4xl terminal-text">
              <span className="text-light_orange">Developer</span>
            </h2>
          </div>
        </motion.div>
        <motion.button
          className="mt-12 px-8 py-4 bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 transition-colors terminal-text text-[#1E1E1E] text-xl cursor focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-lg"
          onClick={() => handleNavClick("#projects")}
          aria-label="View projects"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          Press Start
        </motion.button>
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
