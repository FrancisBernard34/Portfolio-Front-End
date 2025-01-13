'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

interface TornSpot {
  id: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

export default function HungryPage() {
  const [tornSpots, setTornSpots] = useState<TornSpot[]>([]);
  const router = useRouter();

  const handleTear = (e: React.MouseEvent) => {
    const x = e.pageX; // Use pageX/Y for absolute positioning
    const y = e.pageY;

    const newTear: TornSpot = {
      id: `tear-${Date.now()}`,
      x,
      y,
      rotation: Math.random() * 360,
      scale: Math.random() * 0.3 + 0.9, // Random size between 0.9 and 1.2
    };

    setTornSpots(prev => [...prev, newTear]);

    // Play tear sound
    const audio = new Audio('/bite-sound.mp3');
    audio.volume = 0.2;
    audio.playbackRate = Math.random() * 0.4 + 0.8;
    audio.play().catch(() => {});
  };

  const handleSatisfied = () => {
    router.push('/#footer');
  };

  // Create a static version of the page content
  const pageContent = (
    <div className="relative z-0 pointer-events-none select-none">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );

  return (
    <main className="relative min-h-screen" onClick={handleTear}>
      {/* Torn Paper Overlay */}
      {tornSpots.map((tear) => (
        <div
          key={tear.id}
          className="absolute pointer-events-none z-[9998]"
          style={{
            left: tear.x - 50 * tear.scale,
            top: tear.y - 50 * tear.scale,
            width: 100 * tear.scale,
            height: 100 * tear.scale,
          }}
        >
          {/* White Background */}
          <div
            className="absolute inset-0"
            style={{
              background: 'white',
              transform: `rotate(${tear.rotation}deg)`,
              clipPath: `polygon(
                20% 0%,
                80% 0%,
                100% 20%,
                100% 80%,
                80% 100%,
                20% 100%,
                0% 80%,
                0% 20%
              )`,
            }}
          />
          
          {/* Torn Edge Texture */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: `repeating-linear-gradient(
                ${tear.rotation}deg,
                #000,
                #000 2px,
                transparent 2px,
                transparent 4px
              )`,
              transform: `rotate(${tear.rotation}deg)`,
              clipPath: `polygon(
                20% 0%,
                80% 0%,
                100% 20%,
                100% 80%,
                80% 100%,
                20% 100%,
                0% 80%,
                0% 20%
              )`,
            }}
          />
        </div>
      ))}

      {/* Page Content */}
      {pageContent}

      {/* Satisfied Button */}
      <button
        onClick={handleSatisfied}
        className="fixed bottom-6 right-6 z-[9999] px-6 py-3 bg-[#D35F0C] text-white terminal-text rounded-lg hover:bg-[#D35F0C]/80 transition-colors cursor"
        aria-label="Return to main page"
      >
        I&apos;m_Satisfied
      </button>
    </main>
  );
} 