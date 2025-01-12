import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1E1E1E] text-white py-12">
      <div className="w-full flex flex-col justify-center items-center gap-12 px-4">
        <div className="w-[90%] md:w-[70%] flex flex-col md:flex-row justify-around items-center gap-24 md:gap-12">
          {/* Bonus Section */}
          <div className="w-1/2 md:w-1/3 flex flex-col justify-center items-center">
            <div>
              <h4 className="text-xl terminal-text text-[#D35F0C] mb-4">
                Bonus_
              </h4>
              <p className="text-sm text-white/80 terminal-text mb-4">
                Eat_the_portfolio!
              </p>
              <button
                className="px-6 py-2 bg-[#D35F0C] text-white terminal-text rounded-lg hover:bg-[#D35F0C]/80 transition-colors cursor"
                aria-label="Play the game"
              >
                Play_
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-1/2 md:w-1/3 flex flex-col justify-center items-center">
            <div>
              <h4 className="text-xl terminal-text text-[#D35F0C] mb-4">
                Quick_Links
              </h4>
              <ul className="text-sm space-y-3 terminal-text">
                <li className="flex items-center gap-2">
                  <a
                    href="/blog"
                    className="text-white/40 hover:text-white/40 transition-colors pointer-events-none"
                    tabIndex={-1}
                    aria-label="Blog coming soon"
                    aria-disabled="true"
                  >
                    My_Blog
                  </a>
                  <span className="px-2 py-0.5 text-[10px] bg-[#D35F0C]/20 text-[#D35F0C] rounded-full border cursor-default border-[#D35F0C]/30">
                    coming_soon
                  </span>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@codigoemcena"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#D35F0C] transition-colors"
                    tabIndex={0}
                    aria-label="Visit my YouTube channel"
                  >
                    My_Youtube_Channel
                  </a>
                </li>
                <li className="flex md:flex-row flex-col items-start gap-2">
                  <a
                    href="/learning"
                    className="text-white/40 hover:text-white/40 transition-colors pointer-events-none"
                    tabIndex={-1}
                    aria-label="Learning platform coming soon"
                    aria-disabled="true"
                  >
                    My_Learning_Platform
                  </a>
                  <span className="px-2 py-0.5 text-[10px] bg-[#D35F0C]/20 text-[#D35F0C] rounded-full border cursor-default border-[#D35F0C]/30">
                    coming_soon
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="w-1/2 md:w-1/3 flex flex-col justify-center items-center">
            <div>
              <h4 className="text-xl terminal-text text-[#D35F0C] mb-4">
                Connect_With_Me
              </h4>
              <div className="space-y-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-[#D35F0C] transition-colors terminal-text"
                  tabIndex={0}
                  aria-label="Visit my GitHub profile"
                >
                  <FaGithub className="text-lg" />
                  GitHub_
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-[#D35F0C] transition-colors terminal-text"
                  tabIndex={0}
                  aria-label="Visit my LinkedIn profile"
                >
                  <FaLinkedin className="text-lg" />
                  LinkedIn_
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-[#D35F0C] transition-colors terminal-text"
                  tabIndex={0}
                  aria-label="Send me an email"
                >
                  <MdEmail className="text-lg" />
                  Email_
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-[70%] border-white/10" />

        {/* Copyright */}
        <div className="border-white/10 text-center">
          <p className="text-sm text-white/60 terminal-text">
            &copy; {currentYear} Portfolio. Made_With_Love_By_Francis_Bernard
          </p>
        </div>
      </div>
    </footer>
  );
}
