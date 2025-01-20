export enum Category {
  DEFAULT = "DEFAULT",
  FULL_STACK = "FULL_STACK",
  FRONT_END = "FRONT_END",
  BACK_END = "BACK_END",
  MOBILE = "MOBILE",
  GAME = "GAME",
}

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  importance: number;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
};
