'use server'

import { Project } from '@/types/project'

export const getProjects = async (): Promise<Project[]> => {
  const projects = await fetch(`${process.env.API_URL}/projects`)
  const data = await projects.json()
  return data
}
