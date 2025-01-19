export interface Project {
    id: string
    title: string
    description: string
    technologies: string[]
    imageUrl: string
    liveUrl: string
    githubUrl: string
    featured: boolean
    importance: number
    category: string
    createdAt: Date
    updatedAt: Date
}
