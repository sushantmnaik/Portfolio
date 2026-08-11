import NextAuth from "next-auth";
import { NextResponse } from "next/server";

import authConfig from "@/auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;

  const isLoginPage =
    req.nextUrl.pathname === "/admin/login";

  const isAdminRoute =
    req.nextUrl.pathname.startsWith("/admin");

  const isAdminApi =
    req.nextUrl.pathname.startsWith("/api/admin");

  if (
    (isAdminRoute && !isLoginPage) ||
    isAdminApi
  ) {
    if (!isLoggedIn) {
      const loginUrl = new URL(
        "/admin/login",
        req.nextUrl.origin
      );

      return NextResponse.redirect(loginUrl);
    }
  }

  if (isLoginPage && isLoggedIn) {
    return NextResponse.redirect(
      new URL("/admin", req.nextUrl.origin)
    );
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admin/:path*",
  ],
};