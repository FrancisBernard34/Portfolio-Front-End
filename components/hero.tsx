"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/LocaleSwitcher";
type NavItem = {
  href: string;
  label: string;
};

export default function Hero() {
  const t = useTranslations("Hero");

  const navItems: NavItem[] = [
    { href: "#projects", label: t("header-menu.menu-option-1") },
    { href: "#about", label: t("header-menu.menu-option-2") },
    { href: "#skills", label: t("header-menu.menu-option-3") },
    { href: "#contact", label: t("header-menu.menu-option-4") },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
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

  // Add menu animation variants
  const menuVariants = {
    initial: { x: "100%" },
    animate: { 
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: { 
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <section className="h-screen relative split-bg perspective-1000 overflow-hidden" aria-label="Hero section">
        {/* Logo */}
        <div className="absolute top-8 left-8">
          <div className="torn-paper select-none">
            <span className="text-xl font-medium text-white bright-glow" aria-label="Francis Bernard Logo">
              &lt;FB&gt;
            </span>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute top-8 right-8 flex items-center gap-4 z-[60]">
          <div className="relative z-[65]">
            <LocaleSwitcher />
          </div>
          {!isMenuOpen && (
            <button
              onClick={handleMenuToggle}
              className="focus:outline-none focus:ring-2 focus:ring-light_orange rounded-lg relative z-[60]"
              aria-expanded={isMenuOpen}
              aria-controls="navigation-menu"
              aria-label={t("header-menu.menu-open-label")}
            >
              <div className="torn-paper-menu p-2">
                <Menu size={28} />
              </div>
            </button>
          )}
        </div>

        {/* Main Content */}
        <div className="h-full flex flex-col items-center justify-center relative pb-12 sm-min:pb-0" role="banner">
          <div className="relative preserve-3d w-fit lg:w-full max-w-[65rem] mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={paperVariants}
              className="absolute inset-x-4 bg-white/90 transform-gpu rounded-lg shadow-lg w-auto"
              style={{ 
                padding: '0.75rem 1.5rem',
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                top: '-0.5rem',
                bottom: '-0.5rem'
              }}
            />
            <div className="grid grid-cols-2 gap-2 px-4">
              <div className="flex justify-end pr-2 ">
                <h1 className="text-3xl sm-min:text-4xl sm:text-5xl sm-max:text-6xl md:text-7xl lg:text-8xl font-bold terminal-text">
                  <span className="text-[#292929] inline-flex">
                    {createTextSpans("Francis", 0)}
                  </span>
                </h1>
              </div>
              <div className="flex justify-start pl-2 translate-x-[2%] max-[560px]:justify-center max-[560px]:pl-0">
                <h1 className="text-3xl sm-min:text-4xl sm:text-5xl sm-max:text-6xl md:text-7xl lg:text-8xl font-bold terminal-text">
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
            <div className="flex justify-end pr-2 sm-min:pr-4 sm:pr-6 md:pr-8">
              <h2 className="text-lg sm-min:text-xl sm:text-2xl md:text-4xl terminal-text">
                <span className="text-[#292929]">{t("subtitle-1")}</span>
              </h2>
            </div>
            <div className="flex justify-start pl-3 sm-min:pl-4 sm:pl-6 md:pl-8">
              <h2 className="text-lg sm-min:text-xl sm:text-2xl md:text-4xl terminal-text">
                <span className="text-light_orange">{t("subtitle-2")}</span>
              </h2>
            </div>
          </motion.div>
          <motion.button
            className="mt-12 px-3 sm-min:px-4 sm:px-8 py-3 sm:py-4 bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 transition-colors terminal-text text-[#1E1E1E] text-base sm-min:text-lg sm:text-xl cursor focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-lg"
            onClick={() => handleNavClick("#projects")}
            aria-label="View projects"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            {t("button-text")}
          </motion.button>
        </div>
      </section>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="navigation-menu"
            className="fixed top-0 left-0 right-0 bottom-0 bg-[#1E1E1E]/95 z-[100] flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={menuVariants}
          >
            <button
              onClick={handleMenuToggle}
              className="absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-[#D35F0C] rounded-lg"
              aria-label={t("header-menu.menu-close-label")}
            >
              <div className="torn-paper p-2">
                <X size={28} className="text-light_orange" />
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
                    aria-label={`Navigate to ${label} section`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
