"use server";

import { cookies } from "next/headers";
import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginResponse = {
  access_token?: string;
  user?: {
    id: string;
    email: string;
  };
};

type State = {
  status: "idle" | "error" | "success";
  message?: string;
  errors?: {
    email?: string[];
    password?: string[];
  };
  data?: LoginResponse;
};

export async function loginUser(_: State, formData: FormData): Promise<State> {
  const validatedFields = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const response = await fetch(`${process.env.API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedFields.data),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        status: "error",
        message: data.message || "Login failed",
      };
    }

    const cookieStore = await cookies();
    cookieStore.set("auth_token", data.access_token || "");

    return {
      status: "success",
      data,
    };
  } catch (error: unknown) {
    return {
      status: "error",
      message: error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}
