"use server"

import React from "react";
import BackToTop from "@/components/back-to-top";
import {
  SiNextdotjs,
  SiTypescript,
  SiNestjs,
  SiMongodb,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiSequelize,
  SiFigma,
  SiMysql,
  SiJest,
  SiGithubactions,
  SiSass,
  SiStyledcomponents,
  SiPostman,
  SiInsomnia,
  SiRedux,
  SiAxios,
  SiSqlite,
  SiC,
  SiPython,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiExpo,
  SiCanva,
  SiNetlify,
  SiVercel,
  SiBootstrap,
  SiAmazon,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiGodotengine,
  SiUnity,
  SiFlask,
  SiAdobexd,
  SiFlutter,
  SiWordpress,
} from "react-icons/si";
import { DiJava, DiReact } from "react-icons/di";
import { TbBrandCSharp, TbBrandFramerMotion } from "react-icons/tb";
import { BsCodeSlash } from "react-icons/bs";
import { Link, Locale } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

interface Skill {
  name: string;
  icon: React.ReactElement;
  description: string;
  category: string;
}

export async function generateMetadata({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Skills'});
  return {
    title: t('title'),
  };
}

export default async function SkillsPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  setRequestLocale(locale)

  const t = await getTranslations("Skills.skills-page");

  const categories = [
    t("categories.frontend"),
    t("categories.backend"),
    t("categories.database"),
    t("categories.devops"),
    t("categories.design"),
    t("categories.testing"),
    t("categories.game-engines"),
  ];

  const allSkills: Skill[] = [
    // Frontend
    {
      name: "Next.js",
      icon: <SiNextdotjs className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.nextjs"),
      category: t("categories.frontend"),
    },
    {
      name: "React",
      icon: <SiReact className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.react"),
      category: t("categories.frontend"),
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.typescript"),
      category: t("categories.frontend"),
    },
    {
      name: "React Native",
      icon: <DiReact className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.react-native"),
      category: t("categories.frontend"),
    },
    {
      name: "Expo",
      icon: <SiExpo className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.expo"),
      category: t("categories.frontend"),
    },
    {
      name: "Redux",
      icon: <SiRedux className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.redux"),
      category: t("categories.frontend"),
    },
    {
      name: "Zustand",
      icon: <TbBrandFramerMotion className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.zustand"),
      category: t("categories.frontend"),
    },
    {
      name: "HTML",
      icon: <SiHtml5 className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.html"),
      category: t("categories.frontend"),
    },
    {
      name: "CSS",
      icon: <SiCss3 className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.css"),
      category: t("categories.frontend"),
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.javascript"),
      category: t("categories.frontend"),
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.tailwind-css"),
      category: t("categories.frontend"),
    },
    {
      name: "SASS",
      icon: <SiSass className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.sass"),
      category: t("categories.frontend"),
    },
    {
      name: "Styled Components",
      icon: <SiStyledcomponents className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.styled-components"),
      category: t("categories.frontend"),
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.bootstrap"),
      category: t("categories.frontend"),
    },
    {
      name: "Axios",
      icon: <SiAxios className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.axios"),
      category: t("categories.frontend"),
    },
    {
      name: "Flutter",
      icon: <SiFlutter className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.flutter"),
      category: t("categories.frontend"),
    },
    {
      name: "WordPress",
      icon: <SiWordpress className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.wordpress"),
      category: t("categories.frontend"),
    },
  
    // Backend
    {
      name: "Node.js",
      icon: <SiNodedotjs className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.nodejs"),
      category: t("categories.backend"),
    },
    {
      name: "NestJS",
      icon: <SiNestjs className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.nestjs"),
      category: t("categories.backend"),
    },
    {
      name: "Express",
      icon: <SiExpress className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.express"),
      category: t("categories.backend"),
    },
    {
      name: "Flask",
      icon: <SiFlask className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.flask"),
      category: t("categories.backend"),
    },
    {
      name: "Python",
      icon: <SiPython className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.python"),
      category: t("categories.backend"),
    },
    {
      name: "Java",
      icon: <DiJava className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.java"),
      category: t("categories.backend"),
    },
    {
      name: "C#",
      icon: <TbBrandCSharp className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.c#"),
      category: t("categories.backend"),
    },
    {
      name: "C",
      icon: <SiC className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.c"),
      category: t("categories.backend"),
    },
  
    // Database
    {
      name: "MongoDB",
      icon: <SiMongodb className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.mongodb"),
      category: t("categories.database"),
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.postgresql"),
      category: t("categories.database"),
    },
    {
      name: "MySQL",
      icon: <SiMysql className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.mysql"),
      category: t("categories.database"),
    },
    {
      name: "SQLite",
      icon: <SiSqlite className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.sqlite"),
      category: t("categories.database"),
    },
    {
      name: "Prisma",
      icon: <SiPrisma className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.prisma"),
      category: t("categories.database"),
    },
    {
      name: "Sequelize",
      icon: <SiSequelize className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.sequelize"),
      category: t("categories.database"),
    },
  
    // DevOps
    {
      name: "Docker",
      icon: <SiDocker className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.docker"),
      category: t("categories.devops"),
    },
    {
      name: "Git",
      icon: <SiGit className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.git"),
      category: t("categories.devops"),
    },
    {
      name: "GitHub",
      icon: <SiGithub className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.github"),
      category: t("categories.devops"),
    },
    {
      name: "CI/CD",
      icon: <SiGithubactions className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.ci/cd"),
      category: t("categories.devops"),
    },
    {
      name: "AWS",
      icon: <SiAmazon className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.aws"),
      category: t("categories.devops"),
    },
    {
      name: "Vercel",
      icon: <SiVercel className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.vercel"),
      category: t("categories.devops"),
    },
    {
      name: "Netlify",
      icon: <SiNetlify className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.netlify"),
      category: t("categories.devops"),
    },
    {
      name: "Render",
      icon: <BsCodeSlash className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.render"),
      category: t("categories.devops"),
    },
  
    // Design & Tools
    {
      name: "Figma",
      icon: <SiFigma className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.figma"),
      category: t("categories.design"),
    },
    {
      name: "UI/UX",
      icon: <SiFigma className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.ui/ux"),
      category: t("categories.design"),
    },
    {
      name: "Canva",
      icon: <SiCanva className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.canva"),
      category: t("categories.design"),
    },
    {
      name: "Photoshop",
      icon: <SiAdobephotoshop className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.photoshop"),
      category: t("categories.design"),
    },
    {
      name: "Premiere Pro",
      icon: <SiAdobepremierepro className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.premiere-pro"),
      category: t("categories.design"),
    },
    {
      name: "After Effects",
      icon: <SiAdobeaftereffects className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.after-effects"),
      category: t("categories.design"),
    },
    {
      name: "Adobe XD",
      icon: <SiAdobexd className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.adobe-xd"),
      category: t("categories.design"),
    },
  
    // Testing
    {
      name: "Jest",
      icon: <SiJest className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.jest"),
      category: t("categories.testing"),
    },
    {
      name: "Insomnia",
      icon: <SiInsomnia className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.insomnia"),
      category: t("categories.testing"),
    },
    {
      name: "Postman",
      icon: <SiPostman className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.postman"),
      category: t("categories.testing"),
    },
  
    // Game Engines
    {
      name: "Unity",
      icon: <SiUnity className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.unity"),
      category: t("categories.game-engines"),
    },
    {
      name: "Godot",
      icon: <SiGodotengine className="w-12 h-12 text-[#f47e00]" />,
      description: t("skills.descriptions.godot"),
      category: t("categories.game-engines"),
    },
  ];

  return (
    <main className="min-h-screen bg-[#1E1E1E] text-white py-20">
      <div className="container mx-auto px-8 sm-min:px-4">
        <div className="flex flex-col sm-min:flex-row gap-4 items-center justify-between mb-12">
          <h1 className="text-2xl sm-min:text-3xl sm:text-4xl font-bold terminal-text">{t("title")}</h1>
          <Link
            href="/#skills"
            className="text-[#f47e00] hover:text-[#b75f00] text-base sm:text-lg transition-colors"
          >
            {t("back-button")}
          </Link>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 terminal-text text-[#f47e00]">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allSkills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
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
          </div>
        ))}
      </div>
      <BackToTop />
    </main>
  );
} 