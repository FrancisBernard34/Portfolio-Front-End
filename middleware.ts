import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { verifyToken } from "./app/actions/verifyToken";

export default async function middleware(req: NextRequest) {
  const auth_token = req.cookies.get("auth_token");
  if (!auth_token && req.nextUrl.pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/login", req.url));
  } 
  if (!auth_token && req.nextUrl.pathname === "/login") {
    return NextResponse.next();
  }
  if (auth_token) {
    const token_is_valid = await verifyToken(auth_token.value);
    if (token_is_valid && req.nextUrl.pathname === "/login") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    if (!token_is_valid) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
