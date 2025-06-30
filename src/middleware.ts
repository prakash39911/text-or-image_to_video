import { NextResponse } from "next/server";
import { auth } from "./auth";
import { Session } from "next-auth"; // Import Session type for annotation

// Define a type for the session to avoid `any` and get autocompletion
interface SessionWithUser extends Session {
  user: {
    id: string;
    emailVerified: Date | null;
  };
}

const publicRoutes = ["/"];
const authRoutes = ["/auth"];
const protectedRoutes = [
  "/ai/text-to-video",
  "/ai/videogallery",
  "/ai/billing",
];

export default auth((req) => {
  // auth() is an Edge-compatible helper that returns the session or null
  // No need for getToken() or process.env.AUTH_SECRET here
  const session = req.auth as SessionWithUser | null;
  const { pathname } = req.nextUrl;

  const isLoggedIn = !!session?.user;
  const isEmailVerified = !!session?.user?.emailVerified;

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Logic 1: If logged in, but email is not verified, redirect to verification alert
  if (isLoggedIn && !isEmailVerified && isProtectedRoute) {
    return NextResponse.redirect(
      new URL("/verify-email-alert", req.nextUrl.origin)
    );
  }

  // Logic 2: If logged in AND email is verified, don't let them see verification pages
  if (
    isLoggedIn &&
    isEmailVerified &&
    (pathname === "/verify-email-alert" ||
      pathname === "/verify-email" ||
      pathname === "/email-verify-success")
  ) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }

  // Logic 3: If logged in, redirect away from auth pages
  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }

  // Logic 4: If not logged in and trying to access a protected route, redirect to auth
  if (!isLoggedIn && isProtectedRoute) {
    return NextResponse.redirect(new URL("/auth", req.nextUrl.origin));
  }

  // Allow the request to proceed
  return NextResponse.next();
});

// Use the matcher to specify which routes the middleware should run on.
export const config = {
  matcher: [
    // Exclude static files and API routes, but include everything else
    "/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
