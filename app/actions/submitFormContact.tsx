"use server";

import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactResponse = {
  message: string;
  error?: string;
  statusCode?: number;
};

type State = {
  status: "idle" | "error" | "success";
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  data?: ContactResponse;
};

export async function handleContactFormSubmit(_: State, formData: FormData): Promise<State> {
  const validatedFields = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });
  if (!validatedFields.success) {
    return {
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    const response = await fetch(`${process.env.API_URL}/contact`, {
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
        message: data.message || "Failed to send message",
      };
    }
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
