// middleware.js

import { NextResponse } from "next/server";

export default function middleware(req) {
  const AUTH_NOT_ALLOWED_PATHS = ["/login", "/signup"];
  const NO_AUTH_PATHS = ["/", "/home", "/shop", "/aboutus","/services", "/blog", "/contactus", "/cart"];

  const isLoggedIn = !!req.cookies.get("gemstoken");
  const { pathname } = req.nextUrl;

  console.log("===loggedin===", isLoggedIn);

  if (isLoggedIn && AUTH_NOT_ALLOWED_PATHS.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!isLoggedIn && !NO_AUTH_PATHS.includes(pathname) && !AUTH_NOT_ALLOWED_PATHS.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If the user is logged in and tries to access a protected page, redirect to checkout
  if (isLoggedIn && pathname === "/checkout") {
    return NextResponse.redirect(new URL("/checkout", req.url));
  }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
