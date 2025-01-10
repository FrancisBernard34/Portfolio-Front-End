"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the hero section (100vh)
      const heroHeight = window.innerHeight;
      // Show button when we scroll past the hero section
      setIsVisible(window.scrollY > heroHeight);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "fixed bottom-8 right-8 z-40 p-2 bg-white text-[#D35F0C]",
        "rounded-full shadow-lg transition-all duration-300 hover:bg-[#1E1E1E] hover:text-[#D35F0C]",
        "focus:outline-none focus:ring-2 focus:ring-[#D35F0C] focus:ring-offset-2",
        "transform hover:scale-110",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      )}
      aria-label="Back to top"
    >
      <ArrowUp size={24} />
    </button>
  );
}
