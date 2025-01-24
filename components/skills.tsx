import React, { ReactElement } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import {
  SiNextdotjs,
  SiTypescript,
  SiNestjs,
  SiMongodb,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiExpo,
} from "react-icons/si";
import { DiReact } from "react-icons/di";

interface Skill {
  name: string;
  icon: ReactElement;
  description: string;
}



export default function Skills() {
  const t = useTranslations("Skills");

  const skills: Skill[] = [
    {
      name: "Next.js",
      icon: <SiNextdotjs className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills-page.skills.descriptions.nextjs"),
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills-page.skills.descriptions.typescript"),
    },
    {
      name: "NestJS",
      icon: <SiNestjs className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills-page.skills.descriptions.nestjs"),
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills-page.skills.descriptions.mongodb"),
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills-page.skills.descriptions.tailwind-css"),
    },
    {
      name: "React",
      icon: <SiReact className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills-page.skills.descriptions.react"),
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills-page.skills.descriptions.nodejs"),
    },
    {
      name: "React Native",
      icon: <DiReact className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills-page.skills.descriptions.react-native"),
    },
    {
      name: "Expo",
      icon: <SiExpo className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills-page.skills.descriptions.expo"),
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills-page.skills.descriptions.postgresql"),
    },
    {
      name: "Git",
      icon: <SiGit className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills-page.skills.descriptions.git"),
    },
    {
      name: "Docker",
      icon: <SiDocker className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills-page.skills.descriptions.docker"),
    },
  ];

  return (
    <section id="skills" className="min-h-screen bg-[#1E1E1E] text-white py-20">
      <div className="container mx-auto px-8 sm-min:px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 terminal-text">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#2A2A2A] p-6 rounded-xl hover:bg-[#333333] transition-colors duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link
            href="/skills"
            className="text-base sm:text-lg bg-[#f47e00] text-white px-8 py-3 rounded-lg hover:bg-[#b75f00] transition-colors duration-300 font-semibold"
          >
            {t("see-all")}
          </Link>
        </div>
      </div>
    </section>
  );
}
