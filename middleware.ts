import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { verifyToken } from "./app/actions/verifyToken";

export default async function middleware(req: NextRequest) {
  const auth_token = req.cookies.get("auth_token");
  if (!auth_token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const token_is_valid = await verifyToken(auth_token.value);
  if (token_is_valid === false) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
