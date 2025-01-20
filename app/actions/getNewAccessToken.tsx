"use server";

export const getNewAccessToken = async (refreshToken: string) => {
  const response = await fetch(`${process.env.API_URL}/auth/refresh-token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${refreshToken}`,
      },
      body: JSON.stringify({
        refresh_token: refreshToken,
      }),
    }
  )
  const data = await response.json();
  return data.access_token;
}
