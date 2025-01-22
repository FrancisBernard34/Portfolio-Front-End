"use server";

import { cookies } from "next/headers";

export const verifyToken = async (token: string) => {
  const response = await fetch(`${process.env.API_URL}/auth/validate-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
  if (response.status === 200) {
    return true;
  }
  const cookieStore = await cookies();
  cookieStore.delete("auth_token");
  return false;
};
