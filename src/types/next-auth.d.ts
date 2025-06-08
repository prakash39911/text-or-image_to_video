import { type DefaultSession } from "next-auth";
import { type JWT } from "next-auth/jwt";

// 1. Extend the built-in session.user type
declare module "next-auth" {
  interface Session {
    user: {
      /** The user's unique identifier. */
      id: string;
      /** The user's email verification status. */
      emailVerified: Date | null;
    } & DefaultSession["user"]; // Merge with default user properties (name, email, image)
  }
}

// 2. Extend the built-in JWT type
declare module "next-auth/jwt" {
  interface JWT {
    /** The user's unique identifier. */
    id: string;
    /** The user's email verification status. */
    emailVerified: Date | null;
  }
}
