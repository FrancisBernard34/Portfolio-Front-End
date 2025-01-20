"use server";

export const verifyToken = async (token: string) => {
  const response = await fetch(`${process.env.API_URL}/auth/validate-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
  return response.status === 200;
};
