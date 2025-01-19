"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/app/actions/getProjects";
import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      // Sort projects by importance and date
      const sortedData = data.sort(
        (a, b) =>
          b.importance - a.importance ||
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setProjects(sortedData);
    };
    fetchProjects();
  }, []);

  const categories = [
    "all",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#1E1E1E] text-[#D35F0C] py-20"
    >
      <div className="container mx-auto px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 terminal-text text-white">
          Projects_
        </h2>

        {/* Category Filter */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 text-sm sm:text-base py-2 rounded-md terminal-text transition-colors
                ${
                  selectedCategory === category
                    ? "bg-[#D35F0C] text-[#1E1E1E]"
                    : "border border-[#D35F0C] text-[#D35F0C] hover:bg-[#D35F0C] hover:text-[#1E1E1E]"
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`relative flex flex-col border-2 ${
                project.featured ? "border-[#D35F0C]" : "border-gray-600"
              } 
                rounded-lg h-[70vh] overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                bg-[#2A2A2A] group`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 bg-[#D35F0C] text-[#1E1E1E] px-3 py-1 rounded-full terminal-text z-10">
                  Featured
                </div>
              )}

              <div className="relative h-[45vh] sm:h-[50vh] md:h-[25vh] lg:h-[50vh] 2xl:h-[35vh] overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold terminal-text text-white">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base mb-6 text-left text-gray-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs sm:text-sm px-3 py-1 rounded-full bg-[#3A3A3A] text-[#D35F0C] terminal-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 text-sm sm:text-base">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 rounded-md bg-[#D35F0C] text-[#1E1E1E] 
                        hover:bg-[#FF7B1C] transition-colors terminal-text"
                    >
                      Live Demo
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 rounded-md border border-[#D35F0C] 
                        text-[#D35F0C] hover:bg-[#D35F0C] hover:text-[#1E1E1E] transition-colors terminal-text"
                    >
                      View Code
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
