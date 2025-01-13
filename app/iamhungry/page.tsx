'use client';

import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

declare global {
  interface Window {
    webkitAudioContext: typeof AudioContext;
  }
}

interface TornSpot {
  id: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  irregularity: number[];
}

export default function HungryPage() {
  const [tornSpots, setTornSpots] = useState<TornSpot[]>([]);
  const router = useRouter();

  const generateIrregularities = useCallback(() => {
    return Array.from({ length: 16 }, () => Math.random() * 30 - 15);
  }, []);

  const handleTear = (e: React.MouseEvent) => {
    const x = e.pageX;
    const y = e.pageY;

    const newTear: TornSpot = {
      id: `tear-${Date.now()}`,
      x,
      y,
      rotation: Math.random() * 360,
      scale: Math.random() * 0.6 + 0.7,
      irregularity: generateIrregularities(),
    };

    setTornSpots(prev => [...prev, newTear]);

    const ctx = new (window.AudioContext || 
      window.webkitAudioContext || 
      (function() { throw new Error('AudioContext not supported'); })()
    )();
    
    const audio = new Audio('/bite-sound.mp3');
    const source = ctx.createMediaElementSource(audio);
    const gainNode = ctx.createGain();
    
    gainNode.gain.value = 0.2;
    source.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    audio.preservesPitch = false;
    audio.playbackRate = Math.random() * 0.4 + 0.8;
    audio.play().catch(() => {});
  };

  const handleSatisfied = () => {
    router.push('/#footer');
  };

  const pageContent = (
    <div className="relative z-0 pointer-events-none select-none">
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );

  const createTornShape = (tear: TornSpot) => {
    const { irregularity } = tear;
    const points = [
      // Top edge (3 points)
      [20 + irregularity[0], 0 + irregularity[1]],
      [50 + irregularity[2], 0 + irregularity[3]],
      [80 + irregularity[4], 0 + irregularity[5]],
      
      // Right edge (3 points)
      [100 + irregularity[6], 20 + irregularity[7]],
      [100 + irregularity[8], 50 + irregularity[9]],
      [100 + irregularity[10], 80 + irregularity[11]],
      
      // Bottom edge (3 points)
      [80 + irregularity[12], 100 + irregularity[13]],
      [50 + irregularity[14], 100 + irregularity[15]],
      [20 - irregularity[0], 100 - irregularity[1]],
      
      // Left edge (3 points)
      [0 - irregularity[2], 80 - irregularity[3]],
      [0 - irregularity[4], 50 - irregularity[5]],
      [0 - irregularity[6], 20 - irregularity[7]],
    ];

    return `polygon(${points.map(([x, y]) => `${x}% ${y}%`).join(', ')})`;
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden cursor-pointer" onClick={handleTear}>
      {tornSpots.map((tear) => (
        <div
          key={tear.id}
          className="absolute pointer-events-none z-[9998]"
          style={{
            left: tear.x - 75 * tear.scale,
            top: tear.y - 75 * tear.scale,
            width: 150 * tear.scale,
            height: 150 * tear.scale,
          }}
        >
          {/* White Background */}
          <div
            className="absolute inset-0"
            style={{
              background: 'white',
              transform: `rotate(${tear.rotation}deg)`,
              clipPath: createTornShape(tear),
            }}
          />
          
          {/* Torn Edge Texture */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              background: `
                repeating-linear-gradient(
                  ${tear.rotation + 45}deg,
                  #000,
                  #000 1px,
                  transparent 1px,
                  transparent 3px
                ),
                repeating-linear-gradient(
                  ${tear.rotation - 45}deg,
                  #000,
                  #000 1px,
                  transparent 1px,
                  transparent 3px
                )
              `,
              transform: `rotate(${tear.rotation}deg)`,
              clipPath: createTornShape(tear),
            }}
          />
        </div>
      ))}

      {pageContent}

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