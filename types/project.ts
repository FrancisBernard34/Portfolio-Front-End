export interface Project {
    id: string
    title: string
    description: string
    technologies: string[]
    imageUrl: string
    liveUrl: string
    githubUrl: string
    features: boolean
    importance: number
    category: string
    createdAt: Date
    updatedAt: Date
}
