"use server";

import { cookies } from "next/headers";

export const logoutUser = async (): Promise<void> => {
  await cookies().then((cookieStore) => cookieStore.delete("auth_token"));
};
