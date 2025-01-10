'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <section className="h-screen relative split-bg">
      {/* Logo */}
      <div className="absolute top-8 left-8">
        <div className="torn-paper select-none">
          <span className="text-xl font-bold">&lt;FB&gt;</span>
        </div>
      </div>

      {/* Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute top-8 right-8"
      >
        <div className="torn-paper-menu">
          <Menu size={28} />
        </div>
      </button>

      {/* Main Content */}
      <div className="h-full flex flex-col items-center justify-center">
        <h1 className="text-6xl ml-4 md:text-8xl font-bold terminal-text">
          <span className="text-[#1E1E1E]">Francis</span>
          <span className="text-[#D35F0C]"> Bernard</span>
        </h1>
        <h2 className="flex gap-20 mt-4 mr-6 text-2xl md:text-4xl terminal-text">
          <span className="text-[#1E1E1E]">Full-Stack</span>
          <span className="text-[#D35F0C]"> Developer</span>
        </h2>
        <button className="mt-12 px-8 py-4 bg-gray-200 hover:bg-gray-300 transition-colors terminal-text text-[#1E1E1E] text-xl cursor">
          Press Start
        </button>
      </div>

      {/* Navigation Menu */}
      {isMenuOpen && (
        <nav className="fixed inset-0 bg-[#1E1E1E]/95 z-50 flex items-center justify-center">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 text-[#D35F0C]"
          >
            <div className="torn-paper">
              <span className="text-xl font-bold">Close</span>
            </div>
          </button>
          <ul className="space-y-8 text-center">
            <li>
              <a href="#projects" className="text-3xl text-[#D35F0C] hover:text-white transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="text-3xl text-[#D35F0C] hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="text-3xl text-[#D35F0C] hover:text-white transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="text-3xl text-[#D35F0C] hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </section>
  )
}