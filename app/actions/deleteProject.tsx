"use server";

import { cookies } from "next/headers";
import { getNewAccessToken } from "./getNewAccessToken";
import { redirect } from "next/navigation";

export const deleteProject = async (id: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  const response = await fetch(
    `${process.env.API_URL}/projects/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (response.status === 401) {
    redirect("/login");
  }
  const refreshToken = response.headers.get("X-Refresh-Token");
  if (refreshToken) {
    const newAccessToken = await getNewAccessToken(refreshToken);
    cookieStore.set("auth_token", newAccessToken);
  }
  return response.status;
};
