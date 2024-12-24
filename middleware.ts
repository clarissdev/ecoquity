import { NextRequest, NextResponse } from "next/server";

const supportedLocales = ["en", "vi"];

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const locales = supportedLocales.filter(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (
    locales.length === 1 ||
    pathname === "/favicon.ico" ||
    pathname === "/opengraph-image.png" ||
    pathname.startsWith("/styles/")
  ) {
    request.headers.set("x-url", request.url);
    return;
  }

  // Redirect if there is no locale
  request.nextUrl.pathname = `/en${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    "/",
  ],
};
