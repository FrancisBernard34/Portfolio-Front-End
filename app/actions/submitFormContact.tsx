"use server";

import { z } from "zod";
import { getTranslations } from "next-intl/server";

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
  const t = await getTranslations('Contact');

  const ContactSchema = z.object({
    name: z.string().min(2, t('form.name.error')),
    email: z.string().email(t('form.email.error')),
    message: z.string().min(10, t('form.message.error')),
  });

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
