import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const publicRoute = ["/"];
const authRoutes = ["/auth"];
const protectedRoute = ["/text-to-video", "/image-to-video"];

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  const isLoggedIn = !!token;
  const { pathname } = req.nextUrl;

  if (publicRoute.includes(pathname)) {
    return NextResponse.next();
  }

  if (isLoggedIn && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }

  if (!isLoggedIn && protectedRoute.includes(pathname)) {
    return NextResponse.redirect(new URL("/auth", req.nextUrl.origin));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
