"use server";

import { cookies } from "next/headers";
import { z } from "zod";
import { Project } from "@/types/project";
import { getNewAccessToken } from "./getNewAccessToken";
import { redirect } from "next/navigation";

const EditProjectSchema = z.object({
  id: z.string().min(1, "Project ID is required"),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(10, "Description must be at least 10 characters").max(250, "Description must be less than 250 characters"),
  technologies: z.array(z.string()).min(1, "At least one technology is required").max(7, "Maximum 7 technologies allowed"),
  imageUrl: z.string().url("Invalid image URL"),
  liveUrl: z.string().url("Invalid live URL"),
  githubUrl: z.string().url("Invalid GitHub URL"),
  featured: z.enum(['true', 'false']).transform((value) => value === 'true'),
  importance: z.coerce.number().min(0).max(100),
  category: z
    .string()
    .refine((value) => Object.values(Category).includes(value as Category), {
      message: "Invalid category",
    }),
});

enum Category {
  DEFAULT = "DEFAULT",
  FULL_STACK = "FULL_STACK",
  FRONT_END = "FRONT_END",
  BACK_END = "BACK_END",
  MOBILE = "MOBILE",
  GAME = "GAME",
}

type State = {
  status: "idle" | "error" | "success";
  message?: string;
  errors?: {
    id?: string[];
    title?: string[];
    description?: string[];
    imageUrl?: string[];
    technologies?: string[];
    liveUrl?: string[];
    githubUrl?: string[];
    featured?: string[];
    importance?: string[];
    category?: string[];
  };
  data?: Project;
};

export async function editProject(_: State, formData: FormData): Promise<State> {
  const validatedFields = EditProjectSchema.safeParse({
    id: formData.get("id"),
    title: formData.get("title"),
    description: formData.get("description"),
    technologies: JSON.parse(formData.get("technologies") as string),
    imageUrl: formData.get("imageUrl"),
    liveUrl: formData.get("liveUrl"),
    githubUrl: formData.get("githubUrl"),
    featured: formData.get("featured"),
    importance: formData.get("importance"),
    category: formData.get("category"),
  });

  if (!validatedFields.success) {
    return {
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;
    const { id, ...projectData } = validatedFields.data;

    const response = await fetch(`${process.env.API_URL}/projects/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(projectData),
    });

    const data = await response.json();

    if (response.status === 401) {
      redirect("/login");
    } else if (!response.ok) {
      return {
        status: "error",
        message: data.message || "Failed to update project",
      };
    }

    const refreshToken = response.headers.get("X-Refresh-Token");
    if (refreshToken) {
      const newAccessToken = await getNewAccessToken(refreshToken);
      cookieStore.set("auth_token", newAccessToken);
    }

    return {
      status: "success",
      data: data.message,
    };
  } catch (error: unknown) {
    return {
      status: "error",
      message:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
} 