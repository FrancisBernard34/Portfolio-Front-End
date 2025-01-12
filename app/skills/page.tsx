import React from "react";
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
import Link from "next/link";

interface Skill {
  name: string;
  icon: React.ReactElement;
  description: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Design" | "Testing" | "Game Engines";
}

const allSkills: Skill[] = [
  // Frontend
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-12 h-12 text-[#D35F0C]" />,
    description: "React framework for production-grade applications",
    category: "Frontend",
  },
  {
    name: "React",
    icon: <SiReact className="w-12 h-12 text-[#D35F0C]" />,
    description: "JavaScript library for building user interfaces",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-12 h-12 text-[#D35F0C]" />,
    description: "Strongly typed programming language for JavaScript",
    category: "Frontend",
  },
  {
    name: "React Native",
    icon: <DiReact className="w-12 h-12 text-[#D35F0C]" />,
    description: "Framework for building native mobile applications",
    category: "Frontend",
  },
  {
    name: "Expo",
    icon: <SiExpo className="w-12 h-12 text-[#D35F0C]" />,
    description: "Platform for universal React applications",
    category: "Frontend",
  },
  {
    name: "Redux",
    icon: <SiRedux className="w-12 h-12 text-[#D35F0C]" />,
    description: "State management library for JavaScript applications",
    category: "Frontend",
  },
  {
    name: "Zustand",
    icon: <TbBrandFramerMotion className="w-12 h-12 text-[#D35F0C]" />,
    description: "Simple state management solution",
    category: "Frontend",
  },
  {
    name: "HTML",
    icon: <SiHtml5 className="w-12 h-12 text-[#D35F0C]" />,
    description: "Standard markup language for web pages",
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: <SiCss3 className="w-12 h-12 text-[#D35F0C]" />,
    description: "Style sheet language for web documents",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-12 h-12 text-[#D35F0C]" />,
    description: "Programming language for web development",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-12 h-12 text-[#D35F0C]" />,
    description: "Utility-first CSS framework",
    category: "Frontend",
  },
  {
    name: "SASS",
    icon: <SiSass className="w-12 h-12 text-[#D35F0C]" />,
    description: "CSS preprocessor scripting language",
    category: "Frontend",
  },
  {
    name: "Styled Components",
    icon: <SiStyledcomponents className="w-12 h-12 text-[#D35F0C]" />,
    description: "CSS-in-JS styling solution",
    category: "Frontend",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="w-12 h-12 text-[#D35F0C]" />,
    description: "Popular CSS framework",
    category: "Frontend",
  },
  {
    name: "Axios",
    icon: <SiAxios className="w-12 h-12 text-[#D35F0C]" />,
    description: "Promise-based HTTP client",
    category: "Frontend",
  },
  {
    name: "Flutter",
    icon: <SiFlutter className="w-12 h-12 text-[#D35F0C]" />,
    description: "UI toolkit for building natively compiled applications",
    category: "Frontend",
  },
  {
    name: "WordPress",
    icon: <SiWordpress className="w-12 h-12 text-[#D35F0C]" />,
    description: "Content management system for web development",
    category: "Frontend",
  },

  // Backend
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-12 h-12 text-[#D35F0C]" />,
    description: "JavaScript runtime for server-side development",
    category: "Backend",
  },
  {
    name: "NestJS",
    icon: <SiNestjs className="w-12 h-12 text-[#D35F0C]" />,
    description: "Progressive Node.js framework for scalable applications",
    category: "Backend",
  },
  {
    name: "Express",
    icon: <SiExpress className="w-12 h-12 text-[#D35F0C]" />,
    description: "Fast, unopinionated web framework for Node.js",
    category: "Backend",
  },
  {
    name: "Flask",
    icon: <SiFlask className="w-12 h-12 text-[#D35F0C]" />,
    description: "Lightweight WSGI web application framework in Python",
    category: "Backend",
  },
  {
    name: "Python",
    icon: <SiPython className="w-12 h-12 text-[#D35F0C]" />,
    description: "High-level programming language",
    category: "Backend",
  },
  {
    name: "Java",
    icon: <DiJava className="w-12 h-12 text-[#D35F0C]" />,
    description: "Object-oriented programming language",
    category: "Backend",
  },
  {
    name: "C#",
    icon: <TbBrandCSharp className="w-12 h-12 text-[#D35F0C]" />,
    description: "Modern object-oriented programming language",
    category: "Backend",
  },
  {
    name: "C",
    icon: <SiC className="w-12 h-12 text-[#D35F0C]" />,
    description: "General-purpose programming language",
    category: "Backend",
  },

  // Database
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-12 h-12 text-[#D35F0C]" />,
    description: "NoSQL database for modern applications",
    category: "Database",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-12 h-12 text-[#D35F0C]" />,
    description: "Advanced open-source relational database",
    category: "Database",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="w-12 h-12 text-[#D35F0C]" />,
    description: "Popular open-source relational database",
    category: "Database",
  },
  {
    name: "SQLite",
    icon: <SiSqlite className="w-12 h-12 text-[#D35F0C]" />,
    description: "Lightweight relational database system",
    category: "Database",
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="w-12 h-12 text-[#D35F0C]" />,
    description: "Next-generation Node.js and TypeScript ORM",
    category: "Database",
  },
  {
    name: "Sequelize",
    icon: <SiSequelize className="w-12 h-12 text-[#D35F0C]" />,
    description: "Promise-based Node.js ORM",
    category: "Database",
  },

  // DevOps
  {
    name: "Docker",
    icon: <SiDocker className="w-12 h-12 text-[#D35F0C]" />,
    description: "Platform for developing and deploying applications",
    category: "DevOps",
  },
  {
    name: "Git",
    icon: <SiGit className="w-12 h-12 text-[#D35F0C]" />,
    description: "Distributed version control system",
    category: "DevOps",
  },
  {
    name: "GitHub",
    icon: <SiGithub className="w-12 h-12 text-[#D35F0C]" />,
    description: "Web-based hosting service for version control",
    category: "DevOps",
  },
  {
    name: "CI/CD",
    icon: <SiGithubactions className="w-12 h-12 text-[#D35F0C]" />,
    description: "Continuous Integration and Continuous Deployment",
    category: "DevOps",
  },
  {
    name: "AWS",
    icon: <SiAmazon className="w-12 h-12 text-[#D35F0C]" />,
    description: "Cloud computing platform",
    category: "DevOps",
  },
  {
    name: "Vercel",
    icon: <SiVercel className="w-12 h-12 text-[#D35F0C]" />,
    description: "Platform for frontend frameworks and static sites",
    category: "DevOps",
  },
  {
    name: "Netlify",
    icon: <SiNetlify className="w-12 h-12 text-[#D35F0C]" />,
    description: "Platform for automated deployment",
    category: "DevOps",
  },
  {
    name: "Render",
    icon: <BsCodeSlash className="w-12 h-12 text-[#D35F0C]" />,
    description: "Cloud application hosting platform",
    category: "DevOps",
  },

  // Design & Tools
  {
    name: "Figma",
    icon: <SiFigma className="w-12 h-12 text-[#D35F0C]" />,
    description: "Collaborative interface design tool",
    category: "Design",
  },
  {
    name: "UI/UX",
    icon: <SiFigma className="w-12 h-12 text-[#D35F0C]" />,
    description: "User Interface and User Experience Design",
    category: "Design",
  },
  {
    name: "Canva",
    icon: <SiCanva className="w-12 h-12 text-[#D35F0C]" />,
    description: "Online design and publishing tool",
    category: "Design",
  },
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop className="w-12 h-12 text-[#D35F0C]" />,
    description: "Image editing and manipulation software",
    category: "Design",
  },
  {
    name: "Premiere Pro",
    icon: <SiAdobepremierepro className="w-12 h-12 text-[#D35F0C]" />,
    description: "Video editing software",
    category: "Design",
  },
  {
    name: "After Effects",
    icon: <SiAdobeaftereffects className="w-12 h-12 text-[#D35F0C]" />,
    description: "Motion graphics and visual effects software",
    category: "Design",
  },
  {
    name: "Adobe XD",
    icon: <SiAdobexd className="w-12 h-12 text-[#D35F0C]" />,
    description: "Vector-based user experience design tool",
    category: "Design",
  },

  // Testing
  {
    name: "Jest",
    icon: <SiJest className="w-12 h-12 text-[#D35F0C]" />,
    description: "JavaScript testing framework",
    category: "Testing",
  },
  {
    name: "Insomnia",
    icon: <SiInsomnia className="w-12 h-12 text-[#D35F0C]" />,
    description: "REST and GraphQL API client",
    category: "Testing",
  },
  {
    name: "Postman",
    icon: <SiPostman className="w-12 h-12 text-[#D35F0C]" />,
    description: "API development and testing platform",
    category: "Testing",
  },

  // Game Engines
  {
    name: "Unity",
    icon: <SiUnity className="w-12 h-12 text-[#D35F0C]" />,
    description: "Cross-platform game engine",
    category: "Game Engines",
  },
  {
    name: "Godot",
    icon: <SiGodotengine className="w-12 h-12 text-[#D35F0C]" />,
    description: "Open-source game engine",
    category: "Game Engines",
  },
];

export default function SkillsPage() {
  const categories = [
    "Frontend",
    "Backend",
    "Database",
    "DevOps",
    "Design",
    "Testing",
    "Game Engines",
  ];

  return (
    <main className="min-h-screen bg-[#1E1E1E] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold terminal-text">All_Skills</h1>
          <Link
            href="/#skills"
            className="text-[#D35F0C] hover:text-[#D35F0C]/80 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 terminal-text text-[#D35F0C]">
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
    </main>
  );
} 