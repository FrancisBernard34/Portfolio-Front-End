'use client'

import { useEffect, useState } from 'react'
import { getProjects } from '@/app/actions/getProjects'
import { Project } from '@/types/project'
import Image from 'next/image'
export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects()
      setProjects(data)
    }
    fetchProjects()
  }, [])

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#1E1E1E] text-[#D35F0C] py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 terminal-text text-white">Projects_</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-2 border-[#D35F0C] p-6 hover:bg-[#D35F0C] hover:text-[#1E1E1E] transition-colors cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-4 terminal-text">
                Project_{project.title}
              </h3>
              <Image src={project.imageUrl} alt={project.title} width={500} height={500} />
              <p className="mb-4 terminal-text">
                {project.description}
              </p>
              <div className="flex gap-4">
                {project.technologies.map((technology) => (
                  <span className="text-sm terminal-text" key={technology}>
                    #{technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
