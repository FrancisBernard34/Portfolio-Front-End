"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  return (
    <footer id="footer" className="w-full bg-[#1E1E1E] text-white py-12">
      <div className="w-full flex flex-col justify-center items-center gap-12 px-4">
        <div className="w-full md:w-[70%] flex justify-center items-center">
          <div className="flex flex-col lg:flex-row justify-around gap-24">
            {/* Bonus Section */}
            <div className="w-fit flex flex-col justify-start items-center">
              <div>
                <h4 className="text-lg footer-2xl:text-xl terminal-text text-[#f47e00] mb-4">
                  {t("bonus.title")}
                </h4>
                <p className="text-xs footer-2xl:text-sm text-white/80 terminal-text mb-4">
                  {t("bonus.description")}
                </p>
                <button
                  onClick={() => router.push("/iamhungry")}
                  className="px-6 py-2 text-sm footer-2xl:text-base bg-[#f47e00] text-white terminal-text rounded-lg hover:bg-[#f47e00]/80 transition-colors cursor"
                  aria-label="Play the game"
                >
                  {t("bonus.button-text")}
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="w-fit flex flex-col justify-start items-center">
              <div>
                <h4 className="text-lg footer-2xl:text-xl terminal-text text-[#f47e00] mb-4">
                  {t("quick-links.title")}
                </h4>
                <ul className="text-sm space-y-3 terminal-text">
                  <li className="flex items-center gap-2">
                    <a
                      href="#"
                      className="text-xs footer-2xl:text-sm text-white/40 hover:text-white/40 transition-colors pointer-events-none"
                      tabIndex={-1}
                      aria-label="Blog coming soon"
                      aria-disabled="true"
                    >
                      {t("quick-links.my-blog.title")}
                    </a>
                    <span className="px-2 py-0.5 text-[10px] bg-[#f47e00]/20 text-[#f47e00] rounded-full border cursor-default border-[#f47e00]/30">
                      {t("quick-links.my-blog.label")}
                    </span>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@codigoemcena"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs footer-2xl:text-sm text-white/80 hover:text-[#f47e00] transition-colors"
                      tabIndex={0}
                      aria-label="Visit my YouTube channel"
                    >
                      {t("quick-links.youtube-channel.title")}
                    </a>
                  </li>
                  <li className="flex md:flex-row flex-col items-start gap-2">
                    <a
                      href="#"
                      className="text-xs footer-2xl:text-sm text-white/40 hover:text-white/40 transition-colors pointer-events-none"
                      tabIndex={-1}
                      aria-label="Learning platform coming soon"
                      aria-disabled="true"
                    >
                      {t("quick-links.learning-platform.title")}
                    </a>
                    <span className="px-2 py-0.5 text-[10px] bg-[#f47e00]/20 text-[#f47e00] rounded-full border cursor-default border-[#f47e00]/30">
                      {t("quick-links.learning-platform.label")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div className="w-fit flex flex-col justify-start items-center">
              <div>
                <h4 className="text-lg footer-2xl:text-xl terminal-text text-[#f47e00] mb-4">
                  {t("contact.title")}
                </h4>
                <div className="space-y-3">
                  <a
                    href="https://github.com/FrancisBernard34"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs footer-2xl:text-sm text-white/80 hover:text-[#f47e00] transition-colors terminal-text"
                    tabIndex={0}
                    aria-label="Visit my GitHub profile"
                  >
                    <FaGithub className="text-lg" />
                    GitHub_
                  </a>
                  <a
                    href="https://www.linkedin.com/in/francis-bernard-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs footer-2xl:text-sm text-white/80 hover:text-[#f47e00] transition-colors terminal-text"
                    tabIndex={0}
                    aria-label="Visit my LinkedIn profile"
                  >
                    <FaLinkedin className="text-lg" />
                    LinkedIn_
                  </a>
                  <a
                    href="mailto:francisbernardcontato@gmail.com"
                    className="flex items-center gap-2 text-xs footer-2xl:text-sm text-white/80 hover:text-[#f47e00] transition-colors terminal-text"
                    tabIndex={0}
                    aria-label="Send me an email"
                  >
                    <MdEmail className="text-lg" />
                    {t("contact.email")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-[70%] border-white/10" />

        {/* Copyright */}
        <div className="border-white/10 text-center">
          <p className="text-sm text-white/60 terminal-text">
            &copy; {currentYear} Portfolio. Francis_Bernard
          </p>
        </div>
      </div>
    </footer>
  );
}
